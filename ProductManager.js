class ProductManager {
    constructor() {
      this.products = [];
      this.nextProductId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      if (this.products.some(product => product.code === code)) {
        console.error("El código del producto ya existe.");
        return;
      }
  
      const newProduct = {
        id: this.nextProductId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      console.log("Producto agregado:", newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (product) {
        console.log("Producto encontrado:", product);
      } else {
        console.error("Producto no encontrado.");
      }
  
      return product;
    }
  }
  
  // TEST 
const productManager = new ProductManager();

// 1. Se llama a getProducts recién creada la instancia, debe devolver un arreglo vacío []
console.log("Productos al inicio:", productManager.getProducts());

// 2. Se llama al método addProduct con nuevos campos
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// 3. Se llama a getProducts nuevamente, esta vez debe aparecer el producto recién agregado
console.log("Productos después de agregar uno:", productManager.getProducts());

// 4. Se intenta agregar un producto con el mismo código, debe arrojar un error
productManager.addProduct("producto repetido", "Este producto debería causar un error", 150, "Imagen repetida", "abc123", 10);

// 5. Se evalúa que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
const productIdToFind = 1;
productManager.getProductById(productIdToFind);

const nonExistentProductId = 999;
productManager.getProductById(nonExistentProductId);
  