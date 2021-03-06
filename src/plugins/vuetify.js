import Vue from 'vue';
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VJumbotron,
  VMenu,
  VIcon,
  VCard,
  VGrid,
  VTabs,
  VToolbar,
  VParallax,
  transitions,
} from 'vuetify';
import 'vuetify/src/stylus/app.styl';
Vue.use(Vuetify, {
  components: {
    VApp,
    VJumbotron,
    VMenu,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VCard,
    VGrid,
    VTabs,
    VToolbar,
    VParallax,
    transitions
  },
  theme: {
    primary: '#26293c',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})