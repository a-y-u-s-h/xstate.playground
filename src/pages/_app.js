import React from "react"
import Systems from "@/systems"
import theme from "@/settings/theme"
import { ThemeProvider as Theme } from "theme-ui"
import "@/assets/styles/index.css"

export const Application = props => {
  /*
    ======================================
      This component is the entry point of
      the application. So if you have any global
      styles or anything else that you want to
      have applied globally, you can modify this
      component to achieve them.
    ======================================
  */
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
