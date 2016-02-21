var numbers = ['one', 'two', 'three'];

var App = React.createClass({
  render: function(){
    var items = numbers.map(function(n){
      return <li>{n}</li>
    });
    return (
      <ul>
        {items}
      </ul>
      )
    }
})

React.render(<App/>, document.getElementById('hello'));