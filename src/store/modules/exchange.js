import slugify from "slugify";
import {
    db
} from "../../db";
import { getDocs, query, collectionGroup, doc, addDoc, collection, where, getDoc } from "firebase/firestore";

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
            items: [],
            item: {}
        }
    },

    actions: {
        // context -> state, commit
        async getExchangeBySlug({ commit }, slug) {
            commit("setExchange", {});
            const docQuery = query(
                collection(db, "exchanges"),
                where("slug", "==", slug)
            );

            const querySnap = await getDocs(docQuery);
            const exchange = querySnap.docs[0].data();

            const userSnap = await getDoc(exchange.user);
            exchange.user = userSnap.data();

            commit("setExchange", exchange);
        },

        async getExchanges({ commit }) {
            const exchangeQuery = query(collectionGroup(db, "exchanges"));
            const snapshot = await getDocs(exchangeQuery);
            const exchanges = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            // const exchanges = await _fetchExchanges()
            commit("setExchanges", exchanges);
        },

        async createExchange({ rootState, dispatch }, { data, onSuccess }) {

            const userRef = doc(db, "users", rootState.user.data.id);
            data.user = userRef;
            data.slug = slugify(`${data.title} ${Date.now()}`, {
                lower: true, // convert to lower case, defaults to `false`
                strict: true, // strip special characters except replacement, defaults to `false`
            });
            await addDoc(collection(db, "exchanges"), data);

            dispatch("toast/success", "Exchange was created successfully!", { root: true })
            onSuccess();
        }
    },
    mutations: {
        setExchanges(state, exchanges) {
            state.items = exchanges;
        },
        setExchange(state, exchange) {
            state.item = exchange;
        }
    }
}