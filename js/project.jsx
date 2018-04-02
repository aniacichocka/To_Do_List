import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './list.jsx';
import { ToModify } from './ToModify.jsx';

document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {
        render() {
            return (
                <div>
                    <List />
                    <ToModify />
                </div>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
