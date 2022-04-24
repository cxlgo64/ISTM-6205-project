<template>
  <div class="about">
    <h1>About Us</h1>
    <p>
      George Washington Univeristy School of Business Information System and Technology Management 6205 project
    </p>
    <h2>Member introduction</h2>
    <div class="XLC">
      <ul>
        <li id="picture"><img alt="Xueliang Chen picture" src="..\assets\member1.jpg" height="50" width="100"></li>
        <li><a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Xueliang Chen</a></li>
        <li><div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="xueliang-chen-38645a1b7" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/xueliang-chen-38645a1b7?trk=profile-badge">Linkedin</a></div></li>
        <li><a href="mailto:cxlgo@gwu.edu">Email</a></li>
      </ul>
    </div>
    <div class="YC">
      <ul>
        <li id="picture"><img alt="Younghwan Choi picture" src="..\assets\member2.jpg" height="50" width="100"></li>
        <li>Younghwan Choi</li>
        <li><a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Linkedin</a></li>
        <li><a href="mailto:cxlgo@gwu.edu">Email</a></li>
      </ul>
    </div>
    <div class="JTM">
      <ul>
        <li id="picture"><img alt="Jeffrey Techie-Menson picture" src="..\assets\member3.jpg" height="50" width="100"></li>
        <li>Jeffrey Techie-Menson</li>
        <li><a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Linkedin</a></li>
        <li><a href="mailto:cxlgo@gwu.edu">Email</a></li>
      </ul>
    </div>
   <h2>Instructor Introduction</h2>
    <div class="Instructor">
      <img alt="WeiChen picture" src="..\assets\logo.png" height="50" width="100"><br>
      <a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Wei Chen</a>
      <a href="mailto:cxlgo@gwu.edu"> Email</a>
    </div>
    <contact-form />
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
export default {
  components: {
    ContactForm
  },
  head () {
    return {
      script: [
        {
          src: 'https://platform.linkedin.com/badges/js/profile.js',
          type: 'text/javascript'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  *{
    box-sizing: border-box;
  }
  .about ul{
    display: inline-block;
    background-color: rgb(220, 226, 231);
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    margin: 8px;
  }
  .about li{
    display: inline-block;
    margin: 0 10px;
  }
  #picture{
    background-color: rgb(178, 97, 127);
    margin: 5px;
    padding: 5px;
  }
</style>
