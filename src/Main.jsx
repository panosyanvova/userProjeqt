import Users from "./Users"
import React, { Component } from 'react';
import User from "./User";
import MainCss from "./Main.module.css";


export default class Main extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            pageName: "users",
            userId:0
        }
    }
  render() {
    console.log(this.state.pageName)
    return (
        <>
        <div className={MainCss.main}>
            {this.state.pageName === "users" && <Users onUserClick={()=>this.setState({pageName:"user"})}/>}
            {this.state.pageName === "user" && <User onClick={(newPageName)=>this.setState({pageName:newPageName})}/>}
        </div>
        
        {/*{this.state.pageName === "posts" && <User/>}
        {this.state.pageName === "albums" && <User/>} */}
        </>
    )
  }
}
