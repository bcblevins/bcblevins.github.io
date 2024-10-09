

<template>
  <header>
    <h1>Beau Blevins</h1>
  </header>
  <main>
    <ul>
      <li>
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
</template>

<script setup>
</script>

<style scoped>

main {
  ul {
    li {
      img {
        width: 90%;
        height: 400px;
        object-fit: cover
      }
      #kennel-map-preview {
        object-position: top;
      }
      #date-stamp-preview {
        object-position: bottom;
      }
    }
  }
}

</style>
