<template>
    <div id="portfolio">
        <div id="welcome" :class="{ 'dark': darken }">
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
        <!-- <div id="welcome-spacer"  >

        </div> -->
        <div id="about-view" class="view">
            <div id="about-container">
                <p ref="about-me">
                    I'm a Full Stack Developer with a passion for building useful, scalable software that
                    are a joy for users to interact with. I approach challenges without hesitation, leveraging
                    my technical expertise, creativity, and love of problem solving to produce results.
                    <br>
                    <br>
                    I have experience with <span id="skill-list"> Vue.js, React.js, Java, Spring Boot, PostgreSQL, Python, </span>
                    and more. I believe in
                    lifelong
                    learning and I continually challenge myself to expand my skill set.
                </p>
                <div id="icon-main-container">
                    <div>
                        <img src="../assets/img/icons/PostgreSQL-logo.png" alt="">
                        <img src="../assets/img/icons/Spring-Boot-logo.png" alt="">
                    </div>
                    <div>
                        <img src="../assets/img/icons/JavaScript-logo.png" alt="">
                        <img src="../assets/img/icons/Python-logo.webp" alt="">
                        <img src="../assets/img/icons/java-logo.svg" alt="">
                    </div>
                    <div class="right">
                        <img src="../assets/img/icons/react-logo.svg" alt="">
                        <img src="../assets/img/icons/vue-logo.svg" alt="">
                    </div>
                </div>
            </div>
            <img class="arrow" src="../assets/img/icons/arrow.svg" alt="">
        </div>
        <div id="vetra" class="project-view view">
            <aside>
                <h2>VetRA</h2>
                <p>
                    A medical record and communication platform for veterinary practices and their clients.
                </p>
                <a id="go-vetra" class="go-button" href="https://bcblevins.github.io/Vetra-App/" target="_blank">Coming soon</a>
                <a class="go-button" href="https://github.com/bcblevins/Vetra-App" target="_blank">Learn More</a>
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
            <img class="arrow" src="../assets/img/icons/arrow.svg" alt="">
        </div>
                <div id="vetra" class="project-view view">
            <aside>
                <h2>DailyPlate</h2>
                <p>
                    Mobile webapp to help users track food intake with the goal of eating a nutritionally balanced diet.
                </p>
                <a id="go-dailyplate" class="go-button" href="" target="_blank">Coming soon</a>
                <a class="go-button" href="https://github.com/bcblevins/daily-plate" target="_blank">Learn More</a>
            </aside>
            <section>
                <img src="../assets/img/DailyPlate-preview.png" alt="DailyPlate Image">
                <div class="icon-container">
                    <img src="../assets/img/icons/react-logo.svg" alt="">
                    <img src="../assets/img/icons/supabase-logo.png" alt="">
                    <img src="../assets/img/icons/PostgreSQL-logo.png" alt="">
                </div>
            </section>
            <img class="arrow" src="../assets/img/icons/arrow.svg" alt="">
        </div>
        <div id="kennel-map" class="project-view view">
            <aside>
                <h2>Kennel Map</h2>
                <p>
                    Application developed for Companion Animal Hospital to track and
                    manage dog locations within the kennel.
                </p>
                <a class="go-button" href="https://bcblevins.github.io/KennelMap" target="_blank">Go to App</a>
                <a class="go-button" href="https://github.com/bcblevins/KennelMap" target="_blank">Learn More</a>

            </aside>
            <section>
                <img src="../assets/img/Kennel-Map-Preview.png" alt="Kennel Map Image">
                <div class="icon-container">
                    <img src="../assets/img/icons/vue-logo.svg" alt="">
                    <img src="../assets/img/icons/supabase-logo.png" alt="">
                </div>
            </section>
            <img class="arrow" src="../assets/img/icons/arrow.svg" alt="">
        </div>
        <div id="date-stamp" class="project-view view">
            <aside>
                <h2>Date Stamp</h2>
                <p>
                    Browser extension created for Companion Animal Hospital to provide
                    record-keeping tools for ezyVet.
                </p>
                <a class="go-button"
                    href="https://chromewebstore.google.com/detail/date-stamp/iellafhafghhpjjmolndilnlfkkpigco?hl=en-US"
                    target="_blank">View in Store</a>
                <a class="go-button" href="https://github.com/bcblevins/DateStamp" target="_blank">Learn More</a>
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
const darken = ref(false);

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

const toggleDarken = () => {
    darken.value = !darken.value;
}


setTimeout(toggleGreeting, 3000)
setTimeout(togglePortal, 4000)
setTimeout(toggleButton, 4500)
setTimeout(toggleDarken, 4500)


</script>

<style lang="css" scoped>
@import url('../assets/main.css');

#portfolio {
    width: 100vw;
    height: 100vh;
    overflow: scroll;
    scroll-snap-type: y mandatory;

    background-color: aliceblue;

    --container-color-1: rgba(0, 0, 0, 0.417);
    --main-blue: #0290ef;



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
            background-image: linear-gradient(to bottom left, #6bc4ff, #0e83ff);
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
            background-color: transparent;
            color: white;
            border: none;
            text-align: left;
            font-size: 20px;
            border-bottom: 2px solid white;
            transition: all .3s ease;
            padding: 10px;
            animation: fade-in-with-shadow 1s ease;
            z-index: 1001;
        }

        #about-me-button:hover {
            top: calc(50% + 18px);
            cursor: pointer;
            border-bottom: 16px solid var(--main-blue);
            padding-bottom: 0px;
            box-shadow: 0px 12px 0px -10px white;
        }


    }

    #welcome.dark {
        background-color: var(--gray-9);
        transition: all 1s ease;
        color: white;

        #cover {
            background-color: var(--gray-9);
            transition: all 1s ease;
        }
    }

    .view {
        background-color: var(--gray-9);
        position: relative;

        .arrow {
            position: absolute;
            width: 100px;
            bottom: 0px;
            left: calc(50% - 50px);
            animation: bounce 2s infinite linear;
        }
    }

    #about-view {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        scroll-snap-align: center;

        #about-container {
            background-color: var(--container-color-1);
            display: flex;
            justify-content: space-around;
            padding-block: 20px;


            p {
                margin-left: 10vw;
                width: 40vw;
                padding: 20px;
                padding-inline: 100px;
                padding-left: 140px;
                border-radius: 20px;
                color: white;
                line-height: 30px;

                #skill-list {
                    font-weight: 600;
                    background-image: linear-gradient(to bottom left, #6bc4ff, #0e83ff);
                    color: transparent;
                    background-clip: text;
                    font-size: larger;
                }
            }

            #icon-main-container {
                width: 50vw;
                display: flex;
                justify-content: center;
                padding: 20px;
                padding-top: 0px;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    img {
                        height: 70px;
                        border-radius: 20px;
                        margin: 10px;
                        background-color: rgb(255, 255, 255);
                        padding: 5px;
                        flex-shrink: 1;
                    }
                }

                .right {
                    margin-right: 10vw;
                }

            }
        }
    }

    .project-view {
        max-width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 2fr 3fr;
        scroll-snap-align: center;
        scroll-snap-stop: always;
        margin: 0px;

        aside {
            background-color: var(--container-color-1);
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            color: aliceblue;
            padding: 40px;
            margin-block: 6vh;


            h2 {
                text-align: left;
                font-size: 50px;
                background-image: linear-gradient(to bottom left, #7fccff, #238eff);
                color: transparent;
                background-clip: text;
            }

            p {
                margin-bottom: 20px;
                font-size: 20px;
            }



            .go-button {
                display: block;
                margin-block: 20px;
                width: 10em;
                height: 1.2em;
                background-color: transparent;
                color: white;
                border: none;
                text-align: left;
                font-size: 20px;
                border-bottom: 2px solid white;
                transition: all .3s ease;
                padding: 10px;
                text-decoration: none;
            }

            .go-button:hover {
                border-bottom: 16px solid var(--main-blue);
                padding-bottom: 0px;
                cursor: pointer;
                box-shadow: 0px 12px 0px -10px white;
                color: cyan;
            }

            #go-vetra, #go-dailyplate {
                color: grey;
                pointer-events: none;
                border-bottom: 2px solid grey;
                position: relative;
            }


            #go-vetra:hover, #go-dailyplate:hover {
                border-bottom: none;
                padding-bottom: 10px;
                cursor: not-allowed;
                box-shadow: none;
                color: grey;
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
                border-radius: 20px;
            }

            .icon-container {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--container-color-1);
                padding: 20px;
                padding-top: 0px;
                border-bottom-left-radius: 20px;
                border-bottom-right-radius: 20px;

                img {
                    height: 70px;
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

@media only screen and (max-width: 600px) {
    #portfolio {

        #welcome {

            #my-name {

                #name {
                    display: block;
                }
            }
        }



        #about-view {
            flex-direction: column;

            #about-container {
                display: flex;
                flex-direction: column;
                p {
                    width: 90vw;
                    padding: 20px;
                    margin: 0px;
                }

                #icon-main-container {
                    width: 90%;
                    padding: 20px;
                    align-items: center;

                    .right {
                        margin: 0px;
                    }
                }
            }
        }

        .project-view {
            display: flex;
            flex-direction: column;

            aside {
                margin: 0px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-block: 0px;

                h2 {
                    text-align: center;
                }

                p {
                    text-align: center;
                }

                .go-button {
                    text-align: center;
                    display: inline-block;
                }
            }

            section {

                .icon-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;

                    img {
                        flex-basis: 70px;
                        object-fit: cover;
                    }
                }
            }

        }
    }

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
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 1;


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

@keyframes bounce {

    0%,
    50% {
        transform: translateY(40px);
        opacity: 1;
    }

    100% {
        transform: translateY(-20px);
        opacity: 0;
    }
}
</style>