/*A function named listRecord is created.
It takes 2 parameters:
tablename → which table to fetch data from (e.g., incident)
limit → how many records you want */

function listRecord(tablename, limit){
	var answer = [];


	var recgr = new GlideRecord(tablename);
	if(limit && limit > 0){
		recgr.setLimit(limit);
	}
	recgr.query();

	while(recgr.next()){
		var obj = {}; // creating empty object and For each record, a new empty object is created.
		obj.display_value = recgr.getDisplayValue(); //Gets the display value of the record.
		obj.sys_id = recgr.getUniqueValue(); //Gets the sys_id (unique ID of record in ServiceNow).
		answer.push(obj); //Adds the object into the answer array.
	}
	return answer; //Returns the full array of records.
} 

var list = listRecord('incident', 10);
gs.info(JSON.stringify(list, null, 1)); // converts object into readable string

/* final Explaination about this program:
Takes a table name and limit
Fetches records using GlideRecord
Extracts:
display value
sys_id
Stores them in an array
Returns and prints the result
*/