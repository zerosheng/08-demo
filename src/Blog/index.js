import React from 'react';
import BlogCard from '../component/BlogCard'
import axios from "axios"
import Loading from "../component/Loading"
class Blog extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get("https://raw.githubusercontent.com/zerosheng/08-demo/master/data/blogcard.json?")
    .then(res=>this.setState({data:res.data,wait:false}))
  }
  render(){
    return(
      <div className='blog-warp'>
        {this.state.wait?<loading/>:this.state.data.map((item,i)=><BlogCard{...item} key={i}/>)}
      </div>
    )
  }
}

export default Blog;
