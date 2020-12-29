<!-- template -->
<template>
  <div class="main">
        <div class="header">
            <div class="header__menu">
                <router-link to="#">О нашем магазине</router-link>
                <router-link to="#">О доставке</router-link>
                <router-link to="#">Об оплате</router-link>
                <router-link to="#">Отзывы</router-link>
            </div>
            <div class="header__menu">
                <p class="header__purple">Перезвоните нам</p>
                <p class="header__purple">Задать вопрос</p>
                <div class="header__menu__last">
                    <p class="header__purple">8 888 8888</p>
                    <p class="header__gray">- по будням с 9:00 - 21:00</p>
                </div>
            </div>
        </div>

        <div class="main__row">
            <div class="main__actions">
                <p class="main__actions__title" @click="$router.push('/kenes')">КЕҢЕС</p>

                <div class="main__sale">
                    <div>
                        <p class="main__sale__title">Скидки</p>
                        <p class="main__sale__title">до 50%</p>
                        <i></i>
                        
                    </div>
                    <p class="main__sale__mini">Успей заказать по выгодной цене</p>

                    <div class="main__sale__button centered__row">
                        <i class="fas fa-cart-arrow-down"></i>
                        <p>Сделать заказ</p>
                    </div>
                </div>

             
            </div>

            <div class="main__block">
                <div class="main__block__header">
                    <div class="main__block__search">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Название или модель изделия">
                    </div>
                    <div>
                        <i></i>
                        <p></p>
                    </div>
                    <div>

                    </div>
                </div>

                <router-view></router-view>

                <div class="main__block__title">
                    <div class="main__block__round"></div>
                    <p>О нашем магазине</p>
                </div>

                <div class="">
                    <p class="main__block__description">Lorean ipnum
                        Lorean ipnumLorean ipnumLorean ipnumLorean ipnumLorean ipnumLorean ipnumLorean ipnum
                        Lorean ipnum
                        Lorean ipnum
                        Lorean ipnum
                        Lorean ipnum
                        Lorean ipnum
                        Lorean ipnum
                        Lorean ipnum
                        Lorean ipnum
                        Lorean ipnum
                        Lorean ipnum
                        Lorean ipnum
                        Lorean ipnum
                    </p>
                </div>

                <div class="main__block__title">
                    <div class="main__block__round"></div>
                    <p>Почему с нами работают?</p>
                </div>

                <div class="main__block__pluses">

                    <div class="main__block__plus center__column">
                        
                       
                        <div class="main__block__star center__row__g">
                            <i class="fas fa-star"></i>
                        </div>
                        <div>
                            <i class="fas fa-truck"></i>
                        </div>
                        <p class="plus__title">Бесплатная доставка до квартиры</p>
                        
                        <p class="plus__description">
                            Бесплатно выезжаем на обьект и замеряем параметры изделия
                        </p>
                    </div>

                    <div class="main__block__plus center__column">
                        
                        <div class="main__block__star center__row__g">
                            <i class="fas fa-star"></i>
                        </div>
                        <div>
                            <i class="fas fa-cubes"></i>
                        </div>
                        <p class="plus__title">Качественная фурнитура и компоненты</p>
                       
                        <p class="plus__description">
                            Идеальная фурнитура и компоненты для сборки
                        </p>
                    </div>
                    <div class="main__block__plus center__column">
                        
                        <div class="main__block__star center__row__g">
                            <i class="fas fa-star"></i>
                        </div>
                        <div>
                            <i class="fas fa-truck"></i>
                        </div>
                        <p class="plus__title">Бесплатная доставка до квартиры</p>
                        
                        <p class="plus__description">
                            Бесплатно выезжаем на обьект и замеряем параметры изделия
                        </p>
                    </div>
                    <div class="main__block__plus center__column">
                        <div class="main__block__star center__row__g">
                            <i class="fas fa-star"></i>
                        </div>
                         <div>
                            <i class="fas fa-cubes"></i>
                        </div>
                        <p class="plus__title">Качественная фурнитура и компоненты</p>
                        
                        <p class="plus__description">
                            Идеальная фурнитура и компоненты для сборки
                        </p>
                    </div>

                </div>



            </div>
        </div>

        <div class="footer">
            <div class="footer__first">
                <p class="footer__phone"></p>

                <div>
                    <p></p>
                    <p></p>
                </div>
                <div>
                    <p></p>
                    <p></p>
                </div>

                <p></p>

                <div>
                    <p></p>
                    <p></p>
                </div>

                <div>
                    <p></p>
                    <div>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </div>
            <div class="footer__first"></div>
            <div class="footer__first"></div>
            <div class="footer__first"></div>
        </div>
  </div>  
