import { createApp } from "vue"
import "./normalize.css"
import App from "./App.vue"
import type { Magic } from "@tmagic/stage"

// eslint-disable-next-line
import { HelloWorld, Test } from "hello-ui"

createApp(App).mount("#app")

declare global {
  interface Window {
    magic?: Magic
  }
}

const app = createApp(App)

app.component("hello-world", HelloWorld)
app.component("Test", Test)

app.mount("#app")
