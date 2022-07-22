import Fastify from "fastify";

const fastify = Fastify(
    {
        logger: true
    }
);

fastify.get('/', (req, res) => {
    res.send({ message: "Hello world" })
})

fastify.listen({ port: 3002 }, (err, _) => {
    if (err) throw err
})