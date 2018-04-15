import React from 'react';
import { IndexLink } from 'react-router';

class Template extends React.Component {
    render() {
        return (
            <div>
                <h1> TO DO LIST</h1>
                <h3>
                    <IndexLink to="/list">Create your list</IndexLink>
                </h3>
                {this.props.children}
            </div>
        )
    }
}

export { Template };
