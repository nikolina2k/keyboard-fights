
import { initFirebase } from "$lib/client/firebase";
import { getFirestore, doc, collection, getDocs }  from "firebase/firestore"
import type {Races} from '../types/Races'
export async function getCollection(): Promise<Races[]> {
    var ret = initFirebase();
    const db = getFirestore(ret.app);
    const userDocRef = doc(db, 'references', 'path242');
    const racesRef = collection(userDocRef, 'races');
    
    const racesSnapshot = await getDocs(racesRef);
    const retRaces = racesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(retRaces);
  // extract the data from the snapshot and return it
  return retRaces as Races[];
}