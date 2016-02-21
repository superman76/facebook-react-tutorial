var HelloWorld = React.createClass({
  render: function(){
    return (
      <h3> Hello World! </h3>
      );
  }
});

React.render(<HelloWorld/>, document.getElementById('hello'))