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
        let path = pagePath.replace('../pages','').replace('/page.ts','') || '/'
        const pathList = path.split('/').filter(Boolean)
        const hasParent = pathList.length >= 2
        path = hasParent ? ('/' + pathList.slice(-1).join()) : path
        const name = path.split('/').filter(Boolean).join() || 'index'
        const parentName = hasParent ? pathList[pathList.length - 2]: ''
        const comPath = pagePath.replace('page.ts','index.vue')
        const routeConfig = {
            path,
            name,
            /** import后放字面量,禁止变量 */
            component:comModule[comPath],
            meta:pageConfig
        }
        if(hasParent){
            pathList.reduce((iPer, iCur) => {
                const parent = iPer.find(_ => _.name === iCur)
                if (parent) {
                    if (parent.name === parentName) {
                        parent.children ? parent.children.push(routeConfig)
                            :
                            Object.assign(parent, {children: [routeConfig]})
                    } else {
                        iPer = parent.children
                    }
                }
                return iPer
            }, [...per]);
        }else{
            per.push(routeConfig)
        }
        return per
    },[]).sort((a,b)=> a.meta.menuOrder - b.meta.menuOrder)
}