<template>
<div class="bar">
    <ul>
        <li class="navBtn" v-bind:class="{activeTab: home}" v-on:click="goHome">
            <ul class="h-list">
              <li><i class="fa fa-home" aria-hidden="true"></i></li>
              <li>HOME</li>
            </ul>
        </li>
        <li class="navBtn" v-bind:class="{activeTab: portfolio}" v-on:click="goPortfolio">
            <ul class="h-list">
              <li><i class="fa fa-picture-o" aria-hidden="true"></i></li>
              <li>PORTFOLIO</li>
            </ul>
        </li>
        <li class="navBtn" v-bind:class="{activeTab: contact}" v-on:click="goContact">
            <ul class="h-list">
              <li><i class="fa fa-envelope" aria-hidden="true"></i></li>
              <li>CONTACT</li>
            </ul>
        </li>
    </ul>
</div>
</template>

<script src="./controller.js" charset="utf-8"></script>
