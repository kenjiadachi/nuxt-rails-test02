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