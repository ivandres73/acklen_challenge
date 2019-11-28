import React, { Component } from 'react';
import SidebarItem from './SidebarItem';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.onChangeNext = this.onChangeNext.bind(this);
        this.onChangeBack = this.onChangeBack.bind(this);
    }

    onChangeNext(bodyPart) {
        this.props.onChangeNext(bodyPart);
    }

    onChangeBack(bodyPart) {
        this.props.onChangeBack(bodyPart);
    }

    render() {
        return(
            <div className="bg-dark border-right text-white">
                <div className="sidebar-heading p-2">Change Character </div>
                <div className="list-group list-group-flush">
                    <SidebarItem title="Element"/>
                    <SidebarItem
                        title="Head"
                        name="head"
                        onChangeNext={this.onChangeNext}
                        onChangeBack={this.onChangeBack}
                    />
                    <SidebarItem
                        title="Body"
                        name="body"
                        onChangeNext={this.onChangeNext}
                        onChangeBack={this.onChangeBack}
                    />
                    <SidebarItem
                        title="Arms"
                    />
                    <SidebarItem
                        title="Legs"
                        name="legs"
                        onChangeNext={this.onChangeNext}
                        onChangeBack={this.onChangeBack}
                    />
                </div>
            </div>
        )
    }
}

export default Sidebar;