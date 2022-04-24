<template>
     <div class="contact-form">
      <h3>Contact Us</h3>
      <form name="contact" action="" method="GET">
        <label for="name">Name: </label><br>
        <input type="text" v-model="name" name="name" placeholder="Your name.."><br>
        <label for="emailaddress">Email Address: </label><br>
        <input type="text" v-model="emailaddress" name="emailaddress" placeholder="your email"><br>
        <label for="contactmsg">Message: </label><br>
        <textarea id="contactmsg" name="contmsg" rows="4" cols="50" placeholder="Enter Your Message Here."></textarea><br>
        <input type="submit" value="Submit" onClick="testResults(this.form)">
        <button type="button" onclick="sendData({test:'ok'})">Submit</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'contact-form',
  data () {
    return {
      name: '',
      emailladdress: '',
      contmsg: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      if (!this.name) {
        alert('Please Add a Name')
        return
      }
      const NewMessage = {
        id: Math.floor(Math.random() * 100000),
        name: this.name,
        age: this.age,
        reminder: this.reminder
      }
      this.$emit('contact', NewMessage)
      // this.name = ' ',
      // this.age = ' '
    }
  }
}
</script>
<style lang="scss">
 .contact-form{
    padding: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 10px;
    background-color: beige;
  }
  label{
      text-align: left;
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
</style>
