<template>
    <header>
        <v-toolbar id="topMenu"
                   class="transparent elevation-0 primary"
                   app
                   dark
                   fixed
                   flat
        >
            <v-toolbar-title id="subtitle">{{ subtitle }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items
                    class="hidden-sm-and-down"
                    v-for="(elem, index) in menu"
                    v-bind:key="index"
                    offset-y
            >
                <v-menu
                        v-if="elem.subItems"
                        offset-y
                >
                    <v-btn
                            flat
                            slot="activator"
                    >
                        <span>{{ elem.title }}</span>
                        <v-icon
                                dark>
                            arrow_drop_down
                        </v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile
                                v-for="(subitem, i) in elem.subItems"
                                :key="i"
                        >
                            <v-list-tile-title id="subtitle">{{ subitem.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                <v-btn v-else flat>{{ elem.title }}</v-btn>
            </v-toolbar-items>
            <v-btn
                    icon
                    class="hidden-md-and-up"
                    @click.stop="rightDrawer = !rightDrawer"
            >
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer
                temporary
                :right="right"
                v-model="rightDrawer"
                app
        >
            <v-list
                    v-for="(item, ind) in menu"
                    :key="ind"
            >
                <v-list-group
                        v-if="item.subItems"
                        v-model="item.model"
                        :key="item.title"
                >
                    <v-list-tile slot="activator">
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.title }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile
                            v-for="(subitem, i) in item.subItems"
                            :key="i"
                    >
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ subitem.title }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-tile v-else :key="item.title">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{ item.title }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-jumbotron
                dark
                :src="bgMain"
        >
            <v-container fill-height>
                <v-layout align-center>
                    <v-flex text-xs-center>
                        <img
                                :src="logo"
                                class="logo-image"
                                alt="Logo"
                        />
                        <h3 id="title-main" class="display-1">{{ title }}</h3>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-jumbotron>
    </header>
</template>

<script>
  import {Images} from '@/images';

  export default {
    data() {
      return {
        logo: Images.logo,
        bgMain: Images.bgMain,
        clipped: false,
        drawer: true,
        miniVariant: false,
        right: true,
        rightDrawer: false
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      },
      menu: {
        type: Array,
        required: true
      }
    },
    methods: {
      handleScroll(event) {
        var element = document.getElementById("topMenu");
        if (window.scrollY > 280) {
          element.classList.remove("transparent");
        } else {
          element.classList.add("transparent");
        }

      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>

<style scoped>
    .logo-image {
        max-width: 50px;
        height: auto;
    }

    .transparent {
        background-color: transparent !important;
        border-color: transparent !important;
    }
</style>