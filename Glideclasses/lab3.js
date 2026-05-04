 var grUser = new GlideRecord('sys_user');
grUser.addActiveQuery();
var joinq = grUser.addJoinQuery('incident','sys_id', 'assigned_to');
joinq.addCondition('state','!=','7');
grUser.query();
while(grUser.next()){
	gs.info('User with incident assigned ' + grUser.name);
}