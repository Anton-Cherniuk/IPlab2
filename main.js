function func2_1(){
  console.log("Завдання 2.1");

  let a = 2;
  let b = 3;
  let c, d;

  c = ++a;
  d = b++;
  c = (2+ ++a);
  d = (2+ b++);

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

function func2_2(){
  console.log("Завдання 2.2");

  let a = 5;
  let x = a *= (a *= 2);
  console.log(x)
}

function func2_3(){
  console.log("Завдання 2.3");

  console.log(console.log('Hello, world'));
  console.log(null || undefined);
  console.log(null || 2 || undefined);
  console.log(1 && null && 2);
  console.log(1 && console.log('Hello'));
}

function func2_4(){
  console.log("Завдання 2.4");

  //Розібрати на занятті
  console.log("" + 1 + 0);
  console.log("" - 1 + 0);
  console.log(true + false);
  console.log(6 / "3");
  console.log("2" * "3");
  console.log(4 + 5 + "px");
  console.log("$" + 4 + 5);
  console.log("4" - 2);
  console.log("4px" - 2);
  console.log(7 / 0);
  console.log(" -9\n" + 5);
  console.log(" -9\n" - 5);
  console.log(5 && 2);
  console.log(2 && 5);
  console.log(5 || 0);
  console.log(0 || 5);
  console.log(null + 1);
  console.log(undefined + 1);
  console.log(null == "\n0\n");
  console.log(+null == +"\n0\n");

  //Для самостійного розбору
  console.log("5" + "1");
  console.log("5" + 1);
  console.log(5 + 1);
  console.log("5" + true);
  console.log(1 / 0);
  console.log(-5 / 0);
  console.log(1 / Infinity);
  console.log(Infinity - Infinity);
  console.log(Infinity + 10);
  console.log(Infinity + Infinity);
  console.log(Infinity + "3");
  console.log(undefined + 5);
  console.log(parseInt("10"));
  console.log(parseInt("10.3"));
  console.log(parseInt(10.3));
  console.log(parseInt("34 38 23"));
  console.log(parseInt(" 60 "));
  console.log(parseInt("x10"));
  console.log(parseInt("0x10"));
  console.log(parseInt("010"));

  console.log(parseInt("24", 8));
  console.log(parseInt("FF", 16));
  console.log(parseFloat("0xFF"));
  console.log(false && 0);
  console.log(0 && false);
  console.log(!0);
  console.log(!5);
  console.log(1 && 0);
  console.log(1 && false);
  console.log(1 || 5);
  console.log(0 || 5);
  console.log(5 + 4 + "!");
  console.log(!null);
  console.log(!!null);
  console.log(!!5);
  console.log(null == 0);
  console.log(null === 0);
  console.log(null > -5);
  console.log(undefined > 5);
  console.log(undefined > 5 != true);
  console.log(a = null + 5);
}


func2_1()
func2_2()
func2_3()
func2_4()