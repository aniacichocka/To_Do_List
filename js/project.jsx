import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './list.jsx';

document.addEventListener("DOMContentLoaded", function() {

    class App extends React.Component {
        render() {
            return <div>
                <List />
            </div>
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById("app")
    );
});
