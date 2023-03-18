<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #EAE6D7;color: #1E1E1E;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/zuno.png" alt="" width="120" height="40" class="d-inline-block align-text-top">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item d-flex align-center">
              <a class="nav-link active" aria-current="page" href="">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#category">Category</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#popular">Popular</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#myPicks">My picks</a>
            </li>

          </ul>
          <div class="circle mr-2" style="height: 25px;width: 25px; border-radius: 25px; ">
            <img src="../assets/cart.png" alt="">
          </div>
          <div class="circle" style="height: 25px;width: 25px; border-radius: 25px; ">
            <img src="../assets/profile.png" alt="">
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
  
  
<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Navbar',


}

</script>
  
<style scoped>
.navbar {
  padding-left: 100px;
  padding-right: 120px;
}

.navbar-nav {
  margin-left: 70px;
}


.nav-link {
  /* background-color: green; */
  margin-left: 10px;
}
.active {
  background-color: #ffffff;
  border-radius: 15px;
  width: 80px;
  padding: 3px;
  /* height: 30px; */
  display: grid;
  text-align: center;
  font-size: 13px;
}



</style>