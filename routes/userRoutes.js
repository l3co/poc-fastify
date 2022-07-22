export default (app) => {
    app.route({
        method: 'GET',
        url: '/user',
        handler: function (req, res) {
            res.send({ name: 'leco', email: 'test@email.com' })
        }
    })
}