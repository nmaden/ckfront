<!-- template -->
<template>
        <div class="sign__page">

            <p class="sign__page__title">CK KASPI GROUP</p>
            <form class="sign__page__block" @submit.prevent="login_sign">
                <input type="text" placeholder="Логин" v-model="login" >
                <input type="text" placeholder="Пароль" v-model="password" >

                <button type="submit"><p>Войти</p></button>
            </form>

        </div>                   
</template>

<!-- scripts -->
<script>
    export default {
      data() {
          return {
            login: '',
            password: ''
          }
      },
      mounted() {
        
      },
      methods: {
        login_sign() {
              let obj = {
                    email: this.login,
                    password: this.password
              }
              this.$http.post('auth/login',
               obj 
              )
              .then(res => {

            
                  localStorage.setItem("access_token",res.data.token);

                  this.$router.push("/order");
              })
              .catch(errors => {
                  consol.log('Ошибка ' + error.response.data.errors);
              })

        }
      }
    };
</script>

<style scoped lang="scss"> 
    .sign__page {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 70vh;
      .sign__page__title {
        font-weight: bold;
        font-size: 26px;
        margin-bottom: 20px;
        color: #333;
      }
      .sign__page__block {
        display: flex;
        flex-direction: column;
        input {
          width: 300px;
          padding: 20px;
          margin-bottom: 20px;
        }
        ::placeholder {
          color: #333;
        }
        button {
          cursor: pointer;
          text-transform: uppercase;
          width: 350px;
          outline: none;
          border: none;
          background-color: cornflowerblue;
          padding: 20px;
          p {
            color: white;
            font-weight: bold;
          }
        }
        button:hover {
          background-color: #285bb6;
        }
      }
      
    }
</style>