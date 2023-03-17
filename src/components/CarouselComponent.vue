

<template>
    <div>
        <template>
  <div>
    <Carousel :autoplay="true" :autoplay-timeout="5000" />
      <card v-for="(item, index) in items" :key="index" :item="item" />
  
  </div>
</template>
    </div>
</template>
<script>

import Carousel from 'vue-carousel-3d';
import Card from './model/Card.vue';

/* eslint-disable vue/multi-word-component-names */

export default {
    name: 'CarouselComponent',
    components: {
        Carousel,
        Card,
    },
    data() {
        return {
            items: [
                {
                    title: 'Card 1',
                    subtitle: 'Subtitle 1',
                    image: 'https://placeimg.com/640/480/animals',
                },
                {
                    title: 'Card 2',
                    subtitle: 'Subtitle 2',
                    image: 'https://placeimg.com/640/480/arch',
                },
                {
                    title: 'Card 3',
                    subtitle: 'Subtitle 3',
                    image: 'https://placeimg.com/640/480/nature',
                },
            ],
        };
    },
};
</script>
