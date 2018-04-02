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
            <div>
                <span>Date: </span><input value = {this.state.newDate} onChange = {this.handleChangeDate}></input>
                {/* <span>Day: {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}</span> */}
                <span>Title: </span><input value = {this.state.newTitle} onChange = {this.handleChangeTitle}></input>
                <span>Description: </span><textarea maxLength = '160' cols = '25' rows = '10' value = {this.state.newDescription} onChange = {this.handleChangeDescription}></textarea>
                <button onClick = {this.handleClick}>Add</button>
            </div>
        )
    }
}

export { AddItem };
