function calculator (req, res){
    const {inN, num1, num2} = req.body
    
    if(inN < 2 && inN > 16) return res.status(400).json({message: 'Введите систему счисления от 2 до 16'})
    else {
        if(inN === 2){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1')
                return res.status(400).json({message: 'вводите только цифры двоичной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1')
                return res.status(400).json({message: 'вводите только цифры двоичной системы счисления'})
            }
        }
        if(inN === 3){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2')
                return res.status(400).json({message: 'вводите только цифры троичной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2')
                return res.status(400).json({message: 'вводите только цифры троичной системы счисления'})
            }
        }
        if(inN === 4){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3')
                return res.status(400).json({message: 'вводите только цифры четверичной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3')
                return res.status(400).json({message: 'вводите только цифры четверичной системы счисления'})
            }
        }
        if(inN === 5){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4')
                return res.status(400).json({message: 'вводите только цифры пятиричной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4')
                return res.status(400).json({message: 'вводите только цифры пятиричной системы счисления'})
            }
        }
        if(inN === 6){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4' && num1[i] !== '5')
                return res.status(400).json({message: 'вводите только цифры шестиричной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4' && num2[i] !== '5')
                return res.status(400).json({message: 'вводите только цифры шестиричной системы счисления'})
            }
        }
        if(inN === 7){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4' && num1[i] !== '5' && num1[i] !== '6')
                return res.status(400).json({message: 'вводите только цифры семиричной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4' && num2[i] !== '5' && num2[i] !== '6')
                return res.status(400).json({message: 'вводите только цифры семиричной системы счисления'})
            }
        }
        if(inN === 8){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4' && num1[i] !== '5' && num1[i] !== '6' && num1[i] !== '7')
                return res.status(400).json({message: 'вводите только цифры восьмиричной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4' && num2[i] !== '5' && num2[i] !== '6' && num2[i] !== '7')
                return res.status(400).json({message: 'вводите только цифры восьмиричной системы счисления'})
            }
        }
        if(inN === 9){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4' && num1[i] !== '5' && num1[i] !== '6' && num1[i] !== '7'
                && num1[i] !== '8')
                return res.status(400).json({message: 'вводите только цифры девятеричной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4' && num2[i] !== '5' && num2[i] !== '6' && num2[i] !== '7'
                && num2[i] !== '8')
                return res.status(400).json({message: 'вводите только цифры девятеричной системы счисления'})
            }
        }
        if(inN === 10){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4' && num1[i] !== '5' && num1[i] !== '6' && num1[i] !== '7'
                && num1[i] !== '8' && num1[i] !== '9')
                return res.status(400).json({message: 'вводите только цифры десятичной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4' && num2[i] !== '5' && num2[i] !== '6' && num2[i] !== '7'
                && num2[i] !== '8' && num2[i] !== '9')
                return res.status(400).json({message: 'вводите только цифры десятичной системы счисления'})
            }
        }
        if(inN === 11){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4' && num1[i] !== '5' && num1[i] !== '6' && num1[i] !== '7'
                && num1[i] !== '8' && num1[i] !== '9' && num1[i] !== 'A')
                return res.status(400).json({message: 'вводите только цифры одиннадцатиричной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4' && num2[i] !== '5' && num2[i] !== '6' && num2[i] !== '7'
                && num2[i] !== '8' && num2[i] !== '9' && num2[i] !== 'A')
                return res.status(400).json({message: 'вводите только цифры одиннадцатиричной системы счисления'})
            }
        }
        if(inN === 12){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4' && num1[i] !== '5' && num1[i] !== '6' && num1[i] !== '7'
                && num1[i] !== '8' && num1[i] !== '9' && num1[i] !== 'A' && num1[i] !== 'B')
                return res.status(400).json({message: 'вводите только цифры двенадцатиричной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4' && num2[i] !== '5' && num2[i] !== '6' && num2[i] !== '7'
                && num2[i] !== '8' && num2[i] !== '9' && num2[i] !== 'A' && num2[i] !== 'B')
                return res.status(400).json({message: 'вводите только цифры двенадцатиричной системы счисления'})
            }
        }
        if(inN === 13){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4' && num1[i] !== '5' && num1[i] !== '6' && num1[i] !== '7'
                && num1[i] !== '8' && num1[i] !== '9' && num1[i] !== 'A' && num1[i] !== 'B'
                && num1[i] !== 'C')
                return res.status(400).json({message: 'вводите только цифры тринадцатиричной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4' && num2[i] !== '5' && num2[i] !== '6' && num2[i] !== '7'
                && num2[i] !== '8' && num2[i] !== '9' && num2[i] !== 'A' && num2[i] !== 'B'
                && num2[i] !== 'C')
                return res.status(400).json({message: 'вводите только цифры тринадцатиричной системы счисления'})
            }
        }
        if(inN === 14){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4' && num1[i] !== '5' && num1[i] !== '6' && num1[i] !== '7'
                && num1[i] !== '8' && num1[i] !== '9' && num1[i] !== 'A' && num1[i] !== 'B'
                && num1[i] !== 'C' && num1[i] !== 'D')
                return res.status(400).json({message: 'вводите только цифры четырнадцатиричной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4' && num2[i] !== '5' && num2[i] !== '6' && num2[i] !== '7'
                && num2[i] !== '8' && num2[i] !== '9' && num2[i] !== 'A' && num2[i] !== 'B'
                && num2[i] !== 'C' && num2[i] !== 'D')
                return res.status(400).json({message: 'вводите только цифры четырнадцатиричной системы счисления'})
            }
        }
        if(inN === 15){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4' && num1[i] !== '5' && num1[i] !== '6' && num1[i] !== '7'
                && num1[i] !== '8' && num1[i] !== '9' && num1[i] !== 'A' && num1[i] !== 'B'
                && num1[i] !== 'C' && num1[i] !== 'D' && num1[i] !== 'E')
                return res.status(400).json({message: 'вводите только цифры пятнадцатиричной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4' && num2[i] !== '5' && num2[i] !== '6' && num2[i] !== '7'
                && num2[i] !== '8' && num2[i] !== '9' && num2[i] !== 'A' && num2[i] !== 'B'
                && num2[i] !== 'C' && num2[i] !== 'D' && num2[i] !== 'E')
                return res.status(400).json({message: 'вводите только цифры пятнадцатиричной системы счисления'})
            }
        }
        if(inN === 16){
            for(let i in num1){
                if(num1[i] !== '0' && num1[i] !== '1' && num1[i] !== '2' && num1[i] !== '3'
                && num1[i] !== '4' && num1[i] !== '5' && num1[i] !== '6' && num1[i] !== '7'
                && num1[i] !== '8' && num1[i] !== '9' && num1[i] !== 'A' && num1[i] !== 'B'
                && num1[i] !== 'C' && num1[i] !== 'D' && num1[i] !== 'E' && num1[i] !== 'F')
                return res.status(400).json({message: 'вводите только цифры шестнадцатиричной системы счисления'})
            }
            for(let i in num2){
                if(num2[i] !== '0' && num2[i] !== '1' && num2[i] !== '2' && num2[i] !== '3'
                && num2[i] !== '4' && num2[i] !== '5' && num2[i] !== '6' && num2[i] !== '7'
                && num2[i] !== '8' && num2[i] !== '9' && num2[i] !== 'A' && num2[i] !== 'B'
                && num2[i] !== 'C' && num2[i] !== 'D' && num2[i] !== 'E' && num2[i] !== 'F')
                return res.status(400).json({message: 'вводите только цифры шестнадцатиричной системы счисления'})
            }
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
        function sh(n) {
            if(n === 'A') return 10
            if(n === 'B') return 11
            if(n === 'C') return 12
            if(n === 'D') return 13
            if(n === 'E') return 14
            if(n === 'F') return 15
        }
    }


    function anything(num){
        let result = ''
        let someresult = ''

        if(num === 0) return res.status(200).json({result: 0})
        result = Bin(num, inN)
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

    if(inN === 10){
        return res.status(200).json({result: (Number(num1) + Number(num2)).toString()})
    }
    else{
        let num1lenght = 0
        let num2lenght = 0
        for(let i in num1) num1lenght++
        for(let i in num2) num2lenght++

        const newNum = BinRev(num1, num1lenght, inN) + BinRev(num2, num2lenght, inN)

        return res.status(200).json({result: anything(newNum)})
    }
}

exports.calculator = calculator