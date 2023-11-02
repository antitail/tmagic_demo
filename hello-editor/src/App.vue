<template>
  <m-editor v-model="value" :runtime-url="runtimeUrl" :component-group-list="componentGroupList" :menu="menu"></m-editor>
</template>

<script lang="ts" setup>
import { markRaw, ref, toRaw } from 'vue';
import { ArrowLeft, Coin } from '@element-plus/icons-vue'
import componentGroupList from "./configs/componentGroupList";
import dsl from './configs/dsl';

const value = ref(dsl);

const runtimeUrl = 'http://localhost:2012/';

const menu = ref({
  left: [
    {
      type: 'button',
      icon: markRaw(ArrowLeft),
      tooltip: '返回',
    },
    '/',
    {
      type: 'text',
      text: '.temp',
    },
  ],
  center: ['delete', 'undo', 'redo', 'zoom'],
  right: [
    {
      type: 'button',
      text: '保存',
      icon: markRaw(Coin),
      disabled: false,
      handler: ({ editorService }: any) => {
        const pageData = toRaw(editorService.get('root'))
        console.log(pageData, "pageData")
      },
    },
  ],
})
</script>

<style>
html,
body,
#app,
.m-editor {
  height: 100vh;
}

body {
  margin: 0;
}
</style>