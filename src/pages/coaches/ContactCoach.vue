<template>
  <div class="coach_form">
    <form action="" @submit.prevent="submitForm" required>
      <div>
        <label for="">Full Name</label>
        <input type="text" required v-model="nameInput" />
      </div>
      <div>
        <label for="">Email</label>
        <input type="email" name="" id="" required v-model="emailInput" />
      </div>
      <div>
        <label for="">Message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          required
          v-model="messageInput"
        ></textarea>
      </div>
      <button class="btn">submit</button>
    </form>
  </div>
</template>
<script>
import id from '../../store/id.js';
export default {
  data() {
    return {
      nameInput: '',
      messageInput: '',
      emailInput: ''
    };
  },
  methods: {
    submitForm() {
      const contactDetails = {
        id: id(),
        name: this.nameInput,
        message: this.messageInput,
        email: this.emailInput,
        coachId: this.$route.params.id
      };

      this.$store.dispatch('requests/uploadRequest', contactDetails);

      this.emailInput = '';
      this.messageInput = '';
      this.nameInput = '';

      setTimeout(() => {
        this.$router.replace('/coaches');
      }, 2000);
    }
  }
};
</script>
<style scoped>
label,
input {
  display: block;
  width: 100%;
}
textarea {
  width: 100%;
}
</style>
