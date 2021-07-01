<template>
  <q-page class="flex flex-center">
    <div class="row" id="login">
      <form class="row" autocomplete="off" @submit.prevent="login">
        <q-field
          id="username"
          icon="person_outline"
          error-label="We need a valid email"
          :count="16"
        >
          <q-input placeholder="Usuário" v-model="user.email" float-label="Usuário" />
        </q-field>
        <q-field
          id="password"
          icon="lock"
          :count="16"
        >
          <q-input placeholder="Senha" type="password" max-length="16" v-model="user.password" float-label="Senha" />
        </q-field>

        <q-btn
          class="q-ml-lg"
          type="submit"
          label="Entrar"
          color="cyan"
        />
      </form>
    </div>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      user: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }
  },
  methods: {
    login () {
      let config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
      window.axios.post('api/login', this.user, config)
        .then((response) => {
          if (response.status === 200) {
            localStorage['token'] = JSON.stringify(response.data.token)
          }
          this.$q.notify({
            message: `O token ${localStorage['token']} foi armazenado.`,
            timeout: 4000,
            type: 'positive',
            color: 'positive',
            textColor: 'black',
            icon: 'fas fa-minus-circle',
            detail: `Verifique o Local Storage de seu navegador.`,
            position: 'top-right'
          })
        })
        .catch((responseError) => {
          this.$q.notify({
            message: `Usuário ou senha incorretos.`,
            timeout: 4000,
            type: 'negative',
            color: 'negative',
            textColor: 'black',
            icon: 'fas fa-minus-circle',
            detail: `Usuário: eve.holt@reqres.in | Senha: cityslicka`,
            position: 'top-right'
          })
        })
    }
  }
}
</script>
