import { TextField } from "@material-ui/core";
import isEmpty from "../../../Utils/Validators/isEmpty"

export default function UsernameField(props) {

    const validate = (validators=[]) =>{
        if(!Array.isArray(validators)) throw new TypeError("Parameter must be an array");
        return (event)=>{
            const {target} = event;
            const {value} = target;
            for (const validator of validators){
                const {fn, cond, msg} = validator;
                if(fn(value) !== cond) {
                    target.error = true;
                    target.helperText = msg;
                };
            }
        };
    }

    const validator = validate([{fn: isEmpty, cond: false, msg: "You must input something"}]);

  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      onBlur={validator}
      {...props}
    />
  );
}
