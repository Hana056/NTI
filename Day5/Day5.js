
var products = [
  {
    id: 1,
    name: "Laptop",
    price: 18500,
    category: "Electronics",
    quantity: 4
  },
  {
    id: 2,
    name: "Mouse",
    price: 180,
    category: "Electronics",
    quantity: 25
  },
  {
    id: 3,
    name: "Notebook",
    price: 35,
    category: "Stationery",
    quantity: 100
  },
  {
    id: 4,
    name: "Desk Lamp",
    price: 420,
    category: "Home",
    quantity: 0
  }
];

// Create

function createProduct(name, price, category, quantity) {

  name = name.trim();

  if (name === "") {
    console.log("Please enter a valid name");
    return;
  }

  if (price <= 0) {
    console.log("Please enter a valid price");
    return;
  }

  if (quantity < 0) {
    console.log("Please enter a valid quantity");
    return;
  }

  var newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
    category: category,
    quantity: quantity
  };

  products.push(newProduct);

  return newProduct;
}

// Read all

function getAllProducts() {
  return products;
}

function printProducts(list) {
  console.table(list);
}

// Read one

function getProductById(id) {

  var product = products.find(function(product) {
    return product.id === id;
  });

  if (product === undefined) {
    console.log("This product does not exist");
    return null;
  }

  return product;
}

// Update

function updateProduct(id, name, price, category, quantity) {

  var index = products.findIndex(function(product) {
    return product.id === id;
  });

  if (index === -1) {
    console.log("This product does not exist");
    return null;
  }

  name = name.trim();

  if (name === "") {
    console.log("Please enter a valid name");
    return null;
  }

  if (price <= 0) {
    console.log("Please enter a valid price");
    return null;
  }

  if (quantity < 0) {
    console.log("Please enter a valid quantity");
    return null;
  }

  products[index].name = name;
  products[index].price = price;
  products[index].category = category;
  products[index].quantity = quantity;

  return products[index];
}

// Delete

function deleteProduct(id) {

  var index = products.findIndex(function(product) {
    return product.id === id;
  });

  if (index === -1) {
    console.log("This product does not exist");
    return null;
  }

  var confirmed = confirm("Are you sure you want to delete this product?");

  if (!confirmed) {
    console.log("Delete cancelled");
    return null;
  }

  var deletedProduct = products.splice(index, 1);

  return deletedProduct[0];
}

// Filter / Search

function filterProducts(keyword) {

  keyword = keyword.trim().toLowerCase();

  return products.filter(function(product) {
    return product.name.toLowerCase().includes(keyword) ||
           product.category.toLowerCase().includes(keyword);
  });
}

// Interactive Menu

function startApp() {

  var choice;

  while (choice !== "0") {

    choice = prompt(
      "===== NTI Mini Store =====\n" +
      "1) Add product\n" +
      "2) Show all products\n" +
      "3) Show product by ID\n" +
      "4) Update product\n" +
      "5) Delete product\n" +
      "6) Search / Filter\n" +
      "0) Exit"
    );

    switch (choice) {

      case "1":
        var name = prompt("Enter product name:");
        var price = Number(prompt("Enter product price:"));
        var category = prompt("Enter product category:");
        var quantity = Number(prompt("Enter product quantity:"));

        createProduct(name, price, category, quantity);
        break;

      case "2":
        printProducts(getAllProducts());
        break;

      case "3":
        var productId = Number(prompt("Enter product ID:"));
        var product = getProductById(productId);

        if (product !== null) {
          console.table([product]);
        }
        break;

      case "4":
        var updateId = Number(prompt("Enter product ID:"));
        var updateName = prompt("Enter new product name:");
        var updatePrice = Number(prompt("Enter new price:"));
        var updateCategory = prompt("Enter new category:");
        var updateQuantity = Number(prompt("Enter new quantity:"));

        updateProduct(
          updateId,
          updateName,
          updatePrice,
          updateCategory,
          updateQuantity
        );
        break;

      case "5":
        var deleteId = Number(prompt("Enter product ID:"));
        deleteProduct(deleteId);
        break;

      case "6":
        var keyword = prompt("Enter name or category:");
        printProducts(filterProducts(keyword));
        break;

      case "0":
        console.log("Goodbye!");
        break;

      default:
        console.log("Invalid choice");
    }
  }
}

// B1

function hasDuplicateName(name) {

  name = name.trim().toLowerCase();

  return products.some(function(product) {
    return product.name.trim().toLowerCase() === name;
  });
}

// B2

function sortByPrice(order = "asc") {

  if (order === "desc") {
    return products.toSorted(function(a, b) {
      return b.price - a.price;
    });
  }

  return products.toSorted(function(a, b) {
    return a.price - b.price;
  });
}

// B3

function getStoreStats() {

  return products.reduce(function(stats, product) {

    stats.productCount += 1;
    stats.totalStockValue += product.price * product.quantity;

    if (product.quantity === 0) {
      stats.outOfStock += 1;
    }

    return stats;

  }, {
    productCount: 0,
    totalStockValue: 0,
    outOfStock: 0
  });
}

// B4

function groupByCategory() {

  return products.reduce(function(result, product) {

    if (!result[product.category]) {
      result[product.category] = [];
    }

    result[product.category].push(product);

    return result;

  }, {});
}

// B5

function filterByPriceRange(min = 0, max = Infinity) {

  return products.filter(function(product) {
    return product.price >= min && product.price <= max;
  });
}

// B6

const inStock = (list) => {
  return list.filter(product => product.quantity > 0);
};

function withAfterAction(fn, callback) {

  var result = fn();

  callback(result);

  return result;
}

// B7

var store = (function() {

  return {

    showProducts: function() {
      console.table(products);
    },

    totalValue: function() {
      return products.reduce(function(total, product) {
        return total + product.price * product.quantity;
      }, 0);
    },

    countProducts: function() {
      return products.length;
    }

  };

})();

// B8

function addMany(...items) {

  items.forEach(function(item) {
    createProduct(
      item.name,
      item.price,
      item.category,
      item.quantity
    );
  });
}

startApp();//For starting the program