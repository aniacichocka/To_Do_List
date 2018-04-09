import React from 'react';
import { ListItem } from './listItem.jsx';
import { ListItemDelete } from './listItemDelete.jsx';
import { AddItem } from './addItem.jsx';
import { Menu } from './menu.jsx';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainData: [],
            deleteData: []
        }
        this.postItem = this.postItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

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
            date: date,
            title: title,
            description: description
        }


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
                let newData = this.state.mainData;
                newItem.id = data.id;
                newData.push(newItem);
                this.setState({
                    mainData: newData
                })
            })
            .catch(err => {
                console.log('Błąd!', err);
            });

    }

    deleteItem (item) {
        console.log(item);

        fetch('http://localhost:3000/tasks/' + item.id, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(resp => {
            console.log(resp);
            return resp.json();
        })
        .then(data => {

            let newData = this.state.mainData;
            newData = newData.filter((el, index) => {
                return el.id !== item.id
            })

            console.log(newData);
            this.setState({
                mainData: newData
            })
        })
        .catch(err => {
            console.log('Błąd!', err);
        });

        let newDeleteData = this.state.deleteData;
        newDeleteData.push(item);
        this.setState({
            deleteData: newDeleteData
        })
    }

    render() {
        let list = this.state.mainData.map(el => {
            return <ListItem item = {el} delete = {this.deleteItem} data = {this.state.mainData}/>
        })

        let list2 = this.state.deleteData.map(el => {
            return <ListItemDelete item = {el}/>
        })

        return (
            <div>
                <Menu />
                <AddItem post = {this.postItem}/>
                <ul>
                    {list}
                </ul>
                <ul>
                    {list2}
                </ul>
            </div>
        )
    }
}

export { List };
