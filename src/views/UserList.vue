<template>
    <div class="row">
    <div class="container">
        <h1>Lista de Usuarios</h1><br>
        <router-link to="/userform" class="btn btn-success pull-right">Crear Usuario</router-link>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(user, index) in users" :key="index">
                    <td scope="row">{{ index+1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>
                        <router-link :to="{ name: 'userform', params: {id: user.id} }" class=" btn btn-warning">Edit </router-link>
                        <button class="btn btn-primary" @click="handleDelete(user.id)">Delete </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div></div>
</template>

<script>
import { ref, onMounted } from 'vue'

const API_URL = 'http://localhost:3000'

export default {
    setup () {
    const users = ref([])

    onMounted(() => {
      getUsers()
    })

    const getUsers = async () => {
      try {
        const result = await fetch(`${API_URL}/users`,
        {
          method: 'GET',
          headers: { 'Accept': 'application/json' },
        })
        const data = await result.json()
        console.log(data)
        users.value = data
        
      } catch (error) { 
        console.log(error)
      }
    }

    const handleDelete = async (id) => {
        try {
            const result = await fetch(`${API_URL}/users/${id}`,
            {
                method: 'DELETE',
                headers: { 'Accept': 'application/json' }
            })
            getUsers()
        } catch (error) {
            console.log(error)
        }
    }
    return {
      users,
      handleDelete,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>