import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies'
import axios from 'axios';
import VModal from 'vue-js-modal';
import VueMask from 'v-mask';


import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

Vue.use(VueMask);
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

Vue.config.productionTip = false;
Vue.use(VueCookies);

Vue.use(VModal, { dialog: true });

Vue.prototype.$http = axios.create({
  baseURL: 'https://newapi.ck-kaspi-group.info/api/v1',
});


const messages = {
  en: {
    message: {

      adver_text_1: "You can buy an apartment in the residential complex «Kaspi» in a 1-2-3-room layout",
      adver_text_2: "with an area of 55 to 116 square meters and ceilings of 3.2 meters.",
      password: 'Password',
      main_title: "HOUSING STOCK",
      send_request: "Leave a request",
      title1: 'Invest',
      title2: 'in the future',
      sign_in: 'Submit',
      forgot_pass: 'Did you forget your password?',
      registration:'Registration',
      name: 'Name',
      surname: 'Surname',
      date: 'DD.MM.YYYY',
      gender: 'Gender',
      male: 'Male',
      female: 'Female',
      confirmation: 'Confirmation',
      next: 'Next',
      registration: 'Registration',
      empty_line: 'Fill this field',
      agreement: 'By clicking the "Registration" button, you will accept the terms',
      agreement_link: 'User agreement',
      title_menu: 'Menu',
      title_profile: 'Profile',
      personal_page: 'Personal page',
      personal_info: 'Personal information',
      settings: 'Settings',
      ans_ques: 'Question and answer',
      logout: 'Logout',
      birthday: 'Birthday',
      phone: 'Phone',
      country: 'Country',
      nickname: 'Nickname',
      address: 'Address',
      index: 'Index',
      region: 'Region',
      city: 'City',
      information: 'Show detailed information',
      photo: 'Photo',
      news: 'News',
      add_news: 'Load more',
      current_password: 'Current password',
      new_password: 'New password',
      change: 'Change',
      email_error: 'Please enter a valid email address',
      email_empty: 'Enter your email',
      locale: 'en'


    }
  },
  ru: {
    message: {
      adver_text_1: "Купить квартиру в жилом комплексе «Каспий» можно в 1-2-3-комнатной планировке",
      adver_text_2:"площадью от 55 до 116 квадратных метров и с потолками 3.2 метра.",
      send_request: "Оставить заявку",
      main_title: "ЖИЛОЙ ФОНД",
      password: 'Пароль',
      title1: 'Инвестируй',
      title2: 'в будущее',
      sign_in: 'Оставить заявку',
      forgot_pass: 'Забыли пароль?',
      registration:'Регистрация',
      name: 'Имя',
      surname: 'Фамилия',
      date: 'ДД.ММ.ГГГГ',
      gender: 'Пол',
      male: 'Женский',
      female: 'Мужской',
      confirmation: 'Подтверждение',
      next: 'Далее',
      registration: 'Регистрация',
      empty_line: 'Заполните это поле',
      agreement: 'Нажимая кнопку «Зарегистрироваться», вы принимаете условия',
      agreement_link: 'Пользовательского соглашения',
      title_menu: 'Меню',
      title_profile: 'Профиль',
      personal_page: 'Личная страница',
      personal_info: 'Личные данные',
      settings: 'Настройки',
      ans_ques: 'Вопросы и ответы',
      logout: 'Выйти',
      birthday: 'День рождения',
      phone: 'Телефон',
      country: 'Страна',
      nickname: 'Псевдоним',
      address: 'Адрес',
      index: 'Индекс',
      region: 'Область',
      city: 'Город',
      information: 'Показать подробную информацию',
      photo: 'Фотографии',
      news: 'Новости',
      add_news: 'Загрузить еще',
      current_password: 'Текущий пароль',
      new_password: 'Новый пароль',
      change: 'Изменить',
      email_error: 'Please enter a valid email address',
      email_empty: 'Enter your email',
      locale: 'ru'
      
      
    }
  },
  kaz: {
    message: {
  
      adver_text_1: "«Каспий» тұрғын үй кешенінен пәтерді 1-2-3 бөлме көлемінде сатып алуға болады",
      adver_text_2: "ауданы 55-тен 116 шаршы метрге дейін және төбелері 3.2 метр.",
      send_request: "Өтінім қалдыру",
      main_title: "тұрғын үй қоры",
      password: 'Құпия сөз',
      title1: 'Болашаққа ',
      title2: 'инвестиция жасаңыз',
      sign_in: 'Енгізу',
      forgot_pass: 'Құпия сөзді ұмыттыңызба?',
      registration:'Тіркелу',
      name: 'Аты',
      surname: 'Тегі',
      date: 'КК.АА.ЖЖЖЖ',
      gender: 'Жынысы',
      male: 'Ер',
      female: 'Әйел',
      confirmation: 'Растау',
      next: 'Жалғастыру',
      registration: 'Тіркелу',
      empty_line: 'Бұл жолды толтырыңыз',
      agreement: '«Тіркелу» батырмасын басу арқылы сіз шарттарды қабылдайсыз',
      agreement_link: 'Пайдаланушы келісімі',
      title_menu: 'Мәзір',
      title_profile: 'Профиль',
      personal_page: 'Жеке парақша',
      personal_info: 'Жеке мәлімет',
      settings: 'Параметрлері',
      ans_ques: 'Сұрақ және жауап',
      logout: 'Шығу',
      birthday: 'Туылған күні',
      phone: 'Ұялы телефон',
      country: 'Ел',
      nickname: 'Лақап аты',
      address: 'Мекен-жайы',
      index: 'Индекс',
      region: 'Аймақ',
      city: 'Қала',
      information: 'Толық ақпаратты көрсетіңіз',
      photo: 'Суреттер',
      news: 'Жаңалықтар',
      add_news: 'Жалғастыру',
      current_password: 'Ағымдағы құпия сөз',
      new_password: 'Жаңа құпия сөз',
      change: 'Өзгерту',
      email_error: 'Жарамды электрондық поштаны енгізіңіз',
      email_empty: 'Электрондық поштаңызды енгізіңіз',
      locale: 'kaz'

    }
  }
}


const i18n = new VueI18n({
  locale: 'kaz', // set locale
  messages, // set locale messages
})

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
