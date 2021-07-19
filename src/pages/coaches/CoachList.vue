<template>
  <div class="wrapper">
    <error-modal
      :show="!!error"
      title="An error occurred while fetching coach"
      @close="handleError"
    >
      <h2>{{ error }}</h2>
      <p>
        Pls make sure internet connection is on.
      </p>
    </error-modal>
    <div class="container">
      <h1>Coaches</h1>
    </div>
    <coach-layout>
      <template #sidebar>
        <coach-filter
          @change-filter="filterCoach"
          class="sidebar"
        ></coach-filter>
      </template>
      <template #default>
        <div v-if="isLoading" class="spiner">
          <p>pls wait...</p>
          <loading-spinner></loading-spinner>
        </div>
        <div class="errorTxt" v-if="noData">
          <h1>
            Network Error!!
          </h1>
          <button @click="loadCoaches">Refresh</button>
        </div>
        <div class="coaches">
          <coach-item
            v-for="coach in coaches"
            :id="coach.id"
            :img="coach.img"
            :key="coach.id"
            :firstName="coach.firstName"
            :lastName="coach.lastName"
            :areas="coach.areas"
            :description="coach.description"
            :facebook="coach.facebook"
            :instagram="coach.instagram"
            :twitter="coach.twitter"
            :rate="coach.hourlyRate"
          ></coach-item>
        </div>
      </template>
    </coach-layout>
  </div>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachLayout from '../../components/layout/coachLayout.vue';

export default {
  components: {
    CoachFilter,
    CoachItem,
    CoachLayout
  },
  data() {
    return {
      error: null,
      noData: false,
      isLoading: false,
      mainFilter: null,
      Newfilters: {
        python: true,
        photoshop: true,
        javascript: true,
        ruby: true,
        php: true,
        SQL: true,
        vue: true,
        react: true,
        accounting: true,
        sales: true,
        gaming: true
      }
    };
  },
  computed: {
    coaches() {
      return !this.isLoading && this.$store.getters.coaches;
    },
    displayError() {
      return this.noData && this.coaches.length > 0;
    },
    filteredCoaches() {
      const coaches = this.$store.getters.coaches;
      return (
        !this.isLoading &&
        coaches.filter(coach => {
          if (this.Newfilters.python && coach.areas.includes('python')) {
            return true;
          }
          if (this.Newfilters.photoshop && coach.areas.includes('photoshop')) {
            return true;
          }
          if (
            this.Newfilters.javascript &&
            coach.areas.includes('javascript')
          ) {
            return true;
          }
          if (this.Newfilters.ruby && coach.areas.includes('ruby')) {
            return true;
          }
          if (this.Newfilters.php && coach.areas.includes('php')) {
            return true;
          }
          if (this.Newfilters.SQL && coach.areas.includes('SQL')) {
            return true;
          }
          if (this.Newfilters.vue && coach.areas.includes('vue')) {
            return true;
          }
          if (this.Newfilters.react && coach.areas.includes('react')) {
            return true;
          }
          if (
            this.Newfilters.accounting &&
            coach.areas.includes('accounting')
          ) {
            return true;
          }
          if (this.Newfilters.sales && coach.areas.includes('sales')) {
            return true;
          }
          if (this.Newfilters.gaming && coach.areas.includes('gaming')) {
            return true;
          }
          if (this.Newfilters.any && coach.areas.includes(String)) {
            return true;
          }
          return false;
        })
      );
    }
  },
  methods: {
    filterCoach(updatedFilter) {
      this.Newfilters = updatedFilter;
    },
    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('loadCoaches');
        this.noData = false;
      } catch (error) {
        this.error =
          error.message || 'Something went wrong while fetching Coaches';
        this.noData = true;
      }
      this.isLoading = false;
      // this.noData = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.loadCoaches();
  }
};
</script>

<style scoped>
h1 {
  font-size: 1.3rem;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
button {
  background-color: var(--vue-light-color);
}
.coaches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 2rem;
  padding: 3rem 0;
  place-content: center;
  margin: 0 auto;
}
@media (max-width: 900px) {
  .sidebar {
    display: none;
  }
}
</style>
