const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
console.log(estatisticas)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

/* 
controle.forEach( (elemento) =>{ //arrow function é um dos jeitos de declarar funções anonimas
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        alterarEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {

    const pecaEspecifica = controle.querySelector('[data-contador]')
    if (operacao === "-") {
        if (pecaEspecifica.value == 0) {
            alert('Não pode')
        } else {
        pecaEspecifica.value = parseInt(pecaEspecifica.value) - 1
        }
    } else {
        pecaEspecifica.value = parseInt(pecaEspecifica.value) + 1
    }
}

function alterarEstatistica (pecaAlterada) {
    estatisticas.forEach( (stat) => {
        stat.textContent = parseInt(stat.textContent) + pecas[pecaAlterada][stat.dataset.estatistica]
    })
}


 */

controle.forEach( (elemento) =>{ //arrow function é um dos jeitos de declarar funções anonimas
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle, pecaAlterada) {

    const pecaEspecifica = controle.querySelector('[data-contador]')
    if (operacao === "-") {
        if (pecaEspecifica.value == 0) {
            alert('Não pode')
        } else {
        pecaEspecifica.value = parseInt(pecaEspecifica.value) - 1
        estatisticas.forEach( (stat) => {
            stat.textContent = parseInt(stat.textContent) - pecas[pecaAlterada][stat.dataset.estatistica]
        })
        }
    } else {
        pecaEspecifica.value = parseInt(pecaEspecifica.value) + 1
        estatisticas.forEach( (stat) => {
            stat.textContent = parseInt(stat.textContent) + pecas[pecaAlterada][stat.dataset.estatistica]
        })
    }
}