import cors from "cors"
import bodyparser from "body-parser"
import api from "next-connect"

/*
  ======================================
    This file is where you specify actions
    that should happen depending on the route.
    Routes are specified similar to how it is done
    for pages.
  ======================================
*/

const app = api()
  .use(cors())
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: true }))

const actions = {
  post: async (request, response) => {},
  get: async (request, response) => {},
  put: async (request, response) => {},
  delete: async (request, response) => {}
}

/*
  ======================================
    Generate routes from `actions` described
    above and use helpful middlewares, like
    a regular express application.
  ======================================
*/
export default app
  .post(actions.post)
  .get(actions.get)
  .put(actions.put)
  .delete(actions.delete)
