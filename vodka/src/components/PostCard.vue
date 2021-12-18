<template>
    <div>
        <router-link :to="{ name: 'ViewPost', params: { id: post.id } }" class="cardtitle"> {{ post.title }} </router-link>
        <p> {{ post.note }} </p>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
}
</script>

<style scoped>
    div {
        text-align: left;
        padding: 5px;
        display: block;
        word-wrap: break-word;
        margin-bottom: 15px;
    }

    div .cardtitle {
        font-size: 24px;
        font-weight: bold;
        text-decoration: underline;
    }
</style>
