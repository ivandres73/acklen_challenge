import React, { Component } from 'react';

class BodyPart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img src={this.props.Url}/>
            </div>
        )
    }
}

export default BodyPart;