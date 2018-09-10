import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import './index.css';
import './assets/kingOfSpade.png';


class Card extends React.Component{

    render(){
        return (
            <div className="card">Maffia
            </div>
        );
    }

}



const play = (state, action) => {
    switch(action.type){
        case 'PLAY_CARD':
            return state + 1;
        default:
            return state;
    }
};

const store = createStore(play);

class Game extends React.Component{

    render(){
        return (
            <div className="content">
                <h1>Redux With React Through 21 Game</h1>
                <Card />
                <Card />
            </div>
        );
    }
}



ReactDOM.render(<Game />, document.getElementById('root'));

