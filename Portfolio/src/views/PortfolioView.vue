<template>
    <div id="portfolio">
        <div id="about-view">
            <p>
                I'm a Full Stack Developer with a passion for building useful, scalable software that
                are a joy for users to interact with. I approach challenges without hesitation, leveraging
                my technical expertise, creativity, and love of problem solving to produce results.
                <br>
                I currently have experience with Java, Spring Boot, PostgreSQL, Python, Vue.js, and more. As a lifelong
                learner, I continually challenge myself to expand my skill set.
            </p>
        </div>
        <div id="vetra" class="project-view">
            <aside>
                <h2>VetRA</h2>
                <p>
                    VetRA is a full stack application aimed at improving communication between
                    veterinary clinics and clients by providing a messaging platform and enabling direct access to pet
                    medical records.
                </p>
                <h3>API</h3>
                <p>
                    The VetRA API is a secure backend built with Java, Spring Boot, and PostgreSQL. It supports
                    integration with the ezyVet API to automate access to pet medical records. It features strong
                    authorization controls to serve the VetRA app's different user types.
                </p>
                <h3>App</h3>
                <p>
                    The VetRA Frontend is a responsive web application built with Vue.js, designed to give pet owners
                    secure access to their pets' medical records. It enables users to view lab results, track
                    medications, request refills, and communicate directly with their veterinary clinic.
                </p>
            </aside>
            <section>
                <img src="../assets/img/VetRA-Preview.png" alt="VetRA Image">
                <div class="icon-container">
                    <img src="../assets/img/icons/java-logo.svg" alt="">
                    <img src="../assets/img/icons/Spring-Boot-logo.png" alt="">
                    <img src="../assets/img/icons/PostgreSQL-logo.png" alt="">
                    <img src="../assets/img/icons/vue-logo.svg" alt="">
                    <img src="../assets/img/icons/JavaScript-logo.png" alt="">
                    <img src="../assets/img/icons/HTML5-logo.png" alt="">
                    <img src="../assets/img/icons/css-logo.png" alt="">
                </div>
            </section>
        </div>
        <div id="kennel-map" class="project-view">
            <aside>
                <h2>Kennel Map</h2>
                <p>
                    Kennel Map is a full stack web application developed for Companion Animal Hospital to track and
                    manage dog locations within the kennel. Built with Vue.js and Supabase/PostgreSQL, it allows users
                    to easily assign dogs to kennel runs and rearrange them using a drag-and-drop interface. Users can
                    also save kennel layouts to help plan for busy periods.
                </p>

            </aside>
            <section>
                <img src="../assets/img/Kennel-Map-Preview.png" alt="Kennel Map Image">
                <div class="icon-container">
                    <img src="../assets/img/icons/vue-logo.svg" alt="">
                    <img src="../assets/img/icons/supabase-logo.png" alt="">
                    <img src="../assets/img/icons/JavaScript-logo.png" alt="">
                    <img src="../assets/img/icons/HTML5-logo.png" alt="">
                    <img src="../assets/img/icons/css-logo.png" alt="">
                </div>
            </section>
        </div>
        <div id="date-stamp" class="project-view">

            <aside>
                <h2>Date Stamp</h2>
                <p>
                    Date Stamp is a browser extension created for Companion Animal Hospital to enhance the
                    record-keeping capabilities of the ezyVet electronic medical records system. Initially developed as
                    a simple timestamp tool, it has evolved to include multiple text insertion features and the ability
                    to inject custom styles into the ezyVet interface, automatically highlighting records that meet
                    time-sensitive criteria.
                </p>

            </aside>
            <section>
                <img src="../assets/img/Date-Stamp-Preview.png" alt="Date Stamp Image">
                <div class="icon-container">
                    <img src="../assets/img/icons/Chrome-logo.png" alt="">
                    <img src="../assets/img/icons/JavaScript-logo.png" alt="">
                    <img src="../assets/img/icons/HTML5-logo.png" alt="">
                    <img src="../assets/img/icons/css-logo.png" alt="">
                </div>
            </section>
        </div>
    </div>

</template>

<script setup>

</script>

<style lang="css" scoped>
@import url('../assets/main.css');

#portfolio {
    background: var(--background-gradient-1);
    background-position: 0 0;
    background-attachment: local;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    scroll-snap-type: y mandatory;

    #about-view {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        scroll-snap-align: center;

        p {
            width: 50vw;
        }
    }

    .project-view {
        max-width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 2fr;
        scroll-snap-align: center;
        scroll-snap-stop: always;
        padding-left: 40px;
        margin: 0px;

        aside {
            background-color: rgba(18, 18, 35, 0.52);
            color: aliceblue;
            padding: 20px;

            h2 {
                text-align: center;
            }
        }

        section {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            flex-direction: column;

            img {
                width: calc(100% - 40px);
            }

            .icon-container {
                display: flex;
                justify-content: center;

                img {
                    max-height: 100px;
                    width: auto;
                    border-radius: 20px;
                    margin: 10px;
                    background-color: rgb(255, 255, 255);
                    padding: 5px;
                    flex-shrink: 1;
                }

            }
        }
    }
}

#portfolio:hover {
    /* Move the background while scrolling (simulated parallax effect) */
    background-position: 0% 100;
}
</style>