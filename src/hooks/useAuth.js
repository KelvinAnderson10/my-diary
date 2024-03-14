import { useEffect, useState } from "react";
import { firebaseAuth } from "../firebase";

export const useAuthListener = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true);

    useEffect(() => {
        firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                setLoggedIn(true);
            }
            setCheckingStatus(false);
        });
    }, []);
    return { loggedIn, checkingStatus };
};