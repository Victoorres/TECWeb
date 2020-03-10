import React from 'react';
import ReactDOM from 'react-dom';
import PlayerDetails2 from './PlayerDetails2'
import PlayerDetails from './PlayerDetails'
import 'bootstrap/dist/css/bootstrap.css'

//CRIAR COMPONENTE


class App extends React.Component {

    jogadores = [
        {
            nome: "Lionel Messi",
            time: "Barcelona",
            pais: "ARGENTINA",
            numero: "10",
            posicao: "Atacante",
            nascimento: "24/06/1987",
            salario: "40 Milhões de EUR"
        },
        {
            nome: "Neymar Jr",
            time: "Paris Saint Germain",
            pais: "BRASIL",
            numero: "10",
            posicao: "Atacante",
            nascimento: "05/02/1985",
            salario: "31 Milhões de EUR"

        },
        {
            nome: "Cristiano Ronaldo",
            time: "Juventus",
            pais: "PORTUGAL",
            numero: "7",
            posicao: "Atacante",
            nascimento: "05/02/1992",
            salario: "36,8 Milhões de EUR"

        }
    ]

    constructor(props) {
        super(props);

        this.state = {
            indice: 0
        }

    }



    incrementarIndice = (event) => {

        if (this.state.indice <= this.jogadores.length - 2) {
            this.setState({
                indice: this.state.indice + 1
            })
        }
    }

    decrementarIndice = (event) => {

        if (this.state.indice != 0) {
            this.setState({
                indice: this.state.indice - 1
            })
        }


    }

    render() {
        return (
            <div>
                <div
                    class="container">
                    <div class="container text-center">
                        <h1>Jogadores</h1>
                    </div>
                    <PlayerDetails2 jogador={this.jogadores[this.state.indice]}></PlayerDetails2>
                    <div>
                    </div>
                    <br></br>
                    <button type="button" class="btn btn-danger col-md-6" onClick={this.decrementarIndice}>
                        Anterior
                    </button>
                    <button type="button" class="btn btn-success col-md-6" onClick={this.incrementarIndice}>
                        Proximo
                    </button>
                </div>
            </div>
        );
    }
}

//MOSTRAR COMPONENTE NA TELA
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
