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
            current_head: DefHead,
            current_body: DefBody,
            current_legs: DefLegs,
            current_arms: ''
        }

        this.onChangeHeadNext = this.onChangeHeadNext.bind(this);
        this.onChangeHeadBack = this.onChangeHeadBack.bind(this);
    }

    onChangeHeadNext(bodyPart) {
        console.log('http://localhost/'+bodyPart+'/next');
        axios.get('http://localhost/'+bodyPart+'/next')
        .then(response => {
            console.log(response.data)
            this.setState({
                current_head: response.data
            })
        }).catch(error => {
            console.error(error)
        })
    }

    onChangeHeadBack(bodyPart) {
        axios.get('http://localhost/'+bodyPart+'back')
        .then(response => {
            console.log(response.data)
            this.setState({
                current_head: response.data
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
                                onChangeHeadNext={this.onChangeHeadNext}
                                onChangeHeadBack={this.onChangeHeadBack}
                            />
                        </div>
                        <div className="col-md-10 p-0" style={{backgroundColor:'black'}}>
                            <div className="container">
                                <div className="row justify-content-center" style={{backgroundColor:'red'}}>
                                    <BodyPart
                                        Url={this.state.current_head}
                                    />
                                </div>
                                <div className="row justify-content-center" style={{backgroundColor:'green'}}>
                                    <BodyPart
                                        Url={this.state.current_body}
                                    />
                                </div>
                                <div className="row justify-content-center" style={{backgroundColor:'blue'}}>
                                    <BodyPart
                                        Url={this.state.current_legs}
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