const multiplicationTables = () => {
  let multiplicant = document.getElementById("multiplicant").value;
  let iterant = document.getElementById("iterant").value;
  let result = "";

  for (let i = 1; i <= iterant; i++) {
    const product = multiplicant * i;
    console.log(product);
    result += `${multiplicant} * ${i} = ${product} <br>`;
    document.getElementById("product").innerHTML = result;
  }
};
