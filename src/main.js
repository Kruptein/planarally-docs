import '~/assets/style/index.scss'

import DefaultLayout from '~/layouts/Default.vue'
import DocsLayout from '~/layouts/Docs.vue'
import BlogLayout from '~/layouts/Blog.vue'
import Section from '~/components/Section.vue'
import Card from '~/components/Card'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core
import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import {
	faChevronRight,
	faEye,
	faStopwatch,
	faSyncAlt,
	faTrashAlt,
	faUsers,
	faVideo
	} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(
	faChevronRight,
	faEye,
	faStopwatch,
	faSyncAlt,
	faTrashAlt,
	faUsers,
	faVideo
)

export default function (Vue) {
	Vue.component('font-awesome', FontAwesomeIcon)

import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  scaleRatio: 1.9,
  headerFontFamily: ['Jost', 'Helvetica','Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Jost', 'Helvetica','Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
})

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('DocsLayout', DocsLayout)
  Vue.component('BlogLayout', BlogLayout)
  Vue.component('Section', Section)
  Vue.component('Card', Card)

  head.style.push({
    type: 'text/css',
    cssText: typography.toString()
  })
}
