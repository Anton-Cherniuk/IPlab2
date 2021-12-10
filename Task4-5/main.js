function toCamelCase(str){
  let tmpstr = str.split("_");
  let newstr = ""

  tmpstr.forEach(element => {
    newstr += element[0].toUpperCase() + element.slice(1); 
  });

  return newstr;
}

function toSnakeCase(str){
  //let tmpstr = str.match(/([A-Z]?[^A-Z]+)/g).join("_");
  //let tmpstr = str.replace(/([A-Z])/g, "_$1").toLowerCase();
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}

//alert(toCamelCase("new_brand_product"));

alert(toSnakeCase("MyVariableTest"));