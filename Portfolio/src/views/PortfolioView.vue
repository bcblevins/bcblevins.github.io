<template>
    <div id="portfolio">
        <div id="welcome">
            <h1 id="greeting" v-if="showGreeting" :class="{ 'visible': showGreeting }"> <span>Hello.</span></h1>
            <h1 id="my-name" v-if="!showGreeting" :class="{ 'visible': !showGreeting, 'hide': hidden }">
                My name is
                <span id="name">Beau Blevins.</span>
                <br>
                <span id="i-am">I'm a full stack software developer.</span>
            </h1>
            <div id="portal" v-if="showPortal" :class="{ 'hide': hidden }"></div>
            <div id="cover"></div>
            <button id="about-me-button" v-if="showButton" @click="gotToAboutMe">About Me</button>
        </div>
        <div id="welcome-spacer">

        </div>
        <div id="about-view" class="view">
            <p ref="about-me">
                I'm a Full Stack Developer with a passion for building useful, scalable software that
                are a joy for users to interact with. I approach challenges without hesitation, leveraging
                my technical expertise, creativity, and love of problem solving to produce results.
                <br>
                I currently have experience with Java, Spring Boot, PostgreSQL, Python, Vue.js, and more. As a lifelong
                learner, I continually challenge myself to expand my skill set.
            </p>
        </div>
        <div id="vetra" class="project-view view">
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
                </div>
            </section>
        </div>
        <div id="kennel-map" class="project-view view">
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
                </div>
            </section>
        </div>
        <div id="date-stamp" class="project-view view">

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
                </div>
            </section>
        </div>
    </div>



</template>

<script setup>
import { ref, useTemplateRef } from 'vue';

const showGreeting = ref(true);
const showButton = ref(false);
const showPortal = ref(true);
const hidden = ref(false);
const aboutMe = useTemplateRef('about-me')

const toggleGreeting = () => {
    showGreeting.value = !showGreeting.value;
}

const togglePortal = () => {
    showPortal.value = !showPortal.value;
}

const toggleButton = () => {
    showButton.value = !showButton.value;
}

const gotToAboutMe = () => {
    aboutMe.value.scrollIntoView({ behavior: 'smooth' });
}




setTimeout(toggleGreeting, 3000)
setTimeout(togglePortal, 4000)
setTimeout(toggleButton, 4500)

</script>

<style lang="css" scoped>
@import url('../assets/main.css');

#portfolio {
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    scroll-snap-type: y mandatory;

    background-color: aliceblue;

    --container-color-1: rgba(0, 0, 255, 0.52);

    .view{
        background-color: var(--gray-9);
    }

    #welcome {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        scroll-snap-align: center;
        position: relative;
        background-color: var(--background-color-1);

        h1 {
            margin: 0px;
            text-align: center;
            opacity: 0;
        }

        .visible {
            opacity: 1;
            /*transition: all 1s; */
        }

        #greeting {
            text-align: center;
            font-size: 15vh;
            animation: slide-in-up-out 3s ease;
            overflow: hidden;
            position: absolute;
            bottom: 50%;
        }

        #my-name {
            animation: slide-in-up .8s ease;
            position: absolute;
            bottom: 50%;
        }

        #name {
            font-size: 40px;
            background-image: linear-gradient(to bottom left, #007acc, #035ebf);
            color: transparent;
            background-clip: text;
            text-shadow: 3px 3px 0 rgba(70, 70, 70, 0.213);

        }

        #i-am {
            font-size: 30px;
        }

        #portal {
            width: 50vw;
            z-index: 1001;
            border-top: 2px solid rgb(0, 0, 0);
            animation: scale-in-out 4s ease;
            position: absolute;
            top: 50%;
        }

        #portal.hide {
            animation: scale-in-out 1s ease;
        }

        #my-name.hide {
            animation: slide-down-out 1s;
            animation-delay: .2s;
        }

        #cover {
            height: 40vh;
            width: 100vw;
            background-color: var(--background-color-1);
            z-index: 1000;
            position: absolute;
            top: 50%;
        }



        #about-me-button {
            position: absolute;
            top: calc(50% + 20px);
            padding: 20px;
            padding-block: 5px;
            font-size: 20px;
            background: transparent;
            color: var(--foreground-color-1);
            border: 2px solid #005999;
            border-radius: 3px;
            box-shadow: 0px 2px 7px -2px #1097f8;
            animation: fade-in-with-shadow 1s ease;
            transition: all .2s;
            z-index: 1001;
        }

        #about-me:hover {
            transform: scale(1.1);
            cursor: pointer;
            box-shadow: 0px 0px 7px 0px #1097f8;

        }


    }

    #welcome-spacer {
        height: 100vh;
        background: linear-gradient(to bottom, var(--background-color-1), transparent)
    }

    #about-view {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        scroll-snap-align: center;


        p {
            width: 50vw;
            background-color: var(--container-color-1);
            padding: 20px;
            border-radius: 20px;
            color: white;
        }
    }

    .project-view {
        max-width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 2fr;
        scroll-snap-align: center;
        scroll-snap-stop: always;
        margin: 0px;

        aside {
            background-color: var(--container-color-1);
            color: aliceblue;
            padding: 20px;
            margin-block: 6vh;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;

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
                background-color: var(--container-color-1);
                padding: 20px;
                padding-top: 0px;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;

                img {
                    height: 100px;
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


@keyframes slide-in-up-out {

    0%,
    10% {
        transform: translateY(20vh);
    }

    20%,
    85% {
        transform: translateY(0px);
    }

    100% {
        transform: translateY(20vh);
    }

}

@keyframes slide-in-up {

    0%,
    10% {
        transform: translateY(20vh);
    }

    100% {
        transform: translateY(0vh);
    }
}

@keyframes scale-in-out {
    0% {
        transform: scale(0);
    }

    7%,
    90% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);

    }
}

@keyframes fade-in-with-shadow {
    0% {
        opacity: 0;
        box-shadow: 0px 0px 0px 0px #1097f8;
    }

    50% {
        box-shadow: 0px 0px 0px 0px #1097f8;
        opacity: 1;
    }

    100% {
        opacity: 1;

        box-shadow: 0px 2px 7px -2px #1097f8;

    }
}

@keyframes slide-down-out {
    0% {
        transform: translateY(0vh);
    }

    50%,
    100% {
        transform: translateY(20vh);
    }
}
</style>