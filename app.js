// BUDGET CONTROLLER
var budgetController = (() => {

    // Some Code

})()

// UI CONTROLLER
var UIController = (() => {


    const DOMStringsList = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: () => {
            return {
                type: document.querySelector(DOMStringsList.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMStringsList.inputDescription).value,
                value: document.querySelector(DOMStringsList.inputValue).value
            }
        },
        getDOMStrings: () => {
            return DOMStringsList
        }
    }

})()

// GLOBAL APP CONTROLLER
var controller = ((budgetCtrl, UICtrl) => {
    var DOM = UICtrl.getDOMStrings()
    var ctrlAddItem = () => {
        // 1. Get the feild Input data
        var input = UICtrl.getInput()
        console.log(input)
        // Add the item to the budget controller

        // Add the item to the ui

        // Calculate the budget

        // Display the budget on the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', (event) => {
        if (event.keycode === 13 || event.which === 13) {
            ctrlAddItem()
        }

    })


})(budgetController, UIController)