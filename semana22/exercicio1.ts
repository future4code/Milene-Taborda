export const editString = (stringOne: string, stringTwo: string): boolean => {

    if (stringOne.length < stringTwo.length -1 || stringOne.length > stringTwo.length +1) {
       return false
    }

    let caracterQuantity = 0

    for (const caracter of stringOne) {
        if (stringTwo.indexOf(caracter) !== -1) {
            caracterQuantity++
        }
    }
    return (
        caracterQuantity <= stringTwo.length + 1 && caracterQuantity >= stringTwo.length -1 
    )
} 
