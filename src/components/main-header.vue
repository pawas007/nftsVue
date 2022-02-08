<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'list'}" class="nav-link">List</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name:'formRed'}" class="nav-link">FormRed</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'nftConcept'}" class="nav-link">NftConcept</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name:'nfts'}" class="nav-link">Nfts</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{name:'ntfDetails'}" class="nav-link">NtfDetails</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'ntfsBigger'}" class="nav-link">ntfsBigger</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "main-header",

}
</script>

<style scoped lang="scss">
@import "~bootstrap";

.router-link-exact-active{
  color: black !important;
}

</style>