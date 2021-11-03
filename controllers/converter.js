function convert(req, res) {
    const {inN, outN, number} = req.body
    const num = number

    if(inN > 1 && inN <= 16){
        if(inN === 2){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1')
                return res.status(400).json({message: 'вводите только цифры двоичной системы счисления'})
            }
        }
        if(inN === 3){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2')
                return res.status(400).json({message: 'вводите только цифры троичной системы счисления'})
            }
        }
        if(inN === 4){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3')
                return res.status(400).json({message: 'вводите только цифры четверичной системы счисления'})
            }
        }
        if(inN === 5){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4')
                return res.status(400).json({message: 'вводите только цифры пятиричной системы счисления'})
            }
        }
        if(inN === 6){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4' && num[i] !== '5')
                return res.status(400).json({message: 'вводите только цифры шестиричной системы счисления'})
            }
        }
        if(inN === 7){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4' && num[i] !== '5' && num[i] !== '6')
                return res.status(400).json({message: 'вводите только цифры семиричной системы счисления'})
            }
        }
        if(inN === 8){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4' && num[i] !== '5' && num[i] !== '6' && num[i] !== '7')
                return res.status(400).json({message: 'вводите только цифры восьмиричной системы счисления'})
            }
        }
        if(inN === 9){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4' && num[i] !== '5' && num[i] !== '6' && num[i] !== '7'
                && num[i] !== '8')
                return res.status(400).json({message: 'вводите только цифры девятеричной системы счисления'})
            }
        }
        if(inN === 10){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4' && num[i] !== '5' && num[i] !== '6' && num[i] !== '7'
                && num[i] !== '8' && num[i] !== '9')
                return res.status(400).json({message: 'вводите только цифры десятичной системы счисления'})
            }
        }
        if(inN === 11){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4' && num[i] !== '5' && num[i] !== '6' && num[i] !== '7'
                && num[i] !== '8' && num[i] !== '9' && num[i] !== 'A')
                return res.status(400).json({message: 'вводите только цифры одиннадцатиричной системы счисления'})
            }
        }
        if(inN === 12){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4' && num[i] !== '5' && num[i] !== '6' && num[i] !== '7'
                && num[i] !== '8' && num[i] !== '9' && num[i] !== 'A' && num[i] !== 'B')
                return res.status(400).json({message: 'вводите только цифры двенадцатиричной системы счисления'})
            }
        }
        if(inN === 13){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4' && num[i] !== '5' && num[i] !== '6' && num[i] !== '7'
                && num[i] !== '8' && num[i] !== '9' && num[i] !== 'A' && num[i] !== 'B'
                && num[i] !== 'C')
                return res.status(400).json({message: 'вводите только цифры тринадцатиричной системы счисления'})
            }
        }
        if(inN === 14){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4' && num[i] !== '5' && num[i] !== '6' && num[i] !== '7'
                && num[i] !== '8' && num[i] !== '9' && num[i] !== 'A' && num[i] !== 'B'
                && num[i] !== 'C' && num[i] !== 'D')
                return res.status(400).json({message: 'вводите только цифры четырнадцатиричной системы счисления'})
            }
        }
        if(inN === 15){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4' && num[i] !== '5' && num[i] !== '6' && num[i] !== '7'
                && num[i] !== '8' && num[i] !== '9' && num[i] !== 'A' && num[i] !== 'B'
                && num[i] !== 'C' && num[i] !== 'D' && num[i] !== 'E')
                return res.status(400).json({message: 'вводите только цифры пятнадцатиричной системы счисления'})
            }
        }
        if(inN === 16){
            for(let i in num){
                if(num[i] !== '0' && num[i] !== '1' && num[i] !== '2' && num[i] !== '3'
                && num[i] !== '4' && num[i] !== '5' && num[i] !== '6' && num[i] !== '7'
                && num[i] !== '8' && num[i] !== '9' && num[i] !== 'A' && num[i] !== 'B'
                && num[i] !== 'C' && num[i] !== 'D' && num[i] !== 'E' && num[i] !== 'F')
                return res.status(400).json({message: 'вводите только цифры шестнадцатиричной системы счисления'})
            }
        }
    } else return res.status(400).json({message: 'некорректные данные при вводе входной системы счисления'})

    if(outN <= 1 || outN > 16)
    return res.status(400).json({message: 'некорректные данные при вводе конечной системы счисления'})

    if(inN === outN) return res.status(406).json({message: 'Введите разные системы счисления'})

    function anything(num){
        let result = ''
        let someresult = ''

        if(num === 0) return res.status(200).json({result: 0})
        result = Bin(num, outN)
        return result.split('').reverse().join('')

        function Bin(n, k) {
            while(n > 0){
                if (n % k > 9) someresult += sh(n%k)
                else someresult += (n%k).toString()
                n = (n - n%k) / k
            }
            return someresult
        }

        function sh(n) {
            if(n === 10) return 'A'
            if(n === 11) return 'B'
            if(n === 12) return 'C'
            if(n === 13) return 'D'
            if(n === 14) return 'E'
            if(n === 15) return 'F'
        }
    }

    function BinRev(x, xlenght, k){
        let result = 0
        let j = 0
        for(let i = xlenght - 1; i >= 0; i--){
            if(x[i] === 'A' || x[i] === 'B' || x[i] === 'C' ||
            x[i] === 'D'||x[i] === 'E' || x[i] === 'F'){
                result += sh(x[i]) * Math.pow(k, j)
            }
            else if(x[i] !== '0'){
                result += x[i] * Math.pow(k, j)
            }
            j++
        }
        return result
    }

    function sh(n) {
        if(n === 'A') return 10
        if(n === 'B') return 11
        if(n === 'C') return 12
        if(n === 'D') return 13
        if(n === 'E') return 14
        if(n === 'F') return 15
    }

    if(inN !== 10){
        let result = ''
        let numlenght = 0
        for(let i in num){
            numlenght++
        }
        const someresult = BinRev(num, numlenght, inN)
        if(outN === 10) return res.status(200).json({result: someresult})
        else{
            result = anything(someresult)
        }
        
        return res.status(200).json({result})
    }
    else if (inN === 10){
        const result = anything(num)
        return res.status(200).json({result})
    }
}
exports.convert = convert;