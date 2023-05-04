import { Usuario, conectarDatabase } from "../database/server.js"

const UserController = {
  async findAll(req, res) {
    conectarDatabase()
    const usuarios = await Usuario.findAll()
    return res.json(usuarios)
  },
  async findByLogin(req, res) {
    conectarDatabase()
    const { login } = req.params
    const usuario = await Usuario.findOne({ where: { login: login } })
    return res.json(usuario)
  },
  async create(req, res) {
    conectarDatabase()
    const resp = await Usuario.create(req.body)
    return res.json(resp)
  },
  async update(req, res) {
    conectarDatabase()
    const { login } = req.params
    const resp = await Usuario.update(req.body, {
      where: {
        login: login
      }
    });
    return res.json(resp)
  },
  async delete(req, res) {
    conectarDatabase()
    const { login } = req.params
    const resp = await Usuario.destroy({ where: { login: login } })
    return res.json(resp)
  },
}

export default UserController
