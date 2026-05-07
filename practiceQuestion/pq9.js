// Create a script to delete all records which are closed and older than 3 years

var gr_inc = new GlideRecord('incident');

gr_inc.addQuery('state', 7);
gr_inc.addQuery('sys_created_on', '>', gs.yearsAgo(3));
gr_inc.query();
gr_inc.autoSysFields(false);
gr_inc.setWorkflow(false);
gr_inc.deleteMultiple();