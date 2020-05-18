type result2 = {
    quant: number,
    oddNumber: number,
    sum: number
};

function calcArray (array: number[] ):result2{
    const result2={
        quant: array.length,
        oddNumber: 0,
        sum: 0
    }

    array.forEach(element=>{
        
        result2.sum = result2.sum+element;

        if(element%2!==0){
            return result2.oddNumber+=1
        }
    })

    return (result2)
}

const array = [2,3,1,2,1,9,9,8];

console.log(calcArray(array));