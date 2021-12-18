<template>
    <div class="content" v-if="this.post.id">
        <div class="main">
            <h1> {{ this.post.title }} </h1>
            <p> {{ this.post.note }} </p>
        </div> 

        <div class="seperator"/>

        <div class="markdown" v-html="markdownToHtml"/>
    </div>
    <p v-else> Loading...</p> 
</template>

<script>
import { marked } from 'marked';
import BlogService from '@/services/BlogService';

export default {
    data() {
        return {
            post: {}
        }
    },
    computed: {
        markdownToHtml() {
            return marked(this.post.body);
        }
    },
    async mounted() {
        this.post = await BlogService.getPost(this.$route.params.id);
    }
}
</script>

<style scoped>
    .content {
        min-width: 375px;
        max-width: 750px;
        margin: auto;
    }

    .main {
        margin-bottom: 15px;
    }

    .main h1 {
        font-size: 34px;
    }

</style>