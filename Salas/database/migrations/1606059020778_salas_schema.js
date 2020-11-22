'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalasSchema extends Schema {
  up () {
    this.create('salas', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('salas')
  }
}

module.exports = SalasSchema
