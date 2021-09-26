const app = new Vue({
    el: '#app',
    data: {
        logged_in: true,
        login_form: false,
        side_menu:false,
        opt_menu:false,
        users: [
            { 'user': "asd", 'psw': "asd" }
        ],
        marks:[
            {'id':1,'img':"img/post-pic.png"},
            {'id':2,'img':"img/post-pic.png"},
            {'id':3,'img':"img/post-pic.png"},
            {'id':4,'img':"img/post-pic.png"},
            {'id':5,'img':"img/post-pic.png"},
            {'id':6,'img':"img/post-pic.png"},
            {'id':7,'img':"img/post-pic.png"},
            {'id':8,'img':"img/post-pic.png"},
            {'id':9,'img':"img/post-pic.png"},
            {'id':10,'img':"img/post-pic.png"},
            {'id':11,'img':"img/post-pic.png"},
        ],
        cards:[
{'id':1,'avatar':"img/post-pic.png",'name':"Alain Bermudez",'city':"Madrid",'ppic':"img/post-pic.png",'post':"Si me ves pensando no es nada, es 1 brisa!!!",'cpic':"img/post-pic.png",'cuser':"Ander Garcia",'ccom':"Uii!!!! que profundo",'cnum':32},
{'id':2,'avatar':"img/post-pic.png",'name':"Alain Bermudez",'city':"Madrid",'ppic':"img/post-pic.png",'post':"Si me ves pensando no es nada, es 1 brisa!!!",'cpic':"img/post-pic.png",'cuser':"Ander Garcia",'ccom':"Uii!!!! que profundo",'cnum':32},
{'id':3,'avatar':"img/post-pic.png",'name':"Alain Bermudez",'city':"Madrid",'ppic':"img/post-pic.png",'post':"Si me ves pensando no es nada, es 1 brisa!!!",'cpic':"img/post-pic.png",'cuser':"Ander Garcia",'ccom':"Uii!!!! que profundo",'cnum':32},
{'id':4,'avatar':"img/post-pic.png",'name':"Alain Bermudez",'city':"Madrid",'ppic':"img/post-pic.png",'post':"Si me ves pensando no es nada, es 1 brisa!!!",'cpic':"img/post-pic.png",'cuser':"Ander Garcia",'ccom':"Uii!!!! que profundo",'cnum':32},
{'id':5,'avatar':"img/post-pic.png",'name':"Alain Bermudez",'city':"Madrid",'ppic':"img/post-pic.png",'post':"Si me ves pensando no es nada, es 1 brisa!!!",'cpic':"img/post-pic.png",'cuser':"Ander Garcia",'ccom':"Uii!!!! que profundo",'cnum':32},
{'id':6,'avatar':"img/post-pic.png",'name':"Alain Bermudez",'city':"Madrid",'ppic':"img/post-pic.png",'post':"Si me ves pensando no es nada, es 1 brisa!!!",'cpic':"img/post-pic.png",'cuser':"Ander Garcia",'ccom':"Uii!!!! que profundo",'cnum':32}
        ],
        nets:[
            {'img':"icons/twitter.svg", 'link':"laviupshop.com"},
            {'img':"icons/insta.svg", 'link':"laviupshop.com"},
            {'img':"icons/face.svg", 'link':"laviupshop.com"},
        ],
        login_user:" ",
        login_psw:" ",
        error_msg:false,
    },
    method:{
        login() {

            for (const x of this.users) {
                if (this.login_user == x.user && this.login_psw == x.psw) {
                    this.logged_in = true;
                   this.logged_in = true;

                }
                if (this.logged_in == false) {
                    this.error_msg = true;
                }
                // else {
                //     router.push({ name: 'Home' });
                // }
            }

        },
        
    }
})