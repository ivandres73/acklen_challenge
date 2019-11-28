import React, { Component } from 'react';
import ArrowRight from './assets/arrow-right.png';
import ArrowLeft from './assets/arrow-left.png';
import './css/SidebarItem.css';

class SidebarItem extends Component {
    constructor(props) {
        super(props);

        this.onChangeNext = this.onChangeNext.bind(this);
        this.onChangeBack = this.onChangeBack.bind(this);
    }

    onChangeNext() {
        if (this.props.name == "error") {
            alert('not yet implemented');
            return;
        }
        this.props.onChangeNext(this.props.name);
    }

    onChangeBack() {
        if (this.props.name == "error") {
            alert('not yet implemented');
            return;
        }
        this.props.onChangeBack(this.props.name);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="clickable col text-white my-auto" onClick={this.onChangeBack}>
                        <img src={ArrowLeft}/>
                    </div>
                    <div className="col">
                        <div className="list-group-item list-group-item-action bg-dark text-white">{this.props.title}</div>
                    </div>
                    <div className="clickable col text-white my-auto" onClick={this.onChangeNext}>
                        <img src={ArrowRight}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SidebarItem;