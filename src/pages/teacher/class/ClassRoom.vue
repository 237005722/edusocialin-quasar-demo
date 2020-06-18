<template>
  <q-page class="bg-grey-2">
    <div class="row">
      <q-card class="my-card no-shadow q-mt-md">
        <q-card-section>
          <q-item>
            <q-item-section side>
              <q-avatar color="grey-3" text-color="white" icon="person_outline" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
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
              </q-item-label>
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
        <q-infinite-scroll @load="onLoad" :offset="50">

          <q-card class="my-card no-shadow q-mb-md q-pl-md q-pr-md">
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
                      <q-item-label>我的任务</q-item-label>
                      <q-item-label caption>
                        <q-icon name="visibility"></q-icon> 仅自己可见
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </div>

                <div class="col-auto">
                  <q-btn color="grey-7" round flat icon="expand_more">
                  </q-btn>
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-h5">开始课程吧</div>
              <div class="text-subtitle2">发送课程更新，作业，测验等。开始建立您的数字教室社区！</div>
            </q-card-section>
            <q-card-section class="text-primary">
            以下是一些尝试的任务：
            </q-card-section>
            <q-separator />
            <q-stepper
              v-model="step"
              header-nav
              vertical
              color="primary"
              animated
              done-color="positive"
              active-color="orange"
              inactive-color="grey"
            >
              <q-step
                :name="1"
                title="创建课堂"
                icon="settings"
                :done="step > 1"
              >
                创建一个新课堂
              </q-step>

              <q-step
                :name="2"
                title="添加学生"
                icon="create_new_folder"
                :done="step > 2"
              >
                添加或邀请您的学生
              </q-step>

              <q-step
                :name="3"
                title="欢迎通知"
                icon="message"
              >
                向新加入的学生发送一个欢迎通知
              </q-step>

              <q-step
                :name="4"
                title="布置作业"
                icon="work"
              >
                开始布置一个新的作业
              </q-step>
              <q-step
                :name="5"
                title="创建考试或测验"
                icon="receipt"
              >
                开始发起一个新的考试或测验
              </q-step>
            </q-stepper>
          </q-card>
          <template slot="loading">
            <div class="row justify-center q-my-md">
              <q-spinner-gears color="primary" size="40px" />
            </div>
          </template>

        </q-infinite-scroll>
      </div>
    </div>
  </q-page>

</template>

<script>
export default {
  name: 'ClassRoom',
  data () {
    return {
      items: [{}, {}],
      link: 'myClasses',
      classActivity: false,
      step: 2,
      shareLabel: '开始讨论，分享课堂资料等...'
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

<style scoped lang="sass">
  .my-card
    width: 100%
    border-radius: 0.5rem
</style>
