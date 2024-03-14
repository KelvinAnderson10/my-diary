import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseAuth } from '../../firebase'

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

export default {
    register,
    login,
    logout,
};
