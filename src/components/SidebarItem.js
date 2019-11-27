import React, { Component } from 'react';
import ArrowRight from './assets/arrow-right.png';
import ArrowLeft from './assets/arrow-left.png';
import './css/SidebarItem.css'

class SidebarItem extends Component {
    constructor(props) {
        super(props);

        this.changeUrl = this.changeUrl.bind(this);
    }

    changeUrl() {
        this.props.onChangeHead('link cambiado');
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="clickable col text-white my-auto" onClick={this.changeUrl}>
                        <img src={ArrowLeft}/>
                    </div>
                    <div className="col">
                        <div className="list-group-item list-group-item-action bg-dark text-white">{this.props.title}</div>
                    </div>
                    <div className="clickable col text-white my-auto" onClick={this.changeUrl}>
                        <img src={ArrowRight}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SidebarItem;