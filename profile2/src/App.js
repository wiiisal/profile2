import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      array:[],
      FullName:"wissal",
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
      bio:"hello I m wissal",
      profesion:"bleda",
      show:false
    }
  }
  handleShow(){
    this.setState({show:!this.state.show})
  }
  render() {
    const {show,FullName,bio,profesion,image}=this.state
    return (
      <div style={{color:'blue'}}>
      
        <button onClick={()=>this.handleShow()}> {show === true ? "Hide" : "Show"}</button>
       { show === true && <><div>{FullName}</div><h1>{profesion}</h1><h2>{bio}</h2><img src={image} alt=''/></>}
       {show === false&& null}
      </div>
    )
  }
}
