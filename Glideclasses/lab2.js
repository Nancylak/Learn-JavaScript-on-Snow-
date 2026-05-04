gr_inc.addActiveQuery();
gr_inc.addEncodedQuery('active=true^priority=1^category=software');
gr_inc.orderBy('short_description');
gr_inc.setLimit(5);
gr_inc.query();

while(gr_inc.next()){
	gs.info(gr_inc.number + ' ' + gr_inc.category + ' ' + gr_inc.priority.getDisplayValue() + gr_inc.short_description);
}