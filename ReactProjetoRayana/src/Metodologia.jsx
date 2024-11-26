import React from 'react';

function Metodologia() {
  return (
    <div>
      
          <h1>METODOLOGIA</h1>
      
      <div className="container primeiro-container">
        <div className="content">
        <img id="up" src="metodologia2.jpg" alt="Descrição da imagem" />
          <p>
            Este estudo utilizou uma abordagem qualitativa e quantitativa para investigar a relação de crianças e
            idosos com a tecnologia, com ênfase no uso de dispositivos móveis, como celulares. A pesquisa foi
            dividida em três fases principais: definição do público-alvo, desenvolvimento do questionário e coleta
            de dados por meio de entrevistas presenciais. A escolha por uma metodologia mista (qualitativa e
            quantitativa) visa garantir uma análise abrangente e detalhada das diferenças de engajamento e uso de
            tecnologia entre as duas gerações.
          </p>
        </div>
      </div>

      {/* O restante do código permanece igual */}
      <h4>PÚBLICO-ALVO</h4>
      <div className="container">
        <div className="content">
        <img id="up" src="publicoalvo.jpg" alt="Descrição da imagem" />
          <p>
            O público-alvo foi composto por dois grupos distintos:<br />
            <strong>• Crianças:</strong> na faixa etária de 8 a 13 anos, residentes em áreas urbanas, frequentadoras
            de escolas de ensino fundamental e com acesso a dispositivos móveis.<br />
            <strong>• Idosos:</strong> com idade superior a 65 anos, residentes na mesma área geográfica, com
            diferentes níveis de acesso à tecnologia, mas sem conhecimento prévio especializado no uso de
            dispositivos eletrônicos.
          </p>
        </div>
      </div>

      <h4>COLETA DE DADOS</h4>
      <div className="container">
        <div className="content">
        <img id="up" src="coletaDeDados.avif" alt="Descrição da imagem" />
          <p>
            A coleta de dados foi realizada por meio de entrevistas semi-estruturadas, que permitiram flexibilidade
            nas respostas, mantendo a estrutura necessária para comparações estatísticas. Foram abordados temas
            como:<br />
            <strong>• Possessão de celular:</strong> Se o participante possui ou já possuiu um celular.<br />
            <strong>• Competências tecnológicas:</strong> Se sabe realizar tarefas básicas como ligações, envio de
            mensagens de texto e uso de aplicativos.<br />
            <strong>• Frequência de uso:</strong> Quantidade de horas diárias ou semanais que passam utilizando o
            celular.<br />
            <strong>• Percepção pessoal sobre a tecnologia:</strong> Como cada participante se sente em relação à
            dependência e à evolução da tecnologia.
          </p>
        </div>
      </div>

    
      <h4>ANÁLISE DE DADOS</h4>
      <div className="container">
        <div className="content">
        <img id="up" src="analise.avif" alt="Descrição da imagem" />
          <p>
            Os dados quantitativos foram analisados por meio de estatísticas descritivas, com o uso de gráficos de
            barras e tabelas para ilustrar as principais diferenças entre os grupos. Já os dados qualitativos
            foram submetidos a uma análise de conteúdo, identificando temas recorrentes, como dificuldades dos idosos
            e naturalidade das crianças no uso de dispositivos móveis.
          </p>
        </div>
      </div>

      
     

   
      <h4>LIMITAÇÕES</h4>
      <div className="container">
        <div className="content">
        <img id="up" src="limitacao.avif" alt="Descrição da imagem" />
          <p>
            Reconhecemos que a amostra de participantes foi limitada a uma região geográfica específica, o que pode
            restringir a generalização dos resultados para outras áreas com diferentes níveis de acesso à tecnologia.
            Além disso, o uso de entrevistas presenciais pode ter influenciado as respostas dos idosos.
          </p>
        </div>
      </div>

     
      <h4>CONSIDERAÇÕES FINAIS</h4>
      <div className="container">
        <div className="content">
          <p>
            A metodologia adotada permitiu uma análise comparativa robusta entre os dois grupos geracionais,
            evidenciando as discrepâncias no uso e entendimento da tecnologia. Com esses dados, esperamos abrir
            discussões sobre inclusão digital e educação tecnológica.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Metodologia;
