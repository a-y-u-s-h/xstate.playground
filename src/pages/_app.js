import React from "react"
import Systems from "@/systems"
import theme from "@/settings/theme"
import { ThemeProvider as Theme } from "theme-ui"
import "@/assets/styles/index.css"

export const Application = props => {
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
