import { createStore } from 'vuex'

import otherModule from './modules/other'

const store = createStore({
    modules: {
        other: otherModule
    }
})

export default store