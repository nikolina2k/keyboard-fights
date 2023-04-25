import { initFirebase } from '$lib/client/firebase';
import { getFirestore, doc, collection, getDocs } from 'firebase/firestore';
import {
  serverTimestamp,
  getDoc,
  setDoc,
  deleteDoc,
  query,
  startAfter,
  orderBy,
  limit,
  getCountFromServer,
} from 'firebase/firestore';
import type { UserRace } from '../types/UserRace';
import type { Races } from '../types/Races';
import { writable, get } from 'svelte/store';
import 'firebase/auth';
import 'firebase/firestore';
import Race from './Race.svelte';
export const races = writable<Races[]>([]);
import { getAuth, onAuthStateChanged } from 'firebase/auth';
async function getUsername() {
  const auth = getAuth();
  let username = 'path242';
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      const uid = user.uid;
      username = uid;
    }
  });
  await new Promise((f) => setTimeout(f, 500));
  return username;
}
export async function getCollection() {
  const ret = initFirebase();
  const db = getFirestore(ret.app);
  const username = await getUsername();
  console.log(username);
  const userDocRef = doc(db, 'references', username);
  const racesRef = collection(userDocRef, 'races');
  const racesSnapshot = await getDocs(racesRef);
  const retRaces = racesSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(retRaces);
  // extract the data from the snapshot and return it
  races.set(retRaces as Races[]);
}

export async function createUserRace(userUid: string, race: UserRace) {
  const ret = initFirebase();
  const db = getFirestore(ret.app);

  await setDoc(doc(db, 'references', userUid, 'races', race.title), {
    ...race,
    createdAt: serverTimestamp(),
  });
}

export async function getUserRace(userUid: string, title: string) {
  const ret = initFirebase();
  const db = getFirestore(ret.app);

  return await getDoc(doc(db, 'references', userUid, 'races', title));
}

export async function deleteUserRace(userUid: string, title: string) {
  const ret = initFirebase();
  const db = getFirestore(ret.app);

  return await deleteDoc(doc(db, 'references', userUid, 'races', title));
}

export async function getUserRaces(
  userUid: string,
  pageSize: number,
  lastRace: string | undefined,
  asc = true
) {
  const ret = initFirebase();
  const db = getFirestore(ret.app);

  const racesCollection = collection(db, 'references', userUid, 'races');
  let q;
  console.log(asc);
  if (lastRace != undefined) {
    const race = await getDoc(doc(racesCollection, lastRace));
    q = query(
      racesCollection,
      orderBy('createdAt', asc ? 'asc' : 'desc'),
      startAfter(race),
      limit(pageSize)
    );
  } else {
    q = query(
      racesCollection,
      orderBy('createdAt', asc ? 'asc' : 'desc'),
      limit(pageSize)
    );
  }

  const racesSnapshot = await getDocs(q);
  const count = await getCountFromServer(racesCollection);
  const races = racesSnapshot.docs.map((doc) => ({
    title: doc.id,
    ...doc.data(),
  })) as UserRace[];
  return { count: count.data().count, items: races };
}
