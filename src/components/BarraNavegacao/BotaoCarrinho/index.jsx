import React from "react";

import imagemCarrinho from "/assets/cart.svg";

const BotaoCarrinho = ({ className, quantidade }) => {
  const classesComuns = "btn ms-3";

  return (
    <button
      className={`${classesComuns} ${className}`}
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#modalCarrinhoSuspenso"
      aria-controls="modalCarrinhoSuspenso"
    >
      <img src={imagemCarrinho} alt="ícone de um carrinho de supermercado" />
      {quantidade !== 0 && (
        <span className="badge verde-limao">{quantidade}</span>
      )}
    </button>
  );
};

export default BotaoCarrinho;
