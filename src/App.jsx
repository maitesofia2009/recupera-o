import { useState } from 'react';
import './App.css';

function App() {
  const conteudos = [
    {
      id: 1,
      numero: 'CONTEÚDO 01',
      titulo: 'Git e GitHub',
      explicacao: 'O Git controla o histórico de alterações do código no computador, enquanto o GitHub guarda esse projeto na nuvem para backup e colaboração.',
      exemplo: 'git add . && git commit -m "cria cards" && git push origin main'
    },
    {
      id: 2,
      numero: 'CONTEÚDO 02',
      titulo: 'Node.js e npm',
      explicacao: 'O Node.js permite executar JavaScript fora do navegador, e o npm é o gestor que instala e organiza bibliotecas e ferramentas do projeto.',
      exemplo: 'node app.js (executa código JS no terminal) e npm install (instala pacotes)'
    },
    {
      id: 3,
      numero: 'CONTEÚDO 03',
      titulo: 'React e JSX',
      explicacao: 'React é uma biblioteca para construir interfaces divididas em partes reutilizáveis, usando JSX para escrever estrutura parecida com HTML dentro do JavaScript.',
      exemplo: 'const elemento = <h1>Olá, Guia de Estudos!</h1>;',
      erroComum: `Erro: retornar várias tags soltas ou usar class no JSX. Ajuste: envolver com <> </> e usar className.`
    },
    {
      id: 4,
      numero: 'CONTEÚDO 04',
      titulo: 'Componentes e props',
      explicacao: 'Componentes são funções com letra inicial maiúscula que retornam JSX, e props são informações enviadas de um componente pai para personalizar um filho.',
      exemplo: '<Card titulo="React" /> recebendo { props.titulo } dentro da função.',
      erroComum: 'Erro: componente em minúscula (card). Ajuste: usar maiúscula (Card).'
    },
    {
      id: 5,
      numero: 'CONTEÚDO 05',
      titulo: 'Estado e Hooks',
      explicacao: 'Hooks são funções especiais do React; o useState guarda dados que mudam com o tempo e atualiza o ecrã automaticamente quando o valor é alterado.',
      exemplo: 'const [contador, setContador] = useState(0);',
      erroComum: 'Erro: mudar estado direto (x = 1). Ajuste: usar setter (setX(1)).'
    },
    {
      id: 6,
      numero: 'CONTEÚDO 06',
      titulo: 'Eventos e validação',
      explicacao: 'Eventos capturam ações do utilizador (como cliques ou digitação), e a validação garante que os dados inseridos não estão vazios ou inválidos antes de serem usados.',
      exemplo: 'onClick={salvar} e if (texto.trim() === "") return;',
      erroComum: 'Erro: executar no clique (onClick={fn()}). Ajuste: passar referência (onClick={fn}).'
    },
    {
      id: 7,
      numero: 'CONTEÚDO 07',
      titulo: 'Listas e imutabilidade',
      explicacao: 'Listas são exibidas transformando arrays em elementos com map() e uma key única, sempre criando um novo array em vez de alterar o original diretamente.',
      exemplo: 'setLista([...lista, novoItem]) e lista.map(item => <li key={item.id}>{item.nome}</li>)',
      erroComum: 'Erro: usar .push() ou faltar key. Ajuste: usar [...lista] e key={id}.'
    },
    {
      id: 8,
      numero: 'CONTEÚDO 08',
      titulo: 'Arquitetura web',
      explicacao: 'Define como o sistema funciona: o frontend (interface) comunica com o backend (servidor) via API, podendo guardar dados no navegador com localStorage e funcionar como SPA ou PWA.',
      exemplo: 'fetch("https://api.exemplo.com/dados") ou localStorage.setItem("tema", "azul")'
    }
  ];

  const [revisados, setRevisados] = useState([]);
  const [novaDuvida, setNovaDuvida] = useState('');
  const [duvidas, setDuvidas] = useState([]);

  function alternarRevisado(id) {
    setRevisados((prevRevisados) =>
      prevRevisados.includes(id)
        ? prevRevisados.filter((itemId) => itemId !== id)
        : [...prevRevisados, id]
    );
  }

  function adicionarDuvida(e) {
    e.preventDefault();
    const textoLimpo = novaDuvida.trim();

    if (textoLimpo === '') {
      return;
    }

    const itemDuvida = {
      id: Date.now(),
      texto: textoLimpo
    };

    setDuvidas((prevDuvidas) => [...prevDuvidas, itemDuvida]);
    setNovaDuvida('');
  }

  return (
    <div>
      <h1>Guia de Recuperação</h1>

      <div className="contador-revisados">
        Conteúdos revisados: <strong>{revisados.length}/{conteudos.length}</strong>
      </div>

      <div className="cards-grid">
        {conteudos.map((item) => {
          const estaRevisado = revisados.includes(item.id);

          return (
            <div
              className={`card ${estaRevisado ? 'card-revisado' : ''}`}
              key={item.id}
            >
              <div>
                <span className="card-tag">{item.numero}</span>
                <h2>{item.titulo}</h2>
                <p className="card-explicacao">{item.explicacao}</p>
              </div>

              <div className="card-rodape">
                <div className="card-exemplo">
                  <strong>Exemplo prático:</strong>
                  <code>{item.exemplo}</code>
                </div>

                {item.erroComum && (
                  <div className="card-erro">
                    <p>{item.erroComum}</p>
                  </div>
                )}

                <button
                  type="button"
                  className={`btn-revisar ${estaRevisado ? 'ativo' : ''}`}
                  onClick={() => alternarRevisado(item.id)}
                >
                  {estaRevisado ? '✓ Revisado' : 'Marcar como revisado'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <section className="secao-duvidas">
        <h2>Minhas dúvidas</h2>

        <form className="form-duvidas" onSubmit={adicionarDuvida}>
          <input
            type="text"
            placeholder="Escreva a sua dúvida aqui (ex: Como funcionam props?)..."
            value={novaDuvida}
            onChange={(e) => setNovaDuvida(e.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>

        {duvidas.length === 0 ? (
          <p className="sem-duvidas">Nenhuma dúvida registada ainda.</p>
        ) : (
          <ul className="lista-duvidas">
            {duvidas.map((duvida) => (
              <li key={duvida.id}>{duvida.texto}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;