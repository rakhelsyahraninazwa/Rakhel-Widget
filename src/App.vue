<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Lokasi</router-link> |
    <router-link to="/cuaca" class="nav-link">Cuaca</router-link> |
    <router-link to="/stopwatch" class="nav-link">Stopwatch</router-link> |
    <router-link to="/foto" class="nav-link">Foto</router-link> |
    <router-link to="/game" class="nav-link">Game Susun Kata Buah</router-link>
  </nav>
  <router-view />
</template>

<style>
.navbar {
  padding: 20px;
  background-color: #728fce;
  border-bottom: 1px solid #ccc;
}

.nav-link {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
  padding: 5px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #0000;
}

.router-link-exact-active {
  color: #000;
}
</style>
