function power(base, exp){
    if(exp === 0){
        return 1;
    }
    return base * power(base, exp - 1);
}
gs.info(power(2, 3)); // 8