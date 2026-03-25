//
//  Classes, Objects, and Prototypes
//

var person = Class.create(); /*This line creates a new class called person

Class.create() is ServiceNow’s way of defining classes (from Prototype.js)*/
person.prototype = {
    initialize: function() {
      this.firstName = '';
      this.lastName  = '';
    },

    setFirstName : function(str) {
      this.firstName = str;
    },

    setLastName : function(str) {
      this.lastName = str;
    },

    getDisplayName : function() {
      return this.firstName + ' ' + this.lastName;
    },

    type: person
};

var me = new person();
me.setFirstName('Nancy');
me.setLastName('Lakra')

var name = me.getDisplayName();
gs.info(name);