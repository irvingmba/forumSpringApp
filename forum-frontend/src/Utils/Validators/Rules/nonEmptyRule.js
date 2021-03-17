import isEmpty from "../functions/isEmpty";

const nonEmptyRule = {
    validator: isEmpty,
    condition: false,
    message: "You must provide a value"
}

export default nonEmptyRule;