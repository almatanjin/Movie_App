<template>
  <div class="home">
    <div class="feature-card">

      <router-link to="/movie/tt0409591">
        <img src='https://media.timeout.com/images/100654045/image.jpg' class="feature_img" />
        <div class="detail">
          <h3>Titanic</h3>
          <p>A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.</p>
        </div>
      </router-link>

    </div>
  </div>
  <form  @submit.prevent="myfunction()"    class="search-box">
    <input type="text" placeholder="What are you looking for?" v-model="search"/>
    <input type="submit" value="search"  />
  </form>
</template>

<script setup>
import { ref } from 'vue';
import env from '@/env.js'




const search = ref("")
const movies = ref([])


const myfunction = ()=>{
  if (search.value != "") {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            movies.value = data.Search;
            search.value = "";
          });
          
      }
}

// @ is an alias to /src


// export default {
//   name: 'HomeView',
  
// }
</script>

<style lang="scss">

.home{
  .feature-card{
    position: relative;

    .feature_img{
      display: block;
      width: 100%;
      height: 385px;
      
      object-fit: cover;


      position: relative;
      z-index: 0;
    }

    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.6);
      padding: 16px;
      z-index: 1;

      h3{
        color: azure;
        margin-bottom: 16px;
      }
      p{
        color: azure;
      }
      
    }
  }
  
}
.search-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  align-items: center;

  input{
    display: block;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    background-color: #496583;


    &[type="text"]{
      width: 100%;
      color: azure;
      background-color: #496583;
      font-size: 20px;
      padding: 10px 16px;
      border-radius: 8px;
    }
    &::placeholder{
      color: azure;
    }
    &:focus{
      box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
    }
    &[type="submit"]{
      width: 100%;
      max-width: 300px;
      background-color: #42B883;
      padding: 16px;
      border-radius: 8px;
      color: aliceblue;
      font-size: 20px;
      text-transform: uppercase;
      transition: 0.4s;
      margin-top: 6px;


      &:active {
        background-color: #3B8070;
      }
    }
  }
  
}

</style>
