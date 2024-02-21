import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import axios from 'axios';

// axios.defaults.baseURL = 'http://127.0.0.1:5173/';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8083';



const app = createApp(App)

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//     next();
//   });

app.use(router)

app.mount('#app')
