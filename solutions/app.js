import checkIP from "./ip";
import checkMac from "./mac";
import checkVisa from "./visa";

const checker = {
  rules: {
    checkIP,
    checkMac,
    checkVisa
  },
  validate(string, rule) {
    let result;
    switch (rule) {
      case "visa":
        result = checkVisa(string);
        break;
      case "ip":
        result = checkIP(string);
        break;
      case "mac":
        result = checkMac(string);
        break;
    }
    return result;
  } 
}

export default checker;