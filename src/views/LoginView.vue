<template>
  <main>
      <Navbar />
      <div class="my-5">
          <div class="mx-auto w-25 " style="max-width:100%;">
            <h2 class="text-center mb-3">Login</h2>
            <form @submit.prevent="login">
              <!--Email-->
              <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" type="email"  name="email" class="form-control" placeholder="Email" required v-model="usuario.email" >
                  </div>
                </div>
                              <!--Senha-->
              <div class="row">
                <div class="col-md-12 form-group mb-3">
                  <label for="senha" class="form-label">Password</label>
                  <input id="senha"  type="password" password="senha" class="form-control" placeholder="Senha" required v-model="usuario.senha">
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
  name: 'Login',
  components: {
    Navbar
  },
  data() {
    return {
      usuario: {
        email: "",
        senha: ""
      }
    }
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:8281/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.usuario)
        });

        if (response.ok) {
          const data = await response.json();
          if (data.email === "admin@gmail.com") {
              await fetch(`http://localhost:8281/usuario/${data.id}/admin/true`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            this.$router.push("/admin");
          } else {
            this.$router.push("/");
          }
        } else {
          alert("Credenciais inválidas. Por favor, tente novamente.");
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    }
  }
}
</script>
