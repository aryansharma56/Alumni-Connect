import { getAllUsers } from "./FirestoreAPI";
import { countryToIso } from "../assets/Countries";
import { useState } from "react";
let userRef = collection(firestore, "users");
//console.log(allUsers);
import { firestore } from "../firebaseConfig";
let user = {};
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  setDoc,
  deleteDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
onSnapshot(userRef, (response) => {
  response.docs.map((doc) => {
    if (doc.data().country) {
      user[countryToIso[doc.data().country]] =
        (user[countryToIso[doc.data().country]] || 0) + 1;
    }
  });
});

export const users = user;
