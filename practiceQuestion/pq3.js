

//Check if the current record is a new record that
// has not yet been inserted into the database.

var gr_inc = new GlideRecord('incident');
gr_inc.initialize();
gr_inc.short_description = "Error problem";
var checkinc = gr_inc.insert();
if(checkinc){
	gs.info("the new incident is inserted.");
}else{
	gs.info("Cannot find the incident.");
}