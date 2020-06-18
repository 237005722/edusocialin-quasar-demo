<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="bg-grey-2">
        <div class="row">
          <q-toolbar class="q-mb-xs">
            <q-breadcrumbs class="text-grey q-pt-md q-pb-md" active-color="accent">
              <q-breadcrumbs-el icon="home" to="/teacher/classes" />
              <q-breadcrumbs-el label="课堂列表" icon="local_bar" to="/teacher/classes" />
              <q-breadcrumbs-el label="课堂详细" icon="widgets" />
            </q-breadcrumbs>
            <q-space/>
          </q-toolbar>
        </div>

        <div class="q-card no-shadow lt-sm">
          <q-toolbar class="bg-grey-3 q-mb-md justify-around">
            <router-link
              exact
              to="/teacher/classes/classRoom"
              class="text-dark"
              active-class="text-primary"
            >
              <q-btn stretch flat ripple color="text-grey-8 ">
                <q-tooltip content-class="bg-black">课堂任务</q-tooltip>
                <div class="row items-center no-wrap">
                  <q-icon name="assignment" />
                  <div class="q-ml-sm text-center ellipsis gt-xs">
                    课堂任务
                  </div>
                </div>
              </q-btn>
            </router-link>
            <router-link
              exact
              to="/teacher/classes/classRoom/folder"
              class="text-dark"
              active-class="text-primary"
            >
              <q-btn stretch flat ripple color="text-grey-8 ">
                <q-tooltip content-class="bg-black">课堂资料</q-tooltip>
                <div class="row items-center no-wrap">
                  <q-icon name="book" />
                  <div class="q-ml-sm text-center ellipsis gt-xs">
                    课堂资料
                  </div>
                </div>
              </q-btn>
            </router-link>
            <router-link
              exact
              to="/teacher/classes/classRoom/member"
              class="text-dark"
              active-class="text-primary"
            >
              <q-btn stretch flat ripple color="text-grey-8 ">
                <q-tooltip content-class="bg-black">课堂成员</q-tooltip>
                <div class="row items-center no-wrap">
                  <q-icon name="group" />
                  <div class="q-ml-sm text-center ellipsis gt-xs">
                    课堂成员
                  </div>
                </div>
              </q-btn>
            </router-link>
          </q-toolbar>
        </div>

        <div class="row flex q-col-gutter-md">
          <div class="col-8 col-xl-9 col-lg-8 col-md-8 col-sm-8 col-xs-12 full-height">
            <q-card class="my-card no-shadow">
              <q-card-section>
                <q-item>
                  <q-item-section side>
                    <q-btn unelevated round color="grey-3" text-color="white" icon="menu" size="12px">
                      <q-tooltip content-class="bg-grey-6">我的课堂</q-tooltip>
                    </q-btn>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>我的第一个测试课堂</q-item-label>
                    <q-item-label caption>qing cheng | All  · 1st Grade</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-btn unelevated round color="purple" text-color="white" icon="add" size="12px">
                      <q-tooltip content-class="bg-purple">课堂设置</q-tooltip>
                      <q-menu
                        :offset="[0,5]"
                        transition-show="rotate"
                        transition-hide="rotate"
                      >
                        <q-list>
                          <q-item clickable v-close-popup>
                            <q-item-section>
                              <q-item-label>课堂设置</q-item-label>
                            </q-item-section>
                          </q-item>
                          <q-item clickable v-close-popup>
                            <q-item-section>
                              <q-item-label>邀请成员</q-item-label>
                            </q-item-section>
                          </q-item>
                          <q-item clickable v-close-popup>
                            <q-item-section>
                              <q-item-label>布置作业</q-item-label>
                            </q-item-section>
                          </q-item>
                          <q-item clickable v-close-popup>
                            <q-item-section>
                              <q-item-label>发起测验</q-item-label>
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-btn>
                  </q-item-section>
                </q-item>
              </q-card-section>

              <q-card-section>

                <q-tree
                  :nodes="classSimple"
                  node-key="label"
                  no-connectors
                />
                <q-item-section side>
                  <q-btn flat rounded dense ripple no-caps size="13px">
                    <div class="row items-center no-wrap">
                      <q-icon left name="code" />
                      <div class="text-center">
                        班级代码 x9482d3
                      </div>
                    </div>
                    <q-menu
                      :offset="[0,10]"
                      transition-show="rotate"
                      transition-hide="rotate"
                    >
                      <q-list>
                        <q-item clickable v-close-popup>
                          <q-item-section>
                            <q-item-label>复制代码</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup>
                          <q-item-section>
                            <q-item-label>分享代码</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </q-item-section>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                <q-toolbar class="text-grey-8 text-subtitle2">
                  <q-space />
                  <q-btn unelevated round color="dark" text-color="white" icon="settings" size="12px" class="q-ml-md" >
                    <q-tooltip content-class="bg-dark">课堂设置</q-tooltip>
                  </q-btn>
                  <q-btn unelevated round color="dark" text-color="white" icon="group_add" size="12px" class="q-ml-md" >
                    <q-tooltip content-class="bg-dark">邀请成员</q-tooltip>
                  </q-btn>
                  <q-btn unelevated round disable color="dark" text-color="white" icon="work" size="12px" class="q-ml-md" >
                    <q-tooltip content-class="bg-dark">布置作业</q-tooltip>
                  </q-btn>
                  <q-btn unelevated round disable color="dark" text-color="white" icon="receipt" size="12px" class="q-ml-md" >
                    <q-tooltip content-class="bg-dark">发起测验</q-tooltip>
                  </q-btn>
                </q-toolbar>
              </q-card-section>
            </q-card>

            <router-view />
          </div>
          <div class="col-4 col-xl-3 col-lg-4 col-md-4 col-sm-4 gt-xs">
            <div class="row">
              <q-card class="my-card no-shadow q-mb-md full-width">

                <q-parallax
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                  :height="10"
                />
                <q-list class="q-pt-xs q-pb-lg">
                  <q-item-label header class="text-subtitle2">我的课堂</q-item-label>
                  <router-link
                    exact
                    to="/teacher/classes/classRoom"
                    class="text-dark"
                    active-class="text-primary"
                  >
                    <q-expansion-item
                      clickable
                      v-ripple
                      switch-toggle-side
                      expand-icon="chevron_left"
                      expand-icon-class="text-primary"
                    >
                      <template slot="header">
                        <q-item-section avatar>
                          <q-icon name="assignment" size="35px" color="secondary "/>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>课堂任务</q-item-label>
                        </q-item-section>
                      </template>
                    </q-expansion-item>
                  </router-link>

                  <router-link
                    exact
                    to="/teacher/classes/classRoom/folder"
                    class="text-dark"
                    active-class="text-primary"
                  >
                    <q-expansion-item
                      clickable
                      v-ripple
                      switch-toggle-side
                      expand-icon="chevron_left"
                      expand-icon-class="text-primary"
                    >
                      <template slot="header">
                        <q-item-section avatar>
                          <q-icon name="book" size="35px" color="orange "/>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>课堂资料</q-item-label>
                        </q-item-section>
                      </template>
                    </q-expansion-item>
                  </router-link>

                  <router-link
                    exact
                    to="/teacher/classes/classRoom/member"
                    class="text-dark"
                    active-class="text-primary"
                  >
                    <q-expansion-item
                      clickable
                      v-ripple
                      switch-toggle-side
                      expand-icon="chevron_left"
                      expand-icon-class="text-primary"
                    >
                      <template slot="header">
                        <q-item-section avatar>
                          <q-icon name="group" size="35px" color="negative "/>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>课堂成员</q-item-label>
                        </q-item-section>
                      </template>
                    </q-expansion-item>
                  </router-link>

                </q-list>
              </q-card>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'ClassRoomLayout',
  data () {
    return {
      rightDrawer: true,
      classSimple: [
        {
          label: '更多信息',
          children: [
            {
              label: '老师：成'
            },
            {
              label: '年级：一年级'
            }
          ]
        }
      ]
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
