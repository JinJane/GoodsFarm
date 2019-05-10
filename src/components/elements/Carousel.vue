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
      title: 'Meat',
      src: 'http://www.phtnet.org/article/images/a31_1.jpg',
      desc: 'dummy description text here...'
    }, {
      title: 'Milk',
      src: 'http://www.thailandbestbeauty.com/wp-content/uploads/2016/06/%E0%B8%99%E0%B8%A1%E0%B8%AA%E0%B8%94.jpg',
      desc: 'dummy description text here...'
    }, {
      title: 'Egg',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZ1juuRE9oPsTf6PvTCc-Kkp49UlhCD4jer9wVr_zqeaovxKW',
      desc: 'dummy description text here...'
    }, {
      title: 'Vegetable',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yqMiSoB-TzB4j8W_6XkPe3qjbwFWAiSjJTfiSTdbjdhWNt5Qdg',
      desc: 'dummy description text here...'
    }, {
      title: 'Fruit',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUOONOO_A-4p_fWozqCVOPd1ktGoxi4x_6rg_AFPrsO9f5gKrVA',
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
