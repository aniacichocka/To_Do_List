import React from 'react';
import { ListItem } from './listItem.jsx';
import { AddItem } from './addItem.jsx';
import { Menu } from './menu.jsx';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainData: []
        }
        this.postItem = this.postItem.bind(this);

    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('http://localhost:3000/tasks').then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error('Błąd sieci!');
            }
        })
        .then(data => {
        console.log(data);
            this.setState({
                mainData: data
            })
        })
        .catch(err => {
            console.log('Błąd!', err);
        });
    }

    postItem (date, title, description) {

        const newItem = {
            id: `${this.state.mainData.length + 1}`,
            date: date,
            title: title,
            description: description
        }

        if (newItem === {} || this.state.mainData.id === newItem.id){
            return null
        } else{
            fetch('http://localhost:3000/tasks/', {
                method: 'POST',
                body: JSON.stringify(newItem),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(resp => {
                console.log(resp);
                return resp.json();
            })
            .then(data=> {
                this.setState({
                    mainData: data
                },this.getData())
            })
            .catch(err => {
                console.log('Błąd!', err);
            });
        }
    }

    // putItem (date, title, description) {
    //
    //     const newItem = {
    //         id: `${this.state.mainData.length + 1}`,
    //         date: date,
    //         title: title,
    //         description: description
    //     }
    //
    //     if (newItem === {} || this.state.mainData.id === newItem.id){
    //         return null
    //     } else{
    //         fetch('http://localhost:3000/tasks/', {
    //             method: 'PUT',
    //             body: JSON.stringify(newItem),
    //             headers: new Headers({
    //                 'Content-Type': 'application/json'
    //             })
    //         })
    //         .then(resp => {
    //             console.log(resp);
    //             return resp.json();
    //         })
    //         .then(data=> {
    //             this.setState({
    //                 mainData: data
    //             },this.getData())
    //         })
    //         .catch(err => {
    //             console.log('Błąd!', err);
    //         });
    //     }
    // }

    render() {
        let list = this.state.mainData.map(el => {
            return <ListItem item = {el} />
        })
        return (
            <div>
                <Menu />
                <AddItem post = {this.postItem}/>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export { List };
