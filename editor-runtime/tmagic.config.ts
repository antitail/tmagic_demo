import path from "path"

import { defineConfig } from "@tmagic/cli"

export default defineConfig({
  /** 组件目录或者npm包名 */
  packages: [path.join(__dirname, "../hello-ui")],
  /** 组件文件后缀名，例如vue文件为.vue，tsx文件为.tsx，普通js文件则为.js */
  componentFileAffix: ".vue",
  /** npm 配置，用于当packages配置有npm包名时，可以自动安装npm包 */
  npmConfig: {
    /** pnpm | npm | yarn */
    client: "yarn",
    /** npm镜像代理 */
    registry: "https://registry.npmmirror.com"
  }
})
