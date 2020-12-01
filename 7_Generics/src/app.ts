// A generic type is a type, which is connected with some other types & flexible to other type

// GENERIC type: Choose a type and go forward (type can not be changed)
// UNION type: Go forward with any type (mix of types)

interface ClassType {
  name: string,
  numberOfStudents: number,
  floor: number
}

function ClsTy (name: string, numberOfStudents: number, floor:number) : ClassType {
  let cls :Partial<ClassType> = {};
  cls.name = name;
  cls.numberOfStudents = numberOfStudents;
  cls.floor = floor

  return cls as ClassType;
}


// Make a locked Array or object
const str: Readonly<string[]> = ['React', 'Flutter'];
// str.push('Node');