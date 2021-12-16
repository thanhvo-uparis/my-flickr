import { verifyToken } from "../factories/jwt.factory";

async function handler(request, response, next) {
  const { authorization = "" } = request.headers;

  /** Split header to retrieve the token without the Bearer string */
  const [, token = ""] = authorization.split(" ");
  try {
    const user = verifyToken(token);
    if (!user) {
      return response.status(401).end();
    }

    /** Inject user for the next request handler */
    request.user = user;

    next();
  } catch(_error) {
    response.status(401).end();
  }
}

export default handler;
