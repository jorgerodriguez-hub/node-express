// import mongoose from "mongoose";
// import { MONGODB_URI } from "./config";

// export async function connectDB() {
//   try {
//     const db = await mongoose.connect(MONGODB_URI);
//     console.log("Database is connected to: ", db.connection.name);
//   } catch (error) {
//     console.error(error);
//   }
// }

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYy1tUtfhtkj1AIR5NH7uRr9TaQeXbcU0",
  authDomain: "challengeintercorp-18910.firebaseapp.com",
  projectId: "challengeintercorp-18910",
  storageBucket: "challengeintercorp-18910.appspot.com",
  messagingSenderId: "168711055366",
  appId: "1:168711055366:web:f64603d2f1df1317243b87",
  measurementId: "G-8THXTJ2ZW3",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Client = db.collection("Clients");
module.exports = Client;
