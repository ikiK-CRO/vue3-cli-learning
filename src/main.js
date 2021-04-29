import { createApp } from 'vue'
import App from './App.vue'

//PRIMEVUE
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Menubar from "primevue/menubar";
import Toolbar from 'primevue/toolbar';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';



const app = createApp(App)

//PRIMEVUE
app.use(PrimeVue);
app.use(ToastService);
app.component('Toolbar', Toolbar);
app.component('Menubar', Menubar);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);


app.mount('#app')
