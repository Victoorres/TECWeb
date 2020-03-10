// Importar Bibliotecas
import React from 'react';

// Criar componentes
const PlayerDetails = (props) => {
    return (
        <div>
            <h1>{props.nome}</h1>
            <h2>{props.time}</h2>
            <h3>{props.pais}</h3>
            <h4>{props.numero}</h4>
            <h5>{props.posicao}</h5>
            <h6>{props.nascimento}</h6>
            <h7>{props.salario}</h7>
        </div>
    );
}

//Exportar componentes
export default PlayerDetails;