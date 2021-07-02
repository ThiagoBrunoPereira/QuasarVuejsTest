<template>
  <q-page id="users">
    <q-table
      :columns="columns"
      :data="listUsers"
      row-key="name"
      color="secondary"
      ref="table"
    >
      <template slot="top-right" slot-scope="props">
        <AddUser  :propsUserEdit="userEdit" v-on:resetId="userEdit = ''" />
      </template>
      <template slot="body" slot-scope="props">
        <q-tr :props="props" @click.native="viewActions(props.row)" class="cursor-pointer">
          <q-td key="id">
            {{ props.row.id }}
          </q-td>
          <q-td key="avatar">
            <img class="avatar" :src="props.row.avatar" alt="">
          </q-td>

          <q-td key="name">
            {{ props.row.first_name }} {{ props.row.last_name }} 
          </q-td>
          <q-td key="email">
            {{ props.row.email }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import AddUser from '../../components/users/AddUser.vue'

export default {
  components: { AddUser },
  data () {
    return {
      userEdit: '',
      actionSubmit: '',
      columns: [
        {
          name: 'id',
          field: listUsers => listUsers['id'],
          align: 'left',
          label: '#',
          sortable: true
        },
        {
          name: 'avatar',
          field: listUsers => listUsers['avatar'],
          align: 'left',
          label: 'Foto',
          sortable: true
        },
        {
          name: 'name',
          field: listUsers => listUsers['first_name'],
          align: 'left',
          label: 'Nome',
          sortable: true
        },
        {
          name: 'email',
          field: listUsers => listUsers['email'],
          align: 'left',
          label: 'Email',
          sortable: true
        }
      ]
    }
  },
  methods: {
    viewActions (row) {
      let self = this
      this.$q.actionSheet({
        title: row.first_name + ' ' + row.last_name,
        dismissLabel: 'Quit',
        actions: [
          {
            label: 'Excluir',
            color: 'negative',
            icon: 'fas fa-minus-circle',
            handler () {
              let oldList = JSON.parse(localStorage.getItem('listUsers')) || []
              oldList.splice(row.__index, 1)
              localStorage.setItem('listUsers', JSON.stringify(oldList))
              self.$store.commit('users/setList', [])
            }
          },
          {
            label: 'Editar',
            color: 'primary',
            icon: 'edit',
            handler () {
              self.userEdit = row
            }
          }
        ]
      }).then(action => {
        this.$q.notify({
          message: `Ação ${action.label} foi executada`,
          timeout: 4000,
          type: 'positive',
          color: 'positive',
          textColor: 'black',
          icon: 'fas fa-minus-circle',
          detail: `Os dados foram modificados`,
          position: 'top-right'
        })
      })
      .catch(() => {
        this.$q.notify({
          message: `A ação foi cancelada`,
          timeout: 4000,
          type: 'negative',
          color: 'negative',
          textColor: 'black',
          icon: 'fas fa-minus-circle',
          detail: `Nenhuma alteração foi feita`,
          position: 'top-right'
        })
      })
    }
  },
  computed: {
    listUsers () {
      return this.$store.state.users.listUsers
    }
  },
  mounted () {
    this.$store.dispatch('users/list')
  }
}
</script>
