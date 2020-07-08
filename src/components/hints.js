import React, { Component } from 'react'
import './src/css/hints.css'
export default class Hints extends Component{
    render() {
        return(
            <div className="hintscontainer">
<h4>Before you implement your strategy, make sure your opponent doesn't make a move to win...</h4>
<ul class="top-level-menu">
    <li>
        <a href="#">HINTS</a>
        <ul class="second-level-menu">
            <li>
                <a href="#">First Player</a>
                <ul class="third-level-menu">
                    <li>
                        <a href="#">You chose corner</a>
                        <ul class="fourth-level-menu">
                            <li>
                                <a href="#">Opponent chose nearest edge</a>
                                <ul class="fifth-level-menu">
                                    <li>
                                        <a href="#">Select the non-diagonal corner farthest to the tile opponent chose and then the diagonal corner</a>
                                    </li>
                                </ul>
                            </li>
                            <li>   
                                <a href="#">Opponent chose farthest edge</a>
                                <ul class="fifth-level-menu">
                                    <li>
                                        <a href="#">Select any non-diagonal corner and then the usual V strategy - 135 or 139 forms</a>
                                    </li>
                                </ul>
                            </li> 
                            <li>
                                <a href="#">Opponent chose diagonal corner</a>
                                <ul class="fifth-level-menu">
                                    <li>
                                        <a href="#">Select any corner and then the other corner</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Opponent chose non-diagonal corner</a>
                                <ul class="fifth-level-menu">
                                    <li>
                                        <a href="#">Select the corner diagonal to the tile opponent chose and then the other corner</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Opponent chose center</a>
                                <ul class="fifth-level-menu">
                                    <li>
                                        <a href="#">Select the diagonally opposite corner. If opponent chooses a corner, select other corner. If the opponent doesn't choose another corner, it will result a tie.</a>
                                    </li>
                                </ul> 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">You chose center</a>
                        <ul class="fourth-level-menu">
                            <li>
                                <a href="#">Opponent chose edge</a>
                                <ul class="fifth-level-menu">
                                    <li>
                                        <a href="#">Select the corner farthest to tile opponent chose</a>
                                    </li>
                                </ul>
                            </li>
                            <li>    
                                <a href="#">Opponent chose corner</a><ul class="fifth-level-menu">
                                    <li>
                                        <a href="#">Select the corner diagonal to the tile opponent chose. If the opponent chooses another corner, it will result in a TIE. If the opponent doesn't choose another corner, you could select one.</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">You chose edge</a>
                        <ul class="fourth-level-menu">
                            <li>
                                <a href="#">No strategies</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="#">Second Player</a>
                <ul class="third-level-menu">
                    <li>
                        <a href="#">Opponent chose corner</a>
                        <ul class="sfifth-level-menu">
                            <li>
                                <a href="#">Select center and obstruct winning chances of opponent</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Opponent chose center</a>
                        <ul class="sfifth-level-menu">
                            <li>
                                <a href="#">Select corner and obstruct winning chances of opponent</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Opponent chose edge</a>
                        <ul class="sfifth-level-menu">
                            <li>
                                <a href="#">No strategies</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        <a href="#">INSTRUCTIONS</a>
        <ul class="fifth-level-menu">
            <li>
                <a href="#">If you are X, your opponent is O. Players take turns putting their marks in empty squares.</a>
            </li>
            <li>
                <a href="#">The first player to get 3 of their marks in a row (vertical, across, or diagonally) is the winner.</a>
            </li>
            <li>
                <a href="#">When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</a>
            </li>
        </ul>
    </li>
</ul>
</div>
        )
    }
}
