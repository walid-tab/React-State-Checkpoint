import React from 'react'
import './App.css'


import Profile from './Components/Profile';
class App extends React.Component {
  constructor() {
    super();
    this.state={
      isShow:true,    
      timer: 0 
    }
  }

  componentDidMount() {
    this.myTimer=setInterval (()=>{
      this.setState(prevState => ({
        timer: prevState.timer + 1
    }))
  }, 1000)
  }
  componentWillUnmount=()=>{
    clearInterval(this.myTimer)
  }

  

    render() { 
            
    return ( 
     
      <div>
       
        
        
        <button onClick={()=>this.setState({isShow:!this.state.isShow})}>
          {this.state.isShow?"Hide":"Show"}
        </button>
        <h3>Time interval : {this.state.timer}</h3>
        {
          this.state.isShow && <Profile/>
        }
      </div>

     );
  }
  
}
 
export default App;