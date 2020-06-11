<template lang='pug'>
article
  section.hero
      .hero-body
        .container
          h1.title
            | {{article.title}}
          h2.subtitle
            | {{article.description}}
  section.section
    figure.image.is-2by1
      img(:src="article.image")
  section.section.tags.are-medium
    span.tag(v-for="tag in article.tags" :key="tag")
      | {{tag}}
  section.section
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

<style lang='stylus' scoped>

.nuxt-content
  h1, h2, h3, h4, h5, h6
    word-break: break-word;
    color: #363636;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.125;
    margin-bottom: 1.5rem;

</style>