
import { initFirebase } from "$lib/client/firebase";
import { getFirestore, doc, collection, getDocs }  from "firebase/firestore";
export var races = [];
async function getCollection(){
    var ret = initFirebase();
    const db = getFirestore(ret.app);
    const userDocRef = doc(db, 'references', 'path242');
    const racesRef = collection(userDocRef, 'races');
    
    const postsSnapshot = await getDocs(racesRef);
    
    const posts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(posts);
}
getCollection();