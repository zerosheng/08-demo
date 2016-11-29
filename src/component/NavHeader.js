import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
       return(
         <div className='nav-header'>
           <button type="button" className="btn btn-default" aria-label="Left Align">
             <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>BACK
           </button>
           <h3>zeroxxss@Home</h3>
             <button type="button" className="btn btn-default" aria-label="Left Align">
               <span className="glyphicon glyphicon-usd" aria-hidden="true"></span>
             </button>
         </div>
       )
  }
}

export default NavHeader;
