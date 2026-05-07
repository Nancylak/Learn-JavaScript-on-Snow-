// Write a GlideRecord query to find all incidents related 
// to a specific CI. (You can choose the CI)

var gr_inc = new GlideRecord('incident');
gr_inc.addQuery('cmdb_ci.name', 'eFax' );
gr_inc.query();
while(gr_inc.next()){
	gs.info(gr_inc.number);	
}