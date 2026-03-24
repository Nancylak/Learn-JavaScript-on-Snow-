function sumofnum(num){
    if(num == 0){
        return 0;
    }
    return num + sumofnum(num - 1);
}

console.log(sumofnum(5));