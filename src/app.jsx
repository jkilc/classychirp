import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from "react";

import logo from './assets/Untitled-Artwork.png'
import chirpy from '../src/assets/IMG-2708.PNG'


let Header = () => {
    return (
        <div className='header'>
            <img src={logo} />
        </div>
    )
}



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            msg: '',
            chirps: [
            {
                userName: "tangerines33",
                message: "lol why did i get out of bed today",
            },
            {
                userName: "chicke_nsalad",
                message: "sdkfjslk*&*^DSS&D^&YDS..._..--.---",
            },
            {
                userName: "peonyflower",
                message: "i found a cool stick in the woods",
            }]
        }

       
        // this.chripClick
        // this.myChirp
        // this.emptyInputs
        // this.renderHTMLPage

    }


    chripClick = (e) => {
        e.preventDefault()
        let newChirp = { userName: this.state.username, message: this.state.msg };
        this.setState({chirps: [...this.state.chirps, newChirp]});
        this.emptyInputs()

    };

    myChirp = this.state.chirps.map((chirp, id) => {
        return (
            <>
                <img class="icon" src={newIcon} />
                <p key={id}>{`@${chirp.userName}:`}</p>
                <p>{chirp.message}</p>
                <hr></hr>
            </>
        );

    });

    emptyInputs = () => {
        this.setState({username: ''})
        this.setState({msg: ''})
    }

    render() {
        return (

            <>
                <Header />

                <form>

                    <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal">
                        <img class="chirpy-logo" src={chirpy} />
                Chirp!!
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Wanna Chirp?</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div class="modal-body">

                                    <form>
                                        <input id="un-input" value={this.state.username} type="text" placeholder="name"
                                            onChange={(e) => this.setState({username: e.target.value})}
                                        />
                                        <input id="chirp-input" value={this.state.msg} type="text" placeholder="message"
                                            onChange={(e) => this.setState({msg: e.target.value})}

                                        />

                                        <button className="btn" onClick={(e) => this.chripClick(e)}>chirp!</button>


                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>


                </form>


                <div class="card">
                    <div class="card-body">
                        <hr></hr>
                        <p>{myChirp}</p>

                    </div>
                </div>
            </>
        )
    }





}


export default App;





