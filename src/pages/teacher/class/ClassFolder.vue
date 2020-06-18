<template>
  <q-page class="bg-grey-2">
    <div class="row">

      <q-toolbar class="text-grey-8 text-subtitle2">
        <q-space/>
        <q-toggle
          v-model="classActivity"
          label="只显示最近"
          color="primary"
          checked-icon="check"
          unchecked-icon="clear"
          keep-color
        />
        <q-btn flat rounded dense ripple no-caps icon="arrow_drop_down" label="排序" size="13px" class="q-ml-md">
          <q-menu
            :offset="[0,10]"
            transition-show="rotate"
            transition-hide="rotate"
          >
            <div class="row q-pb-md">
              <div class="col-6">
                <q-list dense>
                  <q-item-label header>作者</q-item-label>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="person" color="dark" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>自己的</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="supervisor_account" color="dark" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>别人的</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
              <div class="col-6">
                <q-list dense>
                  <q-item-label header>类型</q-item-label>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="invert_colors" color="dark" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>最近的</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="opacity" color="dark" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>最早的</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </div>

    <div class="row">
    <div class="col-12">
      <q-card class="my-card no-shadow q-mb-md q-pl-md q-pr-md">
        <q-toolbar>
          <q-toolbar-title class="text-subtitle1">
            文件夹列表
          </q-toolbar-title>
          <q-btn unelevated round color="dark" text-color="white" icon="add" size="12px">
            <q-tooltip content-class="bg-dark">新建文件夹</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-separator />
        <q-list>
          <q-infinite-scroll @load="onLoad" :offset="50">
            <q-item v-for="(item, index) in items" :key="index" class="q-pt-lg q-pb-lg cursor-pointer">

              <q-item-section avatar>
                <q-icon name="folder_shared" color="black" size="34px" />
              </q-item-section>

              <q-item-section>
                <q-item-label>第一个资源文件夹</q-item-label>
                <q-item-label caption>owner：qing cheng</q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label>2020/01/20</q-item-label>
              </q-item-section>

              <q-item-section side>
                <div class="text-grey-8 q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="delete" >
                    <q-tooltip>删除此文件夹</q-tooltip>
                  </q-btn>
                  <q-btn size="12px" flat dense round icon="share" >
                    <q-tooltip>分享此文件夹</q-tooltip>
                  </q-btn>
                </div>
              </q-item-section>
            </q-item>

            <template slot="loading">
              <div class="row justify-center q-my-md q-pb-md">
                <q-spinner-gears color="primary" size="40px" />
              </div>
            </template>

          </q-infinite-scroll>
        </q-list>
      </q-card>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'classFolder',
  data () {
    return {
      items: [{}, {}, {}, {}],
      classActivity: false
    }
  },
  created () {
    this.query = this.$route.query
    console.log('classes query', this.query)
  },
  mounted () {
  },
  methods: {
    onLoad (index, done) {
    }
  }
}
</script>

<style scoped>

</style>
