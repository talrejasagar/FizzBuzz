function buzz(x)
{ 
for(var i=1;i<=x;i++)
{ 
if(i%3==0&&i%5==0)
  {
  console.log( "fizz buzz"); 
  } 
  else if(i%5==0)
  { 
   console.log("buzz"); 
  } 
  else if(i%3==0)
  { 
  console.log( "fizz");
  }
  else 
  console.log(i);
  } 
  }
  buzz(30);
