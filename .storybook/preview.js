import { addDecorator } from "@storybook/react"
import { ThemeProvider } from "theme-ui"
import theme from "@/settings/theme/index.js"
import { Box } from "theme-ui"
import { addParameters } from "@storybook/client-api"
import { DocsContainer } from "@storybook/addon-docs/blocks"

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Box sx={{ width: "100%", height: "100%" }}>{story()} </Box>
  </ThemeProvider>
))

export const parameters = {
  layout: "padded",
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "Introduction",
        "Modifiers",
        "Atoms",
        "Molecules",
        "Organisms",
        "Universe"
      ]
    }
  },
  docs: {
    container: ({ children, context }) => (
      <ThemeProvider theme={theme}>
        <DocsContainer context={context}>{children}</DocsContainer>
      </ThemeProvider>
    )
  }
}
