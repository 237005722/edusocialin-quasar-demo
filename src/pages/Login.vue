<template>
  <q-page class="land-page flex flex-center relative-position">
    <div class="fixed-top-right q-ma-lg">
      <q-btn to="/" round ripple color="primary" icon="home" />
      <q-btn round ripple class="q-ml-lg" color="primary" icon="lightbulb_outline" @click="toggleDarkMode" />
      <q-btn round ripple class="q-ml-lg" color="primary" @click="$q.fullscreen.toggle()" :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'" />
    </div>

    <div class="q-pa-md">
      <div class="row justify-center" :style="$q.platform.is.mobile ? '' : 'margin-bottom: 50px;'">
        <transition
          appear
          enter-active-class="animated slideInDown"
          leave-active-class="animated slideOutUp"
        >
          <img alt="App logo" src="~assets/logo-full.svg" style="width: 150px;">
        </transition>
      </div>
      <div class="row justify-center">
        <div class="col-8 col-xl-6 col-lg-6 col-md-8 col-sm-10 col-xs-11">
          <transition
            appear
            enter-active-class="animated slideInDown"
            leave-active-class="animated slideOutUp"
          >
            <q-card class="row my-card bg-transparent">
            <q-card-section class="gt-sm col-12 col-md-6 my-card-section items-center bg-hazy" style="padding: 20px">
              <q-carousel
                swipeable
                animated
                v-model="slide"
                :autoplay="autoplay"
                ref="carousel"
                infinite
                class="full-height full-width"
                style="border-radius: inherit"
              >
                <q-carousel-slide :name="1" img-src="~assets/login-bg.jpg">
                  <div class="flex flex-center full-width full-height">
                    <div class="text-white">
                      <transition
                        appear
                        enter-active-class="animated slideInDown"
                        leave-active-class="animated slideOutUp"
                      >
                        <div class="text-h3 text-center">{{title}}</div>
                      </transition>
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" img-src="~assets/login-bg.jpg">
                  <div class="flex flex-center full-width full-height">
                    <div class="text-white">
                      <transition
                        appear
                        enter-active-class="animated slideInDown"
                        leave-active-class="animated slideOutUp"
                      >
                        <div class="text-h3 text-center">{{title}}</div>
                      </transition>
                    </div>
                  </div>
                </q-carousel-slide>

                <template slot="control">
                  <q-carousel-control
                    position="top-right"
                    :offset="[18, 18]"
                    class="text-primary"
                    style="background: rgba(255, 255, 255, .3); padding: 4px 8px 4px 0; border-radius: 15px"
                  >
                    <q-toggle dense dark color="orange" v-model="autoplay" :label="$t('auto_play')" />
                  </q-carousel-control>

                  <q-carousel-control
                    position="bottom-right"
                    :offset="[18, 18]"
                    class="q-gutter-xs"
                  >
                    <q-btn
                      round dense color="orange" text-color="white" icon="arrow_left"
                      @click="$refs.carousel.previous()"
                    />
                    <q-btn
                      round dense color="orange" text-color="white" icon="arrow_right"
                      @click="$refs.carousel.next()"
                    />
                  </q-carousel-control>
                </template>
              </q-carousel>
            </q-card-section>
            <q-card-section class="col-12 col-md-6 my-card-section items-center bg-white">
              <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
              >
                <q-input
                  filled
                  v-model="name"
                  :label="$t('login_name_label')"
                  :hint="$t('login_name_hint')"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || $t('login_name_error')]"
                />

                <q-input
                  filled
                  type="password"
                  v-model="pass"
                  :label="$t('login_pass_label')"
                  :hint="$t('login_pass_hint')"
                  lazy-rules
                  :rules="[val => val !== null && val !== '' || $t('login_pass_error'),val => val.length > 1 && val.length < 30 || $t('login_pass_warning')]"
                  autocorrect="off"
                  autocapitalize="off"
                  autocomplete="off"
                  spellcheck="false"
                />

                <q-select
                  filled
                  v-model="type"
                  :options="type_options"
                  :label="$t('login_type_label')"
                  :hint="$t('login_type_hint')"
                />

                <q-toggle v-model="accept" :label="$t('accept_license')" />

                <div>
                  <q-btn :ripple="{ center: true }" :label="$t('submit')" type="submit" color="primary" icon="check_circle"/>
                  <q-btn :ripple="{ center: true }" :label="$t('reset')" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
              </q-form>
            </q-card-section>
          </q-card>
          </transition>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
import * as INFO from '../../package.json'
const enTypeOptions = [
  'Teacher', 'Parent', 'Student', 'Other'
]
const zhTypeOptions = [
  '教师', '家长', '学生', '其它'
]
export default {
  name: 'Login',
  data () {
    return {
      title: INFO.productName,
      slide: 1,
      autoplay: true,

      name: null,
      pass: null,
      type: this.$i18n.locale === 'en-us' ? enTypeOptions[0] : zhTypeOptions[0],
      accept: false
    }
  },
  created () {
    console.log('locale', this.$i18n.locale)
    this.type_options = this.$i18n.locale === 'en-us' ? enTypeOptions : zhTypeOptions
    console.log('type_options', this.type_options)
  },
  watch: {
    '$q.dark.isActive' (val) {
      console.log(val ? 'On dark mode' : 'On light mode')
    },
    '$q.fullscreen.isActive' (val) {
      console.log(val ? 'In fullscreen now' : 'Exited fullscreen')
    }
  },
  methods: {
    toggleDarkMode () {
      // get status
      // console.log(this.$q.dark.isActive) // true, false
      // get configured status
      // console.log(this.$q.dark.mode) // "auto", true, false
      // set status
      // this.$q.dark.set(true) // or false or "auto"
      // toggle
      this.$q.dark.toggle()
      console.log(this.$q.dark.isActive) // true, false
    },
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: this.$i18n.locale === 'en-us' ? 'You need to accept the license and terms first' : '您需要先接受许可证和条款'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: this.$q.lang.getLocale() === 'en-us' ? 'Submitted' : '提交成功'
        })
        this.$router.push({ path: '/teacher' })
      }
    },

    onReset () {
      this.name = null
      this.pass = null
      this.type = this.$q.lang.getLocale() === 'en-us' ? enTypeOptions[0] : zhTypeOptions[0]
      this.accept = false
    }
  }
}
</script>

<style scoped lang="sass">
  .page-bg
    background: url('~assets/login-bg.jpg') no-repeat fixed 0 0
    background-size: cover

  .land-page
    @extend .page-bg
    .q-pa-md
      width: 100%
      .my-card
        .my-card-section
          padding: 50px
          height: 460px
          .my-video
            width: 100%
            height: 100%

  .body--dark
    .text-black
      color: $dark !important
    .bg-white
      background-color: $dark !important

</style>
