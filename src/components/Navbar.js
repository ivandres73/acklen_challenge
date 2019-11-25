import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-text text-white">
                        User
                    </span>
                    <a href="#" className="text-white">
                        Log out
                    </a>
                </nav>
            </div>
        )
    }
}

export default Navbar;