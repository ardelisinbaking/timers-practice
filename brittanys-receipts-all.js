const province = {
    bc: {
      tax: 12,
      location: "BC",
    },
    qc: {
      tax: 14.975,
      location: "Quebec",
    },
    on: {
      tax: 13,
      location: "Ontario",
    },
  };
  
  const logger = function (actualTax, total, price, province) {
    console.log(`
    Price: $${price}
    Province: ${province}
    Brittany's Interprovincial Receipt
    Tax: $${actualTax.toFixed(2)}
    Total: $${total.toFixed(2)}
    `);
  };
  const taxCalculator = function (price, province) {
    let actualTax = price * (province.tax / 100);
    let total = price + actualTax;
    return {
      actualTax,
      total,
      price,
      province,
    };
  };
  
  const result = taxCalculator(42.98, province["bc"]);
  logger(result.actualTax, result.total, result.price, result.province.location);
  
  /*notes:
  using function only to return, not log
  access properties using strings
  
  /*
  const province = {
    bc: {
      tax: 12,
      location: "BC",
    },
    quebec: {
      tax: 14.975,
      location: "Quebec",
    },
    ontario: {
      tax: 13,
      location: "Ontario",
    },
  };
  const taxCalculator = function (price, province) {
    let actualTax = price * (province.tax / 100);
    let total = price + actualTax;
    console.log(`
    Brittany's Interprovincial Receipt
    Price: $${price}
    Province: ${province.location}
    Tax %: ${province.tax}%
    Tax: $${actualTax.toFixed(2)}
    Total: $${total.toFixed(2)}
    `);
  };
  taxCalculator(42.98, province.quebec);
  
  /*
  const province = {
    bc: 12,
    quebec: 14.975,
    ontario: 13,
    provinceIndicator: (bc, quebec, ontario) {
      this.bc = bc;
      this.quebec = quebec;
      this.ontario = ontario;
    },
  };
  
  /*notes:
  wet = write everything twice
  dry = dont repeat yourself
  
  1. use helper function ie use a "logger" funciton
  2. naming convention, use verbs for function names, not object names
  3. use variables instead of just numbers ie use a variable for every tax rate, also makes more readable
  4. prefer solutions with fewer "if"s to reduce time complexity
  */
  
  /*
  const brittanysPanties = (price) => {
    let percentage = 12;
    let tax = price * (percentage / 100);
    let total = price + tax;
    console.log(`
    Brittany's Receipt (CAD)
    price: $${price}
    percentage: ${percentage}%
    tax: $${tax.toFixed(2)}
    total: $${total.toFixed(2)}
    `);
  };
  brittanysPanties(33.99);
  
  const brittanysInterprovincialPanties = function (price, province) {
    if (province == "BC") {
      var percentage = 12;
      let tax = price * (percentage / 100);
      let total = price + tax;
      console.log(`
      Brittany's BC Panties Receipt
      Price: $: ${price}
      Province: : ${province}
      Tax %: : ${percentage}%
      Tax: : $${tax.toFixed(2)}
      Total: : ${total.toFixed(2)}
      `);
    } else if (province == "Quebec") {
      var percentage = 14.975;
      let tax = price * (percentage / 100);
      let total = price + tax;
      console.log(`
      Brittany's Quebec Panties Receipt
      Price: $: ${price}
      Province: : ${province}
      Tax %: : ${percentage}%
      Tax: : $${tax.toFixed(2)}
      Total: : ${total.toFixed(2)}
      `);
    } else if (province == "Ontario") {
      var percentage = 13;
      let tax = price * (percentage / 100);
      let total = price + tax;
      console.log(`
      Brittany's Ontario Panties Receipt
      Price: $: ${price}
      Province: : ${province}
      Tax %: : ${percentage}%
      Tax: : $${tax.toFixed(2)}
      Total: : ${total.toFixed(2)}
      `);
    } else {
      console.error("Brittany does not shop there.");
    }
  };
  
  brittanysInterprovincialPanties(32.99, "BC");
  brittanysInterprovincialPanties(32.99, "Quebec");
  brittanysInterprovincialPanties(32.99, "Ontario");
  brittanysInterprovincialPanties(32.99, "Alberta");
  
  /*
  const brittanysInterprovincialPanties = (price, province) => {
    if (province === "BC") {
      var percentage = 12;
    }
    if (province === "Quebec") {
      var percentage = 14.975;
    }
    if (province === "Ontario") {
      var percentage = 13;
    }
    let tax = price * (percentage / 100);
    let total = price + tax;
    console.log(`
    Brittany's Interprovincial Panties Receipt
    Price: $: ${price}
    Province: : ${province}
    Tax %: : ${percentage}%
    Tax: : $${tax}
    Total: : ${total.toFixed(2)}
    `);
  };*/