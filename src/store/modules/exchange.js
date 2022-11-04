import { db } from "../../db";
import { getDocs, query, collectionGroup } from "firebase/firestore";

// const _fetchExchanges = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(exchanges);
//         }, 1000)
//     })
// }

export default {
    namespaced: true,
    state() {
        return {
            items: []
        }
    },

    actions: {
        // context -> state, commit
        async getExchanges({ commit }) {
            const exchangeQuery = query(collectionGroup(db, "exchanges"));
            const snapshot = await getDocs(exchangeQuery);
            const exchanges = snapshot.docs.map(doc => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });
            // const exchanges = await _fetchExchanges()
            commit("setExchanges", exchanges);
        }
    },
    mutations: {
        setExchanges(state, exchanges) {
            state.items = exchanges;
        }
    }
}