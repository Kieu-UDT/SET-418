const pingController = (response) => {
    response.write("pong")
}

const caController = (response) => {
    response.write("chep")
}

module.exports = { pingController, caController };
