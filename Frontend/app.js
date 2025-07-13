import { createApp } from 'vue';

const app = createApp({
  data() {
    return {
      message: '¡Hola, Vue desde Mi-Web!',
      comments: {
        video: {},
        audio: {}
      },
      newComment: {
        text: '',
        author: '',
        email: ''
      },
      user: null
    };
  },
  methods: {
    sanitizeText(text) {
      return text
        .trim()
        .replace(/[<>]/g, '')
        .slice(0, 500);
    },

    async addComment(mediaType, mediaId) {
      if (!this.user) {
        alert('Por favor, inicia sesión para comentar');
        return;
      }

      if (!this.newComment.text || this.newComment.text.length < 3) {
        alert('El comentario debe tener al menos 3 caracteres');
        return;
      }

      const comment = {
        id: Date.now(),
        text: this.sanitizeText(this.newComment.text),
        author: this.user.name,
        userId: this.user.id,
        timestamp: new Date().toISOString(),
        mediaId: mediaId
      };

      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': this.getCsrfToken()
          },
          body: JSON.stringify(comment)
        });

        if (!response.ok) throw new Error('Error al guardar el comentario');

        if (!this.comments[mediaType][mediaId]) {
          this.comments[mediaType][mediaId] = [];
        }
        this.comments[mediaType][mediaId].push(comment);
        this.newComment.text = '';

      } catch (error) {
        console.error('Error:', error);
        alert('No se pudo guardar el comentario. Intente nuevamente.');
      }
    },

    async fetchComments(mediaType, mediaId) {
      try {
        const response = await fetch(`/api/comments/${mediaType}/${mediaId}`);
        const data = await response.json();
        this.comments[mediaType][mediaId] = data;
      } catch (error) {
        console.error('Error al cargar comentarios:', error);
      }
    }
  }
});

app.mount('#app');
