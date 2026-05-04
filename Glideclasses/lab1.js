var gr_inc = new GlideRecord('incident');
gr_inc.addQuery('active', true);
gr_inc.addQuery('priority', 1);

gr_inc.query();

while(gr_inc.next()){
	gs.info(gr_inc.number);
}