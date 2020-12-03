// // This are the ways how Decorators accepts value as per the use case

// // Property Decorator
// function Log(target: any, propertyName: string) {
//   console.log('Property Decorator');
//   console.log(target, propertyName);
// }

// // Accessor Decorator
// function Log1(target: any, name: string,  propertyName: PropertyDescriptor) {
//   console.log('Accessor Decorator');
//   console.log(target,name, propertyName);
// }

// // Method Decorator (Method and accessors are treated same)
// function Log2(target: any, name: string,  propertyName: PropertyDescriptor) {
//   console.log('Method Decorator');
//   console.log(target,name, propertyName);
// }

// // Parameter Decorator (Method and accessors are treated same)
// function Log3(target: any, name: string,  position: number) {
//   console.log('Parameter Decorator');
//   console.log(target,name, position);
// }

// class Product {

//     @Log
//     name: string;
//     price: number;

//      constructor(prz: number, nm: string){
//        this.price = prz;
//        this.name = nm;
//      }
    
//      @Log1
//      set setPrize(val: number) {
//        if(val > 0)
//         this.price = val;
//      }

//      @Log2
//      getTaxedPrize(tax: number) {
//        return this.price * (2 * tax);
//      }

//       @Log2
//       getGSTPrize(@Log3 tax: number,@Log3 gst: number) {
//         return this.price * (2 * tax + gst);
//       }
// }