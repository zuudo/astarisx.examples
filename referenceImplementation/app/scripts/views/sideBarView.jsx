/** 
 * @jsx React.DOM 
 */
/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */

'use strict';

var SideBarView = React.createClass({
	mixins: [Astarisx.mixin.view],
  addPerson: function(value){
		this.state.appContext.persons.addPerson(value);
	},
	render: function(){
		console.log('SideBar View rendered');
		return (
			<div>
				<AddControl placeholder="Full Name" funcAdd={this.addPerson} />
				<ListView personsCxt={this.state.appContext.persons} />
			</div>
		);		
	}		
});