import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseAuth } from '../../firebase'
import { useEffect, useState } from 'react';

const register = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        return userCredential;
    } catch (error) {
        throw error;
    }
};

const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
        console.log(userCredential);
        return userCredential;
    } catch (error) {
        throw error;
    }
};

const logout = async () => {
    try {
        await signOut(firebaseAuth);
    } catch (error) {
        throw error;
    }
};

const getCurrentUser = () => {
    const user = firebaseAuth.currentUser;
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        // const displayName = user.displayName;
        // const email = user.email;
        // const photoURL = user.photoURL;
        // const emailVerified = user.emailVerified;
        console.log(user);
    }
}

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
