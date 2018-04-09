// import React from 'react';
//
// class ListItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             show: false
//         }
//     }
//
//     handleClickTitle = () => {
//         this.setState({
//             show: true
//         })
//     }
//
//     handleClickHide = () =>{
//         this.setState({
//             show: false
//         })
//     }
//
//     hadleClickCompleted = (e, id) =>{
//             if (typeof this.props.delete === 'function') {
//                 this.props.delete(id);
//             }
//     }
//
//     render() {
//         return (
//                 <li key={this.props.item.id}>
//                     <span onClick = {this.handleClickTitle}>{this.props.item.date} {this.props.item.title}</span>
//                     <div>{this.state.show && <div>
//                         <span>{this.props.item.description}</span>
//                         <div>
//                             <button onClick = {e => this.handleClickModify(e, this.props.item.id)}>to modify</button>
//                             <button onClick = {e => this.hadleClickCompleted(e, this.props.item.id)}>completed</button>
//                             <button onClick = {this.handleClickHide}>hide</button>
//                         </div>
//                     </div>}</div>
//                 </li>
//         )
//     }
// }
//
// export { ListItem };
