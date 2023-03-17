<template>
    <div class="card">
      <div class="card-image">
        <!-- <img :src="item.image" /> -->
      </div>
      <div class="card-content">
        <h3 class="card-title">title</h3>
        <p class="card-subtitle">subtitle</p>
      </div>
    </div>
  </template>
  
  <script>
  /* eslint-disable vue/multi-word-component-names */
  export default {
    name: 'Card',
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    position: relative;
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-image {
    height: 200px;
    overflow: hidden;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .card-title {
    font-size: 24px;
    margin: 0 0 10px;
  }
  
  .card-subtitle {
    font-size: 18px;
    margin: 0;
  }
  </style>
  