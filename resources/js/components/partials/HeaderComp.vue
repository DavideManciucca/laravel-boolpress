<template>
  <header>
    <div>
        <nav>
            <ul>
                <li ><a class="active" href="">HOME</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">CHI SIAMO</a></li>
                <li><a href="">CONTATTI</a></li>
            </ul>
        </nav>
    </div>
  </header>
</template>

<script>
export default {
    name:'HeaderComp'
}
</script>

<style lang="scss" scoped>
    header{
        background-color: rgb(239, 232, 232);
        height: 60px;
        padding: 30px;
        ul{
            list-style: none;
            text-align: center;
            li{
                display: inline-block;
                margin-left: 25px;
                margin-right:25px ;
                a{
                    color: black;
                    text-decoration: none;
                    &:hover{
                        text-decoration: underline;
                    }
                    &.active{
                        color: red;
                    }
                }
            }
        }
    }
</style>
