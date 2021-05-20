// Import stylesheets
import './style.css';
import Ajv, { JTDSchemaType } from 'ajv/dist/jtd';
import { robotdata } from './robotdata';
import { immdata } from './immdata';
import { schemaString} from './schema';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const ajv = new Ajv({allErrors: true});

type ServerId = string;

interface EvsNavNode {
  id: string;  
  icon?: string;
  text?: string;
}

interface EvsNavRoute extends EvsNavNode {
  componentId: string;  
  parameters?: Object;  
}

interface EvsNavModel extends EvsNavNode {
  routes: EvsNavRoute[]
}

const schema = JSON.parse(schemaString);


console.log(JSON.stringify(schema,undefined,2));

// validate is a type guard for MyData - type is inferred from schema type
const validate = ajv.compile<JTDSchemaType<EvsNavModel>>(schema);
ajv.compile({})


doValidation(robotdata);
//doValidation(immdata);

function doValidation(data: Object) {
  if (validate(data)) {
   // data is EvsNavModel here
   appDiv.innerHTML="Success"
   console.log(JSON.stringify(data, undefined, 2));
  } else {
   appDiv.innerHTML=`Failure: <b>${validate.errors[0].instancePath}</b> ${validate.errors[0].message}`
   console.log(validate.errors);
  }
}