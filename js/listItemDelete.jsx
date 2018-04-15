import React from 'react';

class ListItemDelete extends React.Component {
    render() {
        return (
            <div key={this.props.item.id}>
                <span>{this.props.item.title}</span>
            </div>
        )
    }
}

export { ListItemDelete };
