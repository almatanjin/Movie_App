<template>
  <header>
    <router-link to="/">
      <h1><span></span>Movies</h1>
    </router-link>
    
  </header>
  <main>
    <router-view/>
  </main>
  <router-link to="/home">Home</router-link>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


body {
  background-color: #35495E;
}
a {
  text-decoration: none;
}
header{
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.1);

  h1{
    color: antiquewhite;
    font-size: 30px;
  }
}
</style>
