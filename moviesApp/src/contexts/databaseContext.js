import React, { createContext, useContext } from 'react'
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
        must_watch: [],
        premium_enabled: false,
    }

    function addUserSettingsToDatabase() {
        setDoc(doc(db, collection_name, currentUser.uid), new_user);
    }

    function updateUserSettingsInDatabase({favourite_movies, favourite_shows, must_watch, premium_enabled}) {
        const current_user_settings = getUserSettingsFromDatabase()
        const updated_user = {
            user_id : currentUser? currentUser.uid : null,
            favourite_movies: favourite_movies? favourite_movies: current_user_settings.favourite_movies,
            favourite_shows: favourite_shows? favourite_shows: current_user_settings.favourite_shows,
            must_watch: must_watch? must_watch: current_user_settings.must_watch,
            premium_enabled: premium_enabled? premium_enabled: current_user_settings.premium_enabled,
        }
        setDoc(doc(db, collection_name, currentUser.uid), updated_user);
    }

    function getUserSettingsFromDatabase() {
        const docRef = doc(db, collection_name, currentUser.uid);
        getDoc(docRef).then((doc) => {
            if (doc.exists()) {
                return doc.data();
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
