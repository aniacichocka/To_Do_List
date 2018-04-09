import React from 'react';
import { Link } from 'react-router';

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

    handleClickHide = () =>{
        this.setState({
            show: false
        })
    }

    hadleClickCompleted = (e, item) =>{
        if (typeof this.props.delete === 'function') {
            this.props.delete(item);
        }
    }


    render() {
        return (
            <li key={this.props.item.id}>
                <span onClick = {this.handleClickTitle}>{this.props.item.date} {this.props.item.title}</span>
                <div>{this.state.show && <div>
                    <span>{this.props.item.description}</span>
                    <div>
                        <Link to={`/toModify/${this.props.item.id}`} data = {this.props.data}>modify</Link>
                        <button onClick = {e => this.hadleClickCompleted(e, this.props.item)}>completed</button>
                        <button onClick = {this.handleClickHide}>hide</button>
                    </div>
                </div>}</div>
            </li>
        )
    }
}

export { ListItem };
