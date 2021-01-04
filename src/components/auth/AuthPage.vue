<template>
    <div class="mainer">
        <div class="main__logo">
                <img src="../../assets/images/kaspigroup/apartments.png" alt="">
                <div class="main__column__l">
                    <p>CK KASPI</p>
                    <p>GROUP</p>
                </div>
                
        </div>
        <div class="main__red">
        </div>
          <div class="language-div">
                    <div class="selector">
                        <img :src="link" alt="">
                        <select v-model="$i18n.locale"  @change="onChange" >
                            <option v-for="(key, value) in object"  :key="`Lang${value}`" class="op" :value="value"><p>{{ key }} </p></option>
                        </select>
                    </div>
        </div>
        <div  class="main__column__centered" style="width: 100%; z-index: 20" v-if="current_slide==1">
            
            
            <div class="main__text">
             <p class="main__jiloi">{{$t("message.main_title")}}</p>

            </div>
            <div class="mainer-second" >

                <div class="center home" style="z-index: 20">
                    <div class="left-div" style="z-index: 30">
                        <h1>{{$t("message.title1")}}</h1>
                        <h1 class="mainer__right" >{{$t("message.title2")}}</h1>
                        <a  href="https://otau.org" target='_blank'>CK KASPI GROUP</a>
                    </div>
                    <div class="right-div">
                        <!-- <img src="../../assets/images/otau_logo.png" class="logo"> -->
                        <p style="white-space:nowrap; color: white;">{{$t("message.send_request")}}</p>
                        <router-view></router-view>
                    </div>
                  
                </div>
              
            </div>
            <div class="main__text">
                <p>
                  {{$t("message.adver_text_1")}}
                </p>
                <p>
                {{$t("message.adver_text_2")}}
                </p>
            </div>

          

        
            
        </div>
        <div v-if="current_slide==2">
            <div class="main__images__dom">

                <div class="main__images__row" v-if="current_image==1">
                    <div class="main__column">
                        <p class="gallery__title">Расположение и окружение</p>

                       
                        <img class=" main__image__main"  src="../../assets/images/kaspigroup/group_1.jpeg">
                        <div class="main__pluses">
                            
                            
                                <div>
                                    <div class="pluses__row">
                                        <i class="fas fa-building"></i>
                                        <p>Жилые дома</p>
                                    </div>
                                    <div class="pluses__row">
                                        <i class="fas fa-child"></i>
                                        <p>Детский сад</p>
                                    </div>
                                    <div class="pluses__row">
                                        <i class="fas fa-parking"></i>
                                        <p>Парковка</p>
                                    </div>
                                    <div class="pluses__row">
                                        <i class="fas fa-archway"></i>
                                        <p>Парк</p>
                                    </div>
                                </div>
                         
                          
                            <div>
                                <div class="pluses__row">
                                    <i class="fab fa-xbox"></i>
                                    <p>Детская площадка</p>
                                </div>
                                <div class="pluses__row">
                                    <i class="fas fa-store"></i>
                                    <p>Супермаркет</p>
                                </div>
                                <div class="pluses__row">
                                   
                                    <i class="fas fa-hospital"></i>
                                     <p>Больница</p>
                                </div>
                                <div class="pluses__row">
                                    <i class="fas fa-futbol"></i>
                                    <p>Спорткомплекс</p>
                                </div>
                             
                            </div>
                        
                        </div>
                    </div>
                    
                </div>
                <div class="main__images__row" v-if="current_image==2">
                    <p class="main__images__title">Полюбуйтесь нами</p>
                    <div class="main__images">
                        <img class="main__image main__image__first"  src="../../assets/images/kaspigroup/group_1.jpeg">
                        <img class="main__image main__image__second"  src="../../assets/images/kaspigroup/group_2.jpeg">
                        <img class="main__image main__image__third"  src="../../assets/images/kaspigroup/group_3.jpeg">  
                        <img class="main__image main__image__fourth"  src="../../assets/images/kaspigroup/group_4.jpeg">  

                    </div>
                    
                    <!-- <div class="main__images__description" v-if="current_image==1">
                        <p>
                            ЖК «Каспий» в Актобе находится в микрорайоне Батыс-2.
                            Недалеко от комплекса находятся промышленные предприятия
                            Район имеет самую развитую инфраструктуру. 
                            В нескольких сотнях метров от ЖК имеются многочисленные магазины, супермаркет, кафе, рестораны, детский образовательный центр «Акбобек», АЗС, автоцентры. В километре от дома находится Актюбинский Региональный университет им. К.Жубанова, Автодорожный колледж, колледж связи, физико-математическая школа-интернат.
                            Во дворе детская площадка, парковочная зона, территория охраняемая.
                            Этажность: 5 этажей
                            Высота потолков: 3.2 м
                            Тип дома: кирпичный
                            3 подъезда.
                        </p> 
                    </div>
                    <div class="main__images__description" v-if="current_image==2">
                        <p>
                            1 комнатная квартира: 55.5кв.м
                        </p> 
                        <p>2 комнатная квартира: 91.08кв.м</p>
                        <p>3 комнатная квартира: 116.6кв.м</p>
                        <p> Имеется лифт. (Белоруссия)
                            Срок сдачи II квартал 2021 г.</p>
                    </div>   
                     -->
                </div>

                <div class="main__images__row main__column" v-if="current_image==3">
             
                    <p class="main__images__title main__mb">Планировка здания</p>
                    
                   
                    <div class="main__row main__sxema">
                        <img class="main__plan" src="../../assets/images/kaspigroup/plan.png" alt="">
                        
                        <div class=" main__etajes">
                            <div class="main__column main__plan__etaj"> 
                                <p>1 комнатная квартира</p>
                                <p>55.5кв.м</p>
                            </div>
                            <div class="main__column main__plan__etaj">
                                <p>2 комнатная квартира</p>
                                <p>91.08кв.м</p>
                            </div>
                            <div class=" main__column main__plan__etaj">
                                <p>3 комнатная квартира</p>
                                <p>116.6кв.м</p>
                            </div>
                            <div class=" main__column main__plan__etaj">
                                <p>Имеется лифт. (Белоруссия)</p>
                                <p>Срок сдачи II квартал 2021 г.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
               
                <div class="main__actions">
                    <div class="main__action" @click="change_image(1)" v-bind:class="{active_color: current_image==1}">
                        <div class="main__level__inside"></div>
                    </div>
                    <div class="main__action" @click="change_image(2)" v-bind:class="{active_color: current_image==2}">
                        <div class="main__level__inside"></div>
                    </div>
                    <div  class="main__action" @click="change_image(3)" v-bind:class="{active_color: current_image==3}">
                        <div class="main__level__inside"></div>
                    </div>
                    <!-- <div  class="main__action" @click="change_image(4)" v-bind:class="{active_color: current_image==4}">
                        <div class="main__level__inside"></div>
                    </div> -->
                </div>
            </div>
        </div>
         <div v-if="current_slide==3" class="third__level">
            <p class="third__level__title">Схема работы</p>
            
            <div class="buy__levels main__row__centered main__mb">
                <div class="buy__level main__row__centered">
                    <p class="">1</p>
                    <p>Звонок</p>
                </div>  
                <div class="buy__level main__row__centered">
                    <p>2</p>
                    <p>Обсуждение потребностей</p>
                </div>
                <div class="buy__level main__row__centered">
                    <p>3</p>
                    <p>Подбор оптимальной квартиры</p>
                </div> 
                <div class="buy__level main__row__centered">
                    <p>4</p>
                    <p>Подписание договора</p>
                </div> 
                <div class="buy__level main__row__centered">
                    <p>5</p>
                    <p>Ожидание окончания строительства</p>
                </div>
                <div class="buy__level main__row__centered">
                    <p>6</p>
                    <p>Завершение финансовых договоров</p>
                </div> 
            </div>
            <div class="third__level__row main__row">
                <div class="third__level__contacts">
                    <p class="contacts__title">Контакты</p>
                    <p class="contacts__mintitle">Офис продаж:</p>

                    <div class="contacts__contact main__column">
                        <p class="contacts__bold">Номер телефона:</p>
                        <p>+ 7 700 362 0377</p>
                    </div>
                    <div class="contacts__contact main__column">
                        <p class="contacts__bold">Адрес:</p>
                        <p class="contacts__loc">г. Актобе</p>
                        <p class="contacts__loc">ул. Газиза Жубанова 3Ж</p>
                        <p class="contacts__loc">Бизнес центр «AIZHAN»</p>
                    </div>
                    <div class="contacts__contact main__column">
                        <p class="contacts__bold">Почта:</p>
                        <p>ck.aktobe.group@gmail.com</p>
                    </div>
                    

                </div>
                <form  @submit.prevent="confirmation" class="third__level__feed main__column">
                    <p class="contacts__title">Остались вопросы?</p>
                    <p class="contacts__mintitle">Введите ваши данные и наш менеджер</p>
                    <p class="contacts__mintitle">перезвонит вам в течении 15 минут</p>
                    
                    <input type="text" v-model="login" placeholder="Имя" required>
                    <!-- <input type="text" placeholder="Электронная почта"> -->
                    <input type="text" v-mask="mask" placeholder="+7 xxx xx xx" v-model="phone" required>
                    
                    <button class="third__level__submit" type="submit" >Оставить заявку</button>
                </form>
            </div>
      
        </div>
          <div class="main__links">
              <a href="https://wa.me/+7 700 362 0377" target="_blank"><i class="fab fa-telegram"></i></a>
              <a href="" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="https://wa.me/+7 700 362 0377" target="_blank"><i class="fab fa-whatsapp"></i></a>
           
                
                
            </div>
        <div class="main__levels">
                <div class="main__level" @click="change_level(1)" v-bind:class="{active_color: current_slide==1}">
                    <div class="main__level__inside"></div>
                </div>
                <div class="main__level" @click="change_level(2)" v-bind:class="{active_color: current_slide==2}">
                    <div class="main__level__inside"></div>
                </div>
                <div  class="main__level" @click="change_level(3)" v-bind:class="{active_color: current_slide==3}">
                    <div class="main__level__inside"></div>
                </div>
        </div>


     

     
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/v-mask/dist/v-mask.min.js"></script>

    <script>
    export default {
    name: 'AccountPage' ,
        data() {
            return {
                 mask: ['+',/\d/,'(', /\d/, /\d/, /\d/, ') ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
                 login: '',
                 phone:'',
                  current_image: 1,
                  current_slide: 1,
                  object: {
                    ru: 'RU',
                    kaz: 'KAZ',
                    en: 'USA',
                  },
                  languages: {
                    ru: require('../../assets/images/ru.png'),
                    kaz: require('../../assets/images/kaz.png'),
                    en: require('../../assets/images/en.png'),
                  },
                  link: require('../../assets/images/kaz.png')
            }
        },
        components: {
        },
        methods: {
            confirmation() {
                let obj = {
                    name: this.login,
                    phone: this.phone,
                };
       
                this.$http.post('guest/send/message', obj)
                .then(res => {
                        this.$alert("Наш менеджер перезвонит вам в течении 15 минут");
                })
                .catch(errors => {
                    consol.log('Ошибка ' + error.response.data.errors);
            
                });
            },
            change_image(level) {
                this.current_image = level;
            },
            change_level(level) {
                this.current_slide = level;
            },
            onChange:function(event){
                this.link = this.languages[event.target.value];
            },
            slide_to_right(){
                
                if(this.current_slide>=1 && this.current_slide<=3) {
                    this.current_slide=this.current_slide+1;
                   
                }
                else {
                    return false;
                }
            },
            slide_to_left(){
          
                if(this.current_slide>=1 && this.current_slide<=3) {
                    this.current_slide=this.current_slide-1;
                }
                else {
                    return false;
                }
            
            }
        },
    }
    </script>



    <style scoped lang="scss"> 
                .main__mb {
                    margin-bottom: 20px;
                }
                p {
                    margin: 0;
                    padding: 0;
                }
                .main__column {
                    display: flex;
                    flex-direction: column; 
                }
                .main__row {
                    display: flex;
                    flex-direction: row; 
                }
           
                .main__pluses {
                    display: flex;
                    flex-direction: row;
                    background-color: #e9eff8;
                    z-index: 30;
                    padding: 20px;
                    border-radius: 10px;
                    width: 400px; 
                    align-self: flex-end;
                    position: absolute;  
                    bottom: 0px;
                    .pluses__row {
                        margin-right: 40px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-bottom: 10px;
                        p  {
                            font-size: 14px;
                            white-space: nowrap;
                              color:#293c79;
                        }
                        i {
                            width: 20px;
                            height:20px;
                            font-size: 22px;
                            margin-right: 20px;
                            color:#293c79;
                        }
                    }
                }
                .gallery__title {
                    color: white;
                    z-index: 20;
                    font-size: 35px;
                    font-weight: bold;
                    margin-bottom: 20px;
                   
                }
                .main__image__main {
                    z-index: 20;
                    width: 1000px;
                    height: 500px;
                 
                    border-radius: 20px;

                  
                }
           
                .main__column__centered {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .main__row__centered {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                .buy__levels__title {
                    z-index: 999;
                    font-size: 40px;
                    color: white;
                }
                .third__level {
                    z-index: 20;
                    .third__level__title {
                        font-size: 40px;
                        margin-bottom: 10px;
                        color: white;
                        font-weight: bold;
                   
                    }
                    .buy__levels {
                    z-index: 20;
                        .buy__level {
                            width: 150px;
                            z-index: 20;
                            border-radius: 3px;
                            background-color: #293c79;
                            padding: 10px 25px;
                            margin: 0 7px;
                            p:nth-child(1) {
                                margin-right: 5px;
                                z-index: 20;
                                font-size: 75px;
                                font-weight: bold;
                                color: white;
                            }
                            p:nth-child(2) {
                                color: white;
                            }   
                            
                        }
                    }
                }
      

                .main__column__l {
                    display: flex;
                    flex-direction: column;

                }
                .main__logo {
                    z-index: 20;
                    color: white;
                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    position: absolute;
                    left: 20px;
                    top: 20px;

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
                .main__images__dom {
                    display: flex;
                    flex-direction: column;
                    .main__images__title {
                        font-weight: bold;
                        font-size: 32px;
                        z-index: 20;
                        color: white;
                        
                    }
                    .main__etajes { 
                        
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                    
                    }
                    .main__images__row {
                        position: relative;
                        z-index: 20;
                        width: 1100px;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                        align-items: center;

                        .main__plan {
                            width: 710px;
                            align-self: center;
                            justify-self: center;
                            margin-right: 10px;
                           
                        }
                     
                        .main__plan__etaj {
                            width: 150px;
                            height: 150px;
                            margin: 10px;
                            border-radius: 5px;
                            padding: 10px;
                            background-color: #e9eff8;
                            
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            flex-direction: column-reverse;
                      

                            p:nth-child(2) {
                                font-weight: bold;
                                font-size: 20px;
                            }
                        }
                        .main__images__description {
                            margin-left: 40px;
                            width: 350px;
                            z-index: 999;
                            p {
                                font-size: 18px;
                                color: white;
                                font-weight: bold;
                            }
                        }
                        .main__image {
                            width: 500px;
                            z-index: 20;
                          
                            height: 250px;
                            border-radius: 20px;
                            margin: 10px;
                        }
                     
                     
                    
                   
                    }
            

                }
       
               
                .main__actions {
                    z-index: 20;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    align-self: center;
                    margin-top: 40px;
                  
                    .main__action {
                        cursor: pointer;
                        border-radius: 25px;
                        border-color: white;
                     
                        .main__level__inside {
                            width: 15px;
                            height: 15px;
                            border-radius: 7.5px;
                            
                            margin: 15px;
                            background-color:white;
              
                        }
                    }
                }
                .main__levels {
                    z-index: 20;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    align-self: center;
                    margin-top: 40px;
                    position: absolute;
                    
                    right: 20px;
                    @media only screen and (max-width: 765px) {
                        right: 5px;
                    }
                    .main__level {
                        
                        cursor: pointer;
                        border-radius: 25px;
                        @media only screen and (max-width: 764px) {
                            
                            border-radius: 20px;
                            right: 0;
                        }
                        .main__level__inside {
                            width: 15px;
                            height: 15px;
                            border-radius: 7.5px;
                            
                            margin: 15px;
                            background-color: white;
                            @media only screen and (max-width: 764px) {
                                width: 10px;
                                height: 10px;
                                border-radius: 5px;
                            }
                        }
                    }
                }

             
                
                .active_color {
                      border: 1px solid white;
                }
                .main__arrow {
                    z-index: 20;
                    position: absolute;
                    top: 320px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    width: 98%;

                    i {
                        color: white;
                        font-size: 80px;
                        cursor: pointer;
                    }
                }
                .img-input {
                    i {
                        color: red;
                        font-size: 12px;
                    }
                }
                .div-login {
                    input {
                        color: white;
                    }
                }
                .left-div {
                    h1 {
                        color: white;
                    }
                    a {
                        color: white;
                    }
                }
                .mainer-second {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }   
                .mainer__right {
                    text-align: right;
                }
                .language-div {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    z-index: 20;

                }
                .selector {
                    display: flex;
                    flex-direction: row;
                }
                .selector img {
                    position: fixed;
                    bottom: 0;
                    right: 0;
                    margin-right: 80px;
                    margin-bottom: 27px;
                }
                .language-div select {
                    margin: 20px;
                    padding: 5px;
                    color: white;
                    outline: none;
                    border:none;
                    font-size: 14px;
                    font-weight:bold;
                    align-self: flex-end;
                    position: fixed;
                    bottom: 0;
                    right: 0;
                    background-color: inherit;
                }
                .op {
                     background-color: white;
                     border:none !important;
                     font-size: 14px;
                     font-weight: bold;
                }
                .op:hover {
                    background-color: var(--auth-color);
                }
            
                  .main__text {
                        text-align: center;
                        z-index: 20;
                        .main__jiloi {
                            font-size: 40px;
                            text-transform: uppercase;
                            @media only screen and (max-width: 765px) {
                                font-size: 25px;
                            }
                        }
                        p {
                            color: white;
                           
                        }
                    }
                    .main__links {
                            z-index: 20;
                            font-size: 20px;
                            position:absolute;
                            bottom: 10px;
                        a {
                            text-decoration: none;
                          
                        }
                   
                            
                        i {
                            cursor: pointer;
                            margin-right: 10px;
                            font-size: 20px;
                            color: white;
                           
                        }
                    }
                form {
                    width: 100%;
                }
                .main__red {
                    height: 100vh;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    background-color: red;
                    z-index: 1;
                    opacity: 0.5;
                }
                .mainer {
                  
                    z-index: 20;
                    position: relative;
                    max-width: 192rem;
                    margin: 0 auto;
                    line-height: 1.6;
                    background-repeat: no-repeat;
                    background-position: 50%;
                    background-size: cover;
                    background: url(../../assets/images/bg.jpg);
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;     
                  
                }
                
                .home {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 760px;
                        @media only screen and (max-width: 765px) {
                            width: 100%;
                            flex-wrap: nowrap;
                            justify-content: space-around;
                        }
                }
                .left-div {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        align-items: flex-end;
                        letter-spacing: .2rem;
                        margin-right: 30px;
                         width: 100%;
                    @media only screen and (max-width: 765px) {
                        margin-right: 0;
                        width: 400px;
                        
                    }
                    @media only screen and (max-width: 655px) {
                        display: none;
                    }
                    h1 {
                            text-transform: uppercase;
                            font-size: 32px;
                            font-weight: lighter;
                            letter-spacing: .2rem;
                            text-shadow: var(--shadow-white);
                            @media only screen and (max-width: 764px) {
                                font-size: 27px;
                            }
                    }
                    a {
                            text-transform: uppercase;
                            font-size: 32px;
                            font-weight: lighter;
                            letter-spacing: .2rem;
                            text-shadow: var(--shadow-white);
                            color: white;
                            position: relative;
                            overflow: hidden;
                            text-decoration: none;
                            border:none;
                            text-decoration: none;
                            @media only screen and (max-width: 764px) {
                                font-size: 27px;
                            }
                    }
                    a:after {
                            content: "";
                            position: absolute;
                            z-index: -0.5;

                            left: 0;
                            right: 100%;
                            margin-top: 42px;
                            background: white;
                            height: 2px;
                            text-decoration: none;
                            border:none;
                            transition-property: left right;
                            transition-duration: 0.3s;
                            transition-timing-function: ease-out;
                    }
                    a:hover:after,
                    a:focus:after,
                    a:active:after {
                            border:none;
                            right: 0;
                    }
                    
                }

                .right-div {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    font-size: 1.5rem;
                    width: 300px;
                    background: rgba(255, 255, 255, 0.4);
                    padding: 20px 40px 20px 40px;
                    border-radius: 15px;
                    margin: 25px;
                    @media only screen and (max-width: 655px) {
                         width: 200px;
                        
                    }
                    @media only screen and (max-width: 765px) {
                        width: 200px;
                  
                    }

                }
               
                .right-div img {
                        width: 210px;
                        padding-bottom: 20px;
                    @media only screen and (max-width: 765px) {
                        width: 180px;
                    }
                    @media only screen and (max-width: 330px) {
                        width: 160px;
                    }
                    
                }

                .third__level__row {
                    width: 100%;
                    justify-content: center;
                    align-self: center;

                    .contacts__title {
                        font-size: 32px;
                        font-weight: bold;
                        color: white;
                      
                    }
                    .third__level__contacts {
                        margin: 0 50px;
                        border-radius: 10px;
                        width: 300px;
                        box-shadow: var(--main-box-shadow);
                        padding: 20px;
                        background-color: white;
                        p {
                            color: #384591;
                        }
                        
                        .contacts__loc {
                            line-height: 1.2;
                        }
                        .contacts__contact {
                            margin-bottom: 10px;
                        }
                        .contacts__title {
                            color:#384591;
                        }
                        .contacts__mintitle {
                            color:#384591;
                        }
                        .contacts__bold {
                            font-weight: bold;
                            margin-bottom: 2px;
                        }
                    }
                    .third__level__feed {
                        margin: 0 50px;
                        background-color: #384591;
                        border-radius: 10px;
                        width: 300px;
                        box-shadow: var(--main-box-shadow);
                        padding: 20px;
                         @media only screen and (max-width: 764px) {
                             width: 600px;
                         }
                        .contacts__mintitle {
                            line-height: 1;
                            color: white;

                          
                        }
                        input {
                            width: 70%;
                            margin-top: 20px;
                            padding: 15px;
                            border-radius: 22px;
                            outline: none;
                            border:none;
                        }
                        ::placeholder {
                            color: gray;
                        }
                        .third__level__submit {
                            cursor: pointer;
                            padding: 10px;
                            border-radius: 20px;
                            background-color: #f7e7af;
                            text-align: center;
                            color: #384591;
                            margin-top: 20px;
                            border:none;
                            width: 80%;
                        }
                    
                   
                    }

                }

     @media only screen and (max-width: 600px) {
        .buy__level  {
            p:nth-child(1) {
                font-size: 30px;
            }
        }
     
     }

    @media only screen and (max-width: 764px) {
        .third__level__contacts {
            margin-top: 20px !important;
        }
        .buy__level {
            height: 50px;
        }
        .buy__level  {
            p:nth-child(1) {
                font-size: 30px !important;
            }
        }
        .buy__level p:nth-child(2) {
            font-size: 12px !important;
        }
        .main__images__row {
            width: 100% !important;
        }
        .main__column {
            width: 100%;
        }
        .main__image__main {
            width: 90%;
            align-self: center;
            height: 350px;

        }
        .mainer {
            width: 100%;
        }
        .main__images__dom {
            width: 100%;
        }
        .gallery__title {
            font-size: 22px;
            width: 100%;
            margin-left: 20px;
        }
        .main__pluses {
            width: 40%;
            flex-direction: column;
            margin: 0 10px;
            margin-top:20px;
            right: 20px;
        }
        .main__images__row {
            width: 100%;
        }
       
        .main__images {
            width: 100%;
            display: flex;
            flex-direction: row;
            overflow-x: scroll;
            .main__image__fourth {
                width: 100%;
            }
            .main__image__second {
                  width: 100%;
            }
            .main__image__third {
                  width: 100%;
            }
            .main__image__first {
                  width: 100%;
            } 
            .main__image {
                width: 100%;
            }
        }
         .main__image {
            width: 100% !important;
        }

        .main__images__title {
            font-size: 22px !important;
            margin-left: 10px;
        }

        .third__level {
            width: 100%;
            .buy__levels {
            width: 100%;
            overflow-x: scroll;
            margin-top: 350px;
                .buy__level {
                    margin: 0;
                    width: 100%;
                    margin-right: 10px;
                    margin-left: 10px;
                }
            }
            .third__level__title {
                font-size: 22px !important;
                margin-left: 15px;
                margin-top: 80px;
            }

        }
   

        .buy__levels {
            margin-top: 150px;
        }
      
        .third__level__row  {
          
            flex-direction: column-reverse;
     
            width: 100%;
            align-items: center;
            overflow-y: scroll;
            .third__level__contacts {
                margin: 0;
                width: 85%;
                margin-bottom: 180px;
            }
            .third__level__feed {
                margin-bottom: 50px;
                width: 85%;
                margin: 0 !important;
                
            }
          

        }
        .main__column {
            width: 100%;
        }
        .mainer {
            height: none;
        }
        .main__red {
           
        }
        .main__levels {
            z-index: 50;
            border-color: white;
            .main__level {
                
                border-color: white;
                .main__level__inside {
                    background-color: white;
                }
            }
        }

        .main__links {
            width: 100%;
            text-align: center;
            background-color: red;
            position: fixed;
            bottom: 0;
            height: 50px;
            align-items: center;

        }

        .main__images__dom {
            .main__images__row  {
                .main__plan {
                    width: 100%;
                }
            }
            

        }
        .main__plan {
            width: 100%;
        }
        .main__sxema {
            flex-direction: column;
            align-items: center;
        }
        .main__etajes {
            width:100%;
            justify-content: center;
            flex-direction: row !important;
            overflow-x: scroll;
        }
        .main__images__title {
            font-size: 18px !important;
            margin-top: 20px;
        }
        .main__plan__etaj {
            width: 100px !important;
            height: 100px !important;
            align-self: center;
            p {
                font-size: 14px !important;
            }
        }

        .language-div {
            z-index: 50;
         
            bottom: 100px;
        }
      
    } 
    </style>
