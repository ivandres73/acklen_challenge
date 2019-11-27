import React, { Component } from 'react';
import ArrowRight from './arrow-right.png';

class SidebarItem extends Component {
    constructor(props) {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('clic');
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-white" onClick={this.handleClick}>
                        Flecha
                    </div>
                    <div className="col">
                    <div className="list-group-item list-group-item-action bg-dark text-white">{this.props.title}</div>
                    </div>
                    <div className="col text-white" onClick={this.handleClick}>
                        <img src={ArrowRight}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default SidebarItem;