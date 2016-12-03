import React, { PropTypes } from 'react'

class Item extends React.Component {
  render () {
    console.log(this.props)
    let content=this.props.params.title==1? '这是第1个页面' :
                this.props.params.title==2? '这是第2个页面' :
                this.props.params.title==3? '这是第3个页面' : '这是第n个页面'
     return(
       <div>
       {content}
       </div>
     )
  }
}

export default Item;
