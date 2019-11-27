import React, { Component } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

class CharacterPage extends Component {
    render() {
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col p-0">
                            <Navbar/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 p-0">
                            <Sidebar/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterPage;