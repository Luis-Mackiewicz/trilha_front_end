import React, { useState } from "react";

type ToggleVisibilidadeProps = {
  texto: string;
};

const ToggleVisibilidade: React.FC<ToggleVisibilidadeProps> = ({ texto }) => {
  const [visivel, setVisivel] = useState<boolean>(true);

  const alternarVisibilidade = () => {
    setVisivel(!visivel);
  };

  return (
    <div>
      <button onClick={alternarVisibilidade}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>
      {visivel && <p>{texto}</p>}
    </div>
  );
};

export default ToggleVisibilidade;
