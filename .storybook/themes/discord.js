import { create } from "@storybook/theming/create"

/*
  ======================================

    /$$$$$$$  /$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$$  /$$$$$$$
   | $$__  $$|_  $$_/ /$$__  $$ /$$__  $$ /$$__  $$| $$__  $$| $$__  $$
   | $$  \ $$  | $$  | $$  \__/| $$  \__/| $$  \ $$| $$  \ $$| $$  \ $$
   | $$  | $$  | $$  |  $$$$$$ | $$      | $$  | $$| $$$$$$$/| $$  | $$
   | $$  | $$  | $$   \____  $$| $$      | $$  | $$| $$__  $$| $$  | $$
   | $$  | $$  | $$   /$$  \ $$| $$    $$| $$  | $$| $$  \ $$| $$  | $$
   | $$$$$$$/ /$$$$$$|  $$$$$$/|  $$$$$$/|  $$$$$$/| $$  | $$| $$$$$$$/
   |_______/ |______/ \______/  \______/  \______/ |__/  |__/|_______/


  ======================================
*/

export default create({
  /*
    ======================================

       /$$$$$$$                                     /$$ /$$
      | $$__  $$                                   | $$|__/
      | $$  \ $$  /$$$$$$  /$$$$$$  /$$$$$$$   /$$$$$$$ /$$ /$$$$$$$   /$$$$$$
      | $$$$$$$  /$$__  $$|____  $$| $$__  $$ /$$__  $$| $$| $$__  $$ /$$__  $$
      | $$__  $$| $$  \__/ /$$$$$$$| $$  \ $$| $$  | $$| $$| $$  \ $$| $$  \ $$
      | $$  \ $$| $$      /$$__  $$| $$  | $$| $$  | $$| $$| $$  | $$| $$  | $$
      | $$$$$$$/| $$     |  $$$$$$$| $$  | $$|  $$$$$$$| $$| $$  | $$|  $$$$$$$
      |_______/ |__/      \_______/|__/  |__/ \_______/|__/|__/  |__/ \____  $$
                                                                      /$$  \ $$
                                                                     |  $$$$$$/
                                                                      \______/
    ======================================
  */

  brandTitle: "",
  brandUrl: "",
  brandImage: "",

  /*
    ======================================

       /$$   /$$ /$$$$$$
      | $$  | $$|_  $$_/
      | $$  | $$  | $$
      | $$  | $$  | $$
      | $$  | $$  | $$
      | $$  | $$  | $$
      |  $$$$$$/ /$$$$$$
       \______/ |______/

    ======================================
  */
  base: "dark",
  colorPrimary: "#7289DA",
  colorSecondary: "#7289DA",
  appBg: "#23272A",
  appContentBg: "#23272A",
  appBorderColor: "white",
  appBorderRadius: 0,

  /*
    ======================================

       /$$$$$$$$
      |__  $$__/
         | $$ /$$   /$$  /$$$$$$   /$$$$$$
         | $$| $$  | $$ /$$__  $$ /$$__  $$
         | $$| $$  | $$| $$  \ $$| $$  \ $$
         | $$| $$  | $$| $$  | $$| $$  | $$
         | $$|  $$$$$$$| $$$$$$$/|  $$$$$$/
         |__/ \____  $$| $$____/  \______/
              /$$  | $$| $$
             |  $$$$$$/| $$
              \______/ |__/

    ======================================
  */
  fontBase: '"Whitney", "Helvetica Neue", "Helvetica", "Open Sans", sans-serif',
  fontCode: "monospace",

  /*
    ======================================

        /$$$$$$            /$$
       /$$__  $$          | $$
      | $$  \__/  /$$$$$$ | $$  /$$$$$$   /$$$$$$
      | $$       /$$__  $$| $$ /$$__  $$ /$$__  $$
      | $$      | $$  \ $$| $$| $$  \ $$| $$  \__/
      | $$    $$| $$  | $$| $$| $$  | $$| $$
      |  $$$$$$/|  $$$$$$/| $$|  $$$$$$/| $$
       \______/  \______/ |__/ \______/ |__/

    ======================================
  */
  textColor: "#FFFFFF",
  textInverseColor: "rgba(0,0,0,0.9)",

  /*
    ======================================

       /$$$$$$$$                  /$$ /$$
      |__  $$__/                 | $$| $$
         | $$  /$$$$$$   /$$$$$$ | $$| $$$$$$$   /$$$$$$   /$$$$$$
         | $$ /$$__  $$ /$$__  $$| $$| $$__  $$ |____  $$ /$$__  $$
         | $$| $$  \ $$| $$  \ $$| $$| $$  \ $$  /$$$$$$$| $$  \__/
         | $$| $$  | $$| $$  | $$| $$| $$  | $$ /$$__  $$| $$
         | $$|  $$$$$$/|  $$$$$$/| $$| $$$$$$$/|  $$$$$$$| $$
         |__/ \______/  \______/ |__/|_______/  \_______/|__/

     (defaults and active colors)
    ======================================
  */
  barTextColor: "silver",
  barSelectedColor: "#DFDFDF",
  barBg: "#23272A",

  /*
    ======================================

       /$$$$$$$$
      | $$_____/
      | $$     /$$$$$$   /$$$$$$  /$$$$$$/$$$$   /$$$$$$$
      | $$$$$ /$$__  $$ /$$__  $$| $$_  $$_  $$ /$$_____/
      | $$__/| $$  \ $$| $$  \__/| $$ \ $$ \ $$|  $$$$$$
      | $$   | $$  | $$| $$      | $$ | $$ | $$ \____  $$
      | $$   |  $$$$$$/| $$      | $$ | $$ | $$ /$$$$$$$/
      |__/    \______/ |__/      |__/ |__/ |__/|_______/

    ======================================
  */
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "#23272A",
  inputBorderRadius: 4,
})
