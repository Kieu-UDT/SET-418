const http = require('http');
const { Routers } = require('./routers/index.js');

const server = http.createServer(function (request, response) {
    Routers(request, response);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
