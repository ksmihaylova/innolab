<template>
    <v-app>
        <TheHeader
                :title="toolbarTitle"
                :city="city"
                :subtitle="subtitle"
                :menu="menu" />
        <router-view/>
        <v-btn class="my-5 primary"
               id="scrollTop"
               bottom
               dark
               fixed
               right
               fab
               @click="$vuetify.goTo('#banner', { offset: -100 })">
            <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
        <TheFooter
                :menu="menu"
                :title="toolbarTitle"
                :address="address"
                :phone="phone"
                :email="email" />

    </v-app>
</template>

<script>
  import TheHeader from '@/components/TheHeader';
  import TheFooter from '@/components/TheFooter';
  import { Main, Menu, Contact } from '@/infoAboutCompany';

  export default {
    name: 'App',
    data () {
      return {
        toolbarTitle: Main.toolbarTitle,
        city: Main.city,
        subtitle: Main.subtitle,
        menu: Menu.menu,
        address: Contact.address,
        phone: Contact.phone,
        email: Contact.email
      }
    },
    components: {
      TheHeader,
      TheFooter
    },
    methods: {
      handleScroll(event) {
        var element = document.getElementById("topMenu");
        var btnScrollTop = document.getElementById("scrollTop");
        if (window.scrollY > 280) {
          btnScrollTop.classList.remove('hidden-scroll');
          element.classList.remove("transparent");
        } else {
          btnScrollTop.classList.add('hidden-scroll');
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

<style>
    .hidden-scroll {
        display: none;
    }
    .v-btn {
        font-size: 18px;
    }
</style>