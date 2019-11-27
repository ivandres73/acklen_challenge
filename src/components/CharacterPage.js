import React, { Component } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './characterPage.css';

class CharacterPage extends Component {
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
                            <Sidebar/>
                        </div>
                        <div className="col-md-10 p-0" style={{backgroundColor:'black'}}>
                            <div className="row" style={{backgroundColor:'red'}}>
                                1
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
        )
    }
}

export default CharacterPage;