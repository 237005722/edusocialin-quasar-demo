<template>
  <q-page class="bg-grey-2">
    <div class="row">
      <q-toolbar class="q-mb-xs">
        <q-breadcrumbs class="text-grey q-pt-md q-pb-md" active-color="accent">
          <q-breadcrumbs-el icon="home" to="/teacher/classes" />
          <q-breadcrumbs-el label="课堂列表" icon="local_bar" />
        </q-breadcrumbs>
        <q-space/>
        <q-btn round dense ripple no-caps icon="add" color="accent" class="q-ml-md">
          <q-menu
            :offset="[0,10]"
            transition-show="rotate"
            transition-hide="rotate"
          >
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-icon name="person" color="secondary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>新增课堂</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-icon name="supervisor_account" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>加入课堂</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </div>

    <q-infinite-scroll @load="onLoad" :offset="250" class="row items-center justify-start q-col-gutter-x-md q-col-gutter-y-lg ">
      <div v-for="(item, index) in items" :key="index" class="col-6">
        <q-card class="my-card no-shadow">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6">我的第一个测试课堂</div>
              </div>
              <div class="col-auto">
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section>复制此课堂</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            课堂描述课堂描述课堂描述课堂描述课堂描述
          </q-card-section>
          <q-parallax
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            :height="100"
          />
          <q-card-actions align="around">
            <q-btn to="/teacher/classes/classRoom" flat rounded icon="add">进入课堂</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <template slot="loading">
        <div class="row justify-center q-my-md">
          <q-spinner-gears color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>

</template>

<script>
export default {
  name: 'ClassList',
  data () {
    return {
      items: [{}, {}],
      link: 'myClasses'
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
      setTimeout(() => {
        if (this.items) {
          this.items.push({}, {})
          done() // 完成更多数据加载后，请不要忘记调用传入的done()函数。
        }
      }, 1000)
    }
  }
}
</script>

<style scoped lang="sass">
  .my-card
    width: 100%
    border-radius: 0.5rem
</style>
