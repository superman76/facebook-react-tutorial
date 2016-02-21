var App = React.createClass({

  fetchUsers: function(cb){
    setTimeout(function(){
       cb([{name: 'joe'}, {name: 'john'}, {name: 'jim'}])
    }, 2000)
  },
  
  getInitialState: function(){
    return {
      users: [],
      loaded: false,
    }
  },

  componentDidMount: function(){
    this.fetchUsers(function(users){
      console.log(users);
      this.setState({
        users: users,
        loaded: true
      })
    }.bind(this))
  },

  deleteUser: function(target){
    var users = this.state.users;
    var withoutUser = users.filter(function(user){
      return user.name !== target.name
    });
    this.setState({ users: withoutUser })
  },

  render: function(){
    if(!this.state.loaded){
      return (
        <div>
          <p> Loading.... </p>
        </div>
        )
    };

    var self = this;

    var users = this.state.users.map(function(user){
        return <li onClick={self.deleteUser.bind(this, user)}>{user.name}</li>
    });

    return(
        <div>
          <h3> Look at my users.. </h3>
          <ul>{users}</ul>
        </div>
      )
  }

});

React.render(<App/>, document.getElementById('hello'))