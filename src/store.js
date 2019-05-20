import Vue from 'vue'
import Vuex from 'vuex'
import { charts } from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {
        async getChart() {
            const mycharts = await charts();
            console.log(mycharts);
        }
    }
})