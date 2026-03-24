function printnum(num){
	if(num === 0){
		return 0;
	}
	printnum(num - 1);
	gs.info(num);
}
gs.info(printnum(3));