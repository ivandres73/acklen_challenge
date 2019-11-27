import React, { Component } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import DefHead from './assets/fem_water_face_1.png';
import BodyPart from './BodyPart';

class CharacterPage extends Component {
    constructor() {
        super();

        this.state = {
            current_head: DefHead,
            current_body: '',
            current_legs: '',
            current_arms: ''
        }

        this.onChangeHead = this.onChangeHead.bind(this);
    }

    onChangeHead(newUrl) {
        this.setState({
            current_head: newUrl
        })
        console.log('clickeado');
    }

    render() {
        console.log('head url:', this.state.current_head);
        return(
            <div>
                <div className="container-fluid d-flex flex-column">
                    <div className="row">
                        <div className="col p-0">
                            <Navbar/>
                        </div>
                    </div>
                    <div className="row full-row">
                        <div className="col-md-2 p-0">
                            <Sidebar onChangeHead={this.onChangeHead}/>
                        </div>
                        <div className="col-md-10 p-0" style={{backgroundColor:'black'}}>
                            <div className="container">
                                <div className="row" style={{backgroundColor:'red'}}>
                                    <BodyPart
                                        Url={this.state.current_head}
                                    />
                                </div>
                                <div className="row" style={{backgroundColor:'green'}}>
                                    2
                                </div>
                                <div className="row" style={{backgroundColor:'blue'}}>
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterPage;