<template>
    <div class="box_comment">
        <div class="user_comment">{{comment.UserName}}</div>
        <div class="user_comment">{{comment.comment_content}}</div>
    </div>
</template>

<script>
export default {
    name:"commentMsg",
    data(){
        return{
            comment:{
                comment_content:"",
                UserName: localStorage.getItem("UserName")
            },
        }
    }
}
</script>

<style lang="scss" scoped>

</style>