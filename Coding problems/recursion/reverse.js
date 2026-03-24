// function reverse(num, rev){
// 	rev = rev || 0;

// 	if(num === 0){
// 		return rev;
// 	}
	
// 	return reverse(Math.floor(num/10), rev *10 + (num%10));
// }


// var result = reverse(1234);
// gs.info("Reversed Number: " + result);


function reverse(str){
    if(str === ""){
        return "";
    }
    return reverse(str.slice(1)) + str[0];
}

gs.info(reverse("palindrome")); 
