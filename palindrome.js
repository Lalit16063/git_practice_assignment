let str="aba";
let rev="";
for(let i=0;i<=str.length-1;i++){
  rev+=str[i];
}
if(str==rev){
  console.log("Palindrome");
}
else{
  console.log("Not Palimndrome");
}