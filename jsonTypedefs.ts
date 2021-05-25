import Ajv, { JTDSchemaType, ValidateFunction } from 'ajv/dist/jtd';
import { EvsNavModel } from './navmodel';
import { jsonTypeDefSchemaString } from './schema';

/**
 * Test code for RFC8797 style JSON schemata (JSON Type Definition)
 * https://datatracker.ietf.org/doc/html/rfc8927
 */

const ajv = new Ajv({ allErrors: true });

const schema = JSON.parse(jsonTypeDefSchemaString);

console.log(JSON.stringify(schema, undefined, 2));

// validate is a type guard for MyData - type is inferred from schema type
const validate = ajv.compile<JTDSchemaType<EvsNavModel>>(schema);

export function compileJsonTypedefSchema(): ValidateFunction<EvsNavModel> {
  return ajv.compile<EvsNavModel>(schema);
}
