// This are the ways how Decorators accepts value as per the use case

// Method Decorator takes 3 parameters
function AutoBind(_: any, _1: string,  propertyName: PropertyDescriptor) {
  const originalMethod = propertyName.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    // Running some extra login before constructor execution
    get() {
      const bindNow = originalMethod.bind(this); // THIS REFERS TO THE PROPERTY FROM PARENT TYPE
      return bindNow;
    }
  }
  return adjDescriptor;
}

class Name {

    name =  'Soham';
    
    @AutoBind
    setName() {
      console.log(this.name);
    }
}

const n = new Name();

const button = document.querySelector('button')!;
button.addEventListener('click', n.setName);