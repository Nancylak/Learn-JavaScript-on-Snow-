// first method

// var gr_inc = new GlideRecord('incident');
// gr_inc.initialize();
// gr_inc.short_description = "Email Issue.";
// gr_inc.insert();
// gs.info(gr_inc.number);
// gs.info(gr_inc.short_description);

// second method
var gr_inc1 = new GlideRecord('incident');
gr_inc1.newRecord();
gr_inc1.short_description = 'Email not working';
gr_inc1.description = 'User cannot access email';
gr_inc1.priority = 2;
gr_inc1.urgency = 1;
gr_inc1.insert();
gs.info(gr_inc1.number);
gs.info(gr_inc1.short_description);
gs.info(gr_inc1.impact);