/*
  ======================================
    This components collects all providers
    of various systems and applies them
    at the root of the application so that
    you can use them anywhere inside the tree.
  ======================================
*/
import React from "react"
import Atoms from "./atoms"
import Molecules from "./molecules"
import Organisms from "./organisms"
import Universe from "./universe"
import { inspect } from "@xstate/inspect"

if (typeof window !== "undefined") {
  inspect({ iframe: false })
}

export const Systems = ({ children }) => {
  return (
    <>
      <Universe>
        <Organisms>
          <Molecules>
            <Atoms>{children}</Atoms>
          </Molecules>
        </Organisms>
      </Universe>
    </>
  )
}

export default Systems
