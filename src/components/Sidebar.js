import React, { Component } from 'react';
import SidebarItem from './SidebarItem';

class Sidebar extends Component {
    render() {
        return(
            <div className="bg-dark border-right text-white">
                <div className="sidebar-heading p-2">Change Character </div>
                <div className="list-group list-group-flush">
                    <a href="#" className="list-group-item list-group-item-action bg-dark text-white">Element</a>
                    <a href="#" className="list-group-item list-group-item-action bg-dark text-white">Head</a>
                    <a href="#" className="list-group-item list-group-item-action bg-dark text-white">Body</a>
                    <a href="#" className="list-group-item list-group-item-action bg-dark text-white">Arms</a>
                    <a href="#" className="list-group-item list-group-item-action bg-dark text-white">Legs</a>
                    <SidebarItem title="hola"/>
                </div>
            </div>
        )
    }
}

export default Sidebar;