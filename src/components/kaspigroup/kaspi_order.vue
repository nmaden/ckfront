<template>
  <div class=" house__column">

      <div class="house__modal house__loader" v-if="loader_kaspi">
        <img src="../../assets/images/kaspigroup/spinner2.gif" alt="">
      </div>
      <div class="house__modal" v-if="show_modal">
          
          <form class="house__modal__inner" @submit.prevent="send_order" >
                
                <i class="far fa-times-circle" @click="hide_modal(1)"></i>
                <p class="house__title">Забронировать квартиру</p>


                <div class="house__value">
                  <p>Подьезд: </p>
                  <p>{{this.podezd}}</p>
                </div>
                <div class="house__value">
                  <p>Этаж: </p>
                  <p>{{this.etaj}}</p>
                </div>
                <div class="house__value">
                  <p>Квартира: </p>
                  <p>{{this.kvartira }} -x ком</p>
                </div>
              


                <input type="text" placeholder="Имя" v-model="name" required>
                <input type="text" placeholder="Фамилия" v-model="surname" required>
                <input type="text" placeholder="ИИН" v-model="iin" minlength="12" required>
               
                <input type="text" v-mask="mask"   v-model="phone"  placeholder="+7 xxx xx xx"  required>
                    
                <input type="text"   placeholder="Cумма" v-model="amount" required>

                

                <button class="house__submit"  type="submit">
                  <p>Забронировать</p>
                </button>
          </form>


      </div>

      <div class="house__modal" v-if="edit_modal">
          <i class="fas fa-times" @click="hide_modal(2)"></i>
          <form class="house__modal__inner" @submit.prevent="edit_order" >
                <p class="house__title">Редактировать квартиру</p>


                <div class="house__value">
                  <p>Подьезд: </p>
                  <p>{{this.podezd}}</p>
                </div>
                <div class="house__value">
                  <p>Этаж: </p>
                  <p>{{this.etaj}}</p>
                </div>
                <div class="house__value">
                  <p>Квартира: </p>
                  <p>{{this.kvartira }} -x ком</p>
                </div>
              


                <input type="text" placeholder="Имя" v-model="name" required>
                <input type="text" placeholder="Фамилия" v-model="surname" required>
                <input type="text" placeholder="ИИН" v-model="iin" minlength="12" required>
               
                <input type="text" v-mask="mask"   v-model="phone"  placeholder="+7 xxx xx xx"  required>
                    
                <input type="text"   placeholder="Cумма" v-model="amount" required>

                <div class="house__ordered__not" >
                   <span>Забронировано (Важно! если нажать на галочку и сохранить то удаляет бронь)</span>
                    <input type="checkbox" v-model="ordered" id="" style="width: 40px; margin-bottom: 0">
                </div>
                

                <button class="house__submit"  type="submit">
                  <p>Сохранить</p>
                </button>
          </form>


      </div>


      <div class="house__modal" v-if="see_modal">
          <i class="fas fa-times" @click="hide_modal(3)"></i>
          <form class="house__modal__inner"  >
                <p class="house__title">Посмотреть квартиру</p>


                <div class="house__value">
                  <p>Подьезд: </p>
                  <p>{{this.podezd}}</p>
                </div>
                <div class="house__value">
                  <p>Этаж: </p>
                  <p>{{this.etaj}}</p>
                </div>
                <div class="house__value">
                  <p>Квартира: </p>
                  <p>{{this.kvartira }} -x ком</p>
                </div>
              


                <input type="text" placeholder="Имя" v-model="name" required>
                <input type="text" placeholder="Фамилия" v-model="surname" required>
                <input type="text" placeholder="ИИН" v-model="iin" minlength="12" required>
               
                <input type="text" v-mask="mask"   v-model="phone"  placeholder="+7 xxx xx xx"  required>
                    
                <input type="text"   placeholder="Cумма" v-model="amount" required>

                <div class="house__ordered__not" >
                   <span>Забронировано</span>
                    <input type="checkbox" v-model="ordered" id="" style="width: 40px; margin-bottom: 0">
                </div>
                

                <!-- <button class="house__submit"  type="submit">
                  <p>Сохранить</p>
                </button> -->
          </form>


      </div>


      <div class="house__header">
          <div class="main__logo">
                  <img src="../../assets/images/kaspigroup/apartments.png" alt="">
                  <div class="main__column__l">
                      <p>CK KASPI</p>
                      <p>GROUP</p>
                  </div>
                  
          </div>
          
          <div class="house__person">
              <p class="house__user" v-if="role!=1">Менеджер: {{user_name}}</p>
              <p class="house__user" v-else>Администратор: {{user_name}}</p>
              <p class="house__logout" @click="logout">Выйти из системы</p>
          </div>
      </div>

      <select class="house__select__etaj" name="" id="" v-model="current_etaj">

        <option value="1">1 этаж</option>
        <option value="2">2 этаж</option>
        <option value="3">3 этаж</option>
        <option value="4">4 этаж</option>
        <option value="5">5 этаж</option>
      </select>
      <div class="house__etajes">
          <div class="house__etaj"  v-bind:class="{ houst__etaj__active: current_etaj==1 }" @click="get_etaj(1)">
            <p>1 этаж</p>
          </div>
          <div class="house__etaj"  v-bind:class="{ houst__etaj__active: current_etaj==2 }" @click="get_etaj(2)">
            <p>2 этаж</p>
          </div>
          <div class="house__etaj"  v-bind:class="{ houst__etaj__active: current_etaj==3 }" @click="get_etaj(3)">
            <p>3 этаж</p>
          </div>
          <div class="house__etaj"  v-bind:class="{ houst__etaj__active: current_etaj==4 }" @click="get_etaj(4)">
            <p>4 этаж</p>
          </div>
          <div class="house__etaj"  v-bind:class="{ houst__etaj__active: current_etaj==5 }" @click="get_etaj(5)">
            <p>5 этаж</p>
          </div>
      </div>
      <div class="house">
          <p class="house__current">{{current_etaj}} этаж</p>
          <div class="house__row">
              
              <div class="house__block"  v-for="(i,j) in etaj_info" :key="j">
                  
                  <p class="house__podezd">{{j}} Подьезд</p>
              
                  <div  v-for="(value,key) in i" :key="key">

                      <div v-if="value.kvartira==1" class="house__first house__c">
                        <p class="house__type">{{value.kvartira}} кв</p>

                        <!-- <p class="house__ordered" v-if="etaj_info[b].ordered==1">Забронировано</p>
                        <p class="house__ordered" v-else>Не Забронировано</p> -->
                        <div  
                          @click="open_order(
                          value.etaj_id,
                          value.kvartira,
                          value.podezd_id
                          )"  class="house__order" v-if="value.ordered==0">
                          <p>Забронировать</p>
                        </div>
                        <div class="house__column" v-else>
                              <div  class="house__order__green" >
                                  <i class="fas fa-clipboard-check"></i>
                                  <p>Забронировано</p>
                               </div>
                               <div  v-if="role==1" class="house__order__green"  
                                  @click="see_modal_open(
                                  value.etaj_id,
                                  value.kvartira,
                                  value.podezd_id,
                                  value.name,
                                  value.surname,
                                  value.phone,
                                  value.iin,
                                  value.ordered,
                                  value.amount)" >
                                  <i class="fas fa-eye"></i>
                                  <p>Посмотреть</p>
                               </div>
                               <div  v-if="role==1" class="house__order__green"  
                                  @click="edit_modal_open(
                                  value.etaj_id,
                                  value.kvartira,
                                  value.podezd_id,
                                  value.name,
                                  value.surname,
                                  value.phone,
                                  value.iin,
                                  value.ordered,
                                  value.amount)" >
                                 <i class="fas fa-pen"></i>
                                  <p>Редактировать</p>
                               </div>
                               
                               
                            </div>
                      </div>
                      <div class="house__column">
                          
                          <div v-if="value.kvartira==2" class="house__second house__c" >
                            <p class="house__type">{{value.kvartira}}-x кв</p>

                            <!-- <p class="house__ordered" v-if="etaj_info[roof].ordered==1">Забронировано</p>
                            <p class="house__ordered" v-else>Не Забронировано</p> -->
                            <div  class="house__order" @click="open_order(value.etaj_id,value.kvartira,value.podezd_id)" v-if="value.ordered==0">
                              <p>Забронировать</p>
                            </div>
                            <div class="house__column" v-else>
                              <div  class="house__order__green" >
                                  <i class="fas fa-clipboard-check"></i>
                                  <p>Забронировано</p>
                               </div>
                               <div  v-if="role==1" class="house__order__green"  
                                  @click="see_modal_open(
                                  value.etaj_id,
                                  value.kvartira,
                                  value.podezd_id,
                                  value.name,
                                  value.surname,
                                  value.phone,
                                  value.iin,
                                  value.ordered,
                                  value.amount)" >
                                  <i class="fas fa-eye"></i>
                                  <p>Посмотреть</p>
                               </div>
                               <div  v-if="role==1" class="house__order__green" @click="
                               edit_modal_open(
                                  value.etaj_id,
                                  value.kvartira,
                                  value.podezd_id,
                                  value.name,
                                  value.surname,
                                  value.phone,
                                  value.iin,
                                  value.ordered,
                                  value.amount)" >
                                  <i class="fas fa-pen"></i>
                                  <p>Редактировать</p>
                               </div>
                               
                            </div>
                          </div>
                          <div v-if="value.kvartira==3" class="house__third house__c" >
                              <p class="house__type">{{value.kvartira}}-x кв</p>

                            <!-- <p class="house__ordered" v-if="etaj_info[roof].ordered==1">Забронировано</p>
                            <p class="house__ordered" v-else>Не Забронировано</p> -->
                            <div  class="house__order" @click="open_order(value.etaj_id,value.kvartira,value.podezd_id)" v-if="value.ordered==0">
                              <p>Забронировать</p>
                            </div>

                            <div class="house__column" v-else>
                              <div  class="house__order__green" >
                                  <i class="fas fa-clipboard-check"></i>
                                  <p>Забронировано</p>
                               </div>
                               <div  v-if="role==1" class="house__order__green"  
                                  @click="see_modal_open(
                                  value.etaj_id,
                                  value.kvartira,
                                  value.podezd_id,
                                  value.name,
                                  value.surname,
                                  value.phone,
                                  value.iin,
                                  value.ordered,
                                  value.amount)" >
                                  <i class="fas fa-eye"></i>
                                  <p>Посмотреть</p>
                               </div>
                              <div v-if="role==1" class="house__order__green"  
                                @click="edit_modal_open(
                                  value.etaj_id,
                                  value.kvartira,
                                  value.podezd_id,
                                  value.name,
                                  value.surname,
                                  value.phone,
                                  value.iin,
                                  value.ordered,
                                  value.amount)" >
                                  <i class="fas fa-pen"></i>
                                  <p>Редактировать</p>
                               </div>
                               
                               
                            </div>
                            
                            
                          </div>
                      </div>
                  </div>
  
                  

              </div>
          </div>
      </div>
  </div>
