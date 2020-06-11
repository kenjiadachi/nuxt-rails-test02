<template lang='pug'>
article
  h1 {{article.title}}
  dl
    dt date
    dd {{article.date}}
  div
    img(:src="article.image")
  div(v-for="tag in article.tags" :key="tag") {{tag}}
  nuxt-content(:document="article")
</template>

<script lang='ts'>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug || 'index').fetch()
    return { article }
  }
}
</script>