import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    namespaced: true,
    state() {
        return {
            register: {
                isProcessing: false,
                error: "",
            }
        }
    },
    actions: {
        async register({ commit, dispatch }, { email, password }) {
            commit("setRegisterIsProcessing", true);
            commit("setRegisterError", "");

            // Firebase functionality to register user

            try {
                const user_credentials = await createUserWithEmailAndPassword(getAuth(), email, password);
                return user_credentials.user;
            } catch (e) {
                commit("setRegisterError", e.message);
                dispatch("toast/error", e.message, { root: true });
            } finally {
                commit("setRegisterIsProcessing", false);
            }
        }
    },
    mutations: {
        setRegisterIsProcessing(state, isProcessing) {
            state.register.isProcessing = isProcessing;
        },
        setRegisterError(state, error) {
            state.register.error = error;
        },
    },
}