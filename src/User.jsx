import React, { Component } from 'react';
import UserEj from "./User.module.css";

export default class User extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    console.log(this.props);
    return (
      <div className={UserEj.main}>
        <div></div>
        <button onClick={()=>this.props.onClick("posts")}>Posts</button>
        <button onClick={()=>this.props.onClick("albums")}>Albums</button>
      </div>
    )
  }
}
