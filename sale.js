let items = [ {
    Name: "Tiara",
    Price: 189.69,
    inStock: true
},
{
    Name: "Pendant necklace",
    Price: 67.79,
    inStock: false
},
{
    Name: "Charm bracelet",
    Price: 19.99,
    inStock: true
},
{
    Name: "earrings",
    Price: 19.99,
    inStock: true
},
{
    Name: "nose rings",
    Price: 32.49,
    inStock: true
}
]

for (let i = 0; i < items.length; i ++ ){
    console.log (` ${items[i].Name} | ${items[i].Price} | ${items[i].inStock ? "available" : "not available"}`)


function salePrice(i) {
    return [i] / 2;    
}
console.log(salePrice(items[i].Price))
}

function totalInvetory(items){
    let total = 0
    for (let i = 0; i < items.length; i ++ ){
        total = total + items[i].Price
}
console.log(`Total value of current inventory is ${total}`)
}

function isAvailable(items){
    let isconfirmed = 0
    for (let i = 0; i < items.length; i ++ ){

        if (items[i].inStock === true && items[i].Price > 20.0){
            console.log (`${items[i].Name} is confirmed`)
            isconfirmed ++
        }

    }
    if (isconfirmed === 0){
        console.log(`no valued items in stock`)
    }
}

function addInventory (items, Name, Price, inStock){
    items.push({
        Name: Name,
        Price: Price,
        inStock: inStock
        }
    )
    console.log(items)
}
totalInvetory(items)
isAvailable(items)
addInventory(items, "Anklet", 34.49, true )
