<template>
    <main>
        <Navbar />

        <!-- Table-->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">View Usuario</h1>
                    <!--Add button -->
                    <a href="/add" class="btn btn-primary">Add Usuario</a>
                    <table class="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="usuario in usuarios" :key="usuario.id">
                            <th scope="row">{{usuario.id}}</th>
                            <td>{{usuario.name}}</td>
                            <td>{{usuario.email}}</td>
                            <td>{{usuario.pNo}}</td>
                            <td>{{usuario.gender}}</td>
                            <td>
                              <a class="btn btn-primary" :href="`/edit/${usuario.id}`">Edit</a>
                              <button class="btn btn-danger mx-2" @click="deleteusuario(usuario.id)">Delete</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
        
    </main>
</template>


<script>
import Navbar from '../components/Navbar.vue'

    export default {
        name: 'ViewUsuarios',
        components: {
            Navbar
        },
        data() {
            return {
                usuarios: []
            }
        },

        beforeMount(){
            this.getUsuarios()
        },

        methods: {
            getUsuarios(){
                fetch('http://localhost:8092/usuarios')
                .then(res => res.json())
                .then(data => {
                    this.usuarios = data
                    console.log(data)
                })
            },
            deleteUsuario(id){
                fetch(`http://localhost:8092/usuario/${id}`, {
                    method: 'DELETE'
                })
                .then(data => {
                    console.log(data)
                    this.getusuarios()
                })
            }
        }

    }

</script>