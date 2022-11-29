import React, { createContext, useContext, useState, useEffect } from 'react'
import { db } from '../firebase'
import { useAuth } from './authContext'
import { getDoc , setDoc, doc} from "firebase/firestore"; 

const DatabaseContext = createContext()

export function useDatabase() {
  return useContext(DatabaseContext)
}

export default function DatabaseProvider({ children }) {
    const { currentUser } = useAuth()
    const collection_name = "user_settings"
    const new_user = {
        user_id : currentUser? currentUser.uid : null,
        favourite_movies: [],
        favourite_shows: [],
        premium_enabled: false,
    }

    function addUserSettingsToDatabase() {
        setDoc(doc(db, collection_name, currentUser.uid), new_user);
    }

    function updateUserSettingsInDatabase(settings) {
        const updated_user = {
            user_id : currentUser? currentUser.uid : null,
            favourite_movies: settings.favourite_movies,
            favourite_shows: settings.favourite_shows,
            premium_enabled: settings.premium_enabled,
        }
        setDoc(doc(db, collection_name, currentUser.uid), updated_user);
    }

    function getUserSettingsFromDatabase() {
        const docRef = doc(db, collection_name, currentUser.uid);
        getDoc(docRef).then((doc) => {
            if (doc.exists()) {
                console.log("Document data:", doc.data());
                return doc.data();
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        addUserSettingsToDatabase();
        return new_user;
    }

    return (
    <DatabaseContext.Provider value={{
        addUserSettingsToDatabase,
        updateUserSettingsInDatabase,
        getUserSettingsFromDatabase,
    }}>
      {children}
    </DatabaseContext.Provider>
  )
}
