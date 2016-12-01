import React, { PropTypes } from 'react'
import CircularProgress from 'material-ui/CircularProgress';

class Loading extends React.Component {
  render () {
    return(
      <div>
      <CircularProgress size={60} thickness={7} />
      </div>
    )
  }
}

export default Loading;
