<template>
<div >
    <HeaderComp />
    <div class="wrapper">
        <ul>
            <li v-for="post in posts" :key="post.id">
            <div> {{post.title}}</div>
                <div> {{post.content}}</div>
            </li>

        </ul>
    </div>
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
            apiUrl:'/api/posts',
            posts : null
        }
    },

    methods:{
         getApi(){
            axios.get(this.apiUrl)
            .then(res=>{
             console.log(res.data);
             this.posts=res.data.posts;
            //  console.log(this.posts);

            })

         },

    },
     mounted(){
         this.getApi()

    },
}
</script>

<style lang="scss" scoped>
.wrapper{
    width: 70%;
    margin: 0 auto;
}
</style>
