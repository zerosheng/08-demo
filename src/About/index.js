import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Loading from '../component/Loading';
import ShowGit from '../component/ShowGit'

class About extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      //0 没搜索，1后台没响应数据未接收 2数据接收完
      wait:0
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      wait:1
    })
    let value=this.refs.gitname.getValue();
    axios.get(`http://api.github.com/users/${value}`)
    .then( res=>this.setState({data:res.data,wait:2}))
    .catch(error=>{alert(error);this.state({wait:0})})
    this.refs.form.reset()
  }
  render(){
    let styles={
      underline:{
        borderColor:'#00bcd4'
      }
    }
    let showGitinfo=this.state.wait==0?null:
       this.state.wait==1?<Loading/>:<ShowGit gitInfo={this.state.data}/>
    return(
      <div className="about-warp">
        <div className='git-card'>
         <h2>Search Git Info</h2>
         <form ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
           <TextField ref='gitname' hintText='github username'  underlineFocusStyle={styles.underline}/>
           <RaisedButton onClick={this.handleSubmit.bind(this)} label="Secondary" secondary={true} style={{marginLeft:'10px'}}/>
         </form>
         {showGitinfo}
        </div>
      </div>
    )
  }
}

export default About;
