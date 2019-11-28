import React, { Component } from 'react';
import SidebarItem from './SidebarItem';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.onChangeHeadNext = this.onChangeHeadNext.bind(this);
        this.onChangeHeadBack = this.onChangeHeadBack.bind(this);
    }

    onChangeHeadNext() {
        this.props.onChangeHeadNext();
    }

    onChangeHeadBack() {
        this.props.onChangeHeadBack();
    }

    render() {
        return(
            <div className="bg-dark border-right text-white">
                <div className="sidebar-heading p-2">Change Character </div>
                <div className="list-group list-group-flush">
                    <SidebarItem title="Element"/>
                    <SidebarItem
                        title="Head"
                        onChangeHeadNext={this.onChangeHeadNext}
                        onChangeHeadBack={this.onChangeHeadBack}
                    />
                    <SidebarItem
                        title="Body"
                    />
                    <SidebarItem
                        title="Arms"
                    />
                    <SidebarItem
                        title="Legs"
                    />
                </div>
            </div>
        )
    }
}

export default Sidebar;