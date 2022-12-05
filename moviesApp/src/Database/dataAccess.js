import { db } from '../firebase'
import { getDoc , setDoc, doc} from "firebase/firestore"; 
import { async } from '@firebase/util';

const UserSettingsModel = {
    user_id : "",
    favourite_movies: [],
    favourite_shows: [],
    must_watch: [],
    premium_enabled: false
}

export function getUserSettings(args){
    const [, user_id] = args.queryKey;
    UserSettingsModel.user_id = user_id;
    return new Promise((resolve, reject) => {
        const docRef = doc(db, "user_settings", user_id);
        getDoc(docRef).then((doc) => {
            if (doc.exists()) {
                resolve(doc.data());
            } else {
                console.log("No such document!");
                resolve(UserSettingsModel);
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
            reject(error);
        }
        );
    });
};

export function setUserSettings({ user_settings, favourite_movies, favourite_shows, must_watch, premium_enabled }){
    try {
        if (user_settings){
            console.log(premium_enabled);
            const updated_user = {
                user_id : user_settings.user_id,
                favourite_movies: favourite_movies? favourite_movies: user_settings.favourite_movies,
                favourite_shows: favourite_shows? favourite_shows: user_settings.favourite_shows,
                must_watch: must_watch? must_watch: user_settings.must_watch,
                premium_enabled: (typeof premium_enabled !== "undefined") ? premium_enabled: user_settings.premium_enabled,
            }
            const docRef = doc(db, "user_settings", user_settings.user_id);
            setDoc(docRef, updated_user).then(() => {
                console.log("Document successfully written!");
            }
            ).catch((error) => {
                console.error("Error writing document: ", error);
            });
        } else {
            console.log("Error editing document: user_settings is null");
        }
    } catch (error) {
        console.error(error);
    }
};