//Render Mexican food items to the page.

var DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican'},
    { id: 2, name: 'burritos', type: 'mexican'},
    { id: 3, name: 'egg roles', type: 'chinese'},
    { id: 4, name: 'tostada', type: 'mexican'},
    { id: 5, name: 'pizza', type: 'italian'}
  ]
};

var Menu = React.createClass({
  render: function(){
    return (
      <div>
        <h3> DATA.title </h3>
      </div>
      )
  }
})

React.render(<Menu/>, document.getElementById('hello'))