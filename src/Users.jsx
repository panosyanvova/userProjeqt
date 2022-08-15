import React, { Component } from 'react';
import request from './lib';
import UserS from "./Users.module.css"
import User from './User';


export default class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      idUser: 0
    }

    console.log(props);
  }

  componentDidMount() {
    request("GET", "https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({
        users: res
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    // this.state.users.map((el)=>{
    //   console.log(el);
    // });
    return (
      <div className={UserS.nameCont}>{this.state.users.map((el, i) => (
        <div key={`userName is id ${i}`} className={UserS.name} onClick={
          this.props.onUserClick  
        }>{el.name}</div>
      ))}
      {this.state.idUser > 0 && <User id = {this.state.idUser}/>}
      </div>
    )

  }
}
