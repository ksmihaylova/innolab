<template>
    <v-app>
        <TheHeader
                :title="toolbarTitle"
                :subtitle="subtitle"
                :menu="menu" />
        <router-view/>
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
    }
  };
</script>
