import React, { Component } from 'react'
import './Draw.css'


class Draw extends Component{
    constructor(props){
        super(props);
        this.wrongKey = this.wrongKey.bind(this)
    }

    //permet d'afficher directement le trait ua mauvais clique
    componentDidUpdate() {
        this.wrongKey();
    }

    //conditonne le nombre de fail à l'avancement du dessin
    wrongKey() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const fail = this.props.addOne
            

        if(fail === 1) {
        ctx.beginPath();
        ctx.moveTo(50, 450);
        ctx.lineTo(250, 450);
        ctx.stroke();}

        if(fail === 2)
        {ctx.beginPath();      
        ctx.moveTo(150, 450);
        ctx.lineTo(150, 100);
        ctx.stroke();}

        if(fail === 3)
        {ctx.beginPath();
        ctx.moveTo(150, 100);
        ctx.lineTo(350, 100);
        ctx.stroke();}

        if(fail === 4)
        {ctx.beginPath();
        ctx.moveTo(350, 100);
        ctx.lineTo(350, 200);
        ctx.stroke();}

        if(fail === 4)
        {ctx.beginPath();
        ctx.arc(350, 220, 20, 0, Math.PI * 2, true);
        ctx.stroke();}

        if(fail === 5)
        {ctx.beginPath();
        ctx.moveTo(350, 240);
        ctx.lineTo(350, 350);
        ctx.stroke();}

        if(fail === 6)
        {ctx.beginPath();
        ctx.moveTo(350, 280);
        ctx.lineTo(400, 280);
        ctx.moveTo(350, 280);
        ctx.lineTo(300, 280);
        ctx.stroke();}

        if(fail === 7)
        {ctx.beginPath();
        ctx.moveTo(350, 350);
        ctx.lineTo(380, 400);
        ctx.moveTo(350, 350);
        ctx.lineTo(320, 400);
        ctx.stroke();}
    }
      
    render(){
        return(
            <div id='draw' className="draw">
                <canvas id="canvas" ref="canvas" width={500} height={500} />
            </div>
        )
    }
}

export default Draw;