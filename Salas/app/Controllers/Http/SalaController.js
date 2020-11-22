'use strict'
const Sala = use('App/Models/Sala')

class SalaController {
    async list({ request, response }) {
        let salas = await Sala.all();
        return response.json({ "DATA": salas });
    }

    async create({ request, response }) {
        Sala.create({
            Nrsala: request.all().Nrsala,
            capacidade: request.all().capacidade,
            disponibilidade: request.all().disponibilidade
        });
        
        return response.json({ "DATA": "sala criada" });
    }
}

module.exports = SalaController
