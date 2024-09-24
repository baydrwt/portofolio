import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const experienceCollectionRef = collection(db, "experience");
const projectCollectionRef = collection(db, "projects");
const certificatesCollectionRef = collection(db, "certificates");
const friendsCollectionRef = collection(db, "friends");

export async function getExperience() {
  const querySnapshot = await getDocs(experienceCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataArr;
}

export async function getProject() {
  const querySnapshot = await getDocs(projectCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataArr;
}

export async function getCertificates() {
  const querySnapshot = await getDocs(certificatesCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataArr;
}

export async function getFriends() {
  const querySnapshot = await getDocs(friendsCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataArr;
}
