/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vpi0cpemef09j3f")

  // remove
  collection.schema.removeField("dx70wfsw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cjsmdzcn",
    "name": "date",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vpi0cpemef09j3f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dx70wfsw",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("cjsmdzcn")

  return dao.saveCollection(collection)
})
