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
        <li id="picture"><img alt="Younghwan Choi picture" src="..\assets\logo.png" height="50" width="100"></li>
        <li>Younghwan Choi</li>
        <li><a href="https:/www.windbreakercxl.com" target="_blank" rel="noopener">Linkedin</a></li>
        <li><a href="mailto:cxlgo@gwu.edu">Email</a></li>
      </ul>
    </div>
    <div class="JTM">
      <ul>
        <li id="picture"><img alt="Jeffrey Techie-Menson picture" src="..\assets\logo.png" height="50" width="100"></li>
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
    <div class="contact-form">
      <h3>Contact Form</h3>
      <form action="/action_page.php">
        <label for="fname">Name: </label><br>
        <input type="text" id="fname" name="fname" placeholder="Your name.."><br>
        <label for="emailaddress">Email Address: </label><br>
        <input type="text" id="lname" name="lname" placeholder="your email"><br>
        <label for="contactmsg">Message: </label><br>
        <textarea id="contactmsg" name="contmsg" rows="4" cols="50" placeholder="Enter Your Message Here."></textarea><br>
        <input type="submit" value="Submit">
      </form>
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
  *{
    box-sizing: border-box;
  }
  .contact-form{
    padding: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 10px;
    background-color: beige;
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
  input[type=text], select, textarea {
    width: 70%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }
  #picture{
    background-color: rgb(178, 97, 127);
    margin: 5px;
    padding: 5px;
  }
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
