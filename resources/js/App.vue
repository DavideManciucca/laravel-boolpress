<template>
<div >
    <HeaderComp />
    <main>
        <router-view></router-view>
    </main>
    <FooterComp />
</div>
</template>

<script>
import HeaderComp from './components/partials/HeaderComp.vue';
import FooterComp from './components/partials/FooterComp.vue';
export default {
    name : 'App',
    components:{
        HeaderComp,
        FooterComp,
    },
    data(){
        return{

        }
    },

    methods:{


    },
     mounted(){


    },
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 70%;
    margin: 0 auto;
}
</style>
