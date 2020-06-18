<template>
  <q-page class="bg-grey-2">
    <div class="row">
      <q-toolbar class="q-mb-xs">
        <q-breadcrumbs class="text-grey q-pt-md q-pb-md" active-color="accent">
          <q-breadcrumbs-el icon="home" to="/teacher/classes" />
          <q-breadcrumbs-el label="考试测验列表" icon="extension"/>
        </q-breadcrumbs>
        <q-space/>

        <q-btn round dense ripple no-caps icon="add" color="accent" class="q-ml-md">
          <q-tooltip content-class="bg-accent">发起考试</q-tooltip>
        </q-btn>
      </q-toolbar>
    </div>

    <q-infinite-scroll @load="onLoad" :offset="250" class="row items-center justify-start q-col-gutter-x-md q-col-gutter-y-lg ">
      <div v-for="(item, index) in items" :key="index" class="col-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <q-card class="my-card no-shadow">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6">2020年1月第一月月考</div>
              </div>
              <div class="col-auto">
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item to="/teacher/classes/examQuiz" clickable>
                        <q-item-section>考试详细</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            考试科目
            <div class="text-subtitle2">语文、数学、英语、理综</div>
          </q-card-section>
          <q-parallax
            src="https://cdn.quasar.dev/img/parallax1.jpg"
            :height="100"
          />
          <q-card-actions align="around">
            <q-btn to="/teacher/classes/examQuiz" flat rounded icon="announcement">考试详细</q-btn>
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
  name: 'ExamList',
  data () {
    return {
      items: [{}, {}, {}],
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
          this.items.push({}, {}, {})
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