</template>

<!-- scripts -->
<script>
 
    export default {
        data() {
            return {
                amount: 0,
                orders:[],
                count: 0,
                all_count: 0,
                isActive: true
            }
        },
        mounted() {
           
         
        },
        methods: {

   
        }
    }
    
</script>

<style lang="scss">
    .product__order {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;
        padding: 10px;
        border-radius: 20px;
        width: 150px;
        justify-content: center;

        background-color: var(--main-kenes-blue);
        i {
            margin-right: 10px;
            font-size: 16px;
            color: white;
        }
        p {
            font-size: 14px;
            text-transform: uppercase;
            color: white;
        }
    }
    .product__order:hover {
        cursor: pointer;
        background-color: var(--main-kenes-blue-hover);
        color: white;
        
        p,i {
            color: white;
        }
    } 
    body {
        background-color: white !important;
    }
    p {
        padding: 0;
        margin: 0;
    }

    .center__row__g {
        display: flex;
        flex-direction: row;
        align-items: center; 
        justify-content: center;
    }
    .center__column__g {
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center;
    }
    .centered__row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .center__column {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .main {
        font-family: Lato;
        .header {
            padding: 10px 20px;
            display: flex;
            flex-direction: row;
            align-items: center;

            justify-content: space-between;
            border-bottom: 4px solid #fcfbfb;
            margin-bottom: 20px;

        .header__menu {
            display: flex;
            flex-direction: row;
            align-items: center;
            a {
                cursor: pointer;
                margin-right: 40px;
                text-decoration: none;
                border-bottom: 2px solid white;
            }
            a:hover {
                color: var(--main-kenes-text-color);
                border-bottom: 2px solid var(--main-kenes-text-color);
            }
            .header__purple {
                cursor: pointer;
                margin-right: 40px;
                text-decoration: none;
                border-bottom: 2px solid white;
            }
            .header__purple:hover {
                color: var(--main-kenes-text-color);
                border-bottom: 2px solid var(--main-kenes-text-color);
            }
            .header__gray {
                color: gray;
            }

        }
     
        }
        .main__row {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .main__actions {
                width: 28%;
                display: flex;
                flex-direction: column;
                align-items:center;

                .main__actions__title {
                    cursor: pointer;
                    font-size: 30px;
                    font-weight: 900;
                    margin-bottom: 20px;
                    align-self: center;
                }
                .main__sale {
                    margin: 0 20px;
                    width: 200px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 20px 30px;
                    height: 230px;
                    margin-bottom: 20px;
                    border-radius: 5px;
                    background-color: var(--main-kenes-text-color);
                    .main__sale__title {
                        color: white;
                        font-size: 32px;
                        margin-bottom: 20px;
                        font-weight: 700;
                        
                    }
                    .main__sale__button {
                        border-radius: 10px;
                        border:none;
                        outline: none;
                        padding: 10px 20px;
                        width: 120px;
                        background: #a7c23b;

                        i {
                            color: white;
                            margin-right: 4px;
                        }
                        p {
                            font-weight: 400;
                            font-size: 12px;
                            color: white;
                            text-transform: uppercase;
                        }
                    }
                    .main__sale__mini {
                        font-size: 12px;
                        color: white;
                    }
                }
            }

            .main__block {
                width: 70%;
                display: flex;
                flex-direction: column;
                .main__block__search {
                    border-radius: 10px;
                    background-color: #f5f5f5;
                    padding: 10px;
                    margin-bottom: 20px;
                    ::placeholder {
                        color: black;
                    }
                    i {
                        color: black;
                    }
                    input {
                        outline: none;
                        width: 250px;
                        padding: 10px;
                        border: none;
                        background-color: #f5f5f5;
                    }
                }
                .main__block__title {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 20px;
                    color: #333;
                    font-size: 28px;
                    font-weight: 400;
                    .main__block__round {
                        width: 16px;
                        height: 16px;
                        border-radius: 8px;
                        background-color: var(--main-kenes-blue);
                        margin-right: 10px;
                    }
                }
                .main__block__description {
                    font-size: 18px;
                    color: #ccc;
                    margin-bottom: 40px;
                }
                .main__block__categories {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    overflow-x: auto;
                    margin-bottom: 20px;

                    .main__block__arrow {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        i {
                            color: #333;
                        }
                    }
                    .main__block__category {
                        text-align: center;
                        width: 150px;
                        height: 120px;
                        margin: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                        border-radius: 5px;
                        background-color: #f5f5f5;
                    }
                }

                ///

                .main__block__products {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    
                    .main__block__product {
                        width: 250px;
                        height: 400px;
                        border-radius: 5px;
                        display: flex;
                        flex-direction: column;
                        background-color: #f5f5f5;
                        padding: 20px;
                        .product__item {
                            width: 90%;
                            align-self:center;
                        
                        }
                        .product__sale {
                                margin: 10px;
                                align-self: flex-end;
                                text-align: center;
                                
                                height: 20px;
                                padding: 10px;
                                border-radius: 10px;
                                background-color: var(--main-kenes-red);
                  
                                i {
                                    color: white;
                                }
                                p   {
                                    color: white;
                                }
                        }
                        .product__images {
                            cursor:pointer;
                            display: flex;
                            flex-direction: column;
                            
                            background-color: white;
                            width: 100%;
                            height: 250px;
                            border-radius: 10px;
                            margin-bottom: 20px;
                            position:relative;
                            
                            .product__levels {
                                
                                display: flex;
                                flex-direction: row;
                                align-self: center;
                                position: absolute;
                                bottom: 10px;
                                .product__level {
                                    width: 10px;
                                    height: 10px;
                                    border-radius: 5px;
                                    background-color: #f5f5f5;
                                    margin: 2px;
                                }
                                .product__level--active {
                                    background-color: #a5c137;
                                }
                            }

                        }  
                        .product__name {
                            font-size: 24px;
                            font-weight: 400;
                            margin-bottom: 5px;
                        }
                        .product__size {
                            font-size: 14px;
                            color: gray;
                            margin-bottom: 10px;
                        }
                       
                        .product__prices {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            .product__price {
                                margin-right: 10px;
                            }
                            .product__sale {

                            }
                        }
                    } 
                }

                .main__block__pluses {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .plus__title {
                        color: var(--main-kenes-blue);
                        font-size: 18px;
                        font-weight: 700;
                        margin-bottom: 20px;
                    }
                    .main__block__plus {
                        width: 200px;
                        border-radius: 10px;
                        padding: 20px;
                        background-color: #f7f6f7;
                        text-align: center;

                        .fa-truck,.fa-cubes {
                            font-size: 36px;
                            align-self: center;
                            margin-bottom: 20px;
                        }
                        
                        .main__block__star {
                            align-self: flex-start;
                            width: 30px;
                            height: 30px;
                            border-radius: 15px;
                            background-color: var(--main-kenes-blue);
                            margin-bottom: 40px;
                            .fa-star {
                                color: white;
                                font-size: 16px;
                            }
                        }
                    }
                }
            }

            
        }
    }
</style>

