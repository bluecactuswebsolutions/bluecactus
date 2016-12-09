<template>
<div id="showcase">
    <nav-bar></nav-bar>
    <section class="box">
        <h5>Recent Clients</h5>
        <ul id="showcaseList">
            <div v-on:click="showJett" class="deets">{{jett.message}}</div>
            <li v-on:click="showJett">
                <img src="../images/jettLogo.png" alt="">
                <div v-if="jett.show">
                    <a href="http://jettdental.com" target="_blank">Go to jettdental.com</a>
                    <video class="demo" autoplay loop>
              <source src="../images/jettdental.mp4" type="video/mp4">
                </video>
                </div>
            </li>
        </ul>
    </section>
    <foot></foot>
</div>
</template>





<script src="./controller.js" charset="utf-8"></script>
