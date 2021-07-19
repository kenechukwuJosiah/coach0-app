<template>
  <div class="wrapper">
    <back-drop>
      <h1>Enroll As A Coach Today And Teach As Many Student On A Live Video</h1>
      <p>You get to schedule your lecture time</p>
    </back-drop>
    <div class="container">
      <div class="coach__form">
        <form @submit.prevent="uploadToStorage">
          <div class="grid">
            <div :class="{ invalid: !firstNameInput.isValid }">
              <label for="firstName">First Name</label>
              <p v-if="!firstNameInput.isValid">First Name must be filled</p>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                v-model="firstNameInput.val"
                @blur="clearErrorField('firstNameInput')"
              />
            </div>
            <div :class="{ invalid: !lastNameInput.isValid }">
              <label for="lastName">Last Name</label>
              <p v-if="!lastNameInput.isValid">Last Name must be filled</p>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                v-model="lastNameInput.val"
                @blur="clearErrorField('lastNameInput')"
              />
            </div>
          </div>
          <div :class="{ invalid: !descriptionInput.isValid }">
            <label for="description">Description</label>
            <p v-if="!descriptionInput.isValid">Description must be filled</p>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="2"
              placeholder="I'm John Deo and I've tought x number of student for x number of years ...."
              v-model="descriptionInput.val"
              @blur="clearErrorField('descriptionInput')"
            ></textarea>
          </div>
          <div class="grid">
            <div :class="{ invalid: !emailInput.isValid }">
              <label for="email">Email</label>
              <p v-if="!emailInput.isValid">Email must be filled</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="coach@coachO.com"
                v-model="emailInput.val"
                @blur="clearErrorField('emailInput')"
              />
            </div>
            <div :class="{ invalid: !hourlyRateInput.isValid }">
              <label for="rate">Your Rate</label>
              <p v-if="!hourlyRateInput.isValid">Hourly rate must be entered</p>
              <input
                type="text"
                id="rate"
                placeholder="$x/hour"
                v-model.number="hourlyRateInput.val"
                @blur="clearErrorField('hourlyRateInput')"
              />
            </div>
          </div>
          <div :class="{ invalid: !areasInput.isValid }">
            <label for="areas"
              >Areas of Experties
              <span class="aware">(pls saperate with coma)</span></label
            >
            <p v-if="!areasInput.isValid">
              pls enter areas of experties and rember seperate with coma and
              space
            </p>
            <textarea
              name="areas"
              id="areas"
              cols="30"
              rows="2"
              placeholder="vue.js, php, Node.js, Ruby, Python, ..."
              v-model="areasInput.val"
              @blur="clearErrorField('areasInput')"
            ></textarea>
          </div>
          <div :class="{ invalid: !courseContentInput.isValid }">
            <label for="wyl">course content</label>
            <p v-if="!courseContentInput.isValid">
              course contenet must be filled
            </p>
            <textarea
              name="wyl"
              id="wyl"
              cols="20"
              rows="2"
              placeholder="what you'll teach"
              v-model="courseContentInput.val"
              @blur="clearErrorField('courseContentInput')"
            ></textarea>
          </div>
          <div class="grid">
            <div :class="{ invalid: !instagramInput.isValid }">
              <label for="instagram">Instagram Link</label>
              <p v-if="!instagramInput.isValid">
                Instagram link must be entered
              </p>
              <input
                type="text"
                id="instagram"
                v-model="instagramInput.val"
                @blur="clearErrorField('instagramInput')"
              />
            </div>
            <div :class="{ invalid: !facebookInput.isValid }">
              <label for="facebook">Facebook Link</label>
              <p v-if="!facebookInput.isValid">Facebook link must be entered</p>
              <input
                type="text"
                id="facebook"
                v-model="facebookInput.val"
                @blur="clearErrorField('facebookInput')"
              />
            </div>
            <div :class="{ invalid: !twitterInput.isValid }">
              <label for="twitter">Twitter Link</label>
              <p v-if="!twitterInput.isValid">Twitter link must be entered</p>
              <input
                type="text"
                id="twitter"
                v-model="twitterInput.val"
                @blur="clearErrorField('twitterInput')"
              />
            </div>

            <div :class="{ invalid: !img_pathInput.isValid }">
              <label for="img">Course Image</label>
              <p v-if="!img_pathInput.isValid">pls select image</p>
              <input
                style="display: none"
                type="file"
                ref="img"
                name="img"
                @change="getFile"
                @blur="clearErrorField('img_pathInput')"
              />

              <button @click="$refs.img.click()">
                click
              </button>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.min.css';
