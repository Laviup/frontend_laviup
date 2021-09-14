const store = new Vuex.Store({
    state: {
        users: [
            { 'user': "asd", 'psw': "asd" }
        ],
        logged_in: false,
        // login_form: false
    }
})
const app = new Vue({
    el: '#app',
    data: {
        logged_in: false,
        login_form: false
    }
})