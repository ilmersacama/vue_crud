<script>
import { defineComponent } from 'vue'
import UserList from '@/views/UserList.vue'
export default defineComponent({
  components: {
    UserList
  },
  setup () {
    return {}
  }
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
