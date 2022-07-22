export default class UserController {
    static new(req, res) {
        const user = req.body;
        res.send(user)
    }
}