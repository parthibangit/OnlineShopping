export class CreateRecords {

  // Define private fields
  #name;
  #price;
  #category;
  #in_stock;

  constructor(name = null, price = null, category = null, inStock = null) {
    this.#name = name;
    this.#price = price;
    this.#category = category;
    this.#in_stock = inStock;
  }

  set name(value) {
    this.#name = value;
  }

  get name() {
    return this.#name;
  }

  set price(value) {
    this.#price = value;
  }

  get price() {
    return this.#price;
  }

  set category(value) {
    this.#category = value;
  }

  get category() {
    return this.#category;
  }

  set inStock(value) {
    this.#in_stock = value;
  }

  get inStock() {
    return this.#in_stock;
  }

  toJson() {
    return {
      data: {
        name: this.#name,
        price: this.#price,
        category: this.#category,
        in_stock: this.#in_stock
      }
    };
  }

}