<template>
    <v-layout row align-center justify-center>
        <v-container grid-list-xl pa-0 xs12 sm6  pt-5>
            <v-layout align-center>
                <v-flex text-xs-center>
                    <h2 class="display-1">{{ title }}</h2>
                </v-flex>
            </v-layout>
            <v-layout justify-center wrap mb-5>
                <v-flex
                        v-for="(item, index) in items"
                        :key="index"
                        xs12 sm6 d-flex
                >
                    <v-card
                            tile
                            height="auto"
                            v-bind="item.icon? { [`py4`]: true} : ''"
                    >
                        <v-card-media
                                v-if="item.img"
                                :src="item.img"
                                height="200px"
                        >
                        </v-card-media>
                        <v-card-title >
                            <div
                                    v-if="item.title"
                                    class="headline">
                                {{ item.title }}
                            </div>
                            <v-layout>
                                <v-flex xs2 v-if="item.icon" >
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-flex>
                                <v-flex>
                                    {{ item.text }}
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    },
  }
</script>

<style scoped>

</style>