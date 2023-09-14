import React from 'react';
  
class Pure extends React.Component {
  render() {
    console.log('Child Component is called');
    return <h1>{this.props.value}</h1>;
  }
}
  
class App extends React.Component {
  state = { color: 'black' };
  render() {
    return (
      <div style={{ color: this.state.color }}>
        <Pure value="Harkirpa" />
        <button onClick={() => this.setState({ color: 'pink' })}>
          Change Color
        </button>
      </div>
    );
  }
}
export default App;