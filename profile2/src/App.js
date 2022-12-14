import {React, Component } from 'react';
import './App.css';

class App extends Component() {
  constructor() {
    super()
    this.state = {
      arr: [],
      fullName: "wissal",
      bio:"blaa",
      image:'',
      profession:"blala",
      show: false
                  }
                  }
                  componentDidMount() {
                    this.setState({ arr: {} })}
                  handleShow(){
                    this.setState({show:true})
                  }



  render() {
  return (
    <div className="App">
      
      <button  >
          profile information
        </button>
      
    </div>
  );
}}

export default App;
