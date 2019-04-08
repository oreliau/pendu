import React from 'react'
import './Key.css';

const alphabet = ["A","B","C","D","E","F",'G',"H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const Keybord = ({onClick}) =>(
            <div className="keyboard">
                {alphabet.map((lettre, index) => 
                (<div key={index} id= {lettre} className="test" onClick={() => onClick(lettre)}>
                    <button className="button">{lettre}</button>
                </div>))
                }
            </div>
)

export default Keybord;