<template>
  <div class="coach__card" title="what you'll learn">
    <div class="img__wrapper">
      <!-- <img src="" alt="Coach" /> -->
      <img :src="img" :alt="fullName" />
    </div>
    <h2 class="coach__name" @click="showid">
      {{ fullName }}
    </h2>
    <div class="areas">
      <span class="experties">Experties: </span>
      <span class="area" v-for="area in areas" :key="area">{{ area }} / </span>
    </div>
    <div class="description">
      {{ description }}
    </div>
    <div class="rate">
      <h1><span class="h-rate">Hourly Rate:</span> ${{ rate }}</h1>
    </div>
    <div class="contact__request--btn">
      <router-link :to="coachDetailsLink" class="coach--btn"
        >Coach Details</router-link
      >
    </div>
    <ul class="social__media--link">
      <li>
        <a
          target="_blank"
          :href="facebook"
          class="social__media social__media--link-1"
          ><i class="fa fa-facebook"></i
        ></a>
      </li>
      <li>
        <a
          target="_blank"
          :href="instagram"
          class="social__media social__media--link-2"
          ><i class="fa fa-instagram"></i
        ></a>
      </li>
      <li>
        <a
          target="_blank"
          :href="twitter"
          class="social__media social__media--link-3"
          ><i class="fa fa-twitter"></i
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'img',
    'firstName',
    'lastName',
    'areas',
    'description',
    'facebook',
    'instagram',
    'twitter',
    'rate'
  ],
  data() {
    return {
      model: {}
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id; // /coaches/c1
    }
  },
  methods: {
    coachDetails() {
      this.$router.push('/contact-coach');
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.coach__card {
  position: relative;
  margin-bottom: 4rem;
  padding: 4rem 1rem 1.3rem;
  text-align: center;
  border-radius: 0.5rem;
  box-shadow: -2px 18px 19px -7px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: -2px 18px 19px -7px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: -2px 18px 19px -7px rgba(0, 0, 0, 0.73);
  transition: transform 0.3s ease-in-out;
  cursor: auto;
}
.coach__card:hover {
  transform: scale(1.05);
}
.img__wrapper {
  position: absolute;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  border: 4px solid var(--vue-light-color);
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  box-shadow: -3px 16px 14px -7px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: -3px 16px 14px -7px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: -3px 16px 14px -7px rgba(0, 0, 0, 0.73);
}
.areas {
  font-family: var(--font-agency);
}
.area {
  color: rgb(218, 8, 8);
}
.experties {
  font-family: var(--font-bold);
  font-size: 0.9rem;
}
.description {
  margin: 0.7rem 0;
}
.h-rate {
  color: var(--vue-light-color);
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
</style>
