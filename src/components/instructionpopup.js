import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './src/css/hints.css'


export default class Popup extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  
    popupHeader:"Looks like you don't have an account"
  };
}

 refreshPage(){ 
  window.location.reload(); 
}
render() {
  var headerStyle = {
    color:'white',
    // fontWeight:'bold',
    fontSize: 20
  }
  return (
    
    <div className='popup'>
      <div className='popup_inner'>
     <div style={headerStyle}>
       <div>
       <h4>Instructions here: </h4>
                <li>
                    If you are X, your opponent is O. Players take turns putting their marks in empty squares.
                </li>
                <li>
                The first player to get 3 of their marks in a row (vertical, across, or diagonally) is the winner.
                </li>
                <li>
                When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
                </li>
                    
       </div>
     
        </div>
        <br />
        <button className="closeButton" onClick={this.props.refreshPage}>CLOSE</button>
      </div>
    </div>
  );
}
}


      
    
      
//         <div  onClick={function(){this.setState({open1:!this.state.open1})}.bind(this)}>
//         <div style={{cursor:"pointer"}}>INSTRUCTIONS</div>
//         <ul className={this.state.open1? "panel-collapse": "panel-collapse panel-close"}>
//             <li>
//                 <a href="#">If you are X, your opponent is O. Players take turns putting their marks in empty squares.</a>
//             </li>
//             <li>
//                 <a href="#">The first player to get 3 of their marks in a row (vertical, across, or diagonally) is the winner.</a>
//             </li>
//             <li>
//                 <a href="#">When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</a>
//             </li>
//         </ul>
//     </div>
// </ul>
// </div>
//         )
//     }
// }
