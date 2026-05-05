var gr_pr = new GlideRecord('problem');
gr_pr.addJoinQuery('incident');
gr_pr.query();
while(gr_pr.next()){
	gs.info(gr_pr.number);
}