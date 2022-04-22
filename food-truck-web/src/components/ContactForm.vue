<template>
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
</template>
