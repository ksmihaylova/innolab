<template>
    <v-footer dark height="auto">
        <v-layout
                row
                wrap align-center
        >
            <v-flex>
                <v-btn
                        v-for="(item, index) in menu"
                        :key="index"
                        color="white"
                        flat
                >
                    {{ item.title }}
                </v-btn>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex text-xs-right>
                <v-container>
                    <v-card flat>
                        <v-card-text>
                            <div>Адрес: {{ address }}</div>
                            <div>Телефон: {{ phone }}</div>
                            <div>Email: {{ email }} </div>
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-flex>
            <v-flex
                    primary
                    py-3
                    text-xs-center
                    white--text
                    xs12
            >
                {{ title }}, &copy;2018
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      menu: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style scoped>
    .v-card {
        background: #212121;
    }
</style>