</template>
<script>
    export default {
    name: 'SignPage' ,
        data() {
          return {
            loader_kaspi: false,
            user_name: '',
            role: '',
            mask: ['+',/\d/,'(', /\d/, /\d/, /\d/, ') ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],

            current_etaj: 1,
            etaj_info:'',
            roof: 0,
            login: '',
            password: '',
            show_modal: false,
            edit_modal: false,
            see_modal: false,
            name: "",
            surname: "",
            iin: "",
            phone: "",
            ordered: "",
            amount: "",
            etaj:"",
            podezd: "",
            kvartira: ""
          }
        },
        mounted() {
            if(!localStorage.getItem('access_token')) {
                this.$router.push("/");
            }
            this.get_profile();
            this.get_etaj(1);

          
        },
        methods: {
          logout() {

              localStorage.removeItem("access_token");

              this.$router.push('/login_kaspi');


          },
          edit_modal_open(
            etaj,
            kvartira,
            podezd,
            name,
            surname,
            phone,
            iin,
            ordered,
            amount
           ) {
              this.edit_modal = !this.edit_modal;

              this.etaj = etaj;
              this.kvartira = kvartira;
              this.podezd = podezd;

              this.name = name;
              this.surname = surname;
              this.phone = phone;
              this.iin = iin;
              this.ordered = ordered;
              this.amount = amount;
           },
           see_modal_open(
            etaj,
            kvartira,
            podezd,
            name,
            surname,
            phone,
            iin,
            ordered,
            amount
           ) {
              this.see_modal = !this.see_modal;

              this.etaj = etaj;
              this.kvartira = kvartira;
              this.podezd = podezd;

              this.name = name;
              this.surname = surname;
              this.phone = phone;
              this.iin = iin;
              this.ordered = ordered;
              this.amount = amount;
           },
           select_roof(type) {
             this.roof = type;
           },
           open_order(etaj,kvartira,podezd,name,surname,phone,iin,ordered,amount) {
              this.show_modal = !this.show_modal;

              this.etaj = etaj;
              this.kvartira = kvartira;
              this.podezd = podezd;
              this.name = name;
              this.surname = surname;
              this.phone = phone;
              this.iin = iin;
              this.ordered = ordered;
              this.amount = amount;
           },
           hide_modal(type) {
             if(type==1) {

              this.show_modal = false;
             }if(type==2) {
                
              this.edit_modal = false; 
             }
             else {
              this.see_modal = false; 
             }
           },
           get_profile() {
             this.$http.post('user/me',
             {},
              {
                headers: {
                  'Authorization': 'Bearer '+localStorage.getItem('access_token')
                }
              })
              .then(res => {

                
                  this.user_name = res.data.name;
                  this.role = res.data.roles[0].id;
              })
              .catch(errors => {
                  consol.log('Ошибка ' + error.response.data.errors);
              });
           },
           get_etaj(etaj) {
              this.loader_kaspi = true;
              this.current_etaj = etaj;
         
              this.$http.get('user/apartment/get?etaj='+etaj,
              {
                headers: {
                  'Authorization': 'Bearer '+localStorage.getItem('access_token')
                }
              })
              .then(res => {
             
                  this.etaj_info = res.data;
                  this.loader_kaspi = false;
              })
              .catch(errors => {
                  consol.log('Ошибка ' + error.response.data.errors);
              });
           },
           edit_order() {
              let obj = {
                    etaj: this.etaj,
                    kvartira: this.kvartira,
                    podezd:this.podezd,
                    phone: this.phone,
                    iin: this.iin,
                    name: this.name,
                    surname: this.surname,
                    amount: this.amount,
                    ordered: this.ordered
              };

          
              
              this.$http.post('user/apartment/edit',
               obj,
              {
                headers: {
                  'Authorization': 'Bearer '+localStorage.getItem('access_token')
                }
              }, 
              )
              .then(res => {
           
                  this.etaj = "";
                  this.kvartira = "";
                  this.podezd = "";

                  this.phone = "";
                  this.iin = "";
                  this.name = "";
                  this.surname = "";
                  this.amount = "";
                  this.ordered = "";

                  this.get_etaj(this.current_etaj);

                  this.show_modal = false;
                  this.edit_modal = false;
              })
              .catch(errors => {
                  consol.log('Ошибка ' + error.response.data.errors);
              })
           },
           send_order() {
             this.loader_kaspi = true;
              let obj = {
                    etaj: this.etaj,
                    kvartira: this.kvartira,
                    podezd:this.podezd,
                    phone: this.phone,
                    iin: this.iin,
                    name: this.name,
                    surname: this.surname,
                    amount: this.amount,
                    ordered: true
              };

       
               this.$http.post('user/apartment/order',
               obj,
              {
                headers: {
                  'Authorization': 'Bearer '+localStorage.getItem('access_token')
                }
              }, 
              )
              .then(res => {
           
                  this.etaj = "";
                  this.kvartira = "";
                  this.podezd = "";

                  this.get_etaj(this.current_etaj);
                  this.loader_kaspi = false;

                  this.show_modal = false;
              })
              .catch(errors => {
                  consol.log('Ошибка ' + error.response.data.errors);
              })

           }
        }
    }
</script>

<style scoped lang="scss"> 
.houst__etaj__active {
  background-color: red !important;
}
   .house__ordered {
     font-size: 12px !important;
   }

.house__ordered__not {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  span {
    font-size: 16px;
  }
  input {
    width: 40px;
    padding: 15px;

  }
}
.house__loader {
  img {
    width: 50px;
    height: 50px;
  }
}
.house__modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:100%;
  background: rgba(0, 0, 0, 0.8);

  position: fixed;
  z-index: 20;
  ::placeholder {
    color: black;
  }
  .fa-times {
    position:absolute;
    right: 500px;
    top: 140px;
    font-size: 40px;
    color: white;
    cursor: pointer;
  }
  .house__modal__inner {
    width: 300px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    .fa-times-circle {
      position: absolute;
      right: 10px;
      top: 10px;
    }
     @media only screen and (max-width: 764px) {
        width: 80%;
     
    }
    position: absolute;
    .house__value {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      align-self: flex-start;
      p:nth-child(1) {
        margin-right: 10px;
      }
      p:nth-child(2) {
        font-size: 22px;
        font-weight: bold;
        color:cornflowerblue;
      }
    }
    .house__title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
      text-transform: uppercase;
    }
    input {
      padding: 10px;
      width: 270px;
      margin-bottom: 10px;
       @media only screen and (max-width: 764px) {
        width: 220px;
     
      }
    }
    .house__submit {
      border: none;
      width: 290px;
      padding: 10px;
      background-color: cornflowerblue;
      text-align:center;

      text-transform: uppercase;
      @media only screen and (max-width: 764px) {
        width: 250px;
     
      }
      p {
        color: white;
      }
    } 
  }

}
.pr__row {
  display: flex;
  flex-direction:row;
}
.pr__row__c {
  align-items:center;
}

