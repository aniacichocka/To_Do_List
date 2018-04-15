import React from 'react';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newDate: '',
            newTitle: '',
            newDescription: ''
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
        if (typeof this.props.post === 'function') {
            this.props.post(this.state.newDate, this.state.newTitle, this.state.newDescription);
        }
        this.setState({
            newDate: '',
            newTitle: '',
            newDescription: ''
        })
    }

    render() {
        return (
            <form className = "row">
                <div className = "input-group row">
                    <div className = "input-group-prepend col-12">
                        <label for = "date" className = "input-group-text col-2 col-sm-3 mr-2 mb-2">Date: </label>
                        <input id = "date" className = "form-control col-10 col-sm-9 mr-2 mb-2" value = {this.state.newDate} onChange = {this.handleChangeDate}></input>
                    </div>
                </div>
                <div className = "input-group row">
                    <div className = "input-group-prepend col-12">
                        <label for = "title" className = "input-group-text col-2 col-sm-3 mr-2 mb-2">Title: </label>
                        <input id = "title" className = "form-control col-10 col-sm-9 mr-2 mb-2" value = {this.state.newTitle} onChange = {this.handleChangeTitle}></input>
                    </div>
                </div>
                <div className = "input-group row">
                    <div className = "input-group-prepend col-12">
                        <label for = "description" className = "input-group-text col-2 col-sm-3 mr-2 mb-2">Description: </label>
                        <textarea id = "description" className = "form-control col-9 col-sm-7 mr-2 mb-2" aria-label = "With textarea" maxLength = '160' cols = '100' rows = '2' value = {this.state.newDescription} onChange = {this.handleChangeDescription}></textarea>
                        <button className = "btn btn-outline-secondary  col-1 col-sm-2 mr-2 mb-2" type = "button" onClick = {this.handleClick}>Add</button>
                    </div>
                </div>
            </form>
        )
    }
}

export { AddItem };
