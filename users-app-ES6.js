//Warning: this has not been tested...

const React = require('react');

const fetchUsers = (cb) => {
  setTimeout(() => {
    cb([{name: 'Ryan'}, {name: 'Marc,'}, {name: 'Bob,'}]);
  }, 500);
};

const App = React.createClass({

  getInitialState () {
    return {
      users: [],
      loaded: false
    }
  },
  componentDidMount () {
    fetchUsers((users => {
      this.setState({ 
        users,
        loaded: true
      });
    })
  },
  deleteUser (target) {
    var users = this.state.users;
    var withoutUser = users.filter(user => user.name !== target.name);
    this.setState({ users: withoutUser });
  }
  render () {
    if (!this.state.loaded)
      return <div>Loading..</div>;
    const users = this.state.users.map((user) => {
      return <li onClick={this.deleteUser.bind(this, user)}>{user.name}</li>
    });
    return (
      <div>
        <h1>Hello</h1>
        <ul>
          {users}
        </ul>
      </div>
      );
  }
});

React.render(<App/>, document.getElementById('hello'));