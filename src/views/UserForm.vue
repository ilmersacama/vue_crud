<template>
    <div class="row">
        <div class="container">
        <h1>Formulario de Usuarios</h1>
            <form class="form-group" style="width: 60%">
                <label>Name</label>
                <input type="text" v-model="user.name" name="name" class="form-control">
                <label for="">Lastname</label>
                <input type="text" v-model="user.lastname" name="lastname" class="form-control"><br>
                <button type="button" @click="handleSubmit" class="btn btn-success">Guardar Usuario</button>
            </form>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const API_URL = 'http://localhost:3000'

export default {
    setup () {
        const route = useRoute()
        const router = useRouter()
        const user = ref({
            name: '',
            lastname: ''
        })
        onMounted(() => {
            //console.log(route.params.id)
            getUser(route.params.id)
        })

        const getUser =async (id) => {
            try {
                const result = await fetch(`${API_URL}/users/${id}`,
                {
                    method : 'GET',
                    headers : { 'Accept': 'application/json' },
                })
                const data = await result.json()
                console.log(data)
                user.value = data
            } catch (error) {
                console.log(error)
            }
        }
        const handleSubmit = async () => {
            console.log(user.value.id)
            if(user.value.id){
                try {
                    const result = await fetch(`${API_URL}/users/${user.value.id}`,
                    {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(user.value)
                    })
                    
                    console.log(result)
                } catch (error) {
                    console.log(error)
                }
            }else{
                try {
                    const result = await fetch(`${API_URL}/users`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(user.value)
                    })
                    
                    console.log(result)
                } catch (error) {
                    console.log(error)
                }
            }

            router.push({ name: 'list' })
        }

        return {
            user,
            handleSubmit
        }
    }
}
</script>

<style lang="scss" scoped>

</style>