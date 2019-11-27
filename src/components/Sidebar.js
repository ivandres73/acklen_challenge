import React, { Component } from 'react';
import SidebarItem from './SidebarItem';

class Sidebar extends Component {
    render() {
        return(
            <div className="bg-dark border-right text-white">
                <div className="sidebar-heading p-2">Change Character </div>
                <div className="list-group list-group-flush">
                    <SidebarItem title="Element"/>
                    <SidebarItem title="Head"/>
                    <SidebarItem title="Body"/>
                    <SidebarItem title="Arms"/>
                    <SidebarItem title="Legs"/>
                </div>
            </div>
        )
    }
}

export default Sidebar;