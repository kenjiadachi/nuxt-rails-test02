<template>
  <h1>Hello, {{ name }}</h1>
</template>

<script lang="ts">
export default {
  asyncData({ $axios, params }: {$axios: any, params: any}) {
    return $axios.$get(`/api/users/${params.id}`)
      .then((res: any) => {
        return { name: res.name }
      })
  }
}
</script>