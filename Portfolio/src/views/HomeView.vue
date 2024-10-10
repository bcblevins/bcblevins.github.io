<template>
  <div id="home-view">
    <header>
      <h1 id="greeting" v-if="showGreeting" :class=" {'visible': showGreeting} " > <span>Hello.</span></h1>
      <h1 id="my-name" v-if="!showGreeting" :class=" {'visible': !showGreeting} " >
        My name is 
        <span id="name">Beau Blevins.</span>
        <br>
        <span id="i-am">I am a full stack software developer.</span>
      </h1>
      <div id="portal" v-if="showPortal"></div>
      <div id="cover" v-if="showPortal" ></div>
    </header>
    <main>
      <p>
        I'm a Full Stack Developer with a passion for building scalable, efficient solutions that
        empower users.
        <br>
        With experience in technologies like Java, Spring Boot, PostgreSQL, Python, and Vue.js, I enjoy
        tackling
        complex challenges and delivering creative, impactful results.
        <br>
        One of my key projects, VetRA, showcases my
        ability
        to create full stack applications that solve real-world problems, such as improving communication between
        veterinary clinics and their clients. I approach challenges without hesitation, applying both technical
        expertise
        and a creativity to deliver impactful results.
      </p>
      <ul>
        <li id="vetra-container">
          <h2>Vetra</h2>
          <img src="../assets/img/VetRA-Preview.png" alt="Vetra Preview" id="vetra-preview">
        </li>
        <li>
          <h2>Kennel Map</h2>
          <img src="../assets/img/Kennel-Map-Preview.png" alt="Kennel Map Preview" id="kennel-map-preview">
        </li>
        <li>
          <h2>Date Stamp</h2>
          <img src="../assets/img/Date-Stamp-Preview.png" alt="Date Stamp Preview" id="date-stamp-preview">
        </li>
      </ul>
    </main>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const showGreeting = ref(true);

const toggleGreeting = () => {
  showGreeting.value = !showGreeting.value
}

const togglePortal = () => {
  showPortal.value = !showPortal.value
}

const showPortal = ref(true)


setTimeout(toggleGreeting, 3000)
setTimeout(togglePortal, 4000)

</script>

<style scoped>
@import "../assets/main.css";

@keyframes slide-in-up-out {
  0%, 10%{
    transform: translateY(20vh);
  }
  20%, 85% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(20vh);
  }

}

@keyframes slide-in-up {
  0%, 10%{
    transform: translateY(20vh);
  }
  100% {
    transform: translateY(0vh);
  }
}

@keyframes scale-in-out {
  0%{
    transform: scale(0);
  }
  10%, 90% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}


#home-view {
  background-color: var(--background-color-1);

  header {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      margin: 0px;
      text-align: center;
      opacity: 0;
    }

    .visible {
      opacity: 1;
      transition: all 1s;
    }

    #greeting {
      text-align: center;
      font-size: 15vh;
      animation: slide-in-up-out 3s ease ;
      overflow: hidden;
      position: absolute;
      bottom: 50%;
    }

    #portal {
      width: 40vw;
      z-index: 1001;
      border-top: 5px solid black;
      animation: scale-in-out 4s ease;
      position: absolute;
      top: 50%;
    }

    #cover {
      height: 40vh;
      width: 100vw;
      background-color: var(--background-color-1);
      z-index: 1000;
      position: absolute;
      top: 50%;
    }

    #my-name{
      animation: slide-in-up .8s ease ;
      position: absolute;
      bottom: 50%;
    }
    #name {
      font-size: 40px;
    }
    #i-am {
      font-size: 30px;
    }


  }

  main {

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      width: 100%;

      li {
        width: 90%;
        display: flex;
        flex-direction: column;
        position: relative;

        h2 {
          position: absolute;
          color: rgb(57, 195, 250);
          padding: 10px;
          padding-bottom: 20px;
          margin: 0px;
          width: calc(100% - 20px);
          background: linear-gradient(to bottom, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 150%);
          font-size: 40px;
          text-shadow: 5px 2px 0px rgba(0, 0, 0, 0.114);
        }

        img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          align-self: center;
        }


        #kennel-map-preview {
          object-position: top;
        }

        #date-stamp-preview {
          object-position: bottom;
        }
      }

      #vetra-container {
        h2 {
          background: linear-gradient(to bottom, rgb(0, 0, 0), rgba(255, 255, 255, 0));

        }
      }
    }
  }
}
</style>
