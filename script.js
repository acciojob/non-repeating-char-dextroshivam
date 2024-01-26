function firstNonRepeatedChar(str) {
 // Write your code here
	let arr={};
    for(let i=0;i<str.length;i++){
        if(arr[str[i]]==undefined){
            arr[str[i]]=1;
        }else{
            arr[str[i]]+=1;
        }
    }
    console.log(arr);
    for(let i=0;i<str.length;i++){
        if(arr[str[i]]==1) return str[i];
    }
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
