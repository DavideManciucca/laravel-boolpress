<template>
    <div class="container">
        <h1>Elenco dei post</h1>
        <div class="wrapper">
            <PostComp  v-for="post in posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script>
import PostComp from '../../partials/PostComp.vue';
export default {
    name: 'BlogComp',
    components :{
        PostComp,
    },

    data(){
        return{
            apiUrl:'/api/posts',
            posts : null,
        }
    },
    mounted(){
        this.getApi();
    },
    methods:{
        getApi(){
           axios.get(this.apiUrl)
           .then(res =>{
            this.posts = res.data.posts;
            console.log(this.posts);
           })
        }
    }
}
</script>

<style lang="scss" scoped>
.container{


    .wrapper{
        display: flex;
        // width: 100%;
        flex-wrap: wrap;
        width: 100%;
        align-content: center;
        align-items: center;

    }
}
</style>
