<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="cyan"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Truckvel
          <div slot="subtitle">Truckvel Peças e Serviços</div>
        </q-toolbar-title>

      </q-toolbar>

    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="cyan"
      color="cyan"
      side="left"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Menu</q-list-header>
        <q-item to="/">
          <q-item-side icon="home" />
          <q-item-main class="white-color" label="Início" sublabel="voltar ao início" />
        </q-item>
        <q-item to="/usuarios/lista">
          <q-item-side icon="far fa-user" />
          <q-item-main class="white-color" label="Usuários" sublabel="exibe os usuários" />
        </q-item>
        <q-item to="/usuarios/login">
          <q-item-side icon="far fa-user" />
          <q-item-main class="white-color" label="Login" sublabel="logar no sistema" />
        </q-item>
        <q-item @click.native="logout()">
          <q-item-side icon="far fa-user" />
          <q-item-main class="white-color" label="Logout" sublabel="sair do sistema" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL,
    logout () {
      localStorage.removeItem('token')
      this.$q.notify({
        message: `Seu usuário foi deslogado.`,
        timeout: 4000,
        type: 'positive',
        color: 'positive',
        textColor: 'black',
        icon: 'fas fa-minus-circle',
        detail: `Verifique o Local Storage de seu navegador.`,
        position: 'top-right'
      })
    }
  }
}
</script>

<style>
</style>
