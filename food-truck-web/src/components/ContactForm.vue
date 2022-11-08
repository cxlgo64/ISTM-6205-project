<template>
     <div class="contact-form">
      <form name="contact" id="contact-form" @submit="formSubmit" action="">
         <h3>Contact Us</h3>
        <input type="text"  id="name" placeholder="Your name.." class="cform">
        <input type="text"  id="emailA" placeholder="your email" class="cform">
        <textarea id="contmsg"  rows="4" cols="50" placeholder="Enter Your Message Here." class="cform"></textarea>
        <button class="btn">Send Message</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'contact-form',
  data () {
    return {
      name: '',
      emailA: '',
      contmsg: ''
    }
  }
}
</script>
<style scoped lang="scss">
@import "src/scss/_base2.scss";
.contact-form{
  display: flex;
  align-items:center;
  flex-wrap:wrap;
  gap:1.5rem;
  background-color:bisque;
}
.contact-form h3{
  color: var(--black);
  font-size: 2.5rem;
}
 .contact-form form{
    flex: 1 1 42rem;
    border-radius: .5rem;
    border:var(--border);
    box-shadow: var(--box-shadow);
    padding: 2rem;
    text-align: center;
 }
 .contact-form form .cform{
   width:100%;
   margin: .8rem 0;
   padding: 1rem 1.5rem;
   border-radius: .5rem;
   border: var(--border);
   text-transform: none;
   font-size: 1.4rem;
 }
 .contact-form form textarea{
   height: 15rem;
 }
.contact-form form .cform:focus,.contact-form form .cform:hover{
  border-color:var(--bisque);
 }
 .btn{
   margin-top: 1rem;
   display: inline-block;
   padding: .9rem 3rem;
   font-size: 1.7rem;
   cursor: pointer;
   color:white;
   background: black;
 }
 .btn:hover{
   background: blue;
 }
</style>
