import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueNativeSock from 'vue-native-websocket'
import UUID from 'vue-uuid';
import Rules from './components/Rules'
import Game from './components/Game'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './registerServiceWorker'
import Login from "@/components/Login";
import Register from "@/components/Register";
import Dashboard from "@/components/Dashboard";
import store from "./store";
import * as firebase from "firebase";


Vue.config.productionTip = false;

Vue.use(UUID);
Vue.use(VueRouter);
Vue.use(VueNativeSock, 'ws://localhost:9000/websocket', {
    reconnection: true, // (Boolean) whether to reconnect automatically (false)
    reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
    reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
});
Vue.use(Toast, {});


const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Rules},

        {
            path: '/game', name: "Game", component: Game, beforeEnter: (to, from, next) => {
                if (store.getters.loggedIn === false) {
                    next("/login");
                } else {
                    next()
                }
            }
        },
        {path: '/rules', name: 'Rules', component: Rules},
        {path: '/login', name: 'Login', component: Login},
        {path: '/register', name: 'Register', component: Register},
        {path: '/dashboard', name: 'Dashboard', component: Dashboard}
    ]
});

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount('#app');


const firebaseConfig = {
  apiKey: "AIzaSyANMAoY-smVMDj5AJJGJYMD6_97FdmEtWM",
  authDomain: "htwg-webtech-rummy.firebaseapp.com",
  databaseURL: "https://htwg-webtech-rummy.firebaseio.com",
  projectId: "htwg-webtech-rummy",
  storageBucket: "htwg-webtech-rummy.appspot.com",
  messagingSenderId: "206658326580",
  appId: "1:206658326580:web:4e6a7faf153d80f0243a61"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
