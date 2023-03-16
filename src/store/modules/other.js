const otherModule = {
    state() {
        return {
            openMobileNav: false
        }
    },
    mutations: {
        toggleMobileNav(state) {
            state.openMobileNav = !state.openMobileNav
        }
    },
    actions: {
        onToggleMobileNav({ commit }) {
            commit('toggleMobileNav')
        }
    }
}

export default otherModule