<template>
  <main>
    <Navbar />

    <!-- Table-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">Acervo</h1>
          <!--Add button -->
          <a href="/add" class="btn btn-primary">Add Livro</a>
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
                <td>{{ livro.name }}</td>
                <td>{{ livro.isbn }}</td>
                <td>
                  <a class="btn btn-primary" :href="`/edit/${livro.id}`"
                    >Edit</a
                  >
                  <button
                    class="btn btn-danger mx-2"
                    @click="deletelivro(livro.id)"
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
import axios from 'axios';
import Navbar from "../components/Navbar.vue";

export default {
  name: "ViewLivros",
  components: {
    Navbar,
  },
  data() {
    return {
      livros: [],
    };
  },

  beforeMount() {
    this.getLivros();
  },

  methods: {
    getLivros() {
     
      axios
        .get("http://localhost:8083/livro/livrosPaginados")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Erro ao fazer a solicitação:", error);
        });
    },
    deleteLivro(id) {
      fetch(`http://localhost:8083/livro/${id}`, {
        method: "DELETE",
      }).then((data) => {
        console.log(data);
        this.getlivros();
      });
    },
  },
};
</script>
