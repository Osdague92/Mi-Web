import { createApp } from 'vue';

const app = createApp({
  data() {
    return {
      message: '¡Hola, Vue desde Mi-Web!'
    };
  }
});

app.mount('#app');
