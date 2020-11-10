import React, { Component } from 'react'
import  './App.css'
import logo from './wissam.png'
export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Person: [
        { FullName: 'wissam hsoumi' },
        { Bio: 'Im a junior full stack devlopper' },
        { Image: { logo } },
        { Profession: ' junior full stack developper' }
      ],
      Toogle: false,
      count: 0,
      
    }
  }
  toogle = () => {
    let Toogle = this.state.Toogle
    this.setState({ Toogle: !Toogle })
  }

  componentDidMount () {
  
   setInterval(() => {
      let count = this.state.count
      this.setState({count:count+1})
       
     }, 100);   
  }

 
  render() {

    let Toogle = this.state.Toogle
    const Person = this.state.Person
    return (

      <div className="stateShow">
        {!Toogle ?
          <div>
            <img src={logo} alt="" width='200px'/>
            <h1>{Person[0].FullName}</h1>
            <h2>{Person[3].Profession}</h2>
            <p>{Person[1].Bio}</p>
          </div> : <p className="profile">go back to profil</p>
        } 
        <button onClick={this.toogle} style={Toogle ? {backgroundColor:"blue"} : {backgroundColor:"blue"}} >{Toogle ? "back" : "hide" }</button><br/>
      <p className="second">{!Toogle ? this.state.count:null}</p>        
      
      </div>

    )
  }
}

export default App
