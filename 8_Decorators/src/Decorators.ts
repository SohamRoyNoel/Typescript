// // General Decorator
// // function CatLogging(c: Function){
//   // console.log("Logging.....");
//   // console.log("Const : " + c);
// // }
// // 
// // @CatLogging
// // class Decorators {
//   // name: string = 'Max';
// // 
//   // constructor() {
//     // console.log("Constructor.........");
//     // 
//   // }
// // }
// // 
// // const cat = new Decorators();
// // console.log(cat);

// // Decorator Factory: a function that returns a decorator function
// function CatFactory(logText: string) {
//   return function CatLogging(c: Function){
//   console.log("Logging..... " + logText);
//   console.log("Const : " + c);
// }
// }

// @CatFactory('Logging Decorator1')
// class Decorators {
//   name: string = 'Max';

//   constructor() {
//     console.log("Constructor.........");
    
//   }
// }

// const cat = new Decorators();
// console.log(cat);

// // Targeting HTML
// function HTMLFactory(htmlTag: string, identifier: string) {
//   return function CatLogging(c: any){
//     const idntfr = document.getElementById(identifier)!;
//     const p = new c();
//     if(identifier){
//       idntfr.innerHTML = htmlTag;
//       idntfr.querySelector('h1')!.textContent = p.name;
//     }
    
//   }
// }

// @HTMLFactory('<h1>Shit in the sky</h1>', 'app')
// class HtmlDecorators {
//   name: string = 'Soham';

//   constructor() {
//     console.log("Constructor.........");
    
//   }
// }

// const htmlcat = new Decorators();
// console.log(htmlcat);
