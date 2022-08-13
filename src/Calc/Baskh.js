function Baskh(a, b, c) {
    const delta = b^2 - 4*a*c
    if (delta < 0) return '\x1b[41mNo solution found!\x1b[40m'

    const x1 = (-b+Math.sqrt(delta))/(2*a)
    const x2 = (-b-Math.sqrt(delta))/(2*a)

    return [x1, x2]
}

exports.Baskh = Baskh