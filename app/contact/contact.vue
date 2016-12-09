<template>
  <div id="contact">
    <nav-bar></nav-bar>
    <result v-if="result"></result>
    <section class="box">
      <h5 class="noBorder">Contact Us</h5>
      <form id ="contactForm">
        <ul class="v-list">
          <li><input v-bind:class="{badInput: badEmail}" v-model="message.email" type="text" name="" value="" placeholder="Email Address"></li>
          <li><input v-bind:class="{badInput:badEmail}" v-model="confirmEmail" type="text" name="" value="" placeholder="Confirm Email Address"></li>
          <li v-if="badEmail" class="errMessage">Email Addresses do not match or are invalid</li>
          <li><input v-model="message.title" type="text" name="" value="" placeholder="Subject Title"></li>
          <li v-if="badTitle" class="errMessage">Please include a subject title</li>
          <li><textarea v-model="message.body" name="name" rows="8" cols="80" placeholder="Message Body"></textarea></li>
          <li v-if="badMessage" class="errMessage">Please include a message</li>
          <li><input v-on:click="email" id="submit" type="submit" name="" value="submit"></li>
        </ul>
      </form>
    </section>
    <foot></foot>
  </div>
</template>


<script src="./controller.js" charset="utf-8"></script>
