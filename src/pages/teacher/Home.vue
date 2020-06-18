<template>
  <q-page class="bg-grey-2">
    <div class="row flex flex-center q-pa-md">
      <div class="col-9 col-xl-9 col-lg-9 col-md-10 col-sm-12 col-xs-12">
        <div class="row flex q-col-gutter-md">
          <div class="col-3 col-xl-3 col-lg-3 col-md-4 gt-sm">
            <div class="row">
              <q-card class="my-card no-shadow q-mb-md">
                <q-card-section>
                  <q-item clickable v-ripple>
                    <q-item-section side>
                      <q-avatar round size="48px">
                        <img src="~assets/photo_teacher.svg" />
                        <q-badge floating color="teal">新</q-badge>
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>张爱国</q-item-label>
                      <q-item-label caption>2 条新消息</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      3 分钟以前
                    </q-item-section>
                  </q-item>
                </q-card-section>

                <q-separator inset />

                <q-card-section>
                  <q-item clickable v-ripple>
                    <q-item-section side>
                      <q-circular-progress
                        :value="profileValue"
                        size="50px"
                        :thickness="0.22"
                        color="orange"
                        track-color="grey-3"
                      ></q-circular-progress>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>您的个人资料已完成71%</q-item-label>
                      <q-item-label caption>添加你的学校</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>

            <div class="row">
              <q-card class="my-card no-shadow q-mb-md">
                <q-card-section>
                  <div class="row items-center no-wrap">
                    <div class="col">
                      <div class="text-h6">我的课堂</div>
                    </div>

                    <div class="col-auto">
                      <q-btn color="grey-7" round flat icon="more_vert">
                        <q-menu cover auto-close>
                          <q-list>
                            <q-item clickable>
                              <q-item-section>创建一个课堂</q-item-section>
                            </q-item>
                            <q-item clickable>
                              <q-item-section>查看所有课堂</q-item-section>
                            </q-item>
                            <q-item clickable>
                              <q-item-section>加入一个课堂</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </q-btn>
                    </div>
                  </div>
                </q-card-section>

                <q-card-section>
                  管理课堂并与学生分享材料
                </q-card-section>

                <q-card-actions align="around">
                  <q-btn flat icon="add" @click="createAClassDialogFlag = true">创建一个课堂</q-btn>
                </q-card-actions>

                <q-separator />

                <q-card-section>
                  <div class="row items-center no-wrap">
                    <div class="col">
                      <div class="text-h6">我的群组</div>
                    </div>

                    <div class="col-auto">
                      <q-btn color="grey-7" round flat icon="more_vert">
                        <q-menu cover auto-close>
                          <q-list>
                            <q-item clickable>
                              <q-item-section>创建一个群组</q-item-section>
                            </q-item>
                            <q-item clickable>
                              <q-item-section>查看所有群组</q-item-section>
                            </q-item>
                            <q-item clickable>
                              <q-item-section>加入一个群组</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </q-btn>
                    </div>
                  </div>
                </q-card-section>

                <q-card-section>
                  与你这样的教育工作者分享资源和合作
                </q-card-section>

                <q-card-actions align="around">
                  <q-btn flat icon="add">创建一个群组</q-btn>
                </q-card-actions>

                <q-separator />

                <q-card-section>
                  <div class="row items-center no-wrap">
                    <div class="col">
                      <div class="text-h6">我的朋友圈</div>
                    </div>

                    <div class="col-auto">
                      <q-btn color="grey-7" round flat icon="more_vert">
                        <q-menu cover auto-close>
                          <q-list>
                            <q-item clickable>
                              <q-item-section>导入我的朋友</q-item-section>
                            </q-item>
                            <q-item clickable>
                              <q-item-section>查看我的关系</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                      </q-btn>
                    </div>
                  </div>
                </q-card-section>

                <q-card-section>
                  <q-list>
                    <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>
                      <q-item-section avatar>
                        <q-avatar>
                          <img src="~assets/photo_teacher.svg">
                        </q-avatar>
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>{{ contact.name }}</q-item-label>
                        <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
                      </q-item-section>

                      <q-item-section side>
                        <q-icon name="chat_bubble" color="green" />
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>

                <q-card-actions align="around">
                  <q-btn flat icon="add">查看我的关系</q-btn>
                </q-card-actions>

              </q-card>

              <q-card class="my-card no-shadow q-mb-md">

                <q-card-section>
                  <div class="row items-center no-wrap">
                    <div class="col">
                      <div class="text-h6">我的标签(擅长)</div>
                    </div>
                  </div>
                </q-card-section>

                <q-card-section>
                  <q-list dense >
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label>#英语语言艺术</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label>#数学</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section>
                        <q-item-label>
                          <q-icon name="whatshot" color="negative"></q-icon>
                          #计算机科学
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>

                <q-card-actions align="around">
                  <q-btn flat icon="add">查看所有标签</q-btn>
                </q-card-actions>

              </q-card>
            </div>
          </div>

          <div class="col-6 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12 full-height">
            <div class="row">
              <q-card class="my-card no-shadow">
                <q-card-section>
                  <q-item>
                    <q-item-section side>
                      <q-avatar color="grey-3" text-color="white" icon="person_outline" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>{{shareLabel}}</q-item-label>
                      <q-popup-edit v-model="shareLabel"
                                    buttons
                                    label-set="发布"
                                    label-cancel="取消"
                                    content-class="bg-accent text-white">
                        <q-input dark
                                 color="white"
                                 v-model="shareLabel"
                                 type="textarea"
                                 dense autofocus counter @keyup.enter.stop>
                          <template slot="append">
                            <q-icon name="edit" />
                          </template>
                        </q-input>
                      </q-popup-edit>
                    </q-item-section>
                    <q-item-section side>
                      <q-chip clickable v-ripple>
                        <q-avatar icon="stars" size="50px">
                        </q-avatar>
                        {{$t('library')}}
                      </q-chip>
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
              <q-toolbar class="text-grey-8 text-subtitle2">
                <q-space/>
                <q-toggle
                  v-model="classActivity"
                  label="只显示和我有关的"
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
                <q-infinite-scroll @load="onLoad" :offset="250">

                  <q-card v-for="(item, index) in items" :key="index" class="my-card no-shadow q-mb-md q-pl-md q-pr-md">
                    <q-card-section>
                      <div class="row items-center no-wrap">
                        <div class="col">
                          <q-item clickable v-ripple>
                            <q-item-section side>
                              <q-avatar round size="48px">
                                <img src="~assets/photo_teacher.svg" />
                              </q-avatar>
                            </q-item-section>
                            <q-item-section>
                              <q-item-label>李艳秋</q-item-label>
                              <q-item-label class="text-grey-8">老师</q-item-label>
                              <q-item-label caption>1 小时以前</q-item-label>
                            </q-item-section>
                          </q-item>
                        </div>

                        <div class="col-auto">
                          <q-btn color="grey-7" round flat icon="more_vert">
                            <q-menu cover auto-close>
                              <q-list>
                                <q-item clickable>
                                  <q-item-section>链接到帖子</q-item-section>
                                </q-item>
                                <q-item clickable>
                                  <q-item-section>将帖子添加到库</q-item-section>
                                </q-item>
                              </q-list>
                            </q-menu>
                          </q-btn>
                        </div>
                      </div>
                    </q-card-section>

                    <q-card-section>
                      第50天技巧50孩子们学习智慧1每天在学校里做小贴士
                      <div>#技巧 #英语技能 #数学 #科学 #计算机软件 #社会学</div>
                    </q-card-section>

                    <q-parallax
                      src="https://cdn.quasar.dev/img/parallax1.jpg"
                      :height="250"
                    />
                    <q-card-actions align="around">
                      <q-btn flat round color="red" icon="favorite" label="110" />
                      <q-btn flat round color="teal" icon="bookmark" />
                      <q-btn flat round color="primary" icon="share" />
                    </q-card-actions>

                    <q-separator />
                    <div class="row items-center no-wrap q-mt-md q-mb-md">
                      <div class="col">
                        <q-item clickable v-ripple>
                          <q-item-section side>
                            <q-avatar round size="48px">
                              <img src="~assets/photo_teacher.svg" />
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label>汉德</q-item-label>
                            <q-item-label class="text-grey-8">很有助于向学生灌输这些优良品质。感谢分享</q-item-label>
                            <q-item-label caption>3 分钟以前</q-item-label>
                          </q-item-section>
                        </q-item>
                      </div>
                    </div>
                  </q-card>
                  <template slot="loading">
                    <div class="row justify-center q-my-md">
                      <q-spinner-gears color="primary" size="40px" />
                    </div>
                  </template>

                </q-infinite-scroll>
              </div>
            </div>

          </div>

          <div class="col-3 col-xl-3 col-lg-3 gt-md">
            <div class="row">
              <q-card class="my-card no-shadow q-mb-md">
                <q-card-section>
                  <q-toolbar class="bg-transparent">
                    <q-toolbar-title>
                      <q-icon name="whatshot" color="negative"></q-icon>
                      热门话题
                    </q-toolbar-title>
                  </q-toolbar>

                  <q-list>
                    <q-item>
                      <q-item-section>
                        <q-item-label>如何扩大/丰富学习者的词汇范围？</q-item-label>
                        <q-item-label caption lines="2">
                          #专业发展 #大学教育 #英语语言艺术
                          https://xxxbox.blogspot.com/2019/12/flush
                        </q-item-label>
                      </q-item-section>

                      <q-item-section side top>
                        <q-item-label caption>5 分钟以前</q-item-label>
                        <q-icon name="star" color="yellow" />
                      </q-item-section>
                    </q-item>

                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        <q-item-label>如何扩大/丰富学习者的词汇范围？</q-item-label>
                        <q-item-label caption lines="2">
                          #专业发展 #大学教育 #英语语言艺术
                          https://xxxbox.blogspot.com/2019/12/flush
                        </q-item-label>
                      </q-item-section>

                      <q-item-section side top>
                        <q-item-label caption>已投票!</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        <q-item-label>如何扩大/丰富学习者的词汇范围？</q-item-label>
                        <q-item-label caption lines="2">
                          #专业发展 #大学教育 #英语语言艺术
                          https://xxxbox.blogspot.com/2019/12/flush
                        </q-item-label>
                      </q-item-section>

                      <q-item-section side top>
                        <q-badge color="teal" label="10k" />
                      </q-item-section>
                    </q-item>

                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        <q-item-label>如何扩大/丰富学习者的词汇范围？</q-item-label>
                        <q-item-label caption lines="2">
                          #专业发展 #大学教育 #英语语言艺术
                          https://xxxbox.blogspot.com/2019/12/flush
                        </q-item-label>
                      </q-item-section>

                      <q-item-section side top>
                        <q-item-label caption>2 分钟以前</q-item-label>
                        <div class="text-orange">
                          <q-icon name="star" />
                          <q-icon name="star" />
                          <q-icon name="star" />
                        </div>
                      </q-item-section>
                    </q-item>

                    <q-separator spaced inset />

                    <q-item>
                      <q-item-section>
                        <q-item-label>如何扩大/丰富学习者的词汇范围？</q-item-label>
                        <q-item-label caption lines="2">
                          #专业发展 #大学教育 #英语语言艺术
                          https://xxxbox.blogspot.com/2019/12/flush
                        </q-item-label>
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

    <!-- Create A Class Dialog -->
    <q-dialog v-model="createAClassDialogFlag">
      <q-card class="full-width">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-card-section class="row items-center">
            <div class="text-h6">创建一个课堂</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            <q-input
              clearable
              filled
              clear-icon="close"
              v-model="createAClassForm.className"
              label="填写课堂名称"
              hint="填写课堂名称"
              hide-hint
              lazy-rules
              :rules="[val => val !== null && val !== '' || 'Please Name Your Class']"
            />
            <q-input
              clearable
              filled
              clear-icon="close"
              v-model="createAClassForm.classDesc"
              label="填写课堂描述，不超过250个字符"
              hint="填写课堂描述，不超过250个字符"
              hide-hint
              lazy-rules
              :rules="[val => val !== null && val !== '' || 'Describe your group',val => val.length >= 1 && val.length < 250 || 'Describe your group - Max. 250 characters']"
            />
            <q-select
              clearable
              filled
              clear-icon="close"
              v-model="createAClassForm.grade"
              :options="classGradeList"
              label="选择一个年级"
              hint="选择一个年级"
              hide-hint
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="取消" v-close-popup />
            <q-btn flat label="重置" type="reset" color="negative" />
            <q-btn label="创建" type="submit" color="primary" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab ripple icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-page>
</template>

<script>
const offline = [{
  id: 5,
  name: '张书德',
  email: 'zhangshude@gmail.com',
  avatar: 'avatar2.jpg'
}, {
  id: 6,
  name: '李艳秋',
  email: 'liyanqiu@gmail.com',
  avatar: 'avatar6.jpg'
}]
export default {
  name: 'Teacher',

  data () {
    return {
      profileValue: 71,
      offline,
      items: [{}, {}, {}],
      classActivity: false,
      classGradeList: [
        {
          label: '1st Grade',
          value: '1'
        }, {
          label: '2st Grade',
          value: '2'
        }, {
          label: '3st Grade',
          value: '3'
        }, {
          label: '4st Grade',
          value: '4'
        }
      ],
      createAClassDialogFlag: false,
      createAClassForm: {
        className: null,
        classDesc: null,
        grade: null,
        subject: null
      },
      shareLabel: '与其他老师分享你的想法'
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
