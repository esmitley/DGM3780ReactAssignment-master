var $ = require('jquery');
var holder = require('holderjs');
global.jQuery = global.$ = $;

var bootstrap = require('bootstrap');

var React = require('react');
var ReactDOM = require('react-dom');

///////////////////////////////////////////////////////////////
///      Edit below. All JS you need is included above.     ///
///////////////////////////////////////////////////////////////

var HeadingCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.item}</th></tr>);
  }
});

var ItemsRow = React.createClass({
  render: function() {
    var name = this.props.item
        this.props.item.name :
     return (
      <tr>
        <td>{name}</td>
      </tr>
    );
  }
});
var ItemsTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.items.forEach(function(item) {
         if (item.category !== lastCategory) {
     rows.push(<ItemRow item={item} key={item.name} />);
      lastCategory = item.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
        
           </table>
    );
  }
});

var InputBar = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Item to do..." />
        <p>
          <input type="checkbox" />
          {' '}
        
           </p>
      </form>
    );
  }
});
        
FilterableListTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ToDoTable items={this.props.items} />
      </div>
    );
  }
});


var ITEMS = [
  {category: 'Urgent', name: '1'},
  {category: 'Regular', name: '2'},
  {category: 'Long', name: '3'},   
    

];
 
ReactDOM.render(
  <FilterableListTable items={Items} />,
  document.getElementById('content')
);    
   