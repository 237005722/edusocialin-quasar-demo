<template>
  <q-layout view="hHh lpR lFr">

    <q-header reveal :reveal-offset="500" class="bg-transparent text-black">
      <q-toolbar>
<!--        <q-space class="gt-xs" />-->
        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/logo-full.svg">
          </q-avatar>
          {{title}}
        </q-toolbar-title>
        <q-btn-dropdown stretch flat ripple :label="$t('learn_more')" class="text-grey-8 gt-xs">
          <q-list>
            <q-item-label header>{{$t('learn_more_title')}}</q-item-label>
            <q-item clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="folder" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{$t('learn_teachers')}}</q-item-label>
                <q-item-label caption>{{$t('learn_teachers_desc')}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator inset spaced />
            <q-item clickable v-close-popup tabindex="1">
              <q-item-section avatar>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{$t('learn_parents')}}</q-item-label>
                <q-item-label caption>{{$t('learn_parents_desc')}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator inset spaced />
            <q-item clickable v-close-popup tabindex="2">
              <q-item-section avatar>
                <q-avatar icon="folder" color="accent" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{$t('learn_students')}}</q-item-label>
                <q-item-label caption>{{$t('learn_students_desc')}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator inset spaced />
            <q-item clickable v-close-popup tabindex="3">
              <q-item-section avatar>
                <q-avatar icon="folder" color="negative" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{$t('learn_schools')}}</q-item-label>
                <q-item-label caption>{{$t('learn_schools_desc')}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown stretch flat ripple :label="$t('resources')" class="text-grey-8 gt-xs">
          <q-list>
            <q-item-label header>{{$t('resources_title')}}</q-item-label>
            <q-item clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="folder" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{$t('resources_teachers')}}</q-item-label>
                <q-item-label caption>{{$t('resources_teachers_desc')}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator inset spaced />
            <q-item clickable v-close-popup tabindex="1">
              <q-item-section avatar>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{$t('resources_parents')}}</q-item-label>
                <q-item-label caption>{{$t('resources_parents_desc')}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator inset spaced />
            <q-item clickable v-close-popup tabindex="2">
              <q-item-section avatar>
                <q-avatar icon="folder" color="accent" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{$t('resources_students')}}</q-item-label>
                <q-item-label caption>{{$t('resources_students_desc')}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator inset spaced />
            <q-item clickable v-close-popup tabindex="3">
              <q-item-section avatar>
                <q-avatar icon="folder" color="negative" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{$t('resources_others')}}</q-item-label>
                <q-item-label caption>{{$t('resources_others_desc')}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn to="/" stretch flat ripple :label="$t('support')" class="text-grey-8 gt-xs" >
          <q-tooltip content-class="bg-primary">{{$t('support_desc')}}</q-tooltip>
        </q-btn>
        <q-btn to="/teacher" stretch flat ripple color="primary" :label="$t('home')" class="gt-xs" >
          <q-tooltip content-class="bg-primary">{{$t('home_desc')}}</q-tooltip>
        </q-btn>
        <q-btn to="/login" stretch flat ripple color="primary" :label="$t('login')" class="gt-xs" >
          <q-tooltip content-class="bg-primary">{{$t('login_desc')}}</q-tooltip>
        </q-btn>
        <q-btn to="/login" stretch unelevated ripple color="primary" :label="$t('sign')" class="gt-xs" >
          <q-tooltip content-class="bg-primary">{{$t('sign_desc')}}</q-tooltip>
        </q-btn>
        <q-btn stretch flat ripple color="primary" icon="settings" >
          <q-menu
            transition-show="rotate"
            transition-hide="rotate"
          >
            <q-list>
              <q-item-label header>{{$t('settings')}}</q-item-label>
              <q-item clickable v-close-popup @click="toggleDarkMode">
                <q-item-section avatar>
                  <q-avatar icon="lightbulb_outline" color="secondary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$q.dark.isActive ? $t('day_mode') : $t('night_mode')}}</q-item-label>
                  <q-item-label caption>{{$t('currently_in')}} {{$q.dark.isActive ? $t('night_mode') : $t('day_mode')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator inset spaced />
              <q-item clickable v-close-popup @click="$q.fullscreen.toggle()">
                <q-item-section avatar>
                  <q-avatar :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$q.fullscreen.isActive ? $t('normal_mode') : $t('full_screen_mode')}}</q-item-label>
                  <q-item-label caption>{{$t('currently_in')}} {{$q.fullscreen.isActive ? $t('full_screen_mode') : $t('normal_mode')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator inset spaced />
              <q-item-label header>{{$t('language')}}</q-item-label>
              <q-item tag="label" v-close-popup>
                <q-item-section avatar>
                  <q-radio v-model="lang" val="zh-hans" color="negative" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('zh_simple')}}</q-item-label>
                  <q-item-label caption>{{$t('currently_in')}} {{$t('zh_simple')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item tag="label" v-close-popup>
                <q-item-section avatar>
                  <q-radio v-model="lang" val="en-us" color="accent" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('en_us')}}</q-item-label>
                  <q-item-label caption>{{$t('currently_in')}} {{$t('en_us')}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn stretch flat ripple color="primary" icon="menu" class="lt-sm" @click="right = !right" />
<!--        <q-space class="gt-xs" />-->
      </q-toolbar>
    </q-header>

    <q-drawer
      elevated
      v-model="right"
      side="right"
    >
      <!-- drawer content -->
      <q-scroll-area
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        class="fit"
      >
        <q-list>
          <q-item to="/teacher" clickable v-close-popup>
            <q-item-section avatar>
              <q-avatar icon="home" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('home')}}</q-item-label>
              <q-item-label caption>{{$t('home_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator inset spaced />
          <q-item-label header>{{$t('login_or_sign')}}</q-item-label>
          <q-item to="/login" clickable v-close-popup>
            <q-item-section avatar>
              <q-avatar icon="account_circle" color="accent" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('login')}}</q-item-label>
              <q-item-label caption>{{$t('login_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/login" clickable v-close-popup>
            <q-item-section avatar>
              <q-avatar icon="account_box" color="positive" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('sign')}}</q-item-label>
              <q-item-label caption>{{$t('sign_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator inset spaced />
          <q-item-label header>{{$t('learn_more_title')}}</q-item-label>
          <q-item clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="folder" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('learn_teachers')}}</q-item-label>
              <q-item-label caption>{{$t('learn_teachers_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="1">
            <q-item-section avatar>
              <q-avatar icon="folder" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('learn_parents')}}</q-item-label>
              <q-item-label caption>{{$t('learn_parents_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="2">
            <q-item-section avatar>
              <q-avatar icon="folder" color="accent" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('learn_students')}}</q-item-label>
              <q-item-label caption>{{$t('learn_students_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="3">
            <q-item-section avatar>
              <q-avatar icon="folder" color="negative" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('learn_schools')}}</q-item-label>
              <q-item-label caption>{{$t('learn_schools_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator inset spaced />
          <q-item-label header>{{$t('resources_title')}}</q-item-label>
          <q-item clickable v-close-popup tabindex="4">
            <q-item-section avatar>
              <q-avatar icon="folder" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('resources_teachers')}}</q-item-label>
              <q-item-label caption>{{$t('resources_teachers_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="5">
            <q-item-section avatar>
              <q-avatar icon="folder" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('resources_parents')}}</q-item-label>
              <q-item-label caption>{{$t('resources_parents_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="6">
            <q-item-section avatar>
              <q-avatar icon="folder" color="accent" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('resources_students')}}</q-item-label>
              <q-item-label caption>{{$t('resources_students_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="7">
            <q-item-section avatar>
              <q-avatar icon="folder" color="negative" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('resources_others')}}</q-item-label>
              <q-item-label caption>{{$t('resources_others_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator inset spaced />
          <q-item clickable v-close-popup tabindex="8">
            <q-item-section avatar>
              <q-avatar icon="help" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('support')}}</q-item-label>
              <q-item-label caption>{{$t('support_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="9" @click="right = !right">
            <q-item-section avatar>
              <q-avatar icon="close" color="dark" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('close')}}</q-item-label>
              <q-item-label caption>{{$t('close_menu')}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import * as INFO from '../../package.json'
export default {
  name: 'LandLayout',
  computed: {
    thumbStyle () {
      return {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#f0a31f',
        width: '5px',
        opacity: 0.75
      }
    },

    barStyle () {
      return {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: 'rgba(240,163,31,0.5)',
        width: '9px',
        opacity: 0.2
      }
    }
  },
  data () {
    return {
      lang: this.$i18n.locale,
      title: INFO.productName,
      right: false
    }
  },
  watch: {
    '$q.dark.isActive' (val) {
      console.log(val ? 'On dark mode' : 'On light mode')
    },
    '$q.fullscreen.isActive' (val) {
      console.log(val ? 'In fullscreen now' : 'Exited fullscreen')
    },
    lang (lang) {
      // console.log('lang', lang)
      this.$q.localStorage.set('lang', lang)
      // dynamic import, so loading on demand only
      import('quasar/lang/' + lang).then(lang => {
        this.$i18n.locale = lang.default.isoName
      })
      console.log('lang', this.$q.localStorage.getItem('lang'))
    }
  },
  created () {
    this.lang = this.$i18n.locale
    console.log('lang', this.lang)
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
    }
  }

}
</script>

<style scoped lang="sass">

</style>
