import "./normalize.css"
import "element-plus/dist/index.css"
import "@tmagic/editor/dist/style.css"
import "@tmagic/form/dist/style.css"

import { createApp } from "vue"
import ElementPlus from "element-plus"
import 'element-plus/es/components/message/style/css'
import zhCn from "element-plus/es/locale/lang/zh-cn"

import TMagicDesign from "@tmagic/design"
import TMagicEditor from "@tmagic/editor"
import TMagicElementPlusAdapter from "@tmagic/element-plus-adapter"
import TMagicForm from "@tmagic/form"

import App from "./App.vue"

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(TMagicDesign, TMagicElementPlusAdapter)
app.use(TMagicEditor)
app.use(TMagicForm as any)
app.mount("#app")
