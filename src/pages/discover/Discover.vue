<template>
  <q-page class="bg-grey-2">
    <div class="row flex flex-center q-pa-md">
      <div class="col-9 col-xl-9 col-lg-9 col-md-10 col-sm-12 col-xs-12">
        <div class="row flex q-col-gutter-md">
          <div class="col-9 col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 full-height">
            <div class="row">
              <q-card class="my-card no-shadow bg-white full-width">
                <q-toolbar>
                  <q-btn flat round dense icon="menu" class="q-mr-sm" />
                  <q-toolbar-title class="text-subtitle1">
                    教育商城
                  </q-toolbar-title>
                  <q-btn flat round dense icon="search" class="q-mr-xs" />
                </q-toolbar>
                <q-toolbar inset>
                  <q-toolbar-title class="text-subtitle1"><strong>教学</strong> 工具</q-toolbar-title>
                </q-toolbar>
              </q-card>
              <q-toolbar class="text-grey-8 text-subtitle2">
                <q-space/>
                <q-toggle
                  v-model="classActivity"
                  label="只显示最新的"
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
                          <q-item-label header>价格</q-item-label>
                          <q-item clickable v-close-popup>
                            <q-item-section avatar>
                              <q-icon name="person" color="dark" />
                            </q-item-section>
                            <q-item-section>
                              <q-item-label>免费的</q-item-label>
                            </q-item-section>
                          </q-item>
                          <q-item clickable v-close-popup>
                            <q-item-section avatar>
                              <q-icon name="supervisor_account" color="dark" />
                            </q-item-section>
                            <q-item-section>
                              <q-item-label>有价的</q-item-label>
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
            <q-infinite-scroll @load="onLoad" :offset="250" class="row items-center justify-start q-col-gutter-x-md q-col-gutter-y-lg ">
              <div v-for="(item, index) in items" :key="index" class="col-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <q-card class="my-card no-shadow">
                  <!--                    <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />-->
                  <q-parallax
                    src="https://cdn.quasar.dev/img/chicken-salad.jpg"
                    :height="150"
                  />
                  <q-card-section>
                    <q-btn
                      fab
                      color="primary"
                      icon="place"
                      class="absolute"
                      style="top: 0; right: 12px; transform: translateY(-50%);"
                    />
                    <div class="row no-wrap items-center">
                      <div class="col text-h6 ellipsis">
                        Cafe Basilico
                      </div>
                      <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                        <q-icon name="place" />
                        250 ft
                      </div>
                    </div>
                    <q-rating v-model="stars" :max="5" size="32px" />
                  </q-card-section>
                  <q-card-section class="q-pt-none">
                    <div class="text-subtitle1">
                      $・Italian, Cafe
                    </div>
                    <div class="text-caption text-grey">
                      Small plates, salads & sandwiches in an intimate setting.
                    </div>
                  </q-card-section>
                  <q-separator />
                  <q-card-actions>
                    <q-btn flat round icon="event" />
                    <q-btn flat color="primary">
                      Reserve
                    </q-btn>
                  </q-card-actions>
                </q-card>
              </div>
              <template slot="loading">
                <div class="row justify-center q-my-md">
                  <q-spinner-gears color="primary" size="40px" />
                </div>
              </template>
            </q-infinite-scroll>
          </div>

          <div class="col-3 col-xl-3 col-lg-3 gt-md">
            <div class="row">
              <q-card class="my-card no-shadow q-mb-md">
                <q-card-section>
                  <q-toolbar class="bg-transparent">
                    <q-toolbar-title>
                      <q-icon name="whatshot" color="negative"></q-icon>
                      热门商品
                    </q-toolbar-title>
                  </q-toolbar>
                  <q-list>
                    <q-item v-for="(item, index) in items2" :key="index" class="q-mb-sm" clickable v-ripple>
                      <q-item-section top avatar>
                        <q-avatar>
                          <img src="https://cdn.quasar.dev/img/chicken-salad.jpg">
                        </q-avatar>
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>Cafe Basilico $・Italian, Cafe</q-item-label>
                        <q-item-label caption lines="1">Small plates, salads & sandwiches in an intimate setting.</q-item-label>
                      </q-item-section>

                      <q-item-section side>
                        <q-icon name="chat_bubble" color="green" />
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- place QPageScroller at end of page -->
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab ripple icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-page>
</template>

<script>
export default {
  name: 'Discover',

  data () {
    return {
      profileValue: 71,
      items: [{}, {}, {}, {}],
      items2: [{}, {}, {}, {}, {}],
      classActivity: false,
      shareLabel: '与其他老师分享你的想法',
      stars: 4
    }
  },
  created () {
    this.query = this.$route.query
    console.log('home query', this.query)
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
    },
    onSubmit () {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: this.$q.lang.getLocale() === 'en-us' ? 'Submitted' : 'Create A Class Successful'
      })
      this.$router.push({ path: '/teacher/classes/class', query: { welcome: true } })
    },

    onReset () {
      this.createAClassForm.className = null
      this.createAClassForm.classDesc = null
      this.createAClassForm.grade = null
      this.createAClassForm.subject = null
    }
  }
}
</script>
<style scoped lang="sass">
  .my-card
    width: 100%
    border-radius: 0.5rem
</style>
