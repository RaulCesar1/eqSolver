function Sum(a) {
    const res = parseInt(a, 10)
    
    const results = []

    const _verify = toV => {
        return(toV === res ? true : false)
    }

    for(i = 0; i < res; i++) {
        let toR = res - i
        let toV = i + toR

        _verify(toV) === true ? results.push(`${i} + ${toR} = ${res}`) : ''
    }

    return results
}

exports.Sum = Sum