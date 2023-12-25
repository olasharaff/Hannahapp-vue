import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/main.css";
import "primeicons/primeicons.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGooglePlay, faAppStoreIos, faWhatsapp, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


library.add(faGooglePlay, faAppStoreIos, faWhatsapp, faInstagram, faFacebook, faTwitter, faGlobe);
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
