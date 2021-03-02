const productsJson = require('../products.json');

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });
    app.get('/users', (request, response) => {
        response.send(users);
    });
    app.get('/products', (request, response) => {
        response.json(productsJson);
    });
}

const users = [{
        id: 1,
        name: "Richard Hendricks",
        email: "richard@piedpiper.com",
    },
    {
        id: 2,
        name: "Bertram Gilfoyle",
        email: "gilfoyle@piedpiper.com",
    },
];

// Export the router
module.exports = router;