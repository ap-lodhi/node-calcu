function random (){
    const ran = require('crypto-random')
    return ran.range(0 ,100)
}
module.exports =random