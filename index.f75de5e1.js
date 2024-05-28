"use strict";
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
const tree = document.createElement("div");
tree.id = "tree";
document.body.append(tree);
function createTree(element, data) {
    if (!Object.keys(data).length) return;
    const ul = document.createElement("ul");
    element.append(ul);
    for(const key in data){
        const li = document.createElement("li");
        li.innerText = key;
        ul.append(li);
        createTree(li, data[key]);
    }
}
createTree(tree, food);

//# sourceMappingURL=index.f75de5e1.js.map
