<template lang='pug'>

nav.navbar.has-background-light
  .navbar-brand
    nuxt-link.navbar-item(to="/")
      img(src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28")
    .navbar-burger.burger(data-target="navbarMenu" @click="showNav = !showNav" :class="{'is-active': showNav}")
      span
      span
      span
  #navbarExampleTransparentExample.navbar-menu(:class="{'is-active':showNav}")
    .navbar-end
      nuxt-link.navbar-item(to="/")
        | Home
      .navbar-item.has-dropdown.is-hoverable
        .navbar-dropdown.is-boxed
          nuxt-link.navbar-item(v-for="item in items" :key="item.title" :to="item.url")
            | {{ item.title }}
      .navbar-item
        p.control
          a.button.is-primary(href="https://github.com/jgthms/bulma/releases/download/0.7.0/bulma-0.7.0.zip")
            span.icon
              i.fa.fa-download
            span Download
</template>

<script lang='ts'>
export default {
  data() {
    return {
      showNav: true,
      items: [
        { title: 'Home', icon: 'home', url: '/' },
        { title: 'Feature', icon: 'code', url: '/feature' },
        { title: 'Contact', icon: 'question_answer', url: '/contact' }
      ]
    }
  }
}
</script>