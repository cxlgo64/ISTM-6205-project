<template>
  <div class="about">
    <h1>About Us</h1>
    <h2>
      Information System and Technology Management 6205 project
    </h2>
    <p>School: George Washington Univeristy School of Business </p>
    <div class="projectinfo">
      <div class="links"><a href="https://github.com/cxlgo64/ISTM-6205-project/tree/newoneone">GitHub</a></div>
      <div class="links"><a href="https://docs.google.com/document/d/10DoRP0DQWf7lD-wPs9uUxh5Ow1s6JiY8ucStnW30yfA/edit?usp=sharing">Project Report</a></div>
    </div>
    <div class="memeber">
      <h2>Member introduction</h2>
      <div class="box">
        <img id="picture" alt="Xueliang Chen picture" src="..\assets\member1.jpg" height="200" width="100"><br>
        <a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Xueliang Chen</a>
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="xueliang-chen-38645a1b7" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/xueliang-chen-38645a1b7?trk=profile-badge">Linkedin</a></div>
        <a href="mailto:cxlgo@gwu.edu">Email</a>
      </div>
      <div class="box">
          <img id="picture" alt="Younghwan Choi picture" src="..\assets\member2.jpg" height="200" width="100">
          <p>Younghwan Choi</p>
          <a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Linkedin</a><br>
          <a href="mailto:cxlgo@gwu.edu">Email</a>
      </div>
      <div class="box">
          <img id="picture" alt="Jeffrey Techie-Menson picture" src="..\assets\member3.jpg" height="200" width="100">
          <p>Jeffrey Techie-Menson</p>
          <a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Linkedin</a><br>
          <a href="mailto:cxlgo@gwu.edu">Email</a>
      </div>
    </div>
    <div class="contact-form">
      <contact-form />
    </div>
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

<style scoped lang="scss">
@import "src/scss/_base2.scss";
  .member{
    margin-bottom: 3rem;
  }
  h2{
    font-size: 1.3rem;
  }
  .about p{
    font-size: 15px;
  }
  *{
    box-sizing: border-box;
  }
  .projectinfo{
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1 1 42rem;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
  .projectinfo .links{
    flex:1 1 42rem;
  }
  .about .member{
    display:flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  .about .box{
    display: inline-block;
    background-color: rgb(220, 226, 231);
    position: relative;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin: 1rem;
  }
  #picture{
    background-color: rgb(178, 97, 127);
    margin: 5px;
    padding: 5px;
  }
  .contact-form{
    margin-top:3rem;
  }
</style>
