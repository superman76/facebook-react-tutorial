// 1) Demonstate checkboxs and input field;
// 2) Render gravatar with email via prop;
// 3) Have app render gravatar;
// 4) Refactor app to render gravatar component;
// 5) Show prop types as validation;
// 6) Add key
// 7) Pass in users as props

var USERS = [
  { id: 1, name: 'Ryan Florence', email: 'notsure@react.com'},
  { id: 2, name: 'Doug Walter', email: 'douglaswalter2@gmail.com'},
  { id: 3, name: 'Someone Else', email: 'someone@else.com'}
];

var G_URL = "http://gravatar.com/avatar";

var Gravatar = React.createClass({
  propTypes: {
    email: React.PropTypes.string
  },

  render: function(){
    var size = 36;
    var hash = md5(this.props.email);
    var url = G_URL + '/' + hash + '?s=' + size;
    return (
        <img src={url} width={size}/>
      );
  }
});


var App = React.createClass({
  render: function(){
    var users = this.props.users.map(function(user){
      return <li key={user.id}> <Gravatar email={user.email}/>{user.name}</li>
    });
    return (
      <div>
        <h1>Users</h1>
        <ul>{users}</ul>
      </div>
      );
  }
})

React.render(<App users={USERS}/>, document.getElementById('hello'));
