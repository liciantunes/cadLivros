document.getElementById('gerenciamentoForm').addEventListener('submit', cadastrarLivro);
var result = 0;
function cadastrarLivro(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const isbn = document.getElementById('isbn').value;
    fetch('http://localhost:8080/livros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ descricao, isbn, nome}),
    })
        .then(response => response.json())
        .then(data => {
            alert('Jogo cadastrado com sucesso!');
            document.getElementById('gerenciamentoForm').reset();            
        })
        .catch(error => {
            console.error('Erro ao cadastrar jogo:', error);
        });
}

function pesquisarLivros() {
    const searchId = document.getElementById('searchId').value;

    fetch(`http://localhost:8080/livros/${searchId}`)
        .then(response => {
            if (response.status === 404) {
                return Promise.reject('Livro não encontrado');
                result = 0;
            }
            return response.json();
        })
        .then(data => {
            result = 1;
            document.getElementById('nome').value = `${data.nome}`;
            document.getElementById('descricao').value = `${data.descricao}`;
            document.getElementById('isbn').value = `${data.isbn}`;
        })
        .catch(error => {
            console.error('Erro ao pesquisar livro:', error);
            const resultadoPesquisa = document.getElementById('resultadoPesquisa');
            resultadoPesquisa.innerHTML = 'Livro não encontrado.';

        });
}
function atualizarLivros() {
    pesquisarLivros();
    if (result == 1) {
        const nome = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;
        const isbn = document.getElementById('isbn').value;
        const searchId = document.getElementById('searchId').value;

        fetch(`http://localhost:8080/livros/${searchId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, descricao, isbn }),
        })
            .then(response => response.json())
            .then(data => {
                alert('Livro atualizado com sucesso!');
                document.getElementById('cadastroForm').reset();                
            })
            .catch(error => {
                console.error('Erro ao atualizar livro', error);
            });
    } else {
        alert('ID não encontrado na base de dados. Nenhum livro foi alterado!');
    }
}

function deletarLivros() {
    pesquisarLivros();
    if (result == 1) {
        const nome = document.getElementById('nome').value;
        const descriacao = document.getElementById('descricao').value;
        const isbn = document.getElementById('isbn').value;
        const searchId = document.getElementById('searchId').value;

        fetch(`http://localhost:8080/livros/${searchId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, descricao, isbn }),
        })
            .then(response => response.json())
            .then(data => {
                alert('Livro deletado com sucesso!');
                document.getElementById('cadastroForm').reset();                
            })
            .catch(error => {
                console.error('Erro ao deletar livro', error);
            });
    } else {
        alert('Não foi possível deletar o livro');
    }
    alert('Livro excluído com sucesso');
    document.getElementById('cadastroform').reset();
}
