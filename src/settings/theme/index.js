import elements from "./elements.yaml"
import application from "./application.yaml"
import foundations from "./foundations.yaml"
import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  ...application,
  ...elements,
  ...foundations
}
