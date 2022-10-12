var full = ' # # # # ';
for (var i = 0; i < 8; i++)
   console.log(full.substr(i%3))


console.log('\n\n');


for (let i = 1; i <= 100;  i++) { 
  if(i%3==0)
  console.log("Wise Mystical Tree")
  else
  console.log(i)
}

console.log('\n\n');

// st - string;  num - number;  boo - boolean

  var a = "" + 1 + 0;
  console.log(a);

  var num1 = "" - 1 + 0;
  console.log(num1);

  var num2 = true + false;
  console.log(num2);

  var num3 = 6 / "3";
  console.log(num3);

  var num4 = "2"*"3";
  console.log(num4);

  var st2 = 4 + 5 + "px";
  console.log(st2);

  var st3 = "$ + 4 + 5";
  console.log(st3);

  var num5 = "4" - 2;
  console.log(num5);

  var num6 = "4px" - 2;
  console.log(num6);

  var num7 = 7 / 0;
  console.log(num7);

  var st4 = "-9\n" + 5;
  console.log(st4);

  var num8 = "-9\n" - 5;
  console.log(num8);

  var num9 = 5 && 2;
  console.log(num9);

  var num10 = 2 && 5;
  console.log(num10);

  var num11 = 5||0;
  console.log(num11);

  var num12 = 0||5;
  console.log(num12);

  var num13 = null + 1 ;
  console.log(num13);

  var num14 = undefined + 1;
  console.log(num14);

  var boo1 = null == "\n0\n";
  console.log(boo1);

  var boo2 = null == +"\n0\n";
  console.log(boo2 );

