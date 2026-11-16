function Header({ totalRevisados, totalConteudos }) {
  return (
    <header>
      <h1>Guia de Recuperação</h1>
      <div className="contador-revisados">
        Conteúdos revisados: <strong>{totalRevisados}/{totalConteudos}</strong>
      </div>
    </header>
  );
}

export default Header;