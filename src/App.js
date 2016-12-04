import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';
import LeftNav from './component/LeftNav';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:'Home',
      showLeftNav:false
    }
  }
  getChildContext(){
    return{muiTheme:getMuiTheme()}
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setTitle();
    this.setNavBar();
    }
  setNavBar(){
    this.setState({
      showLeftNav:window.innerWidth>760 ? true:false
    })
  }
  componentDidMount(){
    window.onresize=this.setNavBar.bind(this)
  }
  setTitle(){
    this.setState({
      title:this.context.router.isActive('/',true) ? 'Home' :
      this.context.router.isActive('blog') ? 'Blog' :
      this.context.router.isActive('work') ? 'Work' :
      this.context.router.isActive('about') ? 'About' : 'Blog'
    })
  }
  render () {
    // console.log(this.props);
    return(
      <div className='my-wrap'>
        {this.state.showLeftNav?<LeftNav title={this.state.title}/>:<NavHeader title={this.state.title}/>}

        <div className='main'>
          {this.props.children}
        </div>

        {this.state.showLeftNav?null:<NavFooter />}
      </div>
    )
  }
}
App.contextTypes = {
  router: React.PropTypes.object
};
App.childContextTypes={
  muiTheme:React.PropTypes.object
}
export default App;
