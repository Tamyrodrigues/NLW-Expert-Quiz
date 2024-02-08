//const mensagem = "Bom te ver aqui!"
//alert(mensagem + (10 * 100) + " Abraços")
// bom te ver aqui! 1000 abraços


// array ou vetores
const perguntas = [{
        pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "int",
            "let"
        ],
        correta: 0
    },
    {
        pergunta: "Qual método é usado para exibir uma caixa de diálogo com uma mensagem em JavaScript?",
        respostas: [
            "alert()",
            "confirm()",
            "prompt()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual operador é usado para comparar o valor e o tipo de duas variáveis em JavaScript?",
        respostas: [
            "=",
            "===",
            "=="
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para obter o comprimento de uma string em JavaScript?",
        respostas: [
            "length()",
            "size()",
            "count()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado de 5 + '3' em JavaScript?",
        respostas: [
            "8",
            "53",
            "15"
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "shift()",
            "splice()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de escrever um comentário de uma única linha em JavaScript?",
        respostas: [
            "/* Este é um comentário */",
            "// Este é um comentário",
            "<!-- Este é um comentário -->"
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "unshift()",
            "concat()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador lógico 'AND' em JavaScript?",
        respostas: [
            "&",
            "||",
            "&&"
        ],
        correta: 2
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
        respostas: [
            "parseInt()",
            "toInt()",
            "parseNumber()"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
    //new Set() é um construtor que cria um objeto Set, que é uma coleção de valores únicos. Um objeto Set pode armazenar diversos tipos de valores (primitivos ou objetos) e garante que cada valor apareça apenas uma vez na coleção. Se você tentar adicionar um valor que já está presente no Set, ele será ignorado.

const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas



//loop ou laço de repatição
//Este é um loop for...of que percorre cada elemento do array perguntas.
for (const item of perguntas) {

    //template.content.cloneNode(true) : cria uma cópia do conteúdo dentro do elemento HTML especificado pelo template. Ele cria uma cópia profunda do conteúdo, incluindo todos os elementos e seus atributos.

    //A constante quizItem recebe essa cópia.
    const quizItem = template.content.cloneNode(true)

    //Aqui, estamos definindo o texto do elemento <h3> dentro de quizItem com o texto da pergunta atual do loop.
    quizItem.querySelector('h3').textContent = item.pergunta;


    //Este é outro loop for...of, que itera sobre cada resposta dentro do array de respostas da pergunta atual.
    for (let resposta of item.respostas) {

        //cloneNode(true) cria uma cópia profunda desse elemento <dt>.
        //Aqui, quizItem.querySelector('dl dt') encontra o primeiro elemento <dt> dentro de quizItem.
        const dt = quizItem.querySelector('dl dt').cloneNode(true)

        //Este comando define o texto do elemento <span> dentro do elemento <dt> clonado com a resposta atual do loop.
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
        }

        //Aqui, estamos adicionando o elemento <dt> (que contém a resposta) ao elemento <dl> dentro de quizItem.
        quizItem.querySelector('dl').appendChild(dt)
    }


    //Remoção do Placeholder ou Resposta Anterior:
    quizItem.querySelector('dl dt').remove()


    //Finalmente, adicionamos o quizItem (que representa uma pergunta com suas opções de resposta) ao elemento quiz no DOM.
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}