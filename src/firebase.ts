import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB3ykj0phUF7t0iB9uHkUKCs9RwzA5nVhY",
  authDomain: "portfolio-abhinav-39d81.firebaseapp.com",
  projectId: "portfolio-abhinav-39d81",
  storageBucket: "portfolio-abhinav-39d81.firebasestorage.app",
  messagingSenderId: "134628090000",
  appId: "1:134628090000:web:83c926dc4d9efc81893815",
  measurementId: "G-W1YCT46B0X",
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, analytics };
