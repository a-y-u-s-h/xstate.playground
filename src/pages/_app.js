import React from "react"
import Systems from "@/systems"
import theme from "@/settings/theme"
import { ThemeProvider as Theme } from "theme-ui"
import "@/assets/styles/index.css"
import { inspect } from "@xstate/inspect"

export const Application = props => {

  React.useEffect(() => {
    inspect({ iframe: false })
  }, [])

  const { Component, pageProps } = props
  return (
    <Theme theme={theme}>
      <Systems>
        <Component {...pageProps} />
      </Systems>
    </Theme>
  )
}

export default Application
