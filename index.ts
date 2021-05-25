// Import stylesheets
import './style.css';
import { robotdata } from './robotdata';
import { immdata } from './immdata';
import { compileSchema7 } from './schema7';
import { compileJsonTypedefSchema } from './jsonTypedefs';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
const jsonDiv: HTMLElement = document.getElementById('json');

const validate = compileSchema7();
// const validate = compileJsonTypedefSchema();

// doValidation(robotdata);
doValidation(immdata);

function doValidation(data: Object) {
  if (validate(data)) {
    // data is EvsNavModel here
    const text = JSON.stringify(data, undefined, 2);
    appDiv.innerHTML = 'Success';
    jsonDiv.innerHTML = `<pre>${text}</pre>`;
    console.log('Success');
  } else {
    const errs = validate.errors
      .map(ve => `Failure: <b>'${ve.instancePath}'</b> ${ve.message}`)
      .join('<br/>');
    appDiv.innerHTML = errs;
    console.error('Validation had errors...', validate.errors);
  }
}
