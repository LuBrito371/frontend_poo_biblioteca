<template>
  <main>
    <Navbar />

    <!-- Table-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">Acervo</h1>
          <form @submit.prevent="buscaPor">
            <div class="searchBar row">
              <input
                type="text"
                class="col"
                placeholder="Digite..."
                v-model="busca.info"
              />
              <select name="" id="" class="col" v-model="busca.parametro">
                <option value="nome">Nome</option>
                <option value="isbn">ISBN</option>
                <option value="id">ID</option>
              </select>
              <button class="col btn btn-success" type="submit" value="Submit">
                Pesquisar
              </button>
            </div>
          </form>
          <!--Add button -->
          <div class="buttons">
            <a href="/addUsuario" class="btn btn-primary">Add Usuario</a>
            <a href="/addLivro" class="btn btn-primary">Add Livro</a>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Isbn</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="livro in livros" :key="livro.id">
                <th scope="row">{{ livro.id }}</th>
                <td>{{ livro.nomeLivro }}</td>
                <td>{{ livro.isbn }}</td>
                <td>
                  <a class="btn btn-primary" :href="`/editLivro/${livro.id}`"
                    >Edit</a
                  >
                  <button
                    class="btn btn-danger mx-2"
                    @click="deleteLivro(livro.id)"
                  >
                    Delete
                  </button>
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
import axios from "axios";
import Navbar from "../components/Navbar.vue";

axios.defaults.baseURL = "http://127.0.0.1:5173/";
axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  "http://localhost:8083";

export default {
  name: "ViewLivros",
  components: {
    Navbar,
  },
  data() {
    return {
      livros: [],
      busca: {
        parametro: "",
        info: "",
      },
    };
  },

  beforeMount() {
    this.getLivros();
  },

  methods: {
    getLivros() {
      fetch(`http://localhost:8083/livro/livrosPaginados`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.livros = data.content;
        });
    },
    deleteLivro(id) {
      fetch(`http://localhost:8083/livro/${id}`, {
        method: "DELETE",
      }).then((data) => {
        this.getLivros();
      });
    },
    buscaPor() {
      if (this.busca.parametro == "id") {
        fetch(`http://localhost:8083/livro/id/${this.busca.info}`, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            var livro = data;
            this.livros = [];
            this.livros[0] = livro;
            
          });
      }
      if (this.busca.parametro == "isbn") {
        fetch(`http://localhost:8083/livro/isbn/${this.busca.info}`, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            var livro = data;
            this.livros = [];
            this.livros[0] = livro;
            
          });
      }
      if (this.busca.parametro == "nome") {
        fetch(`http://localhost:8083/livro/nomeLivro/${this.busca.info}`, {
          method: "GET",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            var livro = data;
            this.livros = [];
            this.livros[0] = livro;
            
          });
      }
    },
  },
};
</script>
