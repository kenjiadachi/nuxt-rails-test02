<template lang='pug'>
div
  .tile.is-ancestor(v-for="articles in results")
    .tile.is-parent.is-4(v-for="article in articles" :key="article.id")
      Card(:article="article")

</template>


<script>
import Card from '../../components/articles/Card.vue'

export default {
  components: {
    Card
  },
  async asyncData ({ $content }) {
    const articles = await $content('articles').fetch()
    let articlesArray = {};
    var idx = 0;
    articlesArray.results = [];
    var length = articles.length;

    while (idx + 3 < length){
        var result = articles.slice(idx,idx + 3)
        articlesArray.results.push(result);
        idx = idx + 3
    }

    var rest = articles.slice(idx,length+1)
    articlesArray.results.push(rest)
    return articlesArray
  }
}
</script>

<style lang='stylus' scoped>

.tile.is-ancestor
  margin 0;

</style>