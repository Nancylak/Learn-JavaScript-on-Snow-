//Develop a GlideRecord query to find all open incidents assigned to a specific group – Network.

var gr_inc = new GlideRecord('incident');

gr_inc.addQuery('assignment_group.name', 'Network');
gr_inc.addActiveQuery(); 
gr_inc.query();

while(gr_inc.next()){
	gs.info(gr_inc.number);
}