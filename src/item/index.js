import React, { PropTypes } from 'react'
import marked from 'marked';
import axios from 'axios';
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
  }
  render () {
    let content=this.state.data.length==0? <Loading/>: marked(this.state.data);
     return(
       <div className='item-warp'>
       {this.state.data.length==0?<Loading/>:
         <div dangerouslySetInnerHTML={{__html:content}}/>
       }
       </div>
     )
  }
}

export default Item;
