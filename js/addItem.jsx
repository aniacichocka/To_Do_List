import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newDate: "",
            newTitle: "",
            newDescription: ""
        }
    }

    handleChangeDate = (event) => {
        this.setState({
            newDate: event.target.value
        })
    }

    handleChangeTitle = (event) => {
        this.setState({
            newTitle: event.target.value
        })
    }

    handleChangeDescription = (event) => {
        this.setState({
            newDescription: event.target.value
        })
    }

    handleClick = () => {
        if (typeof this.props.post === "function") {
            this.props.post(this.state.newDate, this.state.newTitle, this.state.newDescription);
        }
        this.setState({
            newDate: "",
            newTitle: "",
            newDescription: ""
        })
    }

    render() {
        return (
            <form className = "main-form row">
                <label for = "date" className = "input-group-text col-md-2 col-sm-12 mb-3">Date: </label>
                <input id = "date" type = "date" className = "form-control col-md-10 col-sm-12 mb-3" value = {this.state.newDate} onChange = {this.handleChangeDate} onKeyPress = {this.keyPress}></input>
                <label for = "title" className = "input-group-text col-md-2 col-sm-12 mb-3">Title: </label>
                <input id = "title" className = "form-control col-md-10 col-sm-12 mb-3" value = {this.state.newTitle} onChange = {this.handleChangeTitle}></input>
                <label for = "description" className = "input-group-text col-md-2 col-sm-12 mb-3">Details: </label>
                <textarea id = "description" className = "form-control col-md-8 col-sm-12 mb-3" aria-label = "With textarea" maxLength = '160' cols = '100' rows = '2' value = {this.state.newDescription} onChange = {this.handleChangeDescription}></textarea>
                <button className = "btn-add btn btn-outline-secondary col-md-2 col-sm-12 mb-3" type = "button" onClick = {this.handleClick}>Add</button>
            </form>
        )
    }
}

export { AddItem };
