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

function addProduct() {

  var name = prompt("Enter product name:");
  var price = Number(prompt("Enter product price:"));
  var category = prompt("Enter product category:");
  var quantity = Number(prompt("Enter product quantity:"));

  var product = createProduct(name, price, category, quantity);

  if (product !== null) {
    printProducts(products);
  }
}

function createProduct(name, price, category, quantity) {

  name = name.trim();

  if (name === "") {
    showMessage("Please enter a valid name");
    return null;
  }

  if (price <= 0) {
    showMessage("Please enter a valid price");
    return null;
  }

  if (quantity < 0) {
    showMessage("Please enter a valid quantity");
    return null;
  }

  var newId = 1;

  if (products.length > 0) {
    newId = Math.max(...products.map(function(product) {
      return product.id;
    })) + 1;
  }

  var newProduct = {
    id: newId,
    name: name,
    price: price,
    category: category,
    quantity: quantity
  };

  products.push(newProduct);

  return newProduct;
}

// Read all

function showAllProducts() {
  printProducts(getAllProducts());
}

function getAllProducts() {
  return products;
}

function printProducts(list) {

  var output = document.getElementById("output");

  if (list.length === 0) {
    output.innerHTML = "<p>No products found.</p>";
    return;
  }

  output.innerHTML = "";

  output.style.gridTemplateColumns = `repeat(${list.length}, 1fr)`;//This line is added for the adjustment of the boxes display

  list.forEach(function(product) {

    output.innerHTML += `
      <div class="product">
        <h2>${product.name}</h2>
        <p>ID: ${product.id}</p>
        <p>Price: ${product.price}</p>
        <p>Category: ${product.category}</p>
        <p>Quantity: ${product.quantity}</p>
      </div>
    `;

  });
}

function showMessage(message) {

  var output = document.getElementById("output");

  output.innerHTML = `<p>${message}</p>`;
}

// Read one

function showProductById() {

  var id = Number(prompt("Enter product ID:"));

  var product = getProductById(id);

  if (product !== null) {
    printProducts([product]);
  }
}

function getProductById(id) {

  var product = products.find(function(product) {
    return product.id === id;
  });

  if (product === undefined) {
    showMessage("This product does not exist");
    return null;
  }

  return product;
}

// Update

function updateProductFromMenu() {

  var id = Number(prompt("Enter product ID:"));
  var name = prompt("Enter new product name:");
  var price = Number(prompt("Enter new price:"));
  var category = prompt("Enter new category:");
  var quantity = Number(prompt("Enter new quantity:"));

  var product = updateProduct(id, name, price, category, quantity);

  if (product !== null) {
    printProducts(products);
  }
}

function updateProduct(id, name, price, category, quantity) {

  var index = products.findIndex(function(product) {
    return product.id === id;
  });

  if (index === -1) {
    showMessage("This product does not exist");
    return null;
  }

  name = name.trim();

  if (name === "") {
    showMessage("Please enter a valid name");
    return null;
  }

  if (price <= 0) {
    showMessage("Please enter a valid price");
    return null;
  }

  if (quantity < 0) {
    showMessage("Please enter a valid quantity");
    return null;
  }

  products[index].name = name;
  products[index].price = price;
  products[index].category = category;
  products[index].quantity = quantity;

  return products[index];
}

// Delete

function deleteProductFromMenu() {

  var id = Number(prompt("Enter product ID:"));

  var product = deleteProduct(id);

  if (product !== null) {
    printProducts(products);
  }
}

function deleteProduct(id) {

  var index = products.findIndex(function(product) {
    return product.id === id;
  });

  if (index === -1) {
    showMessage("This product does not exist");
    return null;
  }

  var confirmed = confirm("Are you sure you want to delete this product?");

  if (!confirmed) {
    return null;
  }

  var deletedProduct = products.splice(index, 1);

  return deletedProduct[0];
}

// Filter / Search

function searchProducts() {

  var keyword = prompt("Enter product name or category:");

  var result = filterProducts(keyword);

  printProducts(result);
}

function filterProducts(keyword) {

  keyword = keyword.trim().toLowerCase();

  return products.filter(function(product) {
    return product.name.toLowerCase().includes(keyword) ||
           product.category.toLowerCase().includes(keyword);
  });
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
      printProducts(products);
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

  printProducts(products);
}