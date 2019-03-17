import React from 'react'
import { render } from 'react-dom'
import default_import from './export_test'
import { cube, foo, graph } from './export_test';

graph.options = {
    color:'blue',
    thickness:'3px'
};
graph.draw();
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { message: 'something' }
  }

  onChange(e) {
     this.setState( {message: e.target.value} )
  }

  render() {
    return (
      <div>
        <input type="text" onChange = { this.onChange.bind(this) } />
        <p>{ this.state.message }</p>
        <p>{ default_import }</p>
      </div>
    )
  }

}

render(<App/>, document.getElementById('app'))
