<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link :to="{ name: 'ProductView' }" class="navbar-brand">首頁</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'Product' }" class="nav-link">產品</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'HelloWorld' }" class="nav-link">HelloWorld</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <main class="container">
      <div class="row">
        <div class="col-sm-3">
          <Nav></Nav>
        </div>
        <div class="col-sm-9">
          <transition name="router-anim">
            <router-view class="position-absolute"></router-view>
          </transition>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Nav from '../components/ProductView/Nav';

export default {
  name: 'ProductView',
  components: {
    Nav,
  },
};
</script>

<style scoped>
  main {
    margin-top: 58px;
  }
</style>
