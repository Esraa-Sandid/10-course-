<template>

    <nav class="navbar navbar-expand-lg py-3 fixed-top">
      <div class="container">
          <a class="navbar-brand text-white fs-4" href="#">Hidayah</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <router-link to="/" class="nav-link active text-white" aria-current="page" href="#">Home</router-link>
                  </li>
                  <li class="nav-item mx-4">
                      <a class="nav-link text-white" href="#">About</a>
                  </li>
                  <li class="nav-item mx-4">
                      <router-link to="/services" class="nav-link text-white" href="#">Services</router-link>
                  </li>
                  <li class="nav-item mx-4">
                      <a class="nav-link text-white" href="#">Team</a>
                  </li>
                  <li class="nav-item mx-4">
                      <a class="nav-link text-white" href="#">Contact</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</template>
<script>
export default{
 name:'NavBar'
}
</script>
<style>
</style>