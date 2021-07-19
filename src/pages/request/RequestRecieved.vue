<template>
  <div>
    <back-drop></back-drop>
    <div class="container">
      <div class="wrapper">
        <!-- <div v-if="!isLoading">
          <h1>No Coaching requests</h1>
        </div> -->
        <div v-if="isLoading" class="spiner">
          <p>pls wait...</p>
          <loading-spinner></loading-spinner>
        </div>
        <div class="errorTxt" v-if="isData">
          <h1>{{ error }}</h1>
          <button @click="fetchRequest">Refresh</button>
        </div>
        <div v-if="!validator">
          <h1>Coaching Requests</h1>
          <request-item
            v-for="request in requests"
            :key="request.id"
            :message="request.message"
            :email="request.email"
            :name="request.name"
          ></request-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
import BackDrop from '../../components/ui/BackDrop.vue';
export default {
  components: {
    RequestItem,
    BackDrop
  },
  data() {
    return {
      isLoading: false,
      isData: false,
      error: null
    };
  },
  computed: {
    requests() {
      return this.$store.getters['requests/requests'];
    },
    validator() {
      return this.$store.getters['requests/validator'];
    }
  },
  methods: {
    async fetchRequest() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
        this.isData = false;
      } catch (error) {
        this.error = error.message;
        this.isData = true;
      }
      this.isLoading = false;
    }
  },
  created() {
    this.fetchRequest();
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.wrapper {
  background-color: rgba(255, 255, 255, 0.877);
  padding: 2rem 0;
  border-radius: 0.5rem;
  max-width: 60%;
  min-height: 400px;
  margin: 0 auto;
  margin-top: -250px;
}
button {
  background-color: var(--vue-light-color);
}
@media (max-width: 900px) {
  .wrapper {
    width: 100%;
  }
}
</style>
