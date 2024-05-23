const form = document.getElementById('form-contatos');
const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaContato();
    adicionaTabela();



});

function adicionaContato(){

    nomeContato = document.getElementById('nome-contato');
    telefoneContato = document.getElementById('telefone-contato');

    if(contatos.includes(nomeContato.value) || telefone.includes(telefoneContato.value)){
        alert('o número de contato ou nome do contato já existe na lista');
    } else{
    contatos.push(nomeContato.value);
    telefone.push(telefoneContato.value);

    let linha = `<tr>`;
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${telefoneContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    nomeContato.value = '';
    telefoneContato.value = '';}
};


function adicionaTabela(){

    const adicionaTabela = document.querySelector('tbody');
    adicionaTabela.innerHTML = linhas;
}