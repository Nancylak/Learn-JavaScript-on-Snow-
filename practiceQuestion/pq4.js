// Identify Incident records which have category as Inquiry and change their Priority to Moderate and assign it to ServiceDesk.
var gr_inc = new GlideRecord('incident');
gr_inc.addQuery('category','Inquiry');
gr_inc.query();

while(gr_inc.next()){
	gr_inc.priority.setDisplayValue(3);
	gr_inc.assignment_group.setDisplayValue('ServiceDesk');
	gr_inc.isWorkflow(false);
	gr_inc.update();

	gs.info(gr_inc.number + ' ' + gr_inc.priority.getDisplayValue() + ' ' +  gr_inc.assignment_group.getDisplayValue());
}