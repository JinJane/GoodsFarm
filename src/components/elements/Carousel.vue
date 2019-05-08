<template>
  <div>

    <div id="example" >
      <carousel-3d >
        <slide v-for="(slide, i) in slides" :index="i" :key="i" >
          <figure >
              <img v-bind:src="slide.src"  />
              <figcaption>
                <h2>{{slide.title}}</h2>
                <p>{{slide.desc}}</p>
              </figcaption>
          </figure>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>
<script>

import {Carousel3d, Slide} from 'vue-carousel-3d'
export default {
    components: {
    Carousel3d,
    Slide
  },
    data(){
        return{
             slides: [{
      title: 'Seungri\'s Alleged',
      src: 'http://cdn.koreaboo.com/wp-content/uploads/2016/12/gugudan-sejeong-1-360x270.jpg',
      desc: 'dummy description text here...'
    }, {
      title: 'Emma',
      src: 'http://img23.fansshare.com/media/content2/360x270_Charlbi-Dean-Kriek-star-continues-to-rise-in-US-as-model-and-actress-653940467.jpg',
      desc: 'dummy description text here...'
    }, {
      title: 'Kim Tae Hee',
      src: 'https://lh4.googleusercontent.com/jviHIWcTfGcI1eZbu9qPYDjEwkLXoDkqT_b_VDSXw6GXh1Ij_sUi6YuxG0TWd1QB9jkEt1MPU4qHcUiDUWHIdJK4v2qW7NcwQ6xLUj0_3KWwYASxX9UdVSA_R1fR7sljkg',
      desc: 'dummy description text here...'
    }, {
      title: 'Kate',
      src: 'http://img23.fansshare.com/media/content3/360x270_girl-of-the-day--romanian-model-beatrice-adochitei-5074.jpg',
      desc: 'dummy description text here...'
    }, {
      title: 'Sherry',
      src: 'http://cdn.koreaboo.com/wp-content/uploads/2017/02/bbanana4-360x270.png',
      desc: 'dummy description text here...'
    }]
        }
    }
}
</script>
<style>
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
figure {
  padding: 0;
  margin: 0;
  
}

figure figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  padding: 10px;
  background-color: black;
  /* IE 8 */
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  /* IE 5-7 */
  filter: alpha(opacity=50);
  /* Netscape */
  -moz-opacity: 0.5;
  /* Safari 1.x */
  -khtml-opacity: 0.5;
  /* Good browsers */
  opacity: 0.5;
}
</style>
