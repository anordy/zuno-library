<template>
  <header class="header">
    <img src="../assets/zuno.png" class="logo" alt="zuno">
    <v-icon size="x-small" id="menu-icon" class="card-icon">mdi-menu</v-icon>

    <nav class="navbar">
      <a href="#home" class="active">Home</a>
      <a href="#category">Category</a>
      <a href="#popular">Popular</a>
      <a href="#my-pick">My Picks</a>
    </nav>
    <div class="right-logo-icons">
      <div class="row">
        <div class="logo-icon">
          <box-icon type='solid' name='shopping-bag-alt'></box-icon>
        </div>
        <div class="logo-icon">
          <img src="../assets/profile.png" alt="">
        </div>
      </div>
    </div>
  </header>
</template>
  
  
<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: 'Navbar',
}

</script>
  
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: .5rem 9%;
  background: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.header.sticky {
  border-bottom: .1rem rgba(0, 0, 0, .2);
}

.logo-icon {
  height: 28px;
  width: 28px;
  border-radius: 30px;
  background-color: transparent;
  margin-left: 1rem;
}

.logo-icon box-icon {
  color: var(--second-bg-color);
}

.navbar {
  margin-right: 22rem;
}

.navbar a {
  font-size: .8rem;
  color: var(--main-color);
  margin-left: .5rem;
  transition: .3s;
  padding-left: 17px;
  padding-right: 17px;
  padding-top: 3px;
  padding-bottom: 3px;
  text-decoration: none;
}

.right-logo-icons {
  float: right;
}

.navbar a:hover,
.navbar a.active {
  color: var(--main-color);
  border-radius: 40px;
  background-color: var(--text-color);
}

#menu-icon {
  font-size: 3.6rem;
  color: var(--text-color);
  display: none;
}

@media (max-width: 1200px) {
  html {
    font-size: 55%;
  }
}

@media (max-width: 991px) {
  #menu-icon {
    display: block;
  }
  .header {
    padding: 2rem 3%;
  }

  section {
    padding: 10rem 3% 2rem;
  }

  .service {
    padding-bottom: 7rem;
  }

  .book {
    padding-bottom: 7rem;
  }

  .contact {
    min-height: auto;
  }

  .footer {
    padding: 2rem 3%;
  }


}

@media (max-width: 768px) {
  #menu-icon {
    display: block;
  }

  .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem 3%;
    background: var(--bg-color);
    border-top: 1rem 3%;
    background: var(--bg-color);
    border-top: .1rem solid rgba(0, 0, 0, .2);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
    display: none;
  }

  .right-logo-icons {
    display: none;
  }

  .navbar.active {
    display: block;

  }

  .navbar a {
    display: block;
    font-size: 2rem;
    margin: 3rem 60;
  }

}

@media (max-width: 617px) {}

@media (max-width: 450px) {}

@media (max-width: 350px) {}</style>