// Use the Rest Parameter with Function Parameters
const sum = (...args) => {
    // const args = [x, y, z];
     let total = 0;
     for (let i = 0; i < args.length; i++) {
       total += args[i];
     }
     return total;
   }