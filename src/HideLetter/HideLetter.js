import React, { Component } from 'react';
import './HideLetter.css'


class HideLetter extends Component {
  
    constructor(props){
      super(props);
      this.renderHideLetter = this.renderHideLetter.bind(this);
      this.reinitialisateur = this.reinitialisateur.bind(this);
      this.startGame = this.startGame.bind(this)
    }

    // reset la partie au bouton start
    startGame(){
        this.props.data(); // change de mot
        this.reinitialisateur(); 
        this.props.resetGuess(); // remet le compteur à 0
    }

    // reset le pendu et le clavier
    reinitialisateur(){
        const canvas = document.getElementById('canvas')
        const hideKey = document.querySelectorAll('.hideKey')
    
        // reinitilaise le canvas
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
    
        // reinitilise le keyboard
        for(let i = 0; i < hideKey.length; i++){
        hideKey[i].classList.remove('hideKey')
        }
    }
  
    renderHideLetter() {
      // map chaque lettre pour les séparer et les cacher
      return this.props.listOfLetter.map((lettre, index) => {
        return <li key={index} className={`hide letterToGet ${lettre}`}>{lettre}<div className="blackline"></div></li>       
      })
    }

    render() {
      
      return (
          <div className="Hideletter">
            <div className="start" onClick={this.startGame} >
              <button className="startBtn">clique ici pour commencer</button>
            </div>
            <ul className="wordToFind">{this.renderHideLetter()}</ul>   
          </div>
      );
    }
  }
  
  export default HideLetter;