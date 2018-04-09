import React from 'react';

class ListItemDelete extends React.Component {
    render() {
        return (
            <li key={this.props.item.id}>
                <span>{this.props.item.title}</span>
            </li>
        )
    }
}

export { ListItemDelete };
