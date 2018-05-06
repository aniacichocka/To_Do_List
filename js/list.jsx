import React from 'react';
import { ListItem } from './listItem.jsx';
import { ListItemDelete } from './listItemDelete.jsx';
import { AddItem } from './addItem.jsx';


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
                throw new Error("Błąd sieci!");
            }
        })
        .then(data => {

            this.setState({
                mainData: data
            })
        })
        .catch(err => {
            console.log("Błąd!", err);
        });
    }

    postItem (date, title, description) {

        const newItem = {
            date: date,
            title: title,
            description: description
        }

        fetch('http://localhost:3000/tasks/', {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: new Headers({
                "Content-Type": "application/json"
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
            console.log("Błąd!", err);
        });
    }

    deleteItem (item) {

        fetch(`http://localhost:3000/tasks/${item.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json"
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

            this.setState({
                mainData: newData
            })
        })
        .catch(err => {
            console.log("Błąd!", err);
        });

        let newDeleteData = this.state.deleteData;
        newDeleteData.push(item);
        this.setState({
            deleteData: newDeleteData
        })
    }

    handleClickMod = (event) => {
        const inputDate = document.querySelector(".input-date").value;
        const inputTitle = document.querySelector(".input-title").value;
        const inputDescr = document.querySelector(".input-descr").value;
        const elementId = event.currentTarget.parentElement.parentElement;
        const elementsTasks = document.querySelectorAll(".single-element");
        let elId;

        elId = this.state.currentModify;

        const changeItem = {
            date: inputDate,
            title: inputTitle,
            description: inputDescr,
            id: elId
        }

        const allState = [...this.state.mainData];
        let oldElement;
        allState.forEach((element, index) => {
            if (element.id == elId) {
                oldElement = index;
                return;
            }
        })

        allState[oldElement] = changeItem;

        this.setState({
            mainData: allState,
            modifyArea: false,
            currentModify: false
        })

        fetch(`http://localhost:3000/tasks/${elId}`, {
            method: "PUT",
            body: JSON.stringify(changeItem),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
        .then(resp => {
            return resp.json();
        })
        .then(data=> {
            console.log(data);
        })

        .catch(err => {
            console.log("Błąd!", err);
        });
    }

    modifyItem (item) {

        setTimeout (() => {
            const inputDate = document.querySelector(".input-date");
            const inputTitle = document.querySelector(".input-title");
            const inputDescr = document.querySelector(".input-descr");

            inputDate.value = item.date;
            inputTitle.value = item.title;
            inputDescr.value = item.description;
        },200);

        const itemChange = item;
        this.setState({
            modifyArea: true,
            thisItem: itemChange,
            currentModify: item.id
        })
    }

    render() {

        let list = this.state.mainData.map(el => {
            return <ListItem currentModify = {this.state.currentModify} item = {el} delete = {this.deleteItem} modify = {this.modifyItem}/>
        })

        let list2 = this.state.deleteData.map(el => {
            return <ListItemDelete item = {el}/>
        })

        return (
            <div className = "container">
                <header className = "row">
                    <div className = "headline col">
                        <div>
                            <h1 className = "text-center">TO DO LIST</h1>
                        </div>
                    </div>
                </header>
                <AddItem post = {this.postItem}/>
                <div className = "row lists">
                    <div className = "col-md-4 col-sm-12 to-do-list justify-content-center text-center">
                        <h4>New tasks</h4>
                        <div>
                            {list}
                        </div>
                    </div>
                    <div className = "input-group col-md-4 col-sm-12 change-form">{this.state.modifyArea &&
                        <form>
                            <div className = "input-group">
                                <div className = "col-md-12 col-sm-12 justify-content-center">
                                    <label for = "change-date" className = "input-group-text col-md-12 col-sm-12">Date:</label>
                                </div>
                                <div className = "col-md-12 col-sm-12">
                                    <input id = "change-date" type = "date" className = "form-control col-md-12 col-sm-12 mb-3 input-date" value = {this.state.modDate}></input>
                                </div>
                            </div>
                            <div className = "input-group">
                                <div className = " col-md-12 col-sm-12 justify-content-center">
                                    <label for = "change-title" className = "input-group-text col-md-12 col-sm-12">Title:</label>
                                </div>
                                <div className = "col-md-12 col-sm-12">
                                    <input id = "change-title" className = "form-control col-md-12 col-sm-12 mb-3 input-title" value = {this.state.modTitle}></input>
                                </div>
                            </div>
                            <div className = "input-group">
                                <div className = "col-md-12 col-sm-12 justify-content-center">
                                    <label for = "change-description" className = "input-group-text col-md-12 col-sm-12">Details: </label>
                                </div>
                                <div className = "col-md-12 col-sm-12">
                                    <textarea id = "change-description" className = "form-control col-md-12 col-sm-12 mb-3 input-descr" aria-label = "With textarea" maxLength = "160" cols = "100" rows = "2" value = {this.state.newDescription}></textarea>
                                </div>
                                <div className = "col-md-12 col-sm-12">
                                    <button className = "btn-modify btn-outline-secondary col-md-12 col-sm-12" type = "button" onClick = {e => this.handleClickMod(e)}>Modify</button>
                                </div>
                            </div>
                        </form>}
                    </div>
                    <div className = "col-md-4 col-sm-12 completed-tasks justify-content-center text-center">
                        <h4>Completed tasks</h4>
                        <div>
                            {list2}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { List };
