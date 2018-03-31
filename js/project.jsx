import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Box extends React.Component{
        render(){
            return <div>Hello</div>
        }
    }


    class App extends React.Component{
        render(){
            return <Box />
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
