//Develop a script to close all open incidents for a user when that user’s record is deactivated

var userGR = new GlideRecord('sys_user');
userGR.addQuery('active', false);
userGR.query();
 
while (userGR.next()) {
 
    var incGR = new GlideRecordSecure('incident');
    incGR.addQuery('assigned_to', userGR.getUniqueValue());
    incGR.addQuery('active', true);
    incGR.query();
 
    while (incGR.next()) {
 
        gs.info('Closing: ' + incGR.number);
        incGR.setValue('incident_state', 7);
        incGR.setValue('close_code', 'Solved (Permanently)');
        incGR.setValue('close_notes', 'Inactive assigned user');
        incGR.update();
    }
}