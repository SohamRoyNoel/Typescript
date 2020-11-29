// Type casting HTML Element:

// const htmlInputBox  = <HTMLInputElement>document.getElementById('username'); // General Case
const htmlInputBox  = document.getElementById('username')! as HTMLInputElement; // React case

htmlInputBox.value = 'C is shit';