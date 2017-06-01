var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",      //[0]
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",   //[1]
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",  //[2]
    sales: [ 500, 100 ]
  }
];


/*
Telus: {
  totalSales: 100,
}

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}

*/
function calculateSales1(salesData, taxRates) {

  var output = {};
  var item;
  for (var i = 0; i < salesData.length; i++) {
   item = companySalesData[i];
   var companySales = item.sales;
   var totalSales = 0;


  //Calculate the total sales of the company
   for (var x = 0; x < companySales.length; x ++) {

      totalSales = totalSales + companySales[x];
   }

   var taxRate = getTaxRate(item.province);
   var taxes = totalSales * taxRate;

  if(output[item.name]){
    output[item.name].totalSales += totalSales;
    output[item.name].totalTaxes += taxes;
  }
  else{
    output[item.name] = {
      totalSales : totalSales,
      totalTaxes : taxes
    }
  }
   //get the sales tax rate for that company based on province

   // output[item.name].totalTaxes = totalSales * (taxRate);

  }
  console.log(output);

}
calculateSales1(companySalesData);

function getTaxRate(province){
  return salesTaxRates[province];
}



// function calculateSales(salesData, taxRates) {
//   var output = {};
//   for (var i = 0; i < salesData.length; i++) {
//       var company = salesData[i];
//       if (output[company.name] === undefined) {
//         output[company.name] = {
//           totalSales: 0,
//           totalTaxes: 0
//         }
//       }
//       output[company.name].totalSales += sum(company.sales);
//     }
//     console.log(output);
//     for(var t in output){
//       var taxRate = getTaxRate(t);
//       output[t].totalTaxes = output[t].totalSales * (taxRate);
//       //console.log(taxRate);
//       //console.log(output[t]);
//     }
//     console.log(output);


//     //return output;
// }

// //Function to calculate total sales of the company
// function sum (arr) {
//   var add = 0;
//   for (var i = 0; i < arr.length; i++) {
//     add += arr[i];
//   }
//   return add;

// }

// function getTaxRate(companyName){
//   for(var x = 0; x < companySalesData.length; x++){
//     if(companySalesData[x].name===companyName){
//       var province = companySalesData[x].province;
//       return salesTaxRates[province];
//     }
//   }

// }
// //console.log(calculateSales(companySalesData,salesTaxRates));

// function calculateSalesTax(companySalesData, salesTaxRates) {
//   for (var i = 0; i < companySalesData.length; i++) {
//     var companyProvince = companySalesData[i].province;
//     var salesTaxRate = getTaxRate(companyProvince);
//   }
//   output[taxes.name].totalTaxes += sum(company.taxes)
// }




// var salesDataTelus1 = companySalesData[0].sales;
// var salesDataTelus2 = companySalesData[2].sales;
// var salesDataBomb = companySalesData[1].sales;


// for (var i = 0; i < companySalesData.length; i++) {
//   var eachSale = companySalesData[i].sales;
//   console.log(companySalesData[i].sales);
//   if (companySalesData[i].name === 'Telus'){
//     return eachSale;
//   } else {

//   }
//   return result;
// }

//console.log(sum(result));


function getItems(companySalesData){
  for (var i = 0; i < companySalesData.length; i++) {
    var item = companySalesData[i];
     console.log(item);
  }
}

function getProvinceNames(companySalesData){
  for (var i = 0; i < companySalesData.length; i++) {
    var item = companySalesData[i];
    console.log(getTaxRate(item.province));
  }
}

//getItems(companySalesData);
// getProvinceNames(companySalesData);
// var result = calculateSalesTax(companySalesData, salesTaxRates);

// console.log(result);



// Expected Results:
// {
//   Telus: {
//     totalSales: 1300
//     totalTaxes: 144
//   },
//   Bombardier: {
//     totalSales: 800,
//     totalTaxes: 40
//   }
// }
