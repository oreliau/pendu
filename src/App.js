import React, { Component } from 'react';
import './App.css';

import Keyboard from './keyboard/Keyboard'
import Draw from './drawbord/Draw'
import HideLetter from './HideLetter/HideLetter'


//base de donné des mots à trouver
const Database = [{id:1, word:'ENFANT'},  {id:2, word:'PROFESSEUR'}, {id:3, word:'MADAME'}, {id:4, word:'AFFAIRE'}, {id:5, word:'GAUCHES'}, {id:6, word:'BONJOUR'}]
class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      failClick: 0,
      listOfLetter: [],
      letterFind: []
    }
    this.generateWord = this.generateWord.bind(this);
    this.selectLetter = this.selectLetter.bind(this);
    this.successLetter = this.successLetter.bind(this);
    this.resetGuess = this.resetGuess.bind(this);
    this.nextWin = this.nextWin.bind(this);
    this.nextLoose = this.nextLoose.bind(this);
    this.reinitialisateur = this.reinitialisateur.bind(this)
  }

  // fx qui conditionne la réussite et l'échec
  selectLetter(lettre){
    this.state.listOfLetter.indexOf(lettre.toString()) >= 0 ? 
    (this.successLetter(lettre)) : this.setState({failClick: this.state.failClick + 1 })

    document.getElementById(lettre).classList.add('hideKey')//efface la lettre utilisé
  }

  // fx qui permet de relever la même lettre en une fois si la lettre est uilisé plusieur fois dans le mot
  successLetter(lettre){
    const successe = document.getElementsByClassName(lettre)

    for(let i = 0; i < successe.length; i++){
      successe[i].classList.remove('hide')
    }
    this.setState({letterFind: lettre})
  }

  // reset guesses (start btn)
  resetGuess(){
    this.setState({failClick: 0})
  }

  // met un place un mot choisi au hasard dans la base de donné et le cache (start btn)
  generateWord(){
    //Créer un chiffre au hasard parmis le nombre de mots
    const numberofword = Database.length
    const number = Math.floor(Math.random() * Math.floor(numberofword))
    //Utilise se chiffre pour sélectionner un mot de la base de donné
    const name = Database[number].word;

    //Enregistre le mot choisie, chaque lettre et random dans le state
    this.setState({listOfLetter: name.split('')})
  }
  
  // affichage en cas de victoire
  renderWin(){
    if(document.getElementsByClassName('hide').length === 0 ){
      if(document.getElementsByClassName('hideKey').length > 1)
      {return   <div id='result'><div id="win">
                  <p>Bravo tu as gagné</p>
                  <button onClick={this.nextWin}>clique ici pour recommencer</button>
                </div></div>}
    }
  }

  // affichage en cas de défaite
  renderLoose(){
    if(this.state.failClick === 8){
      return   <div id='result'><div id="loose">
                <p>Oh non tu as perdu</p>
                <button onClick={this.nextLoose}>clique ici pour recommencer</button>
              </div></div>
    }
  }

  // fx qui supprime l'affichage de victoire
  nextWin(){
    const top = document.getElementById('result')
    const win = document.getElementById('win')

    this.resetGame();
    top.removeChild(win)
  }

  //fx qui supprime l'affichage de défaite
  nextLoose(){
    const top = document.getElementById('result')
    const loose = document.getElementById('loose')

    this.resetGame();
    top.removeChild(loose);
  }

  resetGame(){
    this.generateWord();
    this.resetGuess();
    this.reinitialisateur();
  }
  
  reinitialisateur(){
    const canvas = document.getElementById('canvas')
    const hideKey = document.querySelectorAll('.hideKey')

    /*reinitilaise le canvas */
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)

    /*reinitilise le keyboard */
    for(let i = 0; i < hideKey.length; i++){
    hideKey[i].classList.remove('hideKey')
    }
  }


  render() {

    return (
      <div className="Pendu">
        <div className="result">{this.renderWin()}{this.renderLoose()}</div>
        <HideLetter guesses={this.state.failClick} resetGuess={this.resetGuess} data={this.generateWord} listOfLetter={this.state.listOfLetter}/>
        <Draw addOne={this.state.failClick}/>
        <Keyboard onClick={this.selectLetter}/>
      </div>
    );
  }
}

export default App;
