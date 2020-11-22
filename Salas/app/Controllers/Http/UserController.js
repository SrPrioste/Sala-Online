'use strict'
const User = use('App/Models/User')

class UserController {
    async list({ request, response }) {
        let users = await User.all();
        return response.json({ "DATA": users });
    }

    async create({ request, response }) {
        User.create({
            username: request.all().username,
            email: request.all().email,
            password: request.all().password
        });
        
        return response.json({ "DATA": "usuário criado" });
    }

}

module.exports = UserController
