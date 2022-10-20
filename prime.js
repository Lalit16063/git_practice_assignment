let num=8;

let count=0;
for(let i=1;i<=8;i++){
  if(num%i==0){
    count++;
  }
}
if(count==2){
  console.log(num,"prime");
}
else{
  console.log(num,"Not a prime");
}