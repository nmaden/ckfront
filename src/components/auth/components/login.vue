<template>
      <form @submit.prevent="confirmation"  class="send__order">
            <div class="div-login">
                <div class="img-input">
                  <i class="fas fa-user-alt"></i>
                  <input
                      class= "placeholder phone_us"
                      type="text"
                      v-model="login"
                      :placeholder='$t("message.name")'

                      autocorrect= "off"
                      aucapitalize= "off"
                      required
                      >
                </div> 
                <div class="img-input">
                  <i class="fas fa-phone-alt"></i>
                  <input
                    class="placeholder"
                 
                      v-model="phone"
                      placeholder="+7 xxx xx xx"
                      v-mask="mask"
                      type="text"
                      required
                     >
                </div>
                  
                <p>{{ info }}</p> 
                  <button class="button" id="myBtn" type="submit">{{$t("message.sign_in")}}</button>
                  <!-- <a ><router-link to="/forgotPassword" >{{$t("message.forgot_pass")}}</router-link></a>
                  <a ><router-link to="/register" >{{$t("message.registration")}}</router-link></a> -->
            </div>
      </form>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/v-mask/dist/v-mask.min.js"></script>

<script>

export default {

  name: 'Login',
    components: {
    // PhoneInput,
    },
  data() {
    return {
       mask: ['+',/\d/,'(', /\d/, /\d/, /\d/, ') ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      phone: '',
      info: null,
      checkHome: true,
      login: '',
      password: '',
      phoneFixPreload: false,
      isValid: false,
      loginValidate: {
        login: false,
      },
      validate: {
        phone: false,
        phoneFull: false,
        codeSms: false,
        phoneGet: false,
      },
    };
  },

  computed: {
    loginValidateChange() {
      return {
        borderBottom: this.loginValidate.login ? '1px solid var(--color-primary-notific)' : '',
      };
    }
  },


  methods: {
    setMask() {
      
    },
    toLogin() {
      this.isLogin = 'login';
    },
    onInput(e) {
      if (isValid) {
        this.isValid = isValid;
      }
    },
    loginPhoneChange(){

      this.loginValidate.login = false;
      this.$modal.hide('dialog');

      if (this.login[0] !== '+') {
        this.login = '+' + this.login;
      }

      if (!Number(this.login.slice(1))) {
        const first = Number(this.login.slice(1));
        if (first === 0) {
          return;
        }

        this.loginValidate.login = true;

        this.$modal.show('dialog', {
          text: 'Введите номер телефона!',
          buttons: [{ title: 'Закрыть' }],
        });
      }
    },
    confirmation() {
      document.getElementById("myBtn").disabled = true;
      let obj = {
          name: this.login,
          phone: this.phone,
        };
      
      // alert(obj.email+' '+obj.first_name+' '+obj.last_name+' '+obj.birth_date+' '+obj.gender+' '+obj.locale);
        // this.preloaderEndRegister = true;
        
        this.$http.post('guest/send/message', obj)
          .then(res => {
                this.login = "";
                this.phone = "";
                this.$alert("Наш менеджер перезвонит вам в течении 15 минут");

                if(res.data) {
                  document.getElementById("myBtn").disabled = false;
                }
        })
        .catch(errors => {
            consol.log('Ошибка ' + error.response.data.errors);
    
        });
    },
  },
};
</script>

<style  lang="scss">
  .img-input {
    i {
      font-size: 12px;
      color: #db2150;
    }
    input {
      color: white !important;
    }
    
  }
  .send__order {
    
      button {
        background-color: #db2150 !important;
      }
 
  }
  

 

      .button {
      animation: glowing 1300ms infinite;
      }
      @keyframes glowing {
        0% { background-color: #db2150;; box-shadow: 0 0 10px #db2150; }
        50% { background-color: #df0c41;; box-shadow: 0 0 25px #ca0637;; }
        100% { background-color: #c05a73;; box-shadow: 0 0 10px #ec6587;; }
      }
  
</style>