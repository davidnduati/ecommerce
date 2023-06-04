let main = document.querySelector(".main");

async function itemcreate(data) {
    let itemElement = document.createElement("div");
    itemElement.classList.add("item");

    

    let title = document.createElement("label");
    title.innerText = data.title;

    let price = document.createElement("p");
    price.innerText = data.price;

    let category = document.createElement("p");
    category.innerText = data.category;

    itemElement.append(img, title, price, category);

    main.append(itemElement);
}

async function fetchData() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function initialize() {
    let data = await fetchData();
    if (data) {
        data.forEach(itemData => {
            itemcreate(itemData);
        });
    }
}

initialize();
