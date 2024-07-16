import React, { useState } from 'react';
import './Tarefa.css';

const Tarefa = ({ tarefa, removerTarefa, editarTarefa }) => {
  const [editando, setEditando] = useState(false);
  const [novoTexto, setNovoTexto] = useState(tarefa.texto);

  const isTarefaFixa = tarefa.id === 'static-task';

  const handleEdit = () => {
    if (!isTarefaFixa) {
      setEditando(true);
    }
  };

  const handleSave = () => {
    if (!isTarefaFixa) {
      editarTarefa(tarefa.id, novoTexto);
      setEditando(false);
    }
  };

  return (
    <div className={`tarefa ${isTarefaFixa ? 'tarefa-fixa' : ''}`}>
      {editando ? (
        !isTarefaFixa ? (
          <>
            <input
              type="text"
              value={novoTexto}
              onChange={(e) => setNovoTexto(e.target.value)}
              className="input-editar"
            />
            <button onClick={handleSave} className="button">Salvar</button>
          </>
        ) : (
          <span>{tarefa.texto}</span>
        )
      ) : (
        <>
          <span>{tarefa.texto}</span>
          <div className="actions">
            {!isTarefaFixa && (
              <>
                <button onClick={handleEdit} className="button">Editar</button>
                <button onClick={() => removerTarefa(tarefa.id)} className="button-remove">Remover</button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Tarefa;
