Vue.component('login-form', {
    template: `<div class="cont-login" >
    <div class="login-cont">
        <form class="form">
            <div class="logo2">
                <img src="icons/logo.svg" alt="logo">
            </div>
            <div class="inputs">
                <input type="text" name="username" id="username" class="username"
                    placeholder="Télefono o correo electrónico" v-model="login_user">
                <input type="password" name="password" id="password" class="password" placeholder="Contraseña" v-model="login_psw">
                <a href="#">He olvidado mi contraseña</a>
                <input type="button" value="Iniciar sesión" class="login" @click="logged_in=true,login_form=false" >
            </div>
            <div class="social">
                <div class="social-line">
                    <div class="s-l-1"></div>
                    <p>O</p>
                    <div class="s-l-2"></div>
                </div>
                <div class="social-icons">
                    <img src="icons/face.svg" alt="face-icon" class="face-i">
                    <img src="icons/face.svg" alt="go-icon" class="go-i">
                </div>
            </div>
        </form>
        <div class="sign-up">
            <p>¿Aún no eres de la familia?</p>
            <a href="·">Registrate</a>
        </div>
    </div>
    <p v-if="error_msg">Error</p>
</div>`,
    data() {
        return {
            // login
            login_user: ' ',
            login_psw: ' ',
            logged_in: false,
        }
    },
    methods: {
        login() {

            for (const x of store.state.users) {
                if (this.login_user == x.user && this.login_psw == x.psw) {
                    this.logged_in = true;
                    store.state.logged_in = true;
                    store.state.login_form = false;

                }
                if (this.logged_in == false) {
                    store.state.error_msg = true;
                }
                // else {
                //     router.push({ name: 'Home' });
                // }
            }

        }
    },
})