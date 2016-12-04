import React, { PropTypes } from 'react'
import marked from 'marked';
import axios from 'axios';
import hljs from 'highlight.js';
import Loading from "../component/Loading"

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  }
  componentDidMount(){
    let address=this.props.params.title;
    axios.get(`https://raw.githubusercontent.com/zerosheng/08-demo/master/data/${address}.md`)
    .then(res=>this.setState({data:res.data}))
    .catch(err=>alert(error))
  }
  render () {
    marked.setOptions({
         highlight: function (code) {
         return hljs.highlightAuto(code).value;
  }
});
    let content=this.state.data.length==0? <Loading/>: marked(this.state.data);
     return(
       <div className='item-wrap'>
       {this.state.data.length==0?<Loading/>:
         <div className='post-content' dangerouslySetInnerHTML={{__html:content}}/>
       }
       </div>
     )
  }
}

export default Item;
