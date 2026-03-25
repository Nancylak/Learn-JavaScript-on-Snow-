//
//  Classes, Objects, and Prototypes
//

var person = Class.create();
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

    type: 'person'
};

var me = new person('Nancy', 'Lakra');
var name = me.getDisplayName();
gs.info(name);
me.setFirstName('Austin');
me.setLastName('Lakra');
gs.info(me.getDisplayName());