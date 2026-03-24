function countDigits(num){
    if(num === 0){
        return 0;
    }
    return 1 + countDigits(Math.floor(num / 10));
}

gs.info(countDigits(12345)); // 5