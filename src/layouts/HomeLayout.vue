<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated :reveal-offset="300" class="bg-transparent text-black">
      <q-toolbar>
        <q-space class="gt-xs" />
        <q-avatar>
          <img src="~assets/logo-full.svg">
        </q-avatar>
        <router-link
          exact
          to="/teacher"
          class="text-dark"
          active-class="text-primary"
        >
          <q-btn stretch flat ripple no-caps color="text-grey-8" class="gt-xs" >
            <q-tooltip content-class="bg-black">{{$t('homepage')}}</q-tooltip>
            <div class="row items-center no-wrap">
              <q-icon name="widgets" />
              <div class="q-ml-sm text-center ellipsis gt-sm">
                {{$t('homepage')}}
              </div>
            </div>
          </q-btn>
        </router-link>
        <router-link
          to="/teacher/classes"
          class="text-dark"
          active-class="text-primary"
        >
          <q-btn stretch flat ripple no-caps color="text-grey-8" class="gt-xs" >
            <q-tooltip content-class="bg-black">{{$t('classes')}}</q-tooltip>
            <div class="row items-center no-wrap">
              <q-icon name="group_work" />
              <div class="q-ml-sm text-center ellipsis gt-sm">
                {{$t('classes')}}
              </div>
            </div>
          </q-btn>
        </router-link>
        <router-link
          exact
          to="/discover"
          class="text-dark"
          active-class="text-primary"
        >
          <q-btn stretch flat ripple no-caps color="text-grey-8" class="gt-xs" >
            <q-tooltip content-class="bg-black">{{$t('discover')}}</q-tooltip>
            <div class="row items-center no-wrap">
              <q-icon name="explore" />
              <div class="q-ml-sm text-center ellipsis gt-sm">
                {{$t('discover')}}
              </div>
            </div>
          </q-btn>
        </router-link>
        <router-link
          exact
          to="/library"
          class="text-dark"
          active-class="text-primary"
        >
          <q-btn stretch flat ripple no-caps color="text-grey-8" class="gt-xs" >
            <q-tooltip content-class="bg-black">{{$t('library')}}</q-tooltip>
            <div class="row items-center no-wrap">
              <q-icon name="stars" />
              <div class="q-ml-sm text-center ellipsis gt-sm">
                {{$t('library')}}
              </div>
            </div>
          </q-btn>
        </router-link>
        <router-link
          exact
          to="/messages"
          class="text-dark"
          active-class="text-primary"
        >
          <q-btn stretch flat ripple no-caps color="text-grey-8" class="gt-xs" >
            <q-tooltip content-class="bg-black">{{$t('messages')}}</q-tooltip>
            <div class="row items-center no-wrap">
              <q-icon name="message" />
              <div class="q-ml-sm text-center ellipsis gt-sm">
                {{$t('messages')}}
              </div>
              <q-badge color="red" floating align="middle">4</q-badge>
            </div>
          </q-btn>
        </router-link>
        <q-space />

        <q-input dense rounded standout v-model="searchText" class="q-ml-md ">
          <template slot="append">
            <q-icon v-if="searchText === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="searchText = ''" />
          </template>
        </q-input>
        <q-btn round ripple no-caps color="brown-5" icon="notifications" class="q-ml-md" >
          <q-tooltip content-class="bg-brown-5">{{$t('notifications_desc')}}</q-tooltip>
          <q-badge color="red" floating>4</q-badge>
        </q-btn>
        <q-btn round ripple no-caps color="deep-orange" icon="person" class="q-ml-md" >
          <q-tooltip content-class="bg-deep-orange">{{$t('person_desc')}}</q-tooltip>
          <q-menu
            :offset="[0,5]"
            transition-show="rotate"
            transition-hide="rotate"
          >
            <q-list>
              <q-item-label header>{{$t('person_desc')}}</q-item-label>
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="perm_identity" color="secondary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('profile')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="person_add" color="brown-5" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('invite_teacher')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="group_work" color="deep-orange" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('classes_teacher')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="supervisor_account" color="accent" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('groups_teacher')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="group" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('connections')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator spaced />
              <q-item-label header>{{$t('settings_desc')}}</q-item-label>
              <q-item to="/" clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="home" color="dark" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('land')}}</q-item-label>
                  <q-item-label caption>{{$t('land_desc')}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-go-back=" '/login' " clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="power_settings_new" color="dark" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{$t('login_out')}}</q-item-label>
                  <q-item-label caption>{{$t('login_out_desc')}}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn round ripple no-caps color="primary" icon="settings" class="q-ml-md" @click="right = !right">
          <q-tooltip content-class="bg-primary">{{$t('settings_desc')}}</q-tooltip>
        </q-btn>
        <q-space class="gt-xs" />
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
          <q-item-label header>{{$t('settings')}}</q-item-label>
          <q-item clickable v-close-popup tabindex="1" @click="toggleDarkMode">
            <q-item-section avatar>
              <q-avatar icon="lightbulb_outline" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$q.dark.isActive ? $t('day_mode') : $t('night_mode')}}</q-item-label>
              <q-item-label caption>{{$t('currently_in')}} {{$q.dark.isActive ? $t('night_mode') : $t('day_mode')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator inset spaced />
          <q-item clickable v-close-popup tabindex="2" @click="$q.fullscreen.toggle()">
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
          <q-item tag="label" v-close-popup tabindex="3">
            <q-item-section avatar>
              <q-radio v-model="lang" val="zh-hans" color="negative" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('zh_simple')}}</q-item-label>
              <q-item-label caption>{{$t('currently_in')}} {{$t('zh_simple')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item tag="label" v-close-popup tabindex="4">
            <q-item-section avatar>
              <q-radio v-model="lang" val="en-us" color="accent" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('en_us')}}</q-item-label>
              <q-item-label caption>{{$t('currently_in')}} {{$t('en_us')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator inset spaced />
          <q-item-label header>{{$t('act')}}</q-item-label>
          <q-item clickable v-close-popup tabindex="5" >
            <q-item-section avatar>
              <q-avatar icon="person" color="dark" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('support')}}</q-item-label>
              <q-item-label caption>{{$t('support_desc')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup tabindex="6" @click="right = !right">
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

    <q-footer reveal elevated class="bg-transparent text-black lt-sm">
      <q-toolbar class="row items-center justify-around">

        <router-link
          exact
          to="/teacher"
          class="text-dark"
          active-class="text-primary"
        >
          <q-btn stretch flat ripple color="text-grey-8">
            <q-tooltip content-class="bg-black">{{$t('homepage')}}</q-tooltip>
            <div class="row items-center no-wrap">
              <q-icon name="widgets" />
            </div>
          </q-btn>
        </router-link>
        <router-link
          to="/teacher/classes"
          class="text-dark"
          active-class="text-primary"
        >
          <q-btn stretch flat ripple color="text-grey-8 ">
            <q-tooltip content-class="bg-black">{{$t('classes')}}</q-tooltip>
            <div class="row items-center no-wrap">
              <q-icon name="group_work" />
            </div>
          </q-btn>
        </router-link>
        <router-link
          exact
          to="/discover"
          class="text-dark"
          active-class="text-primary"
        >
          <q-btn stretch flat ripple color="text-grey-8 ">
            <q-tooltip content-class="bg-black">{{$t('discover')}}</q-tooltip>
            <div class="row items-center no-wrap">
              <q-icon name="explore" />
            </div>
          </q-btn>
        </router-link>
        <router-link
          exact
          to="/library"
          class="text-dark"
          active-class="text-primary"
        >
          <q-btn stretch flat ripple color="text-grey-8 ">
            <q-tooltip content-class="bg-black">{{$t('library')}}</q-tooltip>
            <div class="row items-center no-wrap">
              <q-icon name="stars" />
            </div>
          </q-btn>
        </router-link>
        <router-link
          exact
          to="/messages"
          class="text-dark"
          active-class="text-primary"
        >
          <q-btn stretch flat ripple color="text-grey-8 ">
            <q-tooltip content-class="bg-black">{{$t('messages')}}</q-tooltip>
            <div class="row items-center no-wrap">
              <q-icon name="message" />
            </div>
            <q-badge color="red" floating align="middle">4</q-badge>
          </q-btn>
        </router-link>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import * as INFO from '../../package.json'
export default {
  name: 'HomeLayout',
  computed: {
    thumbStyle () {
      return {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#f0a31f',
        width: '5px',
        opacity: 0.75,
        page: 'homepage'
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
      title: INFO.productName,
      searchText: '',
      lang: this.$i18n.locale,
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

    this.query = this.$route.query
    console.log('homelayout query', this.query)
  },
  mounted () {
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
