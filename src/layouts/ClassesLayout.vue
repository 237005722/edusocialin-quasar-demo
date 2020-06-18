<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="bg-grey-2">
        <div class="row flex flex-center q-pa-md">
          <div class="col-9 col-xl-9 col-lg-9 col-md-10 col-sm-12 col-xs-12">
            <div class="q-card no-shadow lt-md">
              <q-toolbar class="row items-center justify-around">
                <router-link
                  exact
                  to="/teacher/classes"
                  class="text-dark"
                  active-class="text-primary"
                >
                  <q-btn stretch flat ripple color="text-grey-8 ">
                    <q-tooltip content-class="bg-black">我的课堂</q-tooltip>
                    <div class="row items-center no-wrap">
                      <q-icon name="local_bar" />
                      <div class="q-ml-sm text-center ellipsis gt-xs">
                        我的课堂
                      </div>
                    </div>
                  </q-btn>
                </router-link>
                <q-btn stretch flat ripple color="text-grey-8 ">
                  <q-tooltip content-class="bg-black">我的工作</q-tooltip>
                  <q-badge color="red" floating align="middle">1</q-badge>
                  <div class="row items-center no-wrap">
                    <q-icon name="local_gas_station" />
                    <div class="q-ml-sm text-center ellipsis gt-xs">
                      我的工作
                    </div>
                  </div>
                  <q-menu
                    :offset="[0,5]"
                    transition-show="rotate"
                    transition-hide="rotate"
                  >
                    <q-list>
                      <q-item-label header>我的工作</q-item-label>
                      <router-link
                        exact
                        to="/teacher/classes/work"
                        class="text-dark"
                        active-class="text-primary"
                      >
                        <q-item clickable v-close-popup>
                          <q-item-section avatar>
                            <q-icon name="work" color="secondary" text-color="white" />
                          </q-item-section>
                          <q-item-section>
                            <q-item-label>家庭作业</q-item-label>
                          </q-item-section>
                        </q-item>
                      </router-link>

                      <router-link
                        exact
                        to="/teacher/classes/exam"
                        class="text-dark"
                        active-class="text-primary"
                      >
                        <q-item clickable v-close-popup>
                          <q-item-section avatar>
                            <q-icon name="receipt" color="brown-5" text-color="white" />
                          </q-item-section>
                          <q-item-section>
                            <q-item-label>考试测验</q-item-label>
                          </q-item-section>
                        </q-item>
                      </router-link>
                    </q-list>
                  </q-menu>
                </q-btn>
                <router-link
                  exact
                  to="/teacher/classes/progress"
                  class="text-dark"
                  active-class="text-primary"
                >
                  <q-btn stretch flat ripple color="text-grey-8 ">
                    <q-tooltip content-class="bg-black">成绩分析</q-tooltip>
                    <div class="row items-center no-wrap">
                      <q-icon name="extension" />
                      <div class="q-ml-sm text-center ellipsis gt-xs">
                        成绩分析
                      </div>
                    </div>
                  </q-btn>
                </router-link>
              </q-toolbar>
            </div>
            <div class="row flex q-col-gutter-md">
              <div class="col-3 col-xl-3 col-lg-3 col-md-3 gt-sm">
                <div class="row">
                  <q-card class="my-card no-shadow q-mb-md full-width ">
                    <q-parallax
                      src="https://cdn.quasar.dev/img/parallax1.jpg"
                      :height="10"
                    />
                    <q-list class="q-pt-xs q-pb-lg">
                      <q-item-label header class="text-subtitle2">课堂管理</q-item-label>
                      <router-link
                        exact
                        to="/teacher/classes"
                        class="text-dark"
                        active-class="text-primary"
                      >
                        <q-expansion-item
                          clickable
                          v-ripple
                          expand-icon="chevron_right"
                          expand-icon-class="text-primary"
                        >
                          <template slot="header">
                            <q-item-section avatar>
                              <q-icon name="local_bar" size="35px" color="secondary "/>
                            </q-item-section>
                            <q-item-section>
                              <q-item-label>我的课堂</q-item-label>
                            </q-item-section>
                          </template>
                        </q-expansion-item>
                      </router-link>

                      <q-expansion-item
                        clickable
                        v-ripple
                        default-opened
                      >
                        <template slot="header">
                          <q-item-section avatar>
                            <q-icon name="local_gas_station" size="35px" color="orange "/>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label>我的工作</q-item-label>
                          </q-item-section>
                        </template>

                        <router-link
                          exact
                          to="/teacher/classes/work"
                          class="text-dark"
                          active-class="text-primary"
                        >
                          <q-expansion-item
                            :header-inset-level="1"
                            clickable
                            v-ripple
                            expand-icon="chevron_right"
                            expand-icon-class="text-primary"
                            :caption-lines="1"
                          >
                            <template slot="header">
                              <q-item-section avatar>
                                <q-icon name="work" size="35px" color="brown-5 ">
                                </q-icon>
                              </q-item-section>
                              <q-item-section>
                                <q-item-label class="ellipsis">家庭作业
                                  <q-badge color="positive" text-color="white" label="已开通"  transparent /></q-item-label>
                                <q-item-label caption class="ellipsis">1 个待办事项</q-item-label>
                              </q-item-section>
                            </template>
                          </q-expansion-item>
                        </router-link>

                        <router-link
                          exact
                          to="/teacher/classes/exam"
                          class="text-dark"
                          active-class="text-primary"
                        >
                          <q-expansion-item
                            :header-inset-level="1"
                            clickable
                            v-ripple
                            expand-icon="chevron_right"
                            expand-icon-class="text-primary"
                            :caption-lines="1"
                          >
                            <template slot="header">
                              <q-item-section avatar>
                                <q-icon name="receipt" size="35px" color="brown-5 "/>
                              </q-item-section>
                              <q-item-section>
                                <q-item-label class="ellipsis">考试测验</q-item-label>
                                <q-item-label caption class="ellipsis">1 个待办事项</q-item-label>
                              </q-item-section>
                            </template>
                          </q-expansion-item>
                        </router-link>
                      </q-expansion-item>

                      <router-link
                        exact
                        to="/teacher/classes/progress"
                        class="text-dark"
                        active-class="text-primary"
                      >
                        <q-expansion-item
                          clickable
                          v-ripple
                          expand-icon="chevron_right"
                          expand-icon-class="text-primary"
                        >
                          <template slot="header">
                            <q-item-section avatar>
                              <q-icon name="extension" size="35px" color="negative "/>
                            </q-item-section>
                            <q-item-section>
                              <q-item-label>成绩分析</q-item-label>
                            </q-item-section>
                          </template>
                        </q-expansion-item>
                      </router-link>

                    </q-list>
                  </q-card>
                </div>
              </div>
              <div class="col-9 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 full-height">
                <router-view />
              </div>
            </div>
          </div>
        </div>
        <!-- place QPageScroller at end of page -->
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab ripple icon="keyboard_arrow_up" color="primary" />
        </q-page-scroller>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'ClassesLayout',
  data () {
    return {
    }
  },
  created () {
    this.query = this.$route.query
    console.log('classeslayout query', this.query)
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="sass">
  .my-card
    width: 100%
    border-radius: 0.5rem
</style>
