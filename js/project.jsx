import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './menu.jsx';
import { Template } from './template.jsx';
import { List } from './list.jsx';
import { ToModify } from './ToModify.jsx';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';

document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Menu} />
                        <Route path='list' component={List}/>
                        <Route path='toModify/:id' component={ToModify}/>
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
