
import { initFirebase } from "$lib/client/firebase";
import { getFirestore, doc, collection, getDocs }  from "firebase/firestore"
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
