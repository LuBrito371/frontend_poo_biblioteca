<template>
    <main>
        <Navbar/>
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Update Usuario</h2>
              <form @submit.prevent="updateUsuario">
                <!--name-->
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input id="name"  type="text" name="name" class="form-control" placeholder="Name" required v-model="usuario.name">
                  </div>
                </div>

                
                <!--Email-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input id="email" type="email"  name="email" class="form-control" placeholder="email" required v-model="usuario.email" >
                    </div>
                  </div>

                <!--Phone Number-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="pNo" class="form-label">Phone Number</label>
                      <input id="pNo" type="text"  name="pNo" class="form-control" placeholder="Phone Number" required v-model="usuario.pNo" >
                    </div>
                  </div>             
                
               
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input class="btn btn-primary w-100" type="submit" value="Submit">
                  </div>
                </div>
      
                <div>
                  
                </div>
              </form>
        
            </div>
          </div>

    </main>
</template>


<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: 'UpdateUsuario',
    components: {
        Navbar
    },

    data(){
        return {
            usuario: {
                id: '',
                name: '',
                email: '',
                pNo: '',
                gender: ''
            }
        }
    },

    beforeMount(){
        this.getUsuarios();
    },

    methods: {
        getUsuarios(){
            fetch(`http://localhost:8083/usuario/${this.$route.params.id}`)
            .then(res => res.json())
            .then(data => {
                this.usuario = data;
                console.log(this.usuario);
            })

        },
        updateUsuario(){
            fetch(`http://localhost:8083/usuario/${this.$route.params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.usuario)
            })
            .then(data => {
                console.log(data);
                this.$router.push('/');
            })
        }
    }
}

</script>