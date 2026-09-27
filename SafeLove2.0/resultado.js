const titulo = document.getElementById("tituloResultado");
const listaProblemas = document.getElementById("listaProblemas");
const painel = document.getElementById("resultadopainel");
const imagemResultado = document.getElementById("imagemResultado");


// ===============================
// RECUPERA OS DADOS
// ===============================

// Resultado do relacionamento
const resultado =
    localStorage.getItem("resultadoRelacionamento");


// Problemas selecionados
const problemasSalvos =
    localStorage.getItem("problemasSelecionados");

const problemas = problemasSalvos
    ? JSON.parse(problemasSalvos)
    : [];


// Respostas de cada problema
const respostasSalvas =
    localStorage.getItem("respostasProblemas");

const respostasProblemas = respostasSalvas
    ? JSON.parse(respostasSalvas)
    : {};


// ===============================
// RESULTADO DO RELACIONAMENTO
// ===============================

if (resultado === "saudavel") {

    titulo.textContent = "Relacionamento Saudável";

    imagemResultado.src = "iconesaudavel.png";
    imagemResultado.alt = "Relacionamento saudável";

    painel.classList.add("saudavel");

}

else if (resultado === "alerta") {

    titulo.textContent = "Relacionamento em Alerta";

    imagemResultado.src = "iconealerta.png";
    imagemResultado.alt = "Sinais de alerta";

    painel.classList.add("alerta");

}

else if (resultado === "abusivo") {

    titulo.textContent = "Relacionamento Abusivo";

    imagemResultado.src = "iconeabusivo.png";
    imagemResultado.alt = "Relacionamento abusivo";

    painel.classList.add("abusivo");

}


// ===============================
// PROBLEMAS IDENTIFICADOS
// ===============================

if (problemas.length > 0) {

    problemas.forEach(problema => {

        // Caixa de cada problema
        const item = document.createElement("div");

        item.classList.add("problema");


        // ===============================
        // NOME DO PROBLEMA
        // ===============================

        const nome = document.createElement("h3");

        nome.classList.add("nome-problema");

        nome.textContent = problema.nome;

        item.appendChild(nome);


        // ===============================
        // TÍTULO DAS CONSEQUÊNCIAS
        // ===============================

        const tituloOcasionou =
            document.createElement("p");

        tituloOcasionou.classList.add("titulo-ocasionou");

        tituloOcasionou.textContent =
            "O que esse problema está ocasionando no seu relacionamento:";

        item.appendChild(tituloOcasionou);


        // ===============================
        // RESPOSTAS SELECIONADAS
        // ===============================

        const respostas =
            respostasProblemas[problema.id];


        if (respostas && respostas.length > 0) {

            const lista =
                document.createElement("ul");

            lista.classList.add("lista-ocasionou");


            respostas.forEach(resposta => {

                const li =
                    document.createElement("li");

                li.classList.add("resposta-ocasionado");

                li.textContent = resposta;

                lista.appendChild(li);

            });


            item.appendChild(lista);

        }

        else {

            const nenhumaResposta =
                document.createElement("p");

            nenhumaResposta.classList.add(
                "nenhuma-resposta"
            );

            nenhumaResposta.textContent =
                "Nenhuma consequência foi selecionada.";

            item.appendChild(nenhumaResposta);

        }


        // Coloca o problema na página
        listaProblemas.appendChild(item);

    });

}

else {

    listaProblemas.textContent =
        "Nenhum problema foi selecionado anteriormente.";

}