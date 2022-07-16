<template>
<div class="wrapper">
  <div class="card">
    <h2>{{post.title}}</h2>
    <p>{{post.content}}</p>
  </div>
</div>
</template>

<script>
export default {
    name:'PostComp',
    props :{
        post : Object
    }
}
</script>

<style lang="scss" scoped>

</style>
