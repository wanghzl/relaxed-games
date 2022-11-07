<template>
    <!-- app
    <router-link to="/login">注册</router-link> -->
    <router-view></router-view>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import renju from './components/renju.vue'
import { mainStore } from './store'
let main = mainStore()

</script>

<style lang="less">

</style>
