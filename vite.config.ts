import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'
export default {
    plugins: [createVuePlugin()],
    resolve: {
        /** 当前版本webstorm对vite的alias不支持 */
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
}