// Develop a GlideRecord query to find all changes scheduled for this week. (You may have to create some change requests to run the script)

var gr_change = new GlideRecord('change_request');

gr_change.addQuery('start_date', '>=', gs.beginningOfThisWeek());
gr_change.addQuery('start_date', '<=', gs.endOfThisWeek());
gr_change.query();

gs.info(gr_change.getRowCount());