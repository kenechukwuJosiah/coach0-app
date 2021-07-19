<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <header>
            <div class="logo">coach<span class="Oo">O</span><span>!</span></div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              eligendi quam similique repudiandae aspernatur.
            </p>
          </header>
          <div class="social-media">
            <i class="fa fa-facebook" title="coachO!@facebook.com"></i>
            <i class="fa fa-twitter" title="coachO!@twitter.com"></i>
            <i class="fa fa-globe" title="coachO!@globe.com"></i>
            <i class="fa fa-amazon" title="coachO!@amazon.com"></i>
          </div>
        </div>
        <div class="quick-link">
          <h1>quick links</h1>
          <ul class="footer-links">
            <li class="footer-link"><router-link to="/">Home</router-link></li>
            <li class="footer-link">
              <router-link to="/coaches">Coaches</router-link>
            </li>
            <li class="footer-link">
              <router-link to="/register">Register As a Coach</router-link>
            </li>
            <li class="footer-link">
              <router-link to="/about">About us</router-link>
            </li>
            <li class="footer-link">
              <router-link to="/contact-us">Contact us</router-link>
            </li>
          </ul>
        </div>
        <div>
          <div class="footer_contact_info">
            <h2>contact us</h2>
            <ul>
              <li><i class="fa fa-envelope"> </i> coachO@coaching.com</li>
              <li><i class="fa fa-phone-alt"></i>+0123-345-6789</li>
            </ul>
          </div>
          <div class="subscription">
            <h2>subscribe to our Newsletter</h2>
            <form action="Get">
              <input type="email" placeholder="Enter Your Email" />
              <img src="images/send-icon.png" alt="" />
            </form>
          </div>
        </div>
        <div class="instagram">
          <h1>instagram</h1>
          <div class="insta-pic-wrapper">
            <img src="images/instagram-pic1.png" alt="" />
            <img src="images/instagram-pic2.png" alt="" />
            <img src="images/instagram-pic3.png" alt="" />
            <img src="images/instagram-pic4.png" alt="" />
            <img src="images/instagram-pic5.png" alt="" />
            <img src="images/instagram-pic6.png" alt="" />
          </div>
        </div>
      </div>
      <hr />
      <p class="copy_right">
        &copy; copyright 2021
        <router-link to="/"><span class="Oo">coachO!</span></router-link
        >. all rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
h1,
h2 {
  text-transform: capitalize;
}
.footer {
  background-color: #ccc;
  /* color: #fff; */
  padding: 2rem 0;
  text-align: left;
  width: 100%;
}
.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  padding-bottom: 0.8rem;
}
.social-media {
  margin-top: 1rem;
}
.social-media * {
  margin: 0 0.5rem;
  color: var(--vue-dark-color);
  cursor: pointer;
}
.quick-link li a {
  color: var(--vue-dark-color);
}
.quick-link li a:hover {
  text-decoration: underline;
}
.footer_contact_info ul li {
  text-align: left;
}

.subscription form input {
  padding: 0.5rem;
  border-radius: 3rem;
  outline: none;
  border: 1px solid var(--vue-light-color);
}
.copy_right {
  text-align: center;
  padding-top: 0.8rem;
  font-size: 1.2rem;
}

@media (max-width: 800px) {
  .footer-grid {
    grid-template-columns: 1fr;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  .footer_contact_info ul li {
    text-align: center;
  }
}
</style>