import id from '../../store/id.js';
import BackDrop from '../../components/ui/BackDrop.vue';
export default {
  components: {
    BackDrop
  },
  data() {
    return {
      emailInput: {
        val: '',
        isValid: true
      },
      firstNameInput: {
        val: '',
        isValid: true
      },
      lastNameInput: {
        val: '',
        isValid: true
      },
      img_pathInput: {
        val: null,
        isValid: true
      },
      areasInput: {
        val: [],
        isValid: true
      },
      descriptionInput: {
        val: '',
        isValid: true
      },
      hourlyRateInput: {
        val: null,
        isValid: true
      },
      courseContentInput: {
        val: '',
        isValid: true
      },
      facebookInput: {
        val: '',
        isValid: true
      },
      instagramInput: {
        val: '',
        isValid: true
      },
      twitterInput: {
        val: '',
        isValid: true
      },
      formIsValid: true,
      areas: [],
      error: ''
    };
  },
  methods: {
    init() {
      this.emailInput.val = '';
      this.firstNameInput.val = '';
      this.lastNameInput.val = '';
      this.img_pathInput.val = null;
      this.areasInput.val = '';
      this.descriptionInput.val = '';
      this.hourlyRateInput.val = null;
      this.courseContentInput.val = '';
      this.facebookInput.val = '';
      this.instagramInput.val = '';
      this.twitterInput.val = '';
      this.formIsValid = true;
      this.areas = [];
    },
    getFile(e) {
      this.img_pathInput.val = e.target.files[0];
    },
    // firstNameInput lastNameInput img_pathInput areasInput  descriptionInput hourlyRateInput courseContentInput facebookInput instagramInput twitterInput
    validator() {
      this.formIsValid = true;
      if (this.facebookInput.val === '') {
        this.facebookInput.isValid = false;
        this.formIsValid = false;
      }
      if (this.instagramInput.val === '') {
        this.instagramInput.isValid = false;
        this.formIsValid = false;
      }
      if (this.twitterInput.val === '') {
        this.twitterInput.isValid = false;
        this.formIsValid = false;
      }
      if (this.descriptionInput.val === '') {
        this.descriptionInput.isValid = false;
        this.formIsValid = false;
      }
      if (!this.hourlyRateInput.val) {
        this.hourlyRateInput.isValid = false;
        this.formIsValid = false;
      }
      if (this.courseContentInput.val === '') {
        this.courseContentInput.isValid = false;
        this.formIsValid = false;
      }
      if (this.emailInput.val === '') {
        this.emailInput.isValid = false;
        this.formIsValid = false;
      }
      if (this.firstNameInput.val === '') {
        this.firstNameInput.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastNameInput.val === '') {
        this.lastNameInput.isValid = false;
        this.formIsValid = false;
      }
      if (!this.img_pathInput.val) {
        this.img_pathInput.isValid = false;
        this.formIsValid = false;
      }
      if (this.areasInput.val.length === 0) {
        this.areasInput.isValid = false;
        this.formIsValid = false;
      }
    },
    clearErrorField(input) {
      this[input].isValid = true;
    },
    uploadToStorage() {
      this.validator();

      if (!this.formIsValid) {
        return;
      }

      const splitedArea = this.areasInput.val.split(', ');
      splitedArea.map(area => this.areas.push(area));
      const coachDatas = {
        id: id(),
        firstName: this.firstNameInput.val,
        lastName: this.lastNameInput.val,
        areas: this.areas,
        description: this.descriptionInput.val,
        hourlyRate: this.hourlyRateInput.val,
        facebook: this.facebookInput.val,
        instagram: this.instagramInput.val,
        twitter: this.twitterInput.val,
        img: this.img_pathInput.val,
        courseContent: this.courseContentInput.val
      };
      // console.log(coachDatas);
      try {
        this.$store.dispatch('coachUpdate', coachDatas);
      } catch (error) {
        this.error = error;
      }

      this.init();
    }
  }
};

//     if (!data) return;
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
label {
  display: block;
  font-family: var(--font-agency);
  text-transform: capitalize;
  margin-bottom: 0.3rem;
  font-size: 1.3rem;
}
.img-wrap label,
.img-wrap input {
  display: inline-block;
}
button {
  padding: 0.8rem 1rem;
  background-color: var(--vue-light-color);
  border-radius: 0.5rem;
  display: block;
}
button[type='submit'] {
  width: 20%;
  margin: 0 auto;
  margin-top: 1rem;
}
.coach__form {
  max-width: 800px;
  margin: 0 auto;
  margin-top: -200px;
  z-index: 100;
  padding: 2rem 1rem;
  background-color: rgba(255, 255, 255, 0.87);
  color: #000;
  border-radius: 0.3rem;
  margin-bottom: 2rem;
  /* box-shadow: 0px 10px 20px #000; */
  border: 1px solid lightgray;
}
.coach__form form div input,
textarea {
  padding: 0.3rem 1rem;
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
  width: 100%;
  border: 0.5rem;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  font-family: var(--font-regular);
  border: 1px solid gray;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}
.invalid p {
  color: red;
}

/* .invalid textarea {
  border: 1px solid red;
}
.invalid input {
  border: 1px solid red;
} */
</style>
