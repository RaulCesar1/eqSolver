function Sub(a, resls = 10, random = false) {
    const res = parseInt(a, 10)
    const results = []

    const _verify = toV => {
        return(toV ? true : false)
    }

    for(i = 0; i < resls; i++) {
        if(random === false) {
            let toR = res + i
            let toV = toR - i
    
            _verify(toV) === true ? results.push(`${toR} - ${i} = ${res}`) : ''
        } else {
            let randomNum = Math.floor(Math.random() * (256 - res) + res)
            let toR = randomNum - res
            let toV = randomNum - toR

            let expr = `${randomNum} - ${toR} = ${res}`
            
            if(_verify(toV) === true) {
                if(results.includes(expr) === false) {
                    results.push(expr)
                }
            }
        }
    }

    if(results.length < resls) { 
        console.log(`\x1b[41mOnly ${results.length} results were found\x1b[40m`)
    }
    return results
}

exports.Sub = Sub