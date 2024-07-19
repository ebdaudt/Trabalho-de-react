import React from 'react';
import Tarefa from './tarefa';
import './ListaDeTarefas.css';

const ListaDeTarefas = ({ tarefas, removerTarefa, editarTarefa }) => {
  const tarefaFixa = { id: 'static-task', texto: 'Ilha de Bora Bora na Polinésia Francesa' };
  const tarefaFixa2 = { id: 'static-task', texto: 'Cidade do Cabo - Áfric do Sul' };

  return (
    <div className="lista">
      <Tarefa tarefa={tarefaFixa} removerTarefa={() => {}} editarTarefa={() => {}} />
      <Tarefa tarefa={tarefaFixa2} removerTarefa={() => {}} editarTarefa={() => {}} />

      {tarefas.map(tarefa => (
        <Tarefa key={tarefa.id} tarefa={tarefa} removerTarefa={removerTarefa} editarTarefa={editarTarefa} />
      ))}
    </div>
  );
}

export default ListaDeTarefas;
