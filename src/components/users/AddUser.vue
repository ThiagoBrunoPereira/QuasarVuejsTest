<template>
  <div>
    <q-btn color="cyan" glossy icon="add" label="CADASTRAR USUÁRIO" @click.native="modalOpen = !modalOpen" />
    <template>
      <q-modal v-model="modalOpen" :content-css="{minWidth: '50vw', minHeight: '60vh'}" @hide="resetData()" >
        <q-modal-layout>
          <q-toolbar slot="header" color="cyan" glossy>
            <q-btn
              flat
              round
              dense
              icon="keyboard_arrow_left"
            />
            <q-toolbar-title>
              {{ propsUserEdit > 0 ? 'Editar usuário' : 'Adicionar usuário' }}
            </q-toolbar-title>
          </q-toolbar>

          <form  class="q-pa-lg"  @submit.prevent="submit">
              <q-field>
                <q-input
                  v-model="user.first_name"
                  float-label="Nome"
                />
              </q-field>
              <q-field>
                <q-input
                  v-model="user.last_name"
                  float-label="Sobrenome"
                />
              </q-field>
              <q-field>
                <q-input
                  v-model="user.email"
                  float-label="Email"
                />
              </q-field>
              <q-btn type="submit" class="float-right q-mt-lg" color="cyan" glossy>Salvar</q-btn>
            </form>
        </q-modal-layout>
      </q-modal>
    </template>
  </div>
</template>
<script>

export default {
  props: ['propsUserEdit'],
  data () {
    return {
      modalOpen: false
    }
  },
  watch: {
    propsUserEdit () {
      if (this.propsUserEdit.id > 0) {
        this.$store.commit('users/setEdit', this.propsUserEdit)
        this.modalOpen = true
      }
    }
  },
  methods: {
    submit () {
      let payload = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        __index: this.user.__index
      }
      if (this.propsUserEdit.id > 0) {
        this.$store.dispatch('users/put', [ this.user, this.propsUserEdit.id ]).then(() => {
          this.$store.commit('users/setList', [])
          this.resetData()
        })
      } else {
        this.$store.dispatch('users/add', payload).then(() => {
          this.$store.commit('users/setList', [])
          this.resetData()
        })
      }
    },
    resetData () {
      this.modalOpen = false
      this.$emit('resetId')
      let user = this.$store.state.users.user
      user.first_name = ''
      user.last_name = ''
      user.email = ''
    }
  },
  computed: {
    user () {
      return this.$store.state.users.user
    }
  }
}
</script>