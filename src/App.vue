<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
import 'bootstrap/scss/bootstrap.scss';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap';

$(() => {

});

export default {
  name: 'App',
};
</script>

<style>
  .router-link-active {
    color: black;
  }

  .router-anim-enter-active {
    animation: coming .5s;
    opacity: 0;
  }
  .router-anim-leave-active {
    animation: going .6s;
  }

  @keyframes going {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50px);
      opacity: 0;
    }
  }

  @keyframes coming {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
