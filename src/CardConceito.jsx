function CardConceito({ item, estaRevisado, aoAlternarRevisado }) {
  return (
    <div className={`card ${estaRevisado ? 'card-revisado' : ''}`}>
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
          onClick={() => aoAlternarRevisado(item.id)}
        >
          {estaRevisado ? '✓ Revisado' : 'Marcar como revisado'}
        </button>
      </div>
    </div>
  );
}

export default CardConceito;