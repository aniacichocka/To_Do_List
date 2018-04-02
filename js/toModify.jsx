import React from 'react';

class ToModify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modDate: '',
            modTitle: '',
            modDescription: ''
        }
    }

    handleModDate = (event) => {
        this.setState({
            modDate: event.target.value
        })
    }

    handleModTitle = (event) => {
        this.setState({
            modTitle: event.target.value
        })
    }

    handleModDescription = (event) => {
        this.setState({
            modDescription: event.target.value
        })
    }

    handleClickMod = () => {
        if (typeof this.props.post === 'function') {
            this.props.post(this.state.newDate, this.state.newTitle, this.state.newDescription);
        }
        this.setState({
            modDate: '',
            modTitle: '',
            modDescription: ''
        })
    }

    render() {
        return (
            <div>
                <span>Date: </span><input value = {this.state.modDate} onChange = {this.handleModDate}></input>
                <span>Title: </span><input value = {this.state.modTitle} onChange = {this.handleModTitle}></input>
                <span>Description: </span><textarea maxLength = '160' cols = '25' rows = '10' value = {this.state.modDescription} onChange = {this.handleModDescription}></textarea>
                <button onClick = {this.handleClickMod}>Add</button>
            </div>
        )
    }
}

export { ToModify };
