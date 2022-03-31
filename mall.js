var input=require('readline-sync')

const saman = {100: ['Parlay', 'crack jack', 'snack light', 'pasta', 'cherry', 'pepci'],
150: ['mask', 'rumal', 'Tooth brush', 'spoon', 'tar', 'wire', 'chain', 'kharada'],
200: ['cut peace', 'mikl', 'juse', 'pani bottol', 'tube', 'colget'],
500: ['chappal', 'sandal', 'lock', 'bulb', 'wire 2/3', 'pant', 'note book', 'pad']}
let saraleliya = []



function buyStuf(){
    while(true){
        let chooce=parseInt(input.question('Aap ko kitane rupaye wala saman kharidana hai.100/ 150/ 200/ 500 :'))
        console.log(saman[chooce]);
        let lena=input.question('isame se aapko kya lena hai :')
        let count=saraleliya.filter(elm=>{
            if(elm==lena){
            return elm}
            }).length
        let stock=10-count
        if (stock==0){
            console.log('You cant buy this thing, we dont have in stock')
            break}
        let kitna=input.question(`we have ${stock} item of ${lena} how much items do you want to buy :`)
        if (kitna>stock){
            console.log(`we don't have this much items of ${lena}`)
            break}
        let index=saman[chooce].indexOf(lena)
        let liya=saman[chooce][index]

        // for(let s=0; s<kitna; s++){
        //     saraleliya.push(liya)}

        let v = [...Array(parseInt(kitna)).keys()]
        v.forEach((e)=>{
            saraleliya.push(liya)
        });
        break
    }
}
function cart(){

    console.log(saraleliya);
    if (saraleliya.length===0){
        console.log("You don't have anything in your cart.")
    }
    else{
        puch=parseInt(input.question('Do you want to remove anything form your cart if yes then press 1, else press 2 :'))
    if (puch==1){
        nikal=input.question('which element you wnat to remove :')
        let count=saraleliya.filter(elm=>{
            if(elm==nikal){
            return elm}
            }).length
        index=saraleliya.indexOf(nikal)
        if (count>1){
            kitana_nikalna=parseInt(input.question(`How much ${nikal} do you want to remove :`))
            saraleliya.splice(index,kitana_nikalna)
            console.log(`${nikal} is removed successfuly from your cart .`)
        }
        else{
        nikala=saraleliya.splice(index,1)
        console.log(`${nikal} is removed successfuly from your cart .`)
        }
        
    }

}
    }



// function showBill(){
//     let Thing_price=[]
//     for(let thing of saraleliya){
//         for(let cost in saman ){
//             if(saman[cost].includes(thing)){
//                 Thing_price.push([thing,cost])
//             }
//         }
//     }
//     let sum=0
//     for(let g of Thing_price){
//         console.log(...g)
//         sum+=parseInt(g[1])
//     }
//     console.log(`your total bill is ${sum}`)
//     return sum
// }



function showBill(){
    let Thing_price=[]
    saraleliya.forEach(thing=>{
        Object.keys(saman).forEach(cost=>{
            if(saman[cost].includes(thing)){
                Thing_price.push([thing, cost])
            }
        })
    })
    sum=0
    Thing_price.forEach(elem=>{
        console.log(...elem)
        sum+=parseInt(elem[1])
    })
    console.log(`your total bill is ${sum}`);
    return sum


}


function payBill(bill){
    let percent;
    let discount;
    if(bill<50){
        percent=0}
    else if (bill>150 && bill<400){
        percent=7
        discount=(bill*percent)/100}
    else if (bill>400 && bill<1000){
        percent=9
        discount=(bill*percent)/100}
    else if (bill>1000 && bill<2000){
        percent=13
        discount=(bill*percent)/100}
    else if (bill>2000 && bill<5000){
        percent=19
        discount=(bill*percent)/100}
    else if (bill>5000){
        percent=23
        discount=(bill*percent)/100}
    discountn_bill=bill-discount
    console.log(`you got ${percent}% of discount, so now your bill amount is ${discountn_bill}`)
    while (true){
        pay=parseInt(input.question('Pay amount :'))
        if (pay==discountn_bill){
            console.log('Ok Done! Thank you..')
            go=parseInt(input.question('press 1 to Exit :' ))
            if (go==1){
                    quit++}
            break}
        else if (pay>discountn_bill){
            payback=pay-discountn_bill
            console.log(`Sir you gave ${payback}Rs. extra to take it back`)
            go=parseInt(input.question('press 1 to Exit :'))
            if( go==1){
                    quit++}
            break}
        else if( pay<discountn_bill)
            console.log('your give amout is not sufficiant ')
            continue
}
}


let quit=0
let a=0
console.log('Welcome to ITERNITY MALL')
console.log(saman)
while (true){
    if (quit==1){
        break
    }
    console.log('1] Buy stuf')
    if (a > 0){
        console.log('2] My cart\n3] show bill\n4] Pay bill ')}
    a += 1
    let sta = parseInt(input.question('What do you want to do sir :'))
    if (sta==1){
        buyStuf()
    }
    else if (sta==2){
        cart()
    }else if (sta==3){
        console.log("")
        showBill()
        console.log();
    }
    else if (sta==4){
        console.log('')
        payBill(showBill())

    }

}