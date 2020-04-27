import React , { Component, useReducer } from 'react';
import Login from './Login';
class Comp1 extends Component{
    attack = (move) => {
        this.props.sa(this.props.name, move);
    }
    constructor(props){
        super(props);
        this.state = {id2: '0'};
      };
    cv2 = () => {
 
        this.setState({id2: '1'});
      }

    render(){
        const body1={
            backgroundColor:"black",
            height:"100%",
            width:"100%",
            backgroundImage: "url(./img.png)",
            backgroundSize: "100% 100%",
            textAlign:"center",
            position:"fixed"
        }
        const a1 ={
            color:"white",
        }
        const but1 ={
            height:"25px",
            width:"70px",
            color:"black",
            backgroundColor:"grey",
            align:"right"
          }
          const s1={
            margin:"auto",
            height:"210px",
            width:"200px",
            padding:"10px 50px 10px 70px",
            borderRadius:"20px",
            textAlign:"center", 
            align : "center" 
         }
        if(this.state.id2=='1')
        {
            return(
                <div>
                     <Login/>
                     
                </div>
            )
        }
        return(
            <div style={body1} className="app-content">
                <h1 style={a1}>Successfully Logged in</h1>
                <button type="button" style={but1} onClick={this.cv2}>logout</button>
                <h1>{this.state.username}</h1>
                <div style={s1}>
                <img src="img.gif"></img>
                </div>
                <br/>
                <br/><br/><br/><br/><br/>
            </div>
        );
    }
}
export default Comp1;