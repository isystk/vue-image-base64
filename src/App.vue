<template>
  <div class="wrap">
    <header>
      <div class="header-image">
        <div class="logo">VUE IMAGE BASE64</div>
      </div>
    </header>
    <div class="content">
      <main>
        <article class="detail">
          <div class="entry-header">
            <h1 class="entry-title">
              <a href="#">画像ファイルをBase64に変換するVue.js用コンポーネントです</a>
            </h1>
          </div>
          <div class="entry-content">
            <h2>デモ</h2>
            <VueImageBase64 
              :maxFileSize="10485760"
              :thumbnailSize="100"
              :drop="true"
              dropText="ファイルをドラッグ＆ドロップもしくは"
              capture="environment"
              :multiple="true"
              @handleChange="handleChange"
            />
            <div>
              <table id="select-image">
                <thead>
                  <tr>
                    <th>ファイル名</th>
                    <th>元の画像</th>
                    <th>リサイズ後画像</th>
                    <th>元のサイズ</th>
                    <th>リサイズ後サイズ</th>
                    <th>タイプ</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="image in images.data" :key="image.fileName">
                      <td>{{image.fileName}}</td>
                      <td><img :src="image.ofileData" /></td>
                      <td><img :src="image.fileData" /></td>
                      <td>{{image.ofileSize}}</td>
                      <td>{{image.fileSize}}</td>
                      <td>{{image.fileType}}</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </main>
    </div>
  </div>
</template>


<script>
import VueImageBase64 from './components/VueImageBase64.vue'

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

<style>
</style>
