// import React from 'react';
//
// class ToModify extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modDate: '',
//             modTitle: '',
//             modDescription: '',
//             changeDataArr: this.props.data
//         }
//     }
//
//     handleModDate = (event) => {
//         this.setState({
//             modDate: event.target.value
//         })
//     }
//
//     handleModTitle = (event) => {
//         this.setState({
//             modTitle: event.target.value
//         })
//     }
//
//     handleModDescription = (event) => {
//         this.setState({
//             modDescription: event.target.value
//         })
//     }
//
//     handleClickMod = (e) => {
//
//             const changeItem = {
//                 date: this.modDate,
//                 title: this.modTitle,
//                 description: this.modDescription
//             }
//
//                 fetch('http://localhost:3000/tasks/' + this.param.id, {
//                     method: 'PUT',
//                     body: JSON.stringify(changeItem),
//                     headers: new Headers({
//                         'Content-Type': 'application/json'
//                     })
//                 })
//                 .then(resp => {
//                     console.log(resp);
//                     return resp.json();
//                 })
//                 .then(data=> {
//
//                     let changeData = this.state.changeDataArr;
//                     changeData = changeData.filter((el, index) => {
//                         return el.id !== this.param.id
//                     })
//                     changeData.push(changeItem);
//
//                     this.setState({
//                         changeDataArr: changeData
//                     })
//                 })
//                 .catch(err => {
//                     console.log('Błąd!', err);
//                 });
//
//         this.setState({
//             modDate: '',
//             modTitle: '',
//             modDescription: ''
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <span>Date: </span><input value = {this.state.modDate} onChange = {this.handleModDate}></input>
//                 <span>Title: </span><input value = {this.state.modTitle} onChange = {this.handleModTitle}></input>
//                 <span>Description: </span><textarea maxLength = '160' cols = '25' rows = '10' value = {this.state.modDescription} onChange = {this.handleModDescription}></textarea>
//                 <button onClick = {e => this.handleClickMod(e)}>Add</button>
//             </div>
//         )
//     }
// }
//
// export { ToModify };
