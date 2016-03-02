var FilterableProductTable = React.createClass({
  render: function(){
    return (
      <div>
        <h3> FilterableProductTable </h3>
        <SearchBar/>
        <ProductTable/>
      </div>
      )
  }
})

React.render(<FilterableProductTable/>, document.getElementById('app'))