import React, { Component } from 'react';
import SidebarItem from './SidebarItem';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        ;

        this.onChangeHead = this.onChangeHead.bind(this);
    }

    onChangeHead(newUrl) {
        this.props.onChangeHead(newUrl);
    }

    render() {
        return(
            <div className="bg-dark border-right text-white">
                <div className="sidebar-heading p-2">Change Character </div>
                <div className="list-group list-group-flush">
                    <SidebarItem title="Element"/>
                    <SidebarItem onChangeHead={this.onChangeHead} title="Head"/>
                    <SidebarItem title="Body"/>
                    <SidebarItem title="Arms"/>
                    <SidebarItem title="Legs"/>
                </div>
            </div>
        )
    }
}

export default Sidebar;