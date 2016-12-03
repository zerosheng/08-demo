import React, { PropTypes } from 'react'
import marked from 'marked';
import axios from 'axios';

class Item extends React.Component {
  componentDidMount(){
    let address=this.prpos.params.title;
    axios.get(`https://raw.githubusercontent.com/zerosheng/08-demo/master/data/${address}.md`)
    .then(res=>console.log(res))
  }
  render () {
    console.log(this.props)
     return(
       <div>
       
       </div>
     )
  }
}

export default Item;
