export const loginPassWordRe = function(_rule, value, callback){
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#_,*$])[\da-zA-Z@#_,*$]{6,12}$/.test(value)){
        callback()
    }else{
        callback(new Error('密码必须是6-12位,且必须包含数字、大小写字母、特殊符号（@#_,*$之一）'));
    }
}
