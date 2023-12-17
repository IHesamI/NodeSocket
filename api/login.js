const jwt = require("jsonwebtoken");
const ormHandler = require("../dataBaseHandler/orm");

function AuthHandler() {
  const orm = new ormHandler();
  const key = process.env.SECRET_KEY;

  function validator(token, key) {
    return jwt.verify(token, key);
  }

  function createToken(email) {
    return jwt.sign({ data: email }, key, { expiresIn: 7 * 24 * 60 * 60 });
  }

  async function login(req, res) {
    let body = req.body;
    const userToken = body?.token;

    const isValid = validator(userToken, key);
    if (isValid) {
      let token = jwt.sign(body, key);
      const user = await orm.getUser(body.email, body.password);
    }
    if (user) {
      res.send({ jwt: token, status: "200", user });
    } else {
      res.send({ status: "401" });
    }
  }

  async function register(req, res) {
    const { email, name, password } = req.body;
    const [isRegisterd, profile] = await orm.registerUser(email, name, password);

    if (!isRegisterd) {
      res.statusCode = 403;
      res.statusMessage = "bad request";
      res.send();

    } else {
      const token = createToken(email);
      res.send({profile, jwt: token });
    }
  }

  return {
    login,
    register,
  };
}

const loginHandler = AuthHandler();

module.exports = loginHandler;
