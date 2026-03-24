function factorial(num){
	if(num < 0){
		return ;
	}

	if(num === 0){
		return 1;
	}
	return num * factorial(num-1);
}

gs.info(factorial(-4)); // undefined