<template>
  <div class="about">
    <h1>About Us</h1>
    <p>
      George Washington Univeristy School of Business Information System and Technology Management 6205 project
    </p>
    <h2>Member introduction</h2>
    <h3>Xueliang Chen</h3>
    <div class="XLC">
      <ul>
        <li><img alt="Xueliang Chen picture" src="..\assets\member1.jpg" height="50" width="100"></li>
        <li><a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Home Page</a></li>
        <li><div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="xueliang-chen-38645a1b7" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/xueliang-chen-38645a1b7?trk=profile-badge">Linkedin</a></div></li>
      </ul>
    </div>
    <h3>Younghwan Choi</h3>
    <div class="YC">
      <ul>
        <li><img alt="Younghwan Choi picture" src="..\assets\logo.png" height="50" width="100"></li>
        <li><a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Younghwan Choi </a></li>
      </ul>
    </div>
    <h3>Jeffrey Techie-Menson</h3>
    <div class="JTM">
      <ul>
        <li><img alt="Jeffrey Techie-Menson picture" src="..\assets\logo.png" height="50" width="100"></li>
        <li><a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Jeffrey Techie-Menson</a></li>
      </ul>
    </div>
   <h2>Instructor Introduction</h2>
    <div class="WeiChen">
      <img alt="WeiChen picture" src="..\assets\logo.png" height="50" width="100"><br>
      <a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Wei Chen</a>
    </div>
  </div>
</template>

<script>
export default {
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
  h1 {
    font-size: 55px;
  }
  h2 {
    font-size: 33px;
  }
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
</style>
