<template>
  <div>
    <back-drop> </back-drop>
    <div class="wrapper">
      <coach-layout>
        <template #sidebar>
          <div class="details-wrapper">
            <div class="img-wrapper">
              <img :src="img" alt="" />
            </div>
            <h2>{{ fullName }}</h2>
            <p>{{ description }}</p>
            <p>{{ courseContent }}</p>
            <div class="areas">
              <span v-for="area in areas" :key="area">{{ area }}</span>
            </div>
            <h1 class="enroll">Enroll @ ${{ hourlyRate }}/month</h1>
            <div class="social__media--link">
              <span class="social__media "
                ><a target="_blank" :href="facebook"
                  ><i class="fa fa-facebook social__media--link-1"></i></a
              ></span>
              <span class="social__media "
                ><a target="_blank" :href="twitter"
                  ><i class="fa fa-twitter social__media--link-3"></i></a
              ></span>
              <span class="social__media "
                ><a target="_blank" :href="instagram"
                  ><i class="fa fa-instagram social__media--link-2"></i></a
              ></span>
            </div>
            <span @click="hideContact" v-if="showContact">
              <router-link :to="coachContactLink" class="coach--btn"
                >Contact Coach</router-link
              ></span
            >
          </div>
        </template>
        <template #default>
          <h2>Interested? Click on the contact link below to get started</h2>
          <router-view></router-view>
        </template>
      </coach-layout>
    </div>
  </div>
</template>

<script>
import BackDrop from '../../components/ui/BackDrop.vue';
import CoachLayout from '../../components/layout/coachLayout.vue';
export default {
  components: {
    CoachLayout,
    BackDrop
  },
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
      showContact: true
    };
  },
  computed: {
    coachContactLink() {
      return `${this.$route.path}/contact-coach`; // /coaches/c1/contact
    },
    img() {
      return `${this.selectedCoach.img}`;
    },
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
    description() {
      return `${this.selectedCoach.description}`;
    },
    courseContent() {
      return `${this.selectedCoach.courseContent}`;
    },
    areas() {
      return `${this.selectedCoach.areas}`;
    },
    hourlyRate() {
      return `${this.selectedCoach.hourlyRate}`;
    },
    facebook() {
      return `${this.selectedCoach.facebook}`;
    },
    twitter() {
      return `${this.selectedCoach.twitter}`;
    },
    instagram() {
      return `${this.selectedCoach.instagram}`;
    }
  },
  methods: {
    hideContact() {
      this.showContact = false;
    }
  },
  created() {
    this.selectedCoach = this.$store.getters.coaches.find(
      coach => coach.id === this.id
    );
  }
};
</script>

<style scoped>
.wrapper {
  background-color: #fff;
  padding: 2rem 0;
  border-radius: 0.5rem;
  max-width: 60%;
  margin: 0 auto;
  margin-top: -250px;
}
img {
  max-height: 100%;
  max-width: 100%;
  object-position: top;
}
.img-wrapper {
  max-width: 600px;
  height: 300px;
  border-radius: 0.7rem 0.7rem 0 0;
  overflow: hidden;
}
.enroll {
  color: var(--vue-light-color);
}
.social__media--link {
  align-items: flex-start;
  justify-content: flex-start;
}
.coach--btn {
  padding: 0.4rem 0.7rem;
  background-color: var(--primary-color);
  font-size: 1rem;
  margin: 0.5rem 0;
  display: inline-block;
  border-radius: 0.3rem;
  color: #fff;
}

@media (max-width: 900px) {
  .wrapper {
    max-width: 80%;
  }
}
</style>
