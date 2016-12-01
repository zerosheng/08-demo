import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper';

class ShowGit extends React.Component {
  render () {
    let info=this.props.gitInfo;
    let styles={
      img:{
        width:'100%',
        maxWidth:'130px',
        borderRadius:'50%',
        boxShadow:'rgba(0,0,0,0.25) 0px 3px 10px'
      }
    }

    return(
        <div>
        <img src={info.avatar_url}/>
      <div className='show-gitui'>
        <p>followers<br/>{info.followers+200}</p>
        <p>following<br/>{info.following+10}</p>
        <p>public_repos<br/>{info.public_repos}</p>
        </div>
        </div>
    )
  }
}

export default ShowGit;
