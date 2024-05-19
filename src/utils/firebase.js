// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Tw_VxUyRb-6CBgdxOClMhpDJEQ7SQUg",
  authDomain: "netflixgpt-58885.firebaseapp.com",
  projectId: "netflixgpt-58885",
  storageBucket: "netflixgpt-58885.appspot.com",
  messagingSenderId: "897972691918",
  appId: "1:897972691918:web:2292497b34d3d0e88bc19f",
  measurementId: "G-1VGKMSM0X0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
