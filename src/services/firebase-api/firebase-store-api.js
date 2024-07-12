

import {  getFirestore,  } from "firebase/firestore";


import { getFunctions, } from 'firebase/functions';

import { secretFirebase } from "src/secret/secret";

import testImg from '../../../public/assets/img/works/curs/1.jpg';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



//todo

//сделать enum с названиями коллекций
//TS must be here


import { getStorage, ref, uploadBytes } from "firebase/storage";
import { initializeApp } from "firebase/app";


console.log(testImg)


// Initialize Firebase
export const app = initializeApp(secretFirebase);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
const functions = getFunctions(app);

// export const auth = firebase.auth()
export const firestore = getFirestore(app);
// export const myFirebase = 




export const uploadImage = async () => {
  const storage = getStorage();
  const portfolioRef = ref(storage, 'images/pages/portfolio/01.jpg');
 
  const publicUrl = uploadBytes(portfolioRef, testImg).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
  return publicUrl;
};

// export const uploadImage = async () => {
//   const filePath = '../public/assets/img/works/curs/1.jpg'
//   const fileName = path.basename(filePath);
//   const file = bucket.file('images/' + fileName);
//   await bucket.upload(filePath, {
//     destination: 'images/' + fileName,
//   });
//   const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodeURIComponent(file.name)}?alt=media`;
//   return publicUrl;
// };

// const assetsFolder = './assets';
// fs.readdir(assetsFolder, (err, files) => {
//   if (err) {
//     console.error('Could not list the directory.', err);
//     process.exit(1);
//   }
//   files.forEach(file => {
//     const filePath = path.join(assetsFolder, file);
//     uploadImage(filePath).then(url => {
//       console.log('Uploaded to:', url);
//       // Создание объекта в Firestore
//       const newPost = db.collection('posts').add({
//         imageName: file,
//         imageUrl: url,
//         createdAt: admin.firestore.Timestamp.fromDate(new Date())
//       });
//       console.log('Firestore document created');
//     }).catch(err => {
//       console.error('Error uploading image:', err);
//     });
//   });
// });

