const { pingController, caController } = require('../controllers');

const Routers = (request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    
    const url = request.url

    const method = request.method
    if (method === "GET") {

        if (request.url === '/ping') {
            pingController(response)
        }
        if (request.url === "/ca") {
            caController(response)
        }
        response.end()
    }
}
module.exports = { Routers };

