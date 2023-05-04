// https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql

import { DataTypes, Sequelize } from "sequelize"

const sequelize = new Sequelize("IFAM", "root", "", {
  dialect: "mysql",
})

export const conectarDatabase = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connectado com sucesso!")
    })
    .catch((error) => {
      console.error("Falha ao conectar! Erro:", error)
    })
}

export const Usuario = sequelize.define("usuarios", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

await sequelize.sync()