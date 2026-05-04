
//Active or InProgress inicident with slas
var incGR = new GlideRecord('incident');

// Query: Active + In Progress
incGR.addQuery('active', true);
incGR.addQuery('state', 2); // 2 = In Progress
incGR.query();

while (incGR.next()) {

    gs.info("Checking Incident: " + incGR.number);

    // Check SLA for this incident
    var slaGR = new GlideRecord('task_sla');
    slaGR.addQuery('task', incGR.sys_id);
    slaGR.query();

    while (slaGR.next()) {

        gs.info("SLA Name: " + slaGR.sla.name);
        gs.info("SLA Stage: " + slaGR.stage);

        // Example condition: SLA Breached
        if (slaGR.stage == 'breached') {

            gs.info("SLA Breached for Incident: " + incGR.number);

            // Example action: Add work note
            incGR.work_notes = "SLA has been breached. Please take action.";
            incGR.update();
        }
    }
}