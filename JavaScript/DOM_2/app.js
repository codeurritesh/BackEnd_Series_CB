const h1 = document.getElementsByTagName('h1')[0];
h1.style.color = "green";
h1.style.backgroundColor = "skyblue";
h1.style.padding = "2%";
h1.style.border = "3px blue solid";
//-------------------------------------------set attributes---------------------------

h1.setAttribute("class", "heading");//Adding the class inside the given element
h1.setAttribute("class", "heading one");//Adding the two class inside the given element

//-------------------------------------Classlist-------------------------------------------

console.log(h1.classList);//['heading', 'one', value: 'heading one']
h1.classList.add('Head');// add one more class to the element
h1.classList.remove("Head");//remove Head class fro the elemsnt
h1.classList.remove('heading'); //remove heading
console.log(h1.classList.contains('one'));// return true because one is the class
//selection the Animal Ui to apply CSS
const animalul = document.querySelector('ul');

animalul.classList.toggle('animals');//toggle is just used to add class is it is not added
// animalul.classList.toggle('animals');// and if same class already exist inside then it remove that same class
animalul.classList.toggle('hide');//hide the content
animalul.classList.toggle('hide');//show the content

//--------------------------------------------------paent child element-------------------------

console.log(animalul.parentElement);// return body
console.log(animalul.parentElement.parentElement);//return parent of body which is HTML
console.log(animalul.parentElement.parentElement.parentElement);//return null because tha parent Element of HTML
console.log(animalul.childElementCount)//count the number of childs
const img = document.querySelector('img');
console.log(img.previousElementSibling);//return previous sibling which is <Ul>
console.log(img.nextElementSibling)// return next Element sibling which is <br>
const para=document.getElementById('para');

//------------------------------------------Creating new Elelents and appends--------------------

const strong = document.createElement('strong');//just creating an element Strong
strong.innerText = "Hello Guysss this is innertext";// Adding the innner text to new made element
para.appendChild(strong);// append in para at last as child
//appendChild() is only used to append element in end of the element not fir text
//append() used to append tha text as well as element
para.prepend(strong);//add strong element at the starting of the para, used for both element and text
const h2 = document.createElement('h2');
h2.innerText = "H2 is running";
para.after(h2);// add the new element or text after the para
para.before(h2);//add the new element or text before para
// para.after("hello"); 
const newimage = document.createElement('img');// create new element img
img.src = "https://images.unsplash.com/photo-1676439284493-453f697abff0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60";
para.after(newimage);// add image after the para

//------------------------------------------Adding new ekement at the last of animal li-----------------------

const lilast = document.querySelector('ul li:last-child');// finding the last li of the ul animals
const newli = document.createElement('li');//creating new li to insert at last
lilast.innerText = "Ritesh";//inserting the data
lilast.after(newli);// adding the newli after last li found
