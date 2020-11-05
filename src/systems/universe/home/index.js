import React from "react"
import * as X from "xstate"
import states from "./states.yaml"
import options from "./options.js"
import { useMachine } from "@xstate/react"

export const machine = X.createMachine(states, options)
export const service = X.interpret(machine)

export const create = () => {
  const [state, event, service] = useMachine(machine, { devTools: true })
  return { state, event, service }
}

export const Context = React.createContext()
export const Consumer = Context.Consumer
export const Provider = p => <Context.Provider value={create()} {...p} />
export const use = () => React.useContext(Context)
export default { machine, service, Context, Provider, Consumer, use, create }
