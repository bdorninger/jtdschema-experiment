// Import stylesheets
import './style.css';
import Ajv, { JTDSchemaType } from 'ajv/dist/jtd';
import { robotdata } from './robotdata';
import { immdata } from './immdata';
import { schemaString } from './schema';
import { EvsNavModel } from './navmodel';
import { compileSchema7 } from './schema7';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
const jsonDiv: HTMLElement = document.getElementById('json');

const ajv = new Ajv({ allErrors: true });

const schema = JSON.parse(schemaString);

// console.log(JSON.stringify(schema,undefined,2));

// validate is a type guard for MyData - type is inferred from schema type
//const validate = ajv.compile<JTDSchemaType<EvsNavModel>>(schema);
//ajv.compile({})

const validate = compileSchema7();

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
    appDiv.innerHTML = `Failure: <b>${validate.errors[0].instancePath}</b> ${
      validate.errors[0].message
    }`;
    console.error(validate.errors);
  }
}
