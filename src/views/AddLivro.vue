<template>
  <main>
    <Navbar />
    <div class="my-5">
      <div class="mx-auto w-25" style="max-width: 100%">
        <h2 class="text-center mb-3">Add Livro</h2>
        <form @submit.prevent="addLivro">
          <!--name-->
         <div class="row">
             <div class="col">
            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <label for="nomeLivro" class="form-label">Título</label>
                <input
                  id="nomeLivro"
                  type="text"
                  name="nomeLivro"
                  class="form-control"
                  placeholder="Título"
                  required
                  v-model="livro.nomeLivro"
                />
              </div>
            </div>

            <!--Email-->
            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <label for="categoria" class="form-label">Categoria</label>
                <input
                  id="categoria"
                  type="categoria"
                  name="categoria"
                  class="form-control"
                  placeholder="categoria"
                  required
                  v-model="livro.categoria"
                />
              </div>
            </div>

            <!--Phone Number-->
            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <label for="edicao" class="form-label">Edição</label>
                <input
                  id="edicao"
                  type="text"
                  name="edicao"
                  class="form-control"
                  placeholder="Edição"
                  required
                  v-model="livro.edicao"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <label for="genero" class="form-label">Gênero</label>
                <input
                  id="genero"
                  type="text"
                  name="genero"
                  class="form-control"
                  placeholder="Gênero"
                  required
                  v-model="livro.genero"
                />
              </div>
            </div>
          </div>

          <div class="col">
            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <label for="isbn" class="form-label">ISBN</label>
                <input
                  id="isbn"
                  type="text"
                  name="isbn"
                  class="form-control"
                  placeholder="ISBN"
                  required
                  v-model="livro.isbn"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <label for="anoLancamento" class="form-label"
                  >Ano de Lançamento</label
                >
                <input
                  id="anoLancamento"
                  type="anoLancamento"
                  name="anoLancamento"
                  class="form-control"
                  placeholder="Ano de Lançamento"
                  required
                  v-model="livro.anoLancamento"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <label for="quantidade" class="form-label">Quantidade</label>
                <input
                  id="quantidade"
                  type="quantidade"
                  name="quantidade"
                  class="form-control"
                  placeholder="Quantidade"
                  required
                  v-model="livro.quantidade"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <label for="autores" class="form-label">Autores</label>
                <input
                  id="autores"
                  type="autores"
                  name="autores"
                  class="form-control"
                  placeholder="Autores"
                  v-model="livro.autores"
                />
              </div>
            </div>
          </div>
         </div>

          <!-- Gender
                <label for="gender" class="form-label">Gender</label>
                <div class="form-check">
                  <input class="form-check-input"   type="radio" name="gender" id="male" value="male" v-model="livro.gender">
                  <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio"   name="gender" id="female" value="female" v-model="livro.gender">
                  <label class="form-check-label" for="female">Female</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio"   name="gender" id="others" checked value="others" v-model="livro.gender">
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
  name: "Addlivro",
  components: {
    Navbar,
  },

  data() {
    return {
      livro: {
        nomeLivro: "",
        categoria: "",
        edicao: "",
        genero: "",
        isbn: "",
        anoLancamento: "",
        quantidade: "",
        autores: []
      },
    };
  },

  methods: {
    addLivro() {
      console.log(JSON.stringify(this.livro.autores));
      fetch("http://localhost:8083/livro/salvarLivro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.livro),
      }).then((data) => {
       console.log(data);
        this.$router.push("/");
      });
    },
  },
};
</script>
