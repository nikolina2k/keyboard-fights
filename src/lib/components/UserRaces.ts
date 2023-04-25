
import { initFirebase } from "$lib/client/firebase";
import { getFirestore, doc, collection, getDocs }  from "firebase/firestore"
import { serverTimestamp, getDoc, setDoc, deleteDoc, query, startAfter, orderBy, limit, getCountFromServer }  from "firebase/firestore";
import type { UserRace } from "../types/UserRace";
import type {Races} from '../types/Races'
import { writable, get } from 'svelte/store';
import Race from './Race.svelte';

export const races = writable<Races[]>([]);

export async function getCollection(){
    var ret = initFirebase();
    const db = getFirestore(ret.app);
    const userDocRef = doc(db, 'references', 'path242');
    const racesRef = collection(userDocRef, 'races');
    
    const racesSnapshot = await getDocs(racesRef);
    const retRaces = racesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(retRaces);
  // extract the data from the snapshot and return it
  races.set(retRaces as Races []);
}

export async function createUserRace(userUid: string, race: UserRace){
    var ret = initFirebase();
    const db = getFirestore(ret.app);
    
    await setDoc(doc(db, 'references', userUid, 'races', race.title), {...race, createdAt: serverTimestamp()});
}

export async function getUserRace(userUid: string, title: string){
    var ret = initFirebase();
    const db = getFirestore(ret.app);
    
    return await getDoc(doc(db, 'references', userUid, 'races', title))
}

export async function deleteUserRace(userUid: string, title: string){
    var ret = initFirebase();
    const db = getFirestore(ret.app);
    
    return await deleteDoc(doc(db, 'references', userUid, 'races', title))
}

export async function getUserRaces(userUid: string, pageSize: number, lastRace: string | undefined, asc: boolean = true){
    var ret = initFirebase();
    const db = getFirestore(ret.app);
    
    let racesCollection = collection(db, 'references', userUid, 'races');
    let q;
    console.log(asc);
    if (lastRace != undefined) {
        let race = await getDoc(doc(racesCollection, lastRace));
        q = query(racesCollection, orderBy('createdAt', asc ? 'asc' : 'desc'), startAfter(race), limit(pageSize));
    } else {
        q = query(racesCollection, orderBy('createdAt', asc ? 'asc' : 'desc'), limit(pageSize));
    }
    
    let racesSnapshot = await getDocs(q);
    let count = await getCountFromServer(racesCollection);
    let races = racesSnapshot.docs.map(doc => ({ title: doc.id, ...doc.data() })) as UserRace[];
    return {count: count.data().count, items: races};
}
