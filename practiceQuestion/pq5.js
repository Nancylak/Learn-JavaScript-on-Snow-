//Find the total number of Network related incidents

var gr_inc = new GlideRecord('incident');
gr_inc.addQuery('category','Network');
gr_inc.query();

gs.info(gr_inc.getRowCount()); // there is five incident of category network.