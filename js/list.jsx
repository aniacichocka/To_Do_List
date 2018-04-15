import React from 'react';
import { ListItem } from './listItem.jsx';
import { ListItemDelete } from './listItemDelete.jsx';
import { AddItem } from './addItem.jsx';
// import { Menu } from './menu.jsx';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainData: [],
            deleteData: [],
            modifyArea: false,
            thisItem: {}
        }
        this.postItem = this.postItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.modifyItem = this.modifyItem.bind(this);

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

    handleClickMod = () => {
        const inputDate = document.querySelector('.input-date').value;
        const inputTitle = document.querySelector('.input-title').value;
        const inputDescr = document.querySelector('.input-descr').value;

        const changeItem = {
            date: inputDate,
            title: inputTitle,
            description: inputDescr
        }
        console.log(this.thisItem);
        // fetch('http://localhost:3000/tasks/' + this.thisItem.id, {
        //     method: 'PUT',
        //     body: JSON.stringify(changeItem),
        //     headers: new Headers({
        //         'Content-Type': 'application/json'
        //     })
        // })
        // .then(resp => {
        //     console.log(resp);
        //     return resp.json();
        // })
        // .then(data=> {
        //     console.log(data);
        //     // let changeData = this.state.changeDataArr;
        //     // changeData = changeData.filter((el, index) => {
        //     //     return el.id !== this.param.id
        //     // })
        //     // changeData.push(changeItem);
        //     //
        //     // this.setState({
        //     //     changeDataArr: changeData
        //     // })
        // })
        // .catch(err => {
        //     console.log('Błąd!', err);
        // });
    }

    modifyItem (item) {

        setTimeout (() => {
            const inputDate = document.querySelector('.input-date');
            const inputTitle = document.querySelector('.input-title');
            const inputDescr = document.querySelector('.input-descr');

            inputDate.value = item.date;
            inputTitle.value = item.title;
            inputDescr.value = item.description;
        },200);

        const itemChange = item;
        this.setState({
            modifyArea: true,
            thisItem: itemChange
        });
    }

    render() {
        let list = this.state.mainData.map(el => {
            return <ListItem item = {el} delete = {this.deleteItem} modify = {this.modifyItem}/>
        })

        let list2 = this.state.deleteData.map(el => {
            return <ListItemDelete item = {el}/>
        })

        return (
            <div className = "container">
                <div className = "mainForm">
                    <AddItem post = {this.postItem}/>
                </div>
                <div className = "lists">
                    <div className = "row">
                        <div className = "col-6 to-do-list">
                            <h4>To do list</h4>
                            <div>
                                {list}
                            </div>
                        </div>
                        <div  className = "col-6 completed-tasks">
                            <h4>Completed tasks</h4>
                            <div>
                                {list2}
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "input-group">{this.state.modifyArea &&
                    <form className = "row">
                        <div className = "input-group row">
                            <div className = "input-group-prepend col-12">
                                <label for = "date" className = "input-group-text col-2 col-sm-3 mr-2 mb-2">Date: </label>
                                <input id = "date" className = "form-control col-10 col-sm-9 mr-2 mb-2 input-date" value = {this.state.modDate} onChange = {this.handleModDate}></input>
                            </div>
                        </div>
                        <div className = "input-group row">
                            <div className = "input-group-prepend col-12">
                                <label for = "title" className = "input-group-text col-2 col-sm-3 mr-2 mb-2">Title: </label>
                                <input id = "title" className = "form-control col-10 col-sm-9 mr-2 mb-2 input-title" value = {this.state.modTitle} onChange = {this.handleModTitle}></input>
                            </div>
                        </div>
                        <div className = "input-group row">
                            <div className = "input-group-prepend col-12">
                                <label for = "description" className = "input-group-text col-2 col-sm-3 mr-2 mb-2">Description: </label>
                                <textarea id = "description" className = "form-control col-9 col-sm-7 mr-2 mb-2 input-descr" aria-label = "With textarea" maxLength = '160' cols = '100' rows = '2' value = {this.state.newDescription} onChange = {this.handleChangeDescription}></textarea>
                                <button className = "btn btn-outline-secondary col-1 col-sm-2 mr-2 mb-2" type = "button" onClick = {e => handleClickMod(e)}>Modify</button>
                            </div>
                        </div>
                    </form>}
                </div>
            </div>
        )
    }
}

export { List };

// data-id = item-id; -> przypisać do inputa
