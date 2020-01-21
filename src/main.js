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
Vue.use(VueNativeSock, 'ws://memepoly-backend.herokuapp.com/websocket', {
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
  apiKey: "AIzaSyAbBICjY9A2kqYPp2bCwA1u3xM4DNh4-Rc",
  authDomain: "monopoly-b36b7.firebaseapp.com",
  databaseURL: "https://monopoly-b36b7.firebaseio.com",
  projectId: "monopoly-b36b7",
  storageBucket: "monopoly-b36b7.appspot.com",
  messagingSenderId: "926263902416",
  appId: "1:926263902416:web:8d5839e8da382baff39ed5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
