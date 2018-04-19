import React from 'react';

class ListItemDelete extends React.Component {
    render() {
        return (
            <div key={this.props.item.id} className = "list-element">
                <span>{this.props.item.title}</span>
            </div>
        )
    }
}

export { ListItemDelete };
