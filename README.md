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
yarn run serve
# GitHubPage用にビルドする
yarn run build
# GitHubPageに公開
yarn run deploy-demo
# npmに公開するライブラリを生成する
yarn run build-bundle
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

<script>
import VueImageBase64 from 'vuejs-image-base64'

export default {
  name: 'App',
  components: {
    VueImageBase64
  },
  data () {
    return {
      images: {data: []},
      errors: []
    }
  },
  methods: {
    handleChange: function(data) {
      console.log(data);
      if (data.result) {
        let list =this.images.data
        list.push(data);
        this.images = {data: list}
      } else {
        this.errors = data.messages;
      }
    }
  }
}
</script>
```
 
# Author
 
[isystk](https://github.com/isystk)

# License
 
[MIT](https://en.wikipedia.org/wiki/MIT_License).
