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
    return new Promise((resolve, reject) => {
        const docRef = doc(db, "users", user_id);
        getDoc(doc(db, "user_settings", user_id)).then((doc) => {
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
    if (user_settings){
        const updated_user = {
            user_id : user_settings.user_id,
            favourite_movies: favourite_movies? favourite_movies: user_settings.favourite_movies,
            favourite_shows: favourite_shows? favourite_shows: user_settings.favourite_shows,
            must_watch: must_watch? must_watch: user_settings.must_watch,
            premium_enabled: (typeof premium_enabled !== "undefined")? premium_enabled: user_settings.premium_enabled,
        }
        setDoc(doc(db, "user_settings", user_settings.user_id), updated_user).then(() => {
            console.log("Document successfully written!");
        }
        ).catch((error) => {
            console.error("Error writing document: ", error);
        });
    } else {
        console.log("Error editing document: user_settings is null");
    }
};