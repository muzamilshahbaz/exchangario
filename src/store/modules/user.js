import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    namespaced: true,
    actions: {
        async register(_, { email, password }) {

            // Firebase functionality to register user
            const auth = getAuth();

            try {
                const user_credentials = await createUserWithEmailAndPassword(auth, email, password);
                alert("User has been registered.");
                return user_credentials.user;
            } catch (e) {
                console.log('e.message :>> ', e.message);
            }
        }
    }
}