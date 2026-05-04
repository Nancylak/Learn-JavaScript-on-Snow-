var pr_gr = new GlideRecord('problem');
pr_gr.addJoinQuery('incident', 'opened_by', 'caller_id');
pr_gr.query();
while(pr_gr.next()){
	gs.print(pr_gr.number);
}