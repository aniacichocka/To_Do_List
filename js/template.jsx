import React from 'react';
import { Link } from 'react-router';

class Template extends React.Component {
    render() {
        return (
            <div>
                <h1> TO DO LIST</h1>
                <ul>
                    <li>
                        <Link to="/">Menu</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                    <li>
                        <Link to="/toModify/id">Modify</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export { Template };
