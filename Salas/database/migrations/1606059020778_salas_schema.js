'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalasSchema extends Schema {
  up () {
    this.create('salas', (table) => {
      table.increments()
      /*Número da sala, capacidade de alunos, disponibilidade*/
      table.string('Nrsala', 80).notNullable().unique()
      table.string('capacidade', 254).notNullable().unique()
      table.string('disponibilidade', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('salas')
  }
}

module.exports = SalasSchema
