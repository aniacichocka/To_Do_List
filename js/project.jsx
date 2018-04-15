import React from 'react';
import ReactDOM from 'react-dom';
// import { Menu } from './menu.jsx';
import { Template } from './template.jsx';
import { List } from './list.jsx';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';
// import 'bootstrap';


document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={List} />
                        <Route path='list' component={List}/>
                    </Route>
                </Router>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
