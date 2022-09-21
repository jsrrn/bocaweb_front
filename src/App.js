import './App.css';
import { Busca } from './components/Busca.jsx';
import { Lista } from './components/Lista.jsx';
import {Component} from 'react';
import {Headerc} from './components/Headerc/index.jsx';
import {Footerc} from './components/Footerc/index.jsx';

class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
      this.setState({busca: evento.target.value});
      this.carregaODAs()
  }
render(){

  return (
    <section className = "container">

      <Headerc />
      
     <Busca
     busca={this.state.busca}
     buscaODA={this.buscaODA}
     />

    <div className='classeLista'>
      <Lista 
      odas={this.state.odas} 
      />
    </div>
      
    <Footerc />

    </section>
  )
}

}
export default App;

//João Vitor Serrano Moura, Felipe Hübner da Silva