import isValidValue from "./isValidValue";

function isValidFormData(validators, data){
    let isValid = false;
    if(!Array.isArray(validators)) throw new TypeError("You must provide an array");
    for(const {name, rules} of validators) {
        const value = data[name];
        isValid = !isValid ? isValidValue(rules, value) : isValid;
    };
    return isValid;
};

export default isValidFormData;