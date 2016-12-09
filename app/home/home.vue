<template>
<div id="home">
    <nav-bar>
    </nav-bar>

    <section class="box">
        <h5>Welcome</h5>
        <ul class="h-list">
            <li>
                <img src="../images/avatar.png" alt="Grady Rogers" id="avatar">
                <h4>Grady Rogers</h4>
                <h6>Managing Director</h6>
            </li>
            <li>
                <p class="fancy">
                    Thank you for considering Blue Cactus for your website and/or software needs. Blue Cactus offers custom solutions, taylored to your business or organization. You aren't like everyone else, so neither should your online presence!
                </p>
            </li>
        </ul>
    </section>

    <ul class="h-list doubleBox" id="content">
        <li class="box">
            <h5>Why Blue Cactus?</h5>
            <p class="fancy">
                Consider having a custom website made for your business or organization if you desire a unique design and custom features tailored to your needs.
            </p>
        </li>
        <li class="box">
            <h5>Pricing</h5>
            <p class="fancy">
                Please
                <router-link class="textLink" to="/contact">contact us</router-link> for a quote, as pricing will vary depending on the project. Quotes are based off of the amount of time the project will take to complete.
            </p>
        </li>
    </ul>

    <foot></foot>
</div>
</template>







<script src="./controller.js" type="text/javascript"></script>
