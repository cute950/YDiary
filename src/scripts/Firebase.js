import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhXhDkeAQR6rqlI9PPjpz5p7Mo_jgmeHA",
  authDomain: "ydiary.firebaseapp.com",
  projectId: "ydiary",
  storageBucket: "ydiary.appspot.com",
  messagingSenderId: "243778383769",
  appId: "1:243778383769:web:7ba9e0920897716aab6d08",
  measurementId: "G-1B8370LJYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const Db = getFirestore(app);

// import { collection, addDoc, getDocs } from "firebase/firestore";
/* TODO: вынести Запись в firebase в отдельный файл */
// const setUser = async () => {
//     try {
//         const docRef = await addDoc(collection(Db, "users"), {
//             name: 'test',
//             password: 'test0000'
//         });
//         console.log("Document written with ID: ", 'test');
//         } catch (e) {
//         console.error("Error adding document: ", e);
//         }
// }
/* TODO: вынести Получение из firebase в отдельный файл */
// const getUser = async() => {
//     const querySnapshot = await getDocs(collection(Db, "users"));
//     querySnapshot.forEach((doc) => {
//     console.log(doc.id, doc.data());
//     });
// }

export default Db;