.pr__column{
  display: flex;
  flex-direction :column;
}
.pr__column__c {
  align-items:center;
}

.house__header {
  height: 80px;
  background-color: red;
   display: flex;
  flex-direction:row;
  align-items: center;

  justify-content: space-between;
    .main__logo {
       
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;



        img {
            width: 40px;
            height: 40px;
        }
        p {
            color: white;
            margin-left: 5px;
            line-height: 1.2;
        }
    }
    .house__person {
      margin-right: 20px;
      .house__user {
        margin-bottom: 10px;
      }
      .house__logout {
        border-bottom: 1px solid white;
      }
      p {
        color: white;
        cursor: pointer;
      }
   

    }
      .house__person:hover {
      border-bottom: 2px solid white;
    } 
}

.house__select__etaj {
    display: none;
    padding: 20px;
    align-self: center;
}
.house__etajes {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  margin-top: 60px;
  overflow-x:auto;
   @media only screen and (max-width: 764px) {
      width: 90%;
      align-self: center;
      padding: 0;
    }
  .house__etaj {
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 200px;
    padding: 20px;
  
    background-color:cornflowerblue;

    p {
      color: white;
    }
    @media only screen and (max-width: 764px) {
      padding: 10px;
    }
  } 
}
.house {
  display: flex;
  flex-direction: column;
  align-items: center;
    @media only screen and (max-width: 764px) {
  
        width: 100%;
    }
  .house__current {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 26px;
  }
  .house__row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items:center;
    margin-right: 20px;
    @media only screen and (max-width: 764px) {
        flex-direction: column;
        width: 100%;
    }
  }
}
 .house__edit {
     font-size: 12px !important;
     cursor: pointer;
  }
 .house__block {
   display: flex;
   flex-direction: row;
   margin-bottom: 40px;
   margin-right: 5px;
   position: relative;
     @media only screen and (max-width: 764px) {
        justify-content: center;
        text-align: center;
     
    }
  
   .house__podezd {
     position: absolute;
     bottom: -50px;
     right: 180px;
     font-weight: bold;
     font-size: 28px;
      @media only screen and (max-width: 764px) {
        margin-bottom: 20px;
    }
   }
   .house__c {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     p {
       font-size: 24px;
       color: white;
     }
   }
   .house__column {
     display: flex;
     flex-direction: column;
   }
   .house__third {
     height: 400px;
     width: 150px;
     background-color: #367e8f;
      @media only screen and (max-width: 764px) {
        width: 100px;
      }
   }
   .house__first {
     height: 200px;
     width: 150px;
     background-color: #a9a917;
      @media only screen and (max-width: 764px) {
        width: 100px;
      }
   }
   .house__second {
     height: 300px;
     width: 150px;
     background-color: #007800;
      @media only screen and (max-width: 764px) {
        width: 100px;
      }
   }
   .house__type {
     margin-bottom: 10px;
   }
    .house__order__green {
      background-color: #379e37;
      padding: 8px 4px;
 
      display:flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 10px;
      cursor: pointer;
      p {
        font-size: 14px;
      }
      i {
        margin-right: 5px;
        color: white;
        font-size: 14px;
      }

    }
   .house__order {
      cursor: pointer;
      padding: 10px;
   
      width: 110px;
      text-align: center;
      background-color:cornflowerblue;
      p {
        font-size: 12px;
        color:white;
      }
      @media only screen and (max-width: 764px) {
        width: 80px;
      }
   }
 }
</style>