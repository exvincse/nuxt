import axios from "axios";
export const state = () => ({
    message: []
});

export const getters = {};
export const mutations = {
    SET_MESSAGE(state, value) {
        state.message = value || [];
    }
};
export const actions = {
    async setStars({ commit }) {
        let data = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=96dg4kGqji5E3SrmGkeAQfq1OAXOBAMD');
        commit('SET_MESSAGE', data.data.results);
    }
};