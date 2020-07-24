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
       <h4>First Player</h4>
                <li>
                    YOU CHOOSE CORNER
                    <ol>
                        1.Opponent chose nearest edge
                        <ol>
                            Select the non-diagonal corner farthest to the tile opponent chose and then the diagonal corner
                        </ol>
                    </ol>
                    <ol>
                        2.Opponent chose farthest edge
                        <ol>
                        Select any non-diagonal corner and then the usual V strategy - 135 or 139 forms
                        </ol>
                    </ol>
                    <ol>
                        3.Opponent chose diagonal corner
                        <ol>
                        Select any corner and then the other corner
                        </ol>
                    </ol>
                    <ol>
                        4.Opponent chose non-diagonal corner
                        <ol>
                        Select the corner diagonal to the tile opponent chose and then the other corner
                        </ol>
                    </ol>
                    <ol>
                        5.Opponent chose center
                        <ol>
                        Select the diagonally opposite corner. If opponent chooses a corner, select other corner. If the opponent doesn't choose another corner, it will result a tie.
                        </ol>
                    </ol>
                </li>
                <li>
                    YOU CHOOSE CENTER
                    <ol>
                        Opponent chose edge
                        <ol>Select the corner farthest to tile opponent chose</ol>
                    </ol>
                    <ol>
                        Opponent chose corner
                         <ol>Select the corner diagonal to the tile opponent chose.If the opponent chooses another corner, it will result in a TIE. If the opponent doesn't choose another corner, you could select one.</ol>    
                    </ol>
                </li>
                <li>
                    YOU CHOOSE EDGE
                    <ol>No strategies</ol>
                </li>
                <h4>Second Player</h4> 
                    <li>
                      OPPONENT CHOOSE CORNER
                       <ol>Select center and obstruct winning chances of opponent</ol>
                    </li>
                    <li>
                    OPPONENT CHOOSE CENTER
                       <ol>Select corner and obstruct winning chances of opponent</ol>
                    </li>
                    <li>
                    OPPONENT CHOOSE EDGE
                       <ol>No strategies</ol>
                    </li>
       </div>
     
        </div>
        <br />
        {/* <button onClick={this.props.closePopup} */}
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
