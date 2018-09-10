import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import './index.css';
import './assets/kingOfSpade.png';


class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const states = this.props.value;
        return (
            <div className="card">{states}
            </div>
        );
    }

}



const play = (state={}, action) => {
    switch(action.type){
        case 'PLAY_CARD':
            console.log(action);
            return {
                text:action.text,
                id: 56
            };
        default:
            return state;
    }
};

const store = createStore(play);

class Game extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const storeState = store.getState();
        console.log(storeState.text);
        return (
            <div className="content">
                <h1>Redux With React Through 21 Game</h1>
                <Card value={storeState.text}/>
                <input ref={node => {
                 this.input = node;
             }} />
                <button onClick={()=>{
                    store.dispatch({
                        type: 'PLAY_CARD',
                        text: this.input.value,
                        id:1
                    })
                    this.input.value = '';
                }}>Play Card</button>
            </div>
        );
    }
}


const render = () =>{
    ReactDOM.render(<Game />, document.getElementById('root'));     
}

store.subscribe(render);
render();

