import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'
import { Quasar, LocalStorage } from 'quasar'

Vue.use(VueI18n)

// zh-hans en-us
const locale = LocalStorage.getItem('lang') || 'zh-hans' // ... some logic to determine it (use Cookies Plugin?)
console.log('locale', locale)

const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: locale,
  messages
})

export default async ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n

  try {
    const lang = await import(
      /* webpackInclude: /(de|en-us)\.js$/ */
      `quasar/lang/${locale}`
    )
    Quasar.lang.set(lang.default)
  } catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}

export { i18n }
