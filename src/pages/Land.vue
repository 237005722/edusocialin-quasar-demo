<template>
  <q-page>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      ref="carousel"
      infinite
      height="550px"
    >
      <q-carousel-slide :name="1" img-src="~assets/login-bg.jpg">
        <div class="flex flex-center full-width full-height">
          <div class="text-white">
            <div class="text-h3 text-center q-mb-xl">{{$t('search_title')}}</div>
            <transition
              appear
              enter-active-class="animated slideInDown"
              leave-active-class="animated slideOutUp"
            >
              <q-input rounded standout bg-color="white" color="primary" :label="$t('search_label')">
                <template slot="append">
                  <q-avatar>
                    <img src="~assets/logo-full.svg">
                  </q-avatar>
                </template>
              </q-input>
            </transition>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="~assets/login-bg.jpg">

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

    <div class="my-panel flex flex-center">
      <div class="my-panel-content text-black">
        <div class="text-h4 text-center" style="line-height: 50px;">{{$t('features')}}</div>
        <div class="text-subtitle1 text-center q-mb-md" style="line-height: 50px;">{{$t('features_desc')}}</div>
        <transition
          appear
          enter-active-class="animated slideInDown"
          leave-active-class="animated slideOutUp"
        >
          <div class="row flex flex-center q-col-gutter-x-md q-col-gutter-y-md">
            <div class="col-6 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6 flex flex-center">
              <div class="full-width flex flex-center">
                <q-btn round ripple size="30px" color="primary" icon="shopping_cart" class="shadow-3 "></q-btn>
              </div>
              <div class="text-h6 text-center text-grey-8 q-mt-sm">成绩分析</div>
            </div>
            <div class="col-6 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6 flex flex-center">
              <div class="full-width flex flex-center">
                <q-btn round ripple size="30px" color="secondary" icon="navigation" class="shadow-3 " />
              </div>
              <div class="text-h6 text-center text-grey-8 q-mt-sm">平安考勤</div>
            </div>
            <div class="col-6 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6 flex flex-center">
              <div class="full-width flex flex-center">
                <q-btn round ripple size="30px" color="amber" icon="layers_clear" class="shadow-3 " />
              </div>
              <div class="text-h6 text-center text-grey-8 q-mt-sm">智能会议</div>
            </div>
            <div class="col-6 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6 flex flex-center">
              <div class="full-width flex flex-center">
                <q-btn round ripple size="30px" color="brown-5" icon="directions" class="shadow-3 " />
              </div>
              <div class="text-h6 text-center text-grey-8 q-mt-sm">智能工资条</div>
            </div>
            <div class="col-6 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6 flex flex-center">
              <div class="full-width flex flex-center">
                <q-btn round ripple size="30px" color="deep-orange" icon="edit_location" class="shadow-3 " />
              </div>
              <div class="text-h6 text-center text-grey-8 q-mt-sm">选课系统</div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="my-panel flex flex-center">
      <div class="my-panel-content text-black">
        <q-parallax :height="650" src="~assets/login-bg.jpg">
          <div class="bg-hazy full-width full-height">
            <div class="text-h4 text-center q-mt-md" style="line-height: 50px;">{{$t('work')}}</div>
            <div class="text-subtitle1 text-center q-mb-md" style="line-height: 50px;">{{$t('work_desc')}}</div>
            <div class="row flex flex-center full-width full-height">
              <div class="col-2 gt-md"></div>
              <div class="col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-11 full-height">
                <q-scroll-area
                  :thumb-style="thumbStyle"
                  :bar-style="barStyle"
                  style="height: 70%;"
                >
                  <div class="row flex flex-center q-col-gutter-x-md q-col-gutter-y-md full-height">
                    <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 flex flex-center">
                      <q-img
                        src="~assets/Layer20.png"
                        transition="jump-right"
                        class="shadow-3"
                      >
                        <template slot="loading">
                          <q-spinner-gears color="primary" />
                        </template>
                        <div class="absolute-full text-subtitle2 flex flex-center">
                          Caption
                        </div>
                      </q-img>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 flex flex-center">
                      <q-img
                        src="~assets/Layer24.png"
                        transition="jump-up"
                        class="shadow-3"
                      >
                        <template slot="loading">
                          <q-spinner-gears color="primary" />
                        </template>
                        <div class="absolute-full text-subtitle2 flex flex-center">
                          Let every student enjoy personalized professional tutoring
                        </div>
                      </q-img>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 flex flex-center">
                      <q-img
                        src="~assets/Layer19.png"
                        transition="flip-right"
                        class="shadow-3"
                      >
                        <template slot="loading">
                          <q-spinner-gears color="primary" />
                        </template>
                        <div class="absolute-full text-subtitle2 flex flex-center">
                          Caption
                        </div>
                      </q-img>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 flex flex-center">
                      <q-img
                        src="~assets/Layer22.png"
                        transition="flip-left"
                        class="shadow-3"
                      >
                        <template slot="loading">
                          <q-spinner-gears color="primary" />
                        </template>
                        <div class="absolute-full text-subtitle2 flex flex-center">
                          Let every student enjoy personalized professional tutoring
                        </div>
                      </q-img>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 flex flex-center">
                      <q-img
                        src="~assets/Layer21.png"
                        transition="flip-up"
                        class="shadow-3"
                      >
                        <template slot="loading">
                          <q-spinner-gears color="primary" />
                        </template>
                        <div class="absolute-full text-subtitle2 flex flex-center">
                          Let every student enjoy personalized professional tutoring
                        </div>
                      </q-img>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 flex flex-center">
                      <q-img
                        src="~assets/Layer23.png"
                        transition="flip-down"
                        class="shadow-3"
                      >
                        <template slot="loading">
                          <q-spinner-gears color="primary" />
                        </template>
                        <div class="absolute-full text-subtitle2 flex flex-center">
                          Caption
                        </div>
                      </q-img>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 flex flex-center">
                      <q-img
                        src="~assets/Layer21.png"
                        transition="jump-down"
                        class="shadow-3"
                      >
                        <template slot="loading">
                          <q-spinner-gears color="primary" />
                        </template>
                        <div class="absolute-full text-subtitle2 flex flex-center">
                          Let every student enjoy personalized professional tutoring
                        </div>
                      </q-img>
                    </div>
                    <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6 flex flex-center">
                      <q-img
                        src="~assets/Layer23.png"
                        transition="jump-left"
                        class="shadow-3"
                      >
                        <template slot="loading">
                          <q-spinner-gears color="primary" />
                        </template>
                        <div class="absolute-full text-subtitle2 flex flex-center">
                          Caption
                        </div>
                      </q-img>
                    </div>
                  </div>
                </q-scroll-area>
              </div>
              <div class="col-2 gt-md"></div>
            </div>
          </div>
        </q-parallax>
      </div>
    </div>

    <div class="my-panel flex flex-center">
      <div class="my-panel-content text-black">
        <div class="text-h4 text-center" style="line-height: 50px;">{{$t('future')}}</div>
        <div class="text-subtitle1 text-center text-grey-8 q-mb-md" style="line-height: 50px;">{{$t('future_desc')}}</div>
        <div class="flex items-end justify-end">
          <div class="row flex flex-center full-width full-height">
            <div class="col-2 gt-md"></div>
            <div class="col-4 col-xl-4 col-lg-4 col-md-5 col-sm-5 col-xs-12 flex flex-center">
              <div class="row flex flex-center q-col-gutter-x-md q-col-gutter-y-md q-pb-md">
                <div class="col-6 flex flex-center">
                  <div class="full-width flex flex-center">
                    <q-btn round ripple size="30px" color="primary" icon="shopping_cart" class="shadow-3 q-mb-md"></q-btn>
                  </div>
                  <div class="text-h6 text-center text-grey-8 q-mt-sm">Teacher One To One</div>
                  <div class="text-subtitle1 text-center q-mt-sm">Teacher One To One Teacher One To One Teacher One To One</div>
                </div>
                <div class="col-6 flex flex-center">
                  <div class="full-width flex flex-center">
                    <q-btn round ripple size="30px" color="secondary" icon="navigation" class="shadow-3 q-mb-md"></q-btn>
                  </div>
                  <div class="text-h6 text-center text-grey-8 q-mt-sm">Teacher One To One</div>
                  <div class="text-subtitle1 text-center q-mt-sm">Teacher One To One Teacher One To One Teacher One To One</div>
                </div>
                <div class="col-6 flex flex-center">
                  <div class="full-width flex flex-center">
                    <q-btn round ripple size="30px" color="amber" icon="layers_clear" class="shadow-3 q-mb-md"></q-btn>
                  </div>
                  <div class="text-h6 text-center text-grey-8 q-mt-sm">Teacher One To One</div>
                  <div class="text-subtitle1 text-center q-mt-sm">Teacher One To One Teacher One To One Teacher One To One</div>
                </div>
                <div class="col-6 flex flex-center">
                  <div class="full-width flex flex-center">
                    <q-btn round ripple size="30px" color="brown-5" icon="directions" class="shadow-3 q-mb-md"></q-btn>
                  </div>
                  <div class="text-h6 text-center text-grey-8 q-mt-sm">Teacher One To One</div>
                  <div class="text-subtitle1 text-center q-mt-sm">Teacher One To One Teacher One To One Teacher One To One</div>
                </div>
              </div>
            </div>
            <div class="col-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12 flex flex-center"></div>
            <div class="col-4 col-xl-4 col-lg-4 col-md-5 col-sm-5 col-xs-12 flex flex-center bg-primary-hazy relative-position">
              <div class="absolute-center" style="left: 50px; z-index: 10;">
                <q-img
                  src="~assets/Layer32.png"
                  transition="jump-left"
                  class="bg-transparent"
                  style="width: 350px;"
                >
                  <template slot="loading">
                    <q-spinner-gears color="primary" />
                  </template>
                  <div class="absolute-full bg-transparent text-subtitle2 flex flex-center">
                    Capture
                  </div>
                </q-img>
              </div>
              <q-parallax src="~assets/login-bg.jpg" class="relative-position">
                <div class="bg-primary-hazy" style="width: 100%; height: 100%;">
                </div>
              </q-parallax>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-panel flex flex-center">
      <div class="my-panel-content bg-primary text-black">
        <div class="text-h4 text-center" style="line-height: 50px;">{{$t('contact')}}</div>
        <div class="text-subtitle1 text-center text-grey-8 q-mb-md" style="line-height: 30px;">{{$t('contact_desc')}}</div>
        <div class="row flex flex-center full-width full-height q-pa-md">
          <div class="text-white">
            <div class="text-h4 text-center q-mb-xl">{{$t('contact_title')}}</div>
            <transition
              appear
              enter-active-class="animated slideInDown"
              leave-active-class="animated slideOutUp"
            >
              <q-input rounded standout type="email" :prefix="$t('contact_prefix')" bg-color="white" color="primary" :label="$t('contact_label')">
                <template slot="append">
                  <q-avatar>
                    <img src="~assets/logo-full.svg">
                  </q-avatar>
                </template>
              </q-input>
            </transition>
          </div>
        </div>
      </div>
      <div class="my-panel-content text-black flex flex-center">
        <div class="row flex flex-center full-width full-height q-pa-md">
          <div class="col-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="full-width flex flex-center">
              <transition
                appear
                enter-active-class="animated slideInDown"
                leave-active-class="animated slideOutUp"
              >
                <img alt="App logo" src="~assets/logo-full.svg" style="width: 150px;">
              </transition>
            </div>
            <div class="q-mt-lg q-pb-md flex flex-center">
              <label class="text-subtitle1 text-grey-9">{{$t('Tel')}}：</label>
              <q-btn flat rounded ripple color="primary" label="123 ***** 789" class="text-subtitle2 text-grey-8" />
            </div>
            <div class="q-pb-md flex flex-center">
              <label class="text-subtitle1 text-grey-9">{{$t('Email')}}：</label>
              <q-btn flat rounded ripple color="primary" label="12345678910@gmail.com" class="text-subtitle2 text-grey-8" />
            </div>
            <div class="q-pb-md flex flex-center">
              <label class="text-subtitle1 text-grey-9">Copyright©2018-{{thisYear}}
                <q-btn flat rounded ripple color="primary" :label="productName" class="text-subtitle2" /> {{$t('Reserved')}}</label>
            </div>
          </div>
          <div class="col-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="full-width flex flex-center">
              <transition
                appear
                enter-active-class="animated slideInDown"
                leave-active-class="animated slideOutUp"
              >
                <img alt="App logo" src="~assets/logo-full.svg" style="width: 150px;">
              </transition>
            </div>
            <div class="q-mt-lg q-pb-md flex flex-center">
              <q-btn flat rounded ripple color="primary" :label="$t('AboutUs')" class="text-subtitle2 text-grey-8" />
            </div>
            <div class="q-pb-md flex flex-center">
              <q-btn flat rounded ripple color="primary" :label="$t('Partner')" class="text-subtitle2 text-grey-8" />
            </div>
            <div class="q-pb-md flex flex-center">
            <q-btn flat rounded ripple color="primary" :label="$t('Links')" class="text-subtitle2 text-grey-8" />
          </div>
            <div class="q-pb-md flex flex-center">
              <q-btn type="a" :href="icp_url" target="__blank" flat rounded ripple color="primary" :label="'蜀ICP备'+icp+'号'" class="text-subtitle1" />
            </div>
          </div>
          <div class="col-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="full-width flex flex-center">
              <transition
                appear
                enter-active-class="animated slideInDown"
                leave-active-class="animated slideOutUp"
              >
                <img alt="App logo" src="~assets/logo-full.svg" style="width: 150px;">
              </transition>
            </div>
            <div class="q-mt-lg q-pb-md flex flex-center">
              <q-btn flat rounded ripple color="primary" :label="$t('support')" class="text-subtitle2 text-grey-8" />
            </div>
            <div class="q-pb-md flex flex-center">
              <q-btn flat rounded ripple color="primary" :label="$t('Clause')" class="text-subtitle2 text-grey-8" />
            </div>
            <div class="q-pb-md flex flex-center">
              <q-btn flat rounded ripple color="primary" :label="$t('Privacy')" class="text-subtitle2 text-grey-8" />
            </div>
            <div class="q-pb-md flex flex-center">
              <q-btn flat rounded ripple color="primary" :label="$t('Help')" class="text-subtitle2 text-grey-8" />
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
import * as INFO from '../../package.json'
export default {
  name: 'Land',
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
      icp: '1234567890',
      icp_url: 'http://www.beian.miit.gov.cn/',
      productName: INFO.productName,
      slide: 1,
      autoplay: false,
      thisYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="sass">
  .my-panel
    width: 100%
    min-height: 350px
    .my-panel-content
      width: inherit
      padding: 40px 0px
</style>
