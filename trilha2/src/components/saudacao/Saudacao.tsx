import React, { useState } from "react";

type SaudacaoProps = {
  nomeInicial: string;
};

const Saudacao: React.FC<SaudacaoProps> = ({ nomeInicial }) => {
  const [nome, setNome] = useState<string>(nomeInicial);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <input
        type="text"
        value={nome}
        onChange={handleChange}
        placeholder="Digite um novo nome"
      />
    </div>
  );
};

export default Saudacao;
