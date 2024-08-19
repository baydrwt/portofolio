import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCbT7ILk06q32jNSkhNkqjmolwxgCm9Qps",
  authDomain: "baydrwt-portofoliio.firebaseapp.com",
  projectId: "baydrwt-portofoliio",
  storageBucket: "baydrwt-portofoliio.appspot.com",
  messagingSenderId: "335413221854",
  appId: "1:335413221854:web:1de9103af8af33e8d0654f",
  measurementId: "G-ZZN85B7MC8",
};

// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const experienceCollectionRef = collection(db, "experience");
const projectCollectionRef = collection(db, "projects");

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
