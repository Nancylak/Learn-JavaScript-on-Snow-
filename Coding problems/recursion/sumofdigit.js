function sumDigits(num){
    if(num === 0){
        return 0;
    }
    return (num % 10) + sumDigits(Math.floor(num / 10));
}
gs.info(sumDigits(123)); // 6