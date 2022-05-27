# vue-image-base64
 
画像ファイルをBase64に変換するVue.js用コンポーネントです
 
# DEMO
 
https://isystk.github.io/vue-image-base64
 
# Features
 
- ファイルを選択するとBase64に変換されたデータをJSON形式で返却します。
- 画像のサイズを指定することでリサイズすることが可能です。
- HEIC形式の画像の場合はJPEGに変換します。
- ドラッグ＆ドロップでアップロードファイルの選択が可能です。
 
# Requirement
 
* heic2any 0.0.3
 
# Installation
 
```bash
yarn add -D vuejs-image-base64
```
 
# Usage
 
```bash
git clone https://github.com/isystk/vue-image-base64.git
cd vue-image-base64
# 開発用に起動する
yarn serve
# GitHubPageに公開
yarn build
npm install gh-pages -g
yarn deploy-demo
# npmに公開する
yarn build-bundle 
npm login
npm publish
```
 
# Note

```
<template>
  <VueImageBase64 
    :maxFileSize="10485760"
    :thumbnailSize="100"
    :drop="true"
    dropText="ファイルをドラッグ＆ドロップもしくは"
    capture="environment"
    :multiple="true"
    @handleChange="handleChange"
  />
</template>

<script setup>
import VueImageBase64 from 'vuejs-image-base64'
import {reactive} from "vue";

const store = reactive({
  images: {data: []},
  errors: []
})

const handleChange = function(data) {
  if (data.result) {
    let list =store.images.data
    list.push(data);
    store.images = {data: list}
  } else {
    store.errors = data.messages;
  }
}
</script>
```
 
# Author
 
[isystk](https://github.com/isystk)

# License
 
[MIT](https://en.wikipedia.org/wiki/MIT_License).