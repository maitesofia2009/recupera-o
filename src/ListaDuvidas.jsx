function ListaDuvidas({
  duvidas,
  novaDuvida,
  aoMudarDuvida,
  aoAdicionarDuvida
}) {
  return (
    <section className="secao-duvidas">
      <h2>Minhas dúvidas</h2>

      <form className="form-duvidas" onSubmit={aoAdicionarDuvida}>
        <input
          type="text"
          placeholder="Escreva a sua dúvida aqui (ex: Como funcionam props?)..."
          value={novaDuvida}
          onChange={(e) => aoMudarDuvida(e.target.value)}
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
  );
}

export default ListaDuvidas;