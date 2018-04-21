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

    // keyPress = (event) => {
    //     if (event.charCode > 46 && event.charCode < 58 || event.charCode > 95 && event.chatCode < 106) {
    //     } else {
    //         event.preventDefault();
    //     }
    // }

    render() {
        return (
            <form className = "main-form row">
                <div className = "input-group col">
                    <div className = "input-group-prepend col-12">
                        <label for = "date" className = "input-group-text col-sm-2 mb-3">Date: </label>
                        <input id = "date" type = "date" className = "form-control col-sm-10 mb-3" placeholder = "01/04/2018" value = {this.state.newDate} onChange = {this.handleChangeDate} onKeyPress = {this.keyPress}></input>
                    </div>
                </div>
                <div className = "input-group col-sm-12">
                    <div className = "input-group-prepend col-sm-12">
                        <label for = "title" className = "input-group-text col-sm-2 mb-3">Title: </label>
                        <input id = "title" className = "form-control col-sm-10 mb-3" value = {this.state.newTitle} onChange = {this.handleChangeTitle}></input>
                    </div>
                </div>
                <div className = "input-group col-sm-12">
                    <div className = "input-group-prepend col-sm-12">
                        <label for = "description" className = "input-group-text col-sm-2 mb-3">Details: </label>
                        <textarea id = "description" className = "form-control col-sm-8 mb-3" aria-label = "With textarea" maxLength = '160' cols = '100' rows = '2' value = {this.state.newDescription} onChange = {this.handleChangeDescription}></textarea>
                        <button className = "btn-add btn btn-outline-secondary col-sm-2 mb-3" type = "button" onClick = {this.handleClick}>Add</button>
                    </div>
                </div>
                {/* <div><h6 style = {{color: "red"}}>{this.state.info}</h6></div> */}
            </form>
        )
    }
}

export { AddItem };
