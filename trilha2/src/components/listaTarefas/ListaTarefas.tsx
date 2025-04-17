import React, { useState } from "react";

type ListaTarefasProps = {
  tarefasIniciais: string[];
};

const ListaTarefas: React.FC<ListaTarefasProps> = ({ tarefasIniciais }) => {
  const [tarefas, setTarefas] = useState<string[]>(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState<string>("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
