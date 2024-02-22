<template>
  <main>
    <Navbar />
    <div class="my-5">
      <div class="mx-auto w-25" style="max-width: 100%">
        <h2 class="text-center mb-3">Add Usuario</h2>
        <form @submit.prevent="addUsuario">
          <!--name-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="nome" class="form-label">Nome</label>
              <input
                id="nome"
                type="text"
                name="nome"
                class="form-control"
                placeholder="Nome"
                required
                v-model="usuario.nome"
              />
            </div>
          </div>

          <!--Email-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                class="form-control"
                placeholder="Email"
                required
                v-model="usuario.email"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="endereco" class="form-label">Endereço</label>
              <input
                id="endereco"
                type="endereco"
                name="endereco"
                class="form-control"
                placeholder="Endereço"
                required
                v-model="usuario.endereco"
              />
            </div>
          </div>

          <!--Phone Number-->
          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="numeroContato" class="form-label"
                >Número para Contato</label
              >
              <input
                id="numeroContato"
                type="text"
                name="numeroContato"
                class="form-control"
                placeholder="Número para Contato"
                required
                v-model="usuario.numeroContato"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="login" class="form-label">Login</label>
              <input
                id="login"
                type="login"
                name="login"
                class="form-control"
                placeholder="Login"
                required
                v-model="usuario.login"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 form-group mb-3">
              <label for="senha" class="form-label">Senha</label>
              <input
                id="senha"
                type="senha"
                name="senha"
                class="form-control"
                placeholder="Senha"
                required
                v-model="usuario.senha"
              />
            </div>
          </div>

          <!--Gender-->
          <!-- <label for="gender" class="form-label">Gender</label>
                <div class="form-check">
                  <input class="form-check-input"   type="radio" name="gender" id="male" value="male" v-model="usuario.gender">
                  <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio"   name="gender" id="female" value="female" v-model="usuario.gender">
                  <label class="form-check-label" for="female">Female</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio"   name="gender" id="others" checked value="others" v-model="usuario.gender">
                  <label class="form-check-label" for="others">Others</label>
                </div> -->

          <div class="row">
            <div class="col-md-12 form-group">
              <input
                class="btn btn-primary w-100"
                type="submit"
                value="Submit"
              />
            </div>
          </div>

          <div></div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "AddUsuario",
  components: {
    Navbar,
  },

  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        endereco: "",
        numeroContato: "",
        login: "",
        senha: "",
      },
    };
  },

  methods: {
    addUsuario() {
      console.log(JSON.stringify(this.usuario));
      fetch("http://localhost:8083/usuario/salvarUsuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.usuario),
      }).then((data) => {
        console.log(data);
        this.$router.push("/");
      });
    },
  },
};
</script>
