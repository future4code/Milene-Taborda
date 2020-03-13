
class expenseControl {
    constructor(value, expenseType, description) {
        this.value = value
        this.expenseType = expenseType
        this.description = description
    }
}

let arrayExp = [];

function registerExpense() {
    const valueExp = document.getElementById("input-value").value;
    const typeExp = document.getElementById("select-expense-type").value;
    const descriptionExp = document.getElementById("input-description").value;


    if(valueExp === "") {
        alert("Favor, inserir valor válido!")
    } else if(descriptionExp === "") {
        alert("Favor, inserir descrição da despesa!")
    } else {
        const newExpense = new expenseControl(valueExp, typeExp, descriptionExp)
        arrayExp.push(newExpense);
    }


    //console.log(arrayExp)

    valueExp.value = "";
    typeExp.value = "";
    descriptionExp.value = "";
}

function filterExpense() {
    const typeExp = document.getElementById("select-expense-type").value;
    const valueMax = Number(document.getElementById("max-value").value);
    const valueMin = Number(document.getElementById("min-value").value);

    if(valueMax === "" || valueMax === null || valueMin === "" || valueMin === null) {
        alert("Favor, inserir valores válidos!");
    } else {
        const arrayFilterExp = arrayExp.filter((expense, idx, arr) => {
            return expense.expenseType === typeExp && expense.value >= valueMin && expense.value <=valueMax;
        })
        console.log(arrayFilterExp);
    }
   
}

function cleanFilter() {
    value.value = "";
    expenseType.value = "";
    description.value = "";
}

