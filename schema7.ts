import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';
import { EvsNavModel } from './navmodel';
import { robotdata } from './robotdata';

const ajv = new Ajv();

const schema: JSONSchemaType<EvsNavModel> = {
  title: 'evs-nav-model-schema',
  description: 'JSON Schema for CC4.0 Navigation Models',
  $id: 'urn:at.engel.cc4:schemata:nav-model',

  allOf: [
    { $ref: '#/definitions/groupDef' },
    {
      properties: {
        routes: {
          type: 'array',
          items: {
            $ref: '#/definitions/routeDef'
          }
        }
      }
    }
  ],
  required: ['routes'],
  definitions: {
    navNodeDef: {
      properties: {
        id: {
          type: 'string'
        },
        icon: {
          type: 'string'
        },
        text: {
          type: 'string'
        }
      },
      required: ['id']
    },
    routeDef: {
      allOf: [
        { $ref: '#/definitions/navNodeDef' },
        {
          properties: {
            componentId: {
              type: 'string'
            },
            parameters: {
              additionalProperties: true
            }
          }
        }
      ],
      required: ['componentId']
    },
    groupDef: {
      allOf: [
        {
          $ref: '#/definitions/navNodeDef'
        },
        {
          properties: {
            childGroups: {
              items: {
                $ref: '#/definitions/groupDef'
              }
            },
            links: {
              items: {
                $ref: '#/definitions/linkDef'
              }
            }
          }
        }
      ]
    },
    linkDef: {
      allOf: [{ $ref: '#/definitions/navNodeDef' }]
    }
  }
};

export function compileSchema7(): ValidateFunction<EvsNavModel> {
  return ajv.compile<EvsNavModel>(schema);
}
