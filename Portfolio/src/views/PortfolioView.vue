<template>
    <div id="portfolio">
        <div id="about-view">
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
                to create full stack applications that solve real-world problems, such as improving communication
                between
                veterinary clinics and their clients. I approach challenges without hesitation, applying both technical
                expertise
                and a creativity to deliver impactful results.
            </p>
        </div>
        <div id="vetra" class="project-view">
            <aside>
                <h2>VetRA</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fuga corporis eligendi aperiam
                    officiis doloremque illum, voluptates cum blanditiis.</p>
                <h3>API</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veritatis odit harum reiciendis iusto
                    velit eum provident maiores deserunt placeat consequatur, officia tempora quos vel debitis nobis
                    ratione corrupti possimus.</p>
                <h3>App</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veritatis odit harum reiciendis iusto
                    velit eum provident maiores deserunt placeat consequatur, officia tempora quos vel debitis nobis
                    ratione corrupti possimus.</p>
            </aside>
            <section>
                <img src="" alt="VetRA Image">
            </section>
        </div>
        <div id="kennel-map" class="project-view">
            <aside>
                <h2>Kennel Map</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fuga corporis eligendi aperiam
                    officiis doloremque illum, voluptates cum blanditiis. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Maxime nulla, debitis labore iure ducimus, incidunt rem corrupti maiores unde id
                    impedit soluta! Eligendi, quisquam minus facilis sed nobis molestias eius.</p>

            </aside>
            <section>
<img src="" alt="Kennel Map Image">
            </section>
        </div>
        <div id="date-stamp" class="project-view">

            <aside>
                <h2>Date Stamp</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo fuga corporis eligendi aperiam
                    officiis doloremque illum, voluptates cum blanditiis. Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Maxime nulla, debitis labore iure ducimus, incidunt rem corrupti maiores unde id
                    impedit soluta! Eligendi, quisquam minus facilis sed nobis molestias eius.</p>

            </aside>
            <section>
                <img src="" alt="Date Stamp Image">
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
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 2fr;
        scroll-snap-align: center;
        padding-inline: 40px;

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
        }
    }
}

#portfolio:hover {
    /* Move the background while scrolling (simulated parallax effect) */
    background-position: 0% 100;
  }
</style>