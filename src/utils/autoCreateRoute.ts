// TODO 考虑有子路由情况,递归调用
export const autoCreateRoute = function(){
    /** tsconfig中的compilerOptions写入
     * "types": ["vite/client"],
     * 解决import.meta飘红
     */
    const pageModule = import.meta.glob('../pages/**/page.ts',{
        eager:true,
        import:'default',
    })
    const comModule = import.meta.glob('../pages/**/index.vue')
    return Object.entries(pageModule).reduce((per,[pagePath,pageConfig])=>{
        const path = pagePath.replace('../pages','').replace('/page.ts','') || '/'
        const name = path.split('/').filter(Boolean).join() || 'index'
        const comPath = pagePath.replace('page.ts','index.vue')
        const routeConfig = {
            path,
            name,
            /** import后放字面量,禁止变量 */
            component:comModule[comPath],
            meta:pageConfig
        }
        per.push(routeConfig)
        return per
    },[]).sort((a,b)=> a.meta.menuOrder - b.meta.menuOrder)
}