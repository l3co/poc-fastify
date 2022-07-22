import Fastify from "fastify";
import userRoutes from "./routes/userRoutes.js";

const app = Fastify(
    {
        logger: true
    }
);

app.get('/', (req, res) => {
    res.send({ message: "Hello world" })
})

userRoutes(app);

app.listen({ port: 3002 }, (err, _) => {
    if (err) throw err
})