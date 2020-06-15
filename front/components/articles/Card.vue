<template lang='pug'>
.card
  .card-image
    figure.image.is-2by1
      img(:src="article.image")
  .card-content
    .content
      p.title.is-4 {{article.title}}
      | {{article.description}}
      br
      time(datetime="2016-1-1") 11:09 PM - 1 Jan 2016
</template>

<script lang='ts'>
export default {
  props: {
    article: {
      image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
    }
  }
}
</script>

