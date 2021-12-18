<template>
  <div>
    <h1> Hello, I am an indepentent security researcher</h1>
    <p>
      I am mainly focusing on making modern web-applications and creating red-teaming malware. 
      I also have a lot of expertise in kernel-development especially for Windows making game-cheats since I was a pre-teen.
    </p>
    <h1> Check out my most recent posts </h1>
    <div v-for="post in this.posts" :key="post.id">
      <post-card :post="post"/>
    </div>
    <div class="loadmore">
      <button @click="loadMore" class="btn"> Load more </button>
    </div>
    <contact-form/>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import PostCard from '@/components/PostCard.vue';
import BlogService from '@/services/BlogService';

export default {
  data() {
    return {
      posts: [],
      limit: 1
    }
  },
  watch: {
    limit: async function() {
      this.posts = await BlogService.getPosts(this.limit);
    }
  },
  async mounted() {
    this.posts = await BlogService.getPosts(this.limit);
  },
  methods: {
    loadMore() {
      this.limit++;
    }
  },
  components: {
    ContactForm,
    PostCard
  }  
}
</script>

<style scoped>
  .loadmore {
    align-self: left;
    justify-content: left;
    align-items: left;
  }
</style>