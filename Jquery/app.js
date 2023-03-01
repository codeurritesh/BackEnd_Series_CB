const menu = ["chole kulche", "Chole bhatore", "chicken", "kadai paneer", "dal makhni", "jeera rice",
    "palak paneer", "pizza", "Egg Curry", "Pav Bhaji", "Naan", "Chicken korma", "Butter Chicken",
    "garlic bread", "Malai chap", "Biriyani", "chicken biriyani", "Salad", "Lemon and garlic rost chicken", "garlic rasam"];
function isveg(food) {
    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') != -1)
        return false;
    return true;
}
const vegmenu = menu.filter(isveg);   
console.log(menu);
console.log(vegmenu);
const jainmenu = menu.filter(isveg).filter(jain);
function jain(food) {
    if (food.toLowerCase().indexOf('garlic') !== -1 || food.toLowerCase().indexOf('onion')!==-1) {
        return false;
    }
    else
        return true;
}
console.log(jainmenu);