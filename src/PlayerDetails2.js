import React from 'react'

class PlayerDetails2 extends React.Component {
    render() {
        return (

            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">
                        {this.props.jogador.nome} - {this.props.jogador.numero}
                    </h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        Time: {this.props.jogador.time}
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                        Posição: {this.props.jogador.posicao}
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                        Salário: {this.props.jogador.salario}
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                        País:  {this.props.jogador.pais}
                    </h6>
                    <h6 class="card-subtitle mb-2 text-muted">
                        Data de Nascimento:  {this.props.jogador.nascimento}
                    </h6>
                </div>
            </div>
        );
    }
}

export default PlayerDetails2