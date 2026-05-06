// Print only latest 10 records created in the incident table

var gr_inc = new GlideRecord('incident');
gr_inc.orderByDesc('sys_created_on');
gr_inc.setLimit(10);
gr_inc.query();
while(gr_inc.next()){
	gs.info(gr_inc.number);
}