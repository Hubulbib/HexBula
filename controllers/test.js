function test1 () {
    const counts = []
    for(let i = 0; i < 30; i++) {
        const x = Math.ceil(Math.random() * 255) - 1
        counts.push({[x] : Bin(x)})
    }
    return counts

    function Bin(x) {
        let result = ''
        if(x === 0) return '0'
        while(x !== 0){
            result += (x%2).toString()
            x = (x - x%2) / 2 // целочисленное деление
        }
        return result.split('').reverse().join('')
    }
}

function test2(){
    const counts = []
    for(let i = 0; i< 30; i++) {
        let x = '1'
        for(let i = 0; i < Math.ceil(Math.random() * 6 + 2); i++) {
            x += Math.round(Math.random()).toString()
        }
        const xlenght = x.length
        counts.push({[x] : BinRev(x, xlenght)})
    }

    return counts

}

function BinRev(x, xlenght){
    let result = 0
    let j = 0
    for(let i = xlenght - 1; i >= 0; i--){
        if(x[i] === '1'){
            result += Math.pow(2, j)
        }
        j++
    }
    
    return result.toString()
}

function test3(){
    const counts = []
    for(let i = 0; i < 30; i++) {
        const x = Math.ceil(Math.random() * 255) - 1
        counts.push({[x] : Hex(x)})
    }
    return counts
}

function Hex(x){
    let result = ''
    if(x === 0) return '0'
    while(x !== 0){
        if(x%16 > 9) result += sh((x%16).toString())
        else result += (x%16).toString()
        x = (x - x%16) / 16 // целочисленное деление
    }
    return result.split('').reverse().join('')

    function sh(n){
        if(n === '10') return 'A'
        if(n === '11') return 'B'
        if(n === '12') return 'C'
        if(n === '13') return 'D'
        if(n === '14') return 'E'
        if(n === '15') return 'F'
    }
}

function test4(){
    const counts = []
    for(let i = 0; i < 30; i++) {
        const x = Math.ceil(Math.random() * 255) - 1
        counts.push({[x] : Oct(x)})
    }
    return counts

}

function Oct(x) {
    let result = ''
    if(x === 0) return '0'
    while(x !== 0){
        result += (x%8).toString()
        x = (x - x%8) / 8 // целочисленное деление
    }
    return result.split('').reverse().join('')
}

function test5(){
    const counts = []
    for(let i = 0; i< 30; i++) {
        let x = '1'
        for(let i = 0; i < Math.ceil(Math.random() * 6 + 2); i++) {
            x += Math.round(Math.random()).toString()
        }
        const xlenght = x.length
        counts.push({[x] : OctRev(x, xlenght)})
    }

    return counts

    function OctRev(x, xlenght){
        const bin = BinRev(x, xlenght)
        return Oct(bin)
    }
}

function test6(){
    const counts = []
    for(let i = 0; i< 30; i++) {
        let x = '1'
        for(let i = 0; i < Math.ceil(Math.random() * 6 + 2); i++) {
            x += Math.round(Math.random()).toString()
        }
        const xlenght = x.length
        counts.push({[x] : HexRev(x, xlenght)})
    }

    return counts

    function HexRev(x, xlenght){
        const num = BinRev(x, xlenght)
        return Hex(num)
    }
}

exports.test1 = test1
exports.test2 = test2
exports.test3 = test3
exports.test4 = test4
exports.test5 = test5
exports.test6 = test6