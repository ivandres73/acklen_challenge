import React, { Component } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import DefHead from './assets/def-head.png';
import DefBody from './assets/def-body.png';
import DefLegs from './assets/def-legs.png';
import BodyPart from './BodyPart';

import axios from 'axios';

class CharacterPage extends Component {
    constructor() {
        super();

        this.state = {
            head: DefHead,
            body: DefBody,
            legs: DefLegs,
            arms: ''
        }

        this.onChangeNext = this.onChangeNext.bind(this);
        this.onChangeBack = this.onChangeBack.bind(this);
    }

    onChangeNext(bodyPart) {
        axios.get('http://localhost/'+bodyPart+'/next')
        .then(response => {
            console.log(response.data)
            this.setState({
                [bodyPart]: response.data
            })
        }).catch(error => {
            console.error(error)
        })
    }

    onChangeBack(bodyPart) {
        axios.get('http://localhost/'+bodyPart+'/back')
        .then(response => {
            console.log(response.data)
            this.setState({
                [bodyPart]: response.data
            })
        }).catch(error => {
            console.error(error)
        })
    }

    render() {
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
                            <Sidebar
                                onChangeNext={this.onChangeNext}
                                onChangeBack={this.onChangeBack}
                            />
                        </div>
                        <div className="col-md-10 p-0" style={{backgroundColor:'black'}}>
                            <div className="container">
                                <div className="row justify-content-center" style={{backgroundColor:'red'}}>
                                    <BodyPart
                                        Url={this.state.head}
                                    />
                                </div>
                                <div className="row justify-content-center" style={{backgroundColor:'green'}}>
                                    <BodyPart
                                        Url={this.state.body}
                                    />
                                </div>
                                <div className="row justify-content-center" style={{backgroundColor:'blue'}}>
                                    <BodyPart
                                        Url={this.state.legs}
                                    />
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