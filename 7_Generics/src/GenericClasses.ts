// A generic type is a type, which is connected with some other types & flexible to other type

class Storages<T extends string | number | boolean> {

  private data: T[] = [];

  addItem(data: T) {
    this.data.push(data);
  }

  removeItem(data: T){
    this.data.splice(this.data.indexOf(data), 1);
  }

  getItems(){
    return [...this.data];
  }

}

// CASE-1
const numberStorage = new Storages<string>();
numberStorage.addItem('React');
numberStorage.addItem('Flutter');
numberStorage.addItem('MongoDB');
numberStorage.removeItem('React');
console.log(numberStorage.getItems());

// CASE-2 : Only EXPRESS will be printed
/**
 * in case of object JS pass reference, 
 * ALLocates different memory
 * so its unable to find {lang: 'Express'}
 * That is why
 * this.data.indexOf(data) returns -1
 * that reverses the JS array and 
 * Removes the Last item
 * 
 * 
 * SOLUTION:
 * use union type, specify allowed type(object can't be assigned)
 * OR, use if else while removing
 * 
 */

// const objectStorage = new Storages<object>(); // Object is not allowed
// const a = {lang: 'Express'};
// const b = {lang: 'Node'};
// objectStorage.addItem(a);
// objectStorage.addItem(b);
// objectStorage.removeItem({lang: 'Express'});
// console.log(objectStorage.getItems());

























