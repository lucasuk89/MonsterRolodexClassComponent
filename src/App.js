import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/card-list/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor() {
    super(); //call the constructor

    /*this.referencia a classe, this.state = referencia o que esta dentro do seu constructor dentro do seu component é igual a esse objeto que sera paassado dentro de chaves */
    this.state = {
      monsters:[],
      searchField:'' //deixamos a lista vazia para receber os dados
    };
    console.log('constructor')
  }

componentDidMount(){
  
  fetch('https://jsonplaceholder.typicode.com/users') //localiza os dados na API
    .then((response)=> response.json())  // Faz com que funcione , respponda a chamada que fizemos acima aqui.
    .then((users) => this.setState(   // fazemos a function para retornar os usuarios 
      ()=>{
        return {monsters:users};  //retornamos os usuarios
    }),
  );
}
  
  //method(funcao anonima) que removemos de dentro do nosso render e dps usando o this.onSearchChange para localizar dentro do render.
  //no onChange. 
  onSearchChange =(event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    //Constante diz: Quando vc filtra os monstros, se o nome do monstro 'e igual ao nome do target que escrevi.
     this.setState(
       () => {
       return {searchField};
     }
   );
}
  render() {

    const {monsters,searchField}= this.state;
    const {onSearchChange}= this;

    const filteredMonsters = monsters.filter((monster)=>{
      // monster= if this monster name
      // if the monster name included is iquals to what i want to pass , Then return TRUE
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
   
    return(
       <div className="App">
      <h1 className="app-title">Monster rolodex</h1>

       <SearchBox 
       className= 'monsters-search-box'
       onChangeHandler ={onSearchChange} 
       placeholder='search monsters'/>
        <CardList monsters={filteredMonsters}/>
    </div>
    );
    }
  }

export default App;
