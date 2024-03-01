<template>
    <main>
        <Navbar />
        <div class="usuario-info">
            <div class="info-item"><strong>Nome:</strong> {{ usuario.nome }}</div>
            <div class="info-item"><strong>Email:</strong> {{ usuario.email }}</div>
            <div class="info-item"><strong>Endereço:</strong> {{ usuario.endereco }}</div>
            <div class="info-item"><strong>Número de Contato:</strong> {{ usuario.numeroContato }}</div>
            <div class="info-item"><strong>Login:</strong> {{ usuario.login }}</div>
        </div>
    </main>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: 'Perfil',
    components: {
        Navbar
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
            },
        };
    },
    methods: {
        async dadosDoUsuario() {
            try {
                const response = await fetch('http://localhost:8281/usuario/2', {
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
        this.dadosDoUsuario(); // Chama a função dadosDoUsuario() ao carregar o componente
    }
}
</script>

<style scoped>
.usuario-info {
    display: flex;
    flex-direction: column;
    font-size: large;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    background-color: #f0f0f0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-item {
    margin-bottom: 10px;
}
</style>
