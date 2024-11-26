// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="root"></div>
      <div className="container primeiro-container">
        <div className="content">
          <img id="up" src="up.png" alt="Descrição da imagem" />
          <p>Nosso projeto, desenvolvido por três alunos da Uninassau Campina Grande
                — João Vitor, Pedro Henrique e Ronald —, tem como objetivo investigar e comparar a relação
                de diferentes gerações com o mundo virtual e o uso da tecnologia, especialmente em relação ao celular.</p>
        </div>
      </div>

      <h4>METODOLOGIA</h4>
      <div className="container">
        <div className="content">
          <img id="up" src="metodologia1.webp" alt="Metodologia" />
          <p>Realizamos entrevistas com representantes de ambos os grupos, buscando identificar suas habilidades,
                dificuldades e o nível de envolvimento com a tecnologia. Foram feitas perguntas como: "Você sabe fazer
                uma ligação?", "Sabe utilizar aplicativos de mensagens?" e "Como você se sente em relação ao uso da
                tecnologia?". Nosso objetivo foi traçar um panorama que ilustrasse a diferença de familiaridade com o
                mundo digital entre esses dois públicos, levantando reflexões sobre o impacto da tecnologia em cada
                geração.</p>
        </div>
        {/* Botão que redireciona para a página de metodologia */}
        <button className="button" onClick={() => navigate('/metodologia')}>
          Veja mais sobre a Metodologia
        </button>
      </div>

      <h4>RESULTADOS E OBSERVAÇÕES</h4>
      <div className="container">
        <div className="content">
          <img id="up" src="resultado2.avif" alt="Resultados" />
          <p>Um dos pontos mais marcantes que identificamos é que, enquanto todas as crianças entrevistadas — sem
                exceção — sabem utilizar um celular, muitos idosos ainda encontram grande dificuldade em realizar
                tarefas básicas, como fazer uma ligação ou enviar uma mensagem. Essa disparidade é intrigante,
                considerando que os idosos têm mais experiência de vida e, em muitos casos, são usuários de celulares há
                mais tempo que as crianças.</p>
        </div>
        {/* Botão que redireciona para a página de gráficos */}
        <button className="button" onClick={() => window.open('https://docs.google.com/forms/d/1L_mJ0MtxCfUaieo-87zMVfGtJFfszUNcXfOBBTpkZc8/edit?ts=6743d9e4#responses', '_blank')}>
          Veja nossos gráficos
        </button>
      </div>

      <h4>CONCLUSÃO</h4>
      <div className="container">
        <div className="content">
          <img id="up" src="conclusao1.avif" alt="Conclusao" />
          <p>Nosso estudo não apenas evidenciou a rápida adaptação das crianças à tecnologia, mas também trouxe à tona
                a exclusão digital que muitos idosos ainda enfrentam. Ao expor essas diferenças, esperamos abrir um
                espaço para discussões sobre a importância de promover uma inclusão digital mais ampla, que permita a
                todas as gerações usufruírem das vantagens que a tecnologia oferece.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
