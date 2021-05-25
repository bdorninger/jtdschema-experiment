/**
 * nav model schema: RFC8927 JSON Type Definition style
 */

export const jsonTypeDefSchemaString = `{
  "properties": {
    "id": {
      "type": "string"
    },
    "routes": {
      "elements": {
        "ref": "routeDef"
      }
    }
  },
  "optionalProperties": {
    "icon": {
      "type": "string"
    },
    "text": {
      "type": "string"
    },
    "childGroups": {
      "elements": {
        "ref": "groupDef"
      }
    },
    "links": {
      "elements": {
        "ref": "linkDef"
      }
    }
  },
  "definitions": {
    "routeDef": {
      "properties": {
        "id": {
          "type": "string"
        },
        "componentId": {
          "type": "string"
        }
      },
      "optionalProperties": {
        "icon": {
          "type": "string"
        },
        "text": {
          "type": "string"
        },
        "parameters": {
          "properties": {},
          "additionalProperties": true
        }
      }
    },
    "groupDef": {
      "properties": {
        "id": {
          "type": "string"
        }
      },
      "optionalProperties": {
        "icon": {
          "type": "string"
        },
        "text": {
          "type": "string"
        },
        "childGroups": {
          "elements": {
            "ref": "groupDef"
          }
        },
        "links": {
          "elements": {
            "ref": "linkDef"
          }
        }
      }
    },
    "linkDef": {
      "properties": {
        "id": {
          "type": "string"
        }
      },
      "optionalProperties": {
        "icon": {
          "type": "string"
        },
        "text": {
          "type": "string"
        }
      }
    }
  }
}`;
