import Vuex from 'vuex'

const state = {
    count:0
}

const getters = {
    getCount({count}){
        return count
    }
}
/** 必须是同步 */
const mutations = {
    addCount(state, {num}) {
        state.count += num
    }
}
/** 可以是异步 */
const actions = {
    submitAddCount({commit},params){
        commit('addCount',params)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})

export default store