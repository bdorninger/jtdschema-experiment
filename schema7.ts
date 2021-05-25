import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';
import { EvsNavModel } from './navmodel';

/**
 * nav model schema: JSON Schema draft07 style
 *
 */

const ajv = new Ajv({ allErrors: true });

const schema: JSONSchemaType<EvsNavModel> = {
  title: 'evs-nav-model-schema',
  description: 'JSON Schema for CC4.0 Navigation Models',
  $id: 'urn:at.engel.cc4:schemata:nav-model',

  $comment:
    'It would be nice to use the "allOf" (https://json-schema.org/understanding-json-schema/reference/combining.html#allof) feature of JSONSchema to avoid repeated defs of properties. Unfortunatly, in schema draft07, this interferes with the check of additional properties. Why draft07: Currently widest accpeted standard, has support in C++',

  properties: {
    id: {
      type: 'string'
    },
    routes: {
      type: 'array',
      items: {
        $ref: '#/definitions/routeDef'
      },
      minItems: 1
    },
    childGroups: {
      type: 'array',
      items: {
        $ref: '#/definitions/groupDef'
      }
    },
    links: {
      type: 'array',
      items: {
        $ref: '#/definitions/linkDef'
      }
    }
  },
  additionalProperties: false,
  required: ['id', 'routes'],
  type: 'object',

  definitions: {
    navNodeDef: {
      properties: {
        id: {
          type: 'string'
        },
        text: {
          type: 'string'
        },
        icon: {
          type: 'string'
        }
      },
      required: ['id'],
      additionalProperties: false,
      type: 'object'
    },
    routeDef: {
      properties: {
        id: {
          type: 'string'
        },
        componentId: {
          type: 'string'
        },
        text: {
          type: 'string'
        },
        icon: {
          type: 'string'
        },
        parameters: {
          type: 'object',
          additionalProperties: true
        }
      },
      required: ['id', 'componentId'],
      additionalProperties: false,
      type: 'object'
    },
    groupDef: {
      properties: {
        id: {
          type: 'string'
        },
        text: {
          type: 'string'
        },
        icon: {
          type: 'string'
        },
        childGroups: {
          type: 'array',
          items: {
            $ref: '#/definitions/groupDef'
          }
        },
        links: {
          type: 'array',
          items: {
            $ref: '#/definitions/linkDef'
          }
        }
      },
      required: ['id'],
      additionalProperties: false
    },
    linkDef: {
      allOf: [{ $ref: '#/definitions/navNodeDef' }]
    }
  }
};

export function compileSchema7(): ValidateFunction<EvsNavModel> {
  return ajv.compile<EvsNavModel>(schema);
}
