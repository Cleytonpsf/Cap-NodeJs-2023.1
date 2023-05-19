const jwt = require("jsonwebtoken")


//Bearer token
//[Bearer, token]
function auth(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.json({"message": "Nenhum token fornecido"})
    }

    const parts = authHeader.split(" ")
    if (parts.length != 2) {
        return res.json({"message": "Token inválido"})
    }

    const [schema, token] = parts
    if (schema != "Bearer") {
        return req.json({"message": "Token mal formatado"})
    }

    jwt.verify(token, "123", (error) => {
        if(error) {
            return res.json({"message": "Token inválido"})
        }

        return next()
    })

}

module.exports = auth