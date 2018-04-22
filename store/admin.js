// state
export const state = () => ({
    conversations: [],
    conversation: null,
    messages: [],
})

// getters
export const getters = {
    conversations: state => state.conversations,
    conversation: state => state.conversation,
    hasActiveConversation: state => state.conversation !== null,
    messages: state => state.messages
}

// actions
export const actions = {
    async getConversations({ commit }) {
        this.$firebasedb.ref('conversations').once('value', (snapshot) => {
            snapshot.forEach((data) => {
                commit('ADD_CONVERSATION', { user: { name: data.key } })
            })
        })
    },
    async setActiveConversation({ state, commit, dispatch }, data) {
        if (state.conversation) {
            this.$firebasedb.ref(`conversations/${state.conversation.user.name}`).off()
        }
        commit('SET_CONVERSATION', data)
        dispatch('getMessages', data)
    },
    async getMessages({ commit }, data) {
        commit('SET_MESSAGES', [])
        this.$firebasedb.ref(`conversations/${data.user.name}`).on('child_added', snapshot => {
            commit('STORE_MESSAGE', snapshot.val())
        })
    }
}


// mutations
export const mutations = {
    ADD_CONVERSATION(state, conversation) {
        state.conversations.push(conversation)
    },
    SET_CONVERSATION(state, data) {
        state.conversation = data
    },
    SET_MESSAGES(state, messages) {
        state.messages = messages
    },
    STORE_MESSAGE(state, message) {
        state.messages.push(message)
    }
}

