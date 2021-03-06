import React from 'react';


class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleClickTitle = () => {
        this.setState({
            show: true
        })
    }

    handleClickHide = () => {
        this.setState({
            show: false
        })
    }

    hadleClickCompleted = (e, item) => {
        if (typeof this.props.delete === "function") {
            this.props.delete(item);
        }
        this.setState({
            show: false
        })
    }

    hadleClickModify = (e, item) => {
        if (typeof this.props.modify === "function") {
            this.props.modify(item);
        }
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div key = {this.props.item.id} id = {this.props.item.id} className = "list-element single-element">
                <div onClick = {this.handleClickTitle} style = {{fontWeight: this.props.currentModify === this.props.item.id ? 'bold' : 'normal'}}>
                    <span>{this.props.item.date}: </span>
                    <span> {this.props.item.title}</span>
                </div>
                <div>{this.state.show && <div>
                    <p className = "list-element element-description">details: {this.props.item.description}</p>
                    <div className = "btn-options">
                        <button onClick = {e => this.hadleClickModify(e, this.props.item)}>to modify</button>
                        <button onClick = {e => this.hadleClickCompleted(e, this.props.item)}>completed</button>
                        <button onClick = {this.handleClickHide}>hide</button>
                    </div>
                </div>}</div>
            </div>
        )
    }
}

export { ListItem };
