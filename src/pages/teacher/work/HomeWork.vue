<template>
  <q-page class="bg-grey-2">
    <div class="row">
      <q-toolbar class="q-mb-xs">
        <q-breadcrumbs class="text-grey q-pt-md q-pb-md" active-color="accent">
          <q-breadcrumbs-el icon="home" to="/teacher/classes" />
          <q-breadcrumbs-el label="家庭作业列表" icon="assignment" to="/teacher/classes/work"/>
          <q-breadcrumbs-el label="家庭作业详细/批改" icon="announcement" />
        </q-breadcrumbs>
        <q-space/>
        <div class="col-auto q-gutter-md">
          <q-btn round dense ripple no-caps icon="save" color="accent">
            <q-tooltip content-class="bg-accent">保存作业</q-tooltip>
          </q-btn>
          <q-btn round dense ripple no-caps icon="print" color="accent" @click="print">
            <q-tooltip content-class="bg-accent">打印作业</q-tooltip>
          </q-btn>
          <q-btn round dense ripple no-caps :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'" @click="$q.fullscreen.toggle()" color="accent" class="q-ml-md">
            <q-tooltip content-class="bg-accent">{{$q.fullscreen.isActive ? $t('normal_mode') : $t('full_screen_mode')}}</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </div>

    <div class="row">
      <div class="col-12">
        <q-card class="my-card no-shadow q-mb-md q-pl-md q-pr-md">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6">作业标题</div>
              </div>
              <div class="col-auto q-gutter-md">
                <q-btn round dense ripple no-caps color="dark" icon="undo" disable>
                  <q-tooltip content-class="bg-dark">撤消</q-tooltip>
                </q-btn>
                <q-btn round dense ripple no-caps color="dark" icon="redo" disable>
                  <q-tooltip content-class="bg-dark">重做</q-tooltip>
                </q-btn>
                <q-btn round dense ripple no-caps color="dark" icon="chevron_left">
                  <q-tooltip content-class="bg-dark">上一页</q-tooltip>
                </q-btn>
                <q-btn round dense ripple no-caps color="dark" icon="chevron_right">
                  <q-tooltip content-class="bg-dark">下一页</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            作业内容作业内容作业内容作业内容作业内容作业内容
          </q-card-section>
          <q-card-section>
            <q-img src="~assets/homework_demo.png">
              <div ref="print" style="background-color: unset; padding: unset"
                   class="absolute-full text-subtitle2 flex flex-center text-negative cursor-pointer"
              >
                <div ref="caption">
                  <!--Caption-->
                </div>
                <div class="flex flex-center absolute-right">
                  <div class="q-gutter-md" style="width: 50px">
                    <q-btn rounded dense ripple no-caps color="dark" class="my-icon-wh">
                      <q-tooltip>打勾</q-tooltip>
                      <q-icon clickable @mousedown="moveDone" name="done" color="negative"
                              v-for="(item, index) in doneList"
                              :key="index"
                              class="absolute " :class="item.print ? '' : 'print-hide no-print'" :style="'z-index:' + index++" />
                    </q-btn>
                    <q-btn rounded dense ripple no-caps color="dark" class="my-icon-wh">
                      <q-tooltip>打叉</q-tooltip>
                      <q-icon clickable @mousedown="moveClear" name="clear" color="negative"
                              v-for="(item, index) in clearList"
                              :key="index"
                              class="absolute " :class="item.print ? '' : 'print-hide no-print'" :style="'z-index:' + index++" />
                    </q-btn>
                    <q-btn rounded dense ripple no-caps color="dark" class="my-icon-wh">
                      <q-tooltip>打分</q-tooltip>
                      <div clickable @mousedown="moveScore"
                           v-for="(item, index) in scoreList"
                           :key="index"
                           class="absolute text-negative cursor-pointer my-cursor-text"
                           :class="item.print ? '' : 'print-hide no-print'"
                           :style="'z-index:' + index++">
                        {{ item.score }}
                        <q-popup-edit v-model="item.score" buttons :cover="false" :offset="[0, 5]" content-class="text-accent">
                          <q-input color="accent" v-model="item.score" type="number" clear dense autofocus counter>
                            <template slot="prepend">
                              <q-icon name="edit" />
                            </template>
                          </q-input>
                        </q-popup-edit>
                      </div>
                    </q-btn>
                    <q-btn rounded dense ripple no-caps color="dark" class="my-icon-wh">
                      <q-tooltip>评语</q-tooltip>
                      <div clickable @mousedown="moveText"
                           v-for="(item, index) in textList"
                           :key="index"
                           class="absolute text-negative cursor-pointer my-cursor-text"
                           :class="item.print ? '' : 'print-hide no-print'"
                           :style="'z-index:' + index++">
                        {{ item.text }}
                        <q-popup-edit v-model="item.text" buttons :cover="false" :offset="[0, 5]" content-class="text-accent">
                          <q-input color="accent" v-model="item.text" type="text" clear dense autofocus counter>
                            <template slot="prepend">
                              <q-icon name="edit" />
                            </template>
                          </q-input>
                        </q-popup-edit>
                      </div>
                    </q-btn>
                  </div>
                </div>
              </div>
              <template slot="loading">
                <q-spinner-gears color="white" class="print-hide no-print" />
              </template>
            </q-img>
          </q-card-section>
          <q-card-actions align="around">
            <q-btn flat rounded icon="save">保存作业</q-btn>
            <q-btn flat rounded icon="print" @click="print">打印作业</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>

</template>

<script>
export default {
  name: 'HomeWork',
  data () {
    return {
      score: '打分',
      comment: '评语',
      doneList: [
        { print: false }
      ],
      clearList: [
        { print: false }
      ],
      scoreList: [
        { print: false, score: 1 }
      ],
      textList: [
        { print: false, text: 'A' }
      ]
    }
  },
  created () {
    this.query = this.$route.query
    console.log('classes query', this.query)
  },
  mounted () {
  },
  methods: {
    moveDone (e) {
      console.log(e)
      // 获取目标元素
      const el = e.target
      this.doneList[this.doneList.length - 1].print = true
      this.doneList.push({ print: false })
      // 计算出元素距离上边和左边的距离（鼠标点击的位置-元素的位置）
      const disX = e.clientX - el.offsetLeft
      const disY = e.clientY - el.offsetTop
      let l = e.clientX - disX
      let t = e.clientY - disY
      document.onmousemove = function (e) {
        // 鼠标要按住不松开移动才行，松开就会触发onmouseup的事件
        // 计算出元素移动后的位置（鼠标位置-元素初始的disX/disY）
        l = e.clientX - disX
        t = e.clientY - disY
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }
      document.onmouseup = function (e) {
        document.onmousemove = null
        document.onmouseup = null
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }
    },
    moveClear (e) {
      console.log(e)
      // 获取目标元素
      const el = e.target
      this.clearList[this.clearList.length - 1].print = true
      this.clearList.push({ print: false })
      // 计算出元素距离上边和左边的距离（鼠标点击的位置-元素的位置）
      const disX = e.clientX - el.offsetLeft
      const disY = e.clientY - el.offsetTop
      let l = e.clientX - disX
      let t = e.clientY - disY
      document.onmousemove = function (e) {
        // 鼠标要按住不松开移动才行，松开就会触发onmouseup的事件
        // 计算出元素移动后的位置（鼠标位置-元素初始的disX/disY）
        l = e.clientX - disX
        t = e.clientY - disY
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }
      document.onmouseup = function (e) {
        document.onmousemove = null
        document.onmouseup = null
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }
    },
    moveScore (e) {
      console.log(e)
      // 获取目标元素
      const el = e.target
      this.scoreList[this.scoreList.length - 1].print = true
      this.scoreList.push({ print: false, score: 1 })
      // 计算出元素距离上边和左边的距离（鼠标点击的位置-元素的位置）
      const disX = e.clientX - el.offsetLeft
      const disY = e.clientY - el.offsetTop
      let l = e.clientX - disX
      let t = e.clientY - disY
      document.onmousemove = function (e) {
        // 鼠标要按住不松开移动才行，松开就会触发onmouseup的事件
        // 计算出元素移动后的位置（鼠标位置-元素初始的disX/disY）
        l = e.clientX - disX
        t = e.clientY - disY
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }
      document.onmouseup = function (e) {
        document.onmousemove = null
        document.onmouseup = null
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }
    },
    moveText (e) {
      console.log(e)
      // 获取目标元素
      const el = e.target
      this.textList[this.textList.length - 1].print = true
      this.textList.push({ print: false, text: 'A' })
      // 计算出元素距离上边和左边的距离（鼠标点击的位置-元素的位置）
      const disX = e.clientX - el.offsetLeft
      const disY = e.clientY - el.offsetTop
      let l = e.clientX - disX
      let t = e.clientY - disY
      document.onmousemove = function (e) {
        // 鼠标要按住不松开移动才行，松开就会触发onmouseup的事件
        // 计算出元素移动后的位置（鼠标位置-元素初始的disX/disY）
        l = e.clientX - disX
        t = e.clientY - disY
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }
      document.onmouseup = function (e) {
        document.onmousemove = null
        document.onmouseup = null
        el.style.left = l + 'px'
        el.style.top = t + 'px'
      }
    },
    print () {
      this.$print(this.$refs.print)
    }
  }
}
</script>

<style scoped lang="sass">
  .my-card
    width: 100%
    border-radius: 0.5rem
  .my-icon-wh
    width: 30px
    height: 30px
  .my-cursor-text
    font-size: 18px
</style>
