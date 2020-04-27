import React , { Component} from 'react';
import Comp1 from './Comp1';


class Login extends Component {
  

  
  constructor(props){
      super(props);
      this.state = {sampleText: '0'};
      this.state = {ok: '0'};
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        email: '',
        password: ''
    };
  
  }
readTextFile = file => {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status == 0) {
              var d1,lines,length,i, allText = rawFile.responseText;
              lines = allText.split(" "); 
              for(i = 0; i < lines.length; i++){ 
                 d1=lines.slice(" ");
                  if(d1[i]==this.state.username && d1[i+1]==this.state.password)
                    this.state.ok='1';         
              
              }
              this.setState({
                  fundData: allText
              });
          }
      }
  };
  rawFile.send(null);
};



ctv12 = () => {
  this.readTextFile("data.txt");
  this.setState({sampleText: '1'});
}
handleChange(e) {
  this.setState({ [e.target.name]: e.target.value });
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
     const t1={
        color:"white",
        textAlign:"center",
        fontSize:"25px"
    }
    const wel={
        color:"white",
        textAlign:"center",
        fontSize:"50px"
    }
    const s1={
        margin:"auto",
        height:"210px",
        width:"200px",
        padding:"10px 70px 10px 70px",
        borderRadius:"20px",
        textAlign:"center",  
     }
     const ip1={
         width:"200px",
         height:"35px"
     }
     const but1 ={
       height:"25px",
       width:"70px",
       color:"black",
       backgroundColor:"grey"
     }
     /*if(this.state.ok=='1')
     alert("ahaa "+this.state.ok);
*/
     if(this.state.sampleText=='1' && this.state.ok=='1' )
     return(
       <Comp1/>
     )
     else if(this.state.sampleText=='1')
      {
        window.history.back();
        this.state.sampleText='0';
       alert("invalid credentials");
    
     }
        return (
            
            <div style={body1} className="app-content">
            <h1 style={wel}>WELCOME TO LOGIN PAGE</h1>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/>
            <form method="post">
            <div style={s1}>
            <label style={t1}>
                Name:
                <input style={ip1} type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            </label>
            <br/><br/>
            <label style={t1}>
                password:
                <input style={ip1} type="password" name="password" value={this.state.password} onChange={this.handleChange} />            </label>
            <br/><br/>
            <button style={but1} onClick={this.ctv12} value={this.state.logged} name="logged"><b>LOGIN</b></button>
            
            </div>
            </form>
           
            </div>
        )
        }
    }



export default Login;
