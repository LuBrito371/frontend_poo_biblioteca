<template>
    <main>
        <!--Bootstrap Navbar-->
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/addLivro">Add Livro</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/addUsuario">Add Usuario</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="/Login">Login</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/Perfil">Perfil</a>
                    </li>


                    <li class="nav-item">
                    <a class="nav-link" href="">Lista de Usuarios</a>
                    </li>
        
                </ul>
               
                </div>
            </div>
        </nav> 
    </main>
</template>


<script>

export default {
  name: 'navbar',
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      usuario: {
        id: "",
        nome: "",
        endereco: "",
        numeroContato: "",
        email: "",
        login: "",
        senha: ""
      }
    }
  },
  methods: {
    async dadosDoUsuario(userId) {
      try {
        const response = await fetch(`http://localhost:8080/usuario/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json(); // Converte a resposta para JSON
          this.usuario = data; // Atualiza this.usuario com os dados recebidos do backend
        } else {
          console.error('Erro ao obter os dados do usuário:', response.statusText);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    }
  },
  mounted() {
    this.dadosDoUsuario(this.userId); // Chama a função dadosDoUsuario() ao carregar o componente com o ID do usuário dinâmico
  }
}
</script>
