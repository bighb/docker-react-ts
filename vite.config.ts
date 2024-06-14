import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, //表示服务器将接受来自任何来源的连接。这在你想要从不同的设备（例如手机或其他电脑）访问你的开发服务器时非常有用。
    port: 8000, //定义了服务器监听的端口号。在这个例子中，端口号被设置为8000。这个注释说明这个端口将在Docker中使用。
    watch: {
      usePolling: true //是一个特殊的配置，主要用于解决Windows环境下的热重载问题。Vite使用文件系统事件来监听源文件的更改并重新加载页面。但在某些情况下，特别是在Windows环境中，这种机制可能无法正常工作。
      //这时，你可以通过设置usePolling: true来启用轮询。轮询是一种备选机制，它通过定期检查文件更改来实现文件监听，而不是依赖文件系统事件。
    }
  }
})
