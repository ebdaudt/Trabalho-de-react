import React from 'react';
import Tarefa from './tarefa';
import './ListaDeTarefas.css';

const ListaDeTarefas = ({ tarefas, removerTarefa, editarTarefa }) => {
  // Tarefa estática que não pode ser removida nem editada
  const tarefaFixa = { id: 'static-task', texto: 'Tarefa Fixa - Não Remover nem Editar' };

  return (
    <div className="lista">
      {/* Renderiza a tarefa fixa */}
      <Tarefa tarefa={tarefaFixa} removerTarefa={() => {}} editarTarefa={() => {}} />

      {/* Renderiza as tarefas dinâmicas */}
      {tarefas.map(tarefa => (
        <Tarefa key={tarefa.id} tarefa={tarefa} removerTarefa={removerTarefa} editarTarefa={editarTarefa} />
      ))}
    </div>
  );
}

export default ListaDeTarefas;
