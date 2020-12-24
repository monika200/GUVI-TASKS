var container = document.createElement('container');

//Table1
var table1 = createTable('table',"table1");
var tbody1 = createTbody('tbody','tbody1');
var row1 = createRow('tr','row1');
var col1 = createColumn('td','col1');
var image= document.createElement('img');
image.setAttribute("class", "image1");
image.src= "https://resume-noether-340723.netlify.app/index.jpg";
image.alt = "Image";
col1.append(image);
row1.append(col1);
tbody1.append(row1)
table1.append(tbody1);

//Table2
var table2 = createTable('table',"table2");
var tbody2 = createTbody('tbody', 'tbody2');
var row2 = createRow('tr','row2');
var col2 = createColumn('td','col2');
var col3 = createColumn('td','col3');
var title= document.createElement('h1');
title.setAttribute("class", "title");
title.innerHTML = "Monika Sharma";
col3.append(title);
col2.append(col3);
row2.append(col2);
tbody2.append(row2)
table2.append(tbody2);

//Table3
var table3 = createTable('table','table3');
var tbody3 = createTbody('tbody', 'tbody3');
var row3 = createRow('tr','row3');
var col4 = createColumn('td','col4');
row3.append(col4);
tbody3.append(row3)
table3.append(tbody3);

//Table4
var table4 = createTable('table',"table4");
var tbody4 = createTbody('tbody', 'tbody4');
var row4 = createRow('tr','row4');
var col5 = createColumn('td','col5');
var para1= document.createElement('p');
para1.setAttribute("class", "para1");
para1.innerHTML = "Palaspa Phata, Panvel, Mumbai Maharastra | 9755787123  | monika2004sharma@gmail.com";
col5.append(para1);
row4.append(col5);
tbody4.append(row4)
table4.append(tbody4);

//Bottom Line
var line = document.createElement('hr');
para1.append(line);

//Table5
var table5 = createTable('table',"table5");
var tbody5 = createTbody('tbody', 'tbody5');
var row5 = createRow('tr','row5');

//column1 in table5
var col6 = createColumn('td','col6');

//Table6
var table6 = createTable('table',"table6");
var tbody6 = createTbody('tbody', 'tbody6');
var row6 = createRow('tr','row6');
var col7 = createColumn('td','col7');
var span1 = document.createElement('span');
span1.setAttribute("class", "icon");
var icon1 = document.createElement('i');
icon1.setAttribute("class", "fas fa-user");
icon1.setAttribute("style", "font-size:12px; color:orange;");
var span2 = document.createElement('span');
span2.innerHTML="Profile";
var para2 = document.createElement('p');
para2.setAttribute("class", "about");
para2.innerHTML="An exceptionally creative individual with strong analytical skills in <br> Computer Engineering. Looking to obtain the position of software<br>developer.Offering ability to work with various programming<br>languages,  including Python, HTML, CSS, JavaScript and more.";
var row7 = createRow('tr','row7');
var col8 = createColumn('td','col8');
var span3 = document.createElement('span');
span3.setAttribute("class", "icon");
var icon2 = document.createElement('i');
icon2.setAttribute("class", "fas fa-flask");
icon2.setAttribute("style", "font-size:12px; color:orange;");
var span4 = document.createElement('span');
span4.innerHTML="Skills";

//Table7
var table7 = createTable('table',"table7");
var tbody7 = createTbody('tbody', 'tbody7');

//In table7 row1
var row8 = createRow('tr','row8');
var col9 = createColumn('th','col9');
col9.setAttribute("class","col9")
col9.innerHTML="Technical Skills";
//col9.setAttribute("colspan","2");
col9.setAttribute("style", "text-align:center");

//Intable7 row2
var row9 = createRow('tr','row9');
var col10 = createColumn('td','col10');
col10.innerHTML="Python"
var col11 = createColumn('td','col11');
var input1 = document.createElement('input');
input1.setAttribute("type", "range")
input1.setAttribute("min","0");
input1.setAttribute("max","60");
input1.id= "skills";

//Intable7 row3
var row10 = createRow('tr','row10');
var col12 = createColumn('td','col12');
col12.innerHTML="HTML"
var col13 = createColumn('td','col13');
var input2 = document.createElement('input');
input2.setAttribute("type", "range")
input2.setAttribute("min","0");
input2.setAttribute("max","70");
input2.id= "skills";

//Intable7 row4
var row11 = createRow('tr','row11');
var col14 = createColumn('td','col14');
col14.innerHTML="CSS"
var col15 = createColumn('td','col15');
var input3 = document.createElement('input');
input3.setAttribute("type", "range")
input3.setAttribute("min","0");
input3.setAttribute("max","50");
input3.id= "skills";

//Intable7 row5
var row12 = createRow('tr','row12');
var col16 = createColumn('td','col16');
col16.innerHTML="JavaScript"
var col17 = createColumn('td','col17');
var input4 = document.createElement('input');
input4.setAttribute("type", "range")
input4.setAttribute("min","0");
input4.setAttribute("max","50");
input4.id= "skills";


//Intable7 row6
var row13 = createRow('tr','row13');
var col18 = createColumn('td','col18');
col18.innerHTML="SQL"
var col19 = createColumn('td','col19');
var input5 = document.createElement('input');
input5.setAttribute("type", "range")
input5.setAttribute("min","0");
input5.setAttribute("max","60");
input5.id= "skills";


var row14 = createRow('tr','row14');
var col20 = createColumn('th','col20');
col20.setAttribute("class","col9")
col20.innerHTML="Other Skills";
col20.setAttribute("colspan","2");//not working-setattribute-colspan,src and href,bold tag
col20.setAttribute("style", "text-align:center");


var row15 = createRow('tr','row15');
var col21 = createColumn('td','col21');
col21.innerHTML="Project Management"
var col22 = createColumn('td','col22');
var input6 = document.createElement('input');
input6.setAttribute("type", "range")
input6.setAttribute("min","0");
input6.setAttribute("max","50");
input6.id= "skills";

var row16 = createRow('tr','row16');
var col23 = createColumn('td','col23');
col23.innerHTML="Dession Making"
var col24 = createColumn('td','col24');
var input7 = document.createElement('input');
input7.setAttribute("type", "range")
input7.setAttribute("min","0");
input7.setAttribute("max","50");
input7.id= "skills";

var row17 = createRow('tr','row17');
var col25 = createColumn('td','col25');
var span5 = document.createElement('span');
span5.setAttribute("class", "icon");
var icon3 = document.createElement('i');
icon3.setAttribute("class", "fas fa-briefcase");
icon3.setAttribute("style", "font-size:12px; color:orange;");
var span6 = document.createElement('span');
span6.innerHTML="Work Experience";
var para3 = document.createElement('p');
para3.innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit.Sint aut sed soluta?<br>Esse nihil corrupti ullam.Autem accusamus qui vel <br>doloremque nam nisi dolorum  expedita, alias commodi cumque et facilis!";
var para4 = document.createElement('p');
para4.innerHTML="Educational Consultant";
var ul1 = document.createElement('ul');
var li1 = document.createElement('li');
li1.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis <br>ducimus nobis sunt doloribus quisquam alias temporibus voluptatum<br>reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias<br>similique asperiores?";
var li2 = document.createElement('li');
li2.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis <br>ducimus nobis sunt doloribus quisquam alias temporibus voluptatum<br>reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias<br>similique asperiores?";
var li3 = document.createElement('li');
li3.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis <br>ducimus nobis sunt doloribus quisquam alias temporibus voluptatum<br>reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias<br>similique asperiores?";

//column2 in Table5
var col26 = createColumn('td','col26');
var table8 = createTable('table',"table8");
var tbody8 = createTbody('tbody', 'tbody8');

//row1 in table5 column2
var row18 = createRow('tr','row18');
var col27 = createColumn('td','col27');
var span7 = document.createElement('span');
span7.setAttribute("class", "icon");
var icon4 = document.createElement('i');
icon4.setAttribute("class", "fas fa-briefcase");
icon4.setAttribute("style", "font-size:12px; color:orange;");
var span8 = document.createElement('span');
span8.innerHTML="Work Experience";
var para5 = document.createElement('p');
para5.innerHTML="Educational Consultant";
var ul2 = document.createElement('ul');
var li4 = document.createElement('li');
li4.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis <br>ducimus nobis sunt doloribus quisquam alias temporibus voluptatum<br>reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias<br>similique asperiores?";

//row2 in table5 column2
var row19 = createRow('tr','row19');
var col28 = createColumn('td','col28');
var span9 = document.createElement('span');
span9.setAttribute("class", "icon");
var icon5 = document.createElement('i');
icon5.setAttribute("class", "fas fa-graduation-cap");
icon5.setAttribute("style", "font-size:12px; color:orange;");
var span10 = document.createElement('span');
span10.innerHTML="Education";
var para6 = document.createElement('p');
para6.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis <br>ducimus nobis sunt doloribus quisquam alias temporibus voluptatum<br>reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias<br>similique asperiores?";
var para7 = document.createElement('p');
para7.innerHTML="Educational Consultant";
var ul3 = document.createElement('ul');
var li5 = document.createElement('li');
li5.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis <br>ducimus nobis sunt doloribus quisquam alias temporibus voluptatum<br>reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias<br>similique asperiores?";
var li6 = document.createElement('li');
li6.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis <br>ducimus nobis sunt doloribus quisquam alias temporibus voluptatum<br>reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias<br>similique asperiores?";
var li7 = document.createElement('li');
li7.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis <br>ducimus nobis sunt doloribus quisquam alias temporibus voluptatum<br>reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias<br>similique asperiores?";
var li8 = document.createElement('li');
li8.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis <br>ducimus nobis sunt doloribus quisquam alias temporibus voluptatum<br>reprehenderit, vero quo! Quos est veritatis placeat? Ex ullam alias<br>similique asperiores?";


col7.append(span1);
span1.append(icon1);
col7.append(span2);
col7.append(para2);
row6.append(col7);
tbody6.append(row6);


col8.append(span3);
span3.append(icon2);
col8.append(span4);
row7.append(col8);
tbody6.append(row7);


row8.append(col9);
tbody7.append(row8);
table7.append(tbody7);
row7.append(table7);

col8.append(table7);



row9.append(col10);
col11.append(input1);
row9.append(col11);
tbody7.append(row9);


//-----------------------------
row10.append(col12);
col13.append(input2);
row10.append(col13);
tbody7.append(row10);

//----------------------------------

row11.append(col14);
col15.append(input3);
row11.append(col15);
tbody7.append(row11);
//-----------------------------------
row12.append(col16);
col17.append(input4);
row12.append(col17);
tbody7.append(row12);

//-----------------------------
row13.append(col18);
col19.append(input5);
row13.append(col19);
tbody7.append(row13);
//----------------------------


row14.append(col20);
tbody7.append(row14);

row15.append(col21);
col22.append(input6);
row15.append(col22);
tbody7.append(row15);

row16.append(col23);
col24.append(input7);
row16.append(col24);
tbody7.append(row16);

row17.append(col25);
span5.append(icon3);
col25.append(span5);
col25.append(span6);
col25.append(para3);
col25.append(para4);
col25.append(ul1);
ul1.append(li1, li2, li3);
tbody7.append(row17);



table6.append(tbody6);
col6.append(table6);
row5.append(col6);

span7.append(icon4);
col27.append(span7);
col27.append(span8);
col27.append(para5);
col27.append(ul2);
ul2.append(li4);
row18.append(col27);
tbody8.append(row18);


span9.append(icon5);
col28.append(span9);
col28.append(span10);
col28.append(para6);
col28.append(para7);
col28.append(ul3);
ul3.append(li5, li6, li7, li8);
row19.append(col28);
tbody8.append(row19);
table8.append(tbody8);
col26.append(table8);
row5.append(col26);


tbody5.append(row5)
table5.append(tbody5);




container.append(table1, table2, table3, table4, table5)
document.body.append(container);

function createTable(elementName, className = "" ,id = ""){
    var table = document.createElement(elementName);
    table.setAttribute("class", className);
    table.setAttribute("id", id);
    return table;
    }
function createTbody(elementName, className = "" ,id = ""){
        var tbody = document.createElement(elementName);
        tbody.setAttribute("class", className);
        tbody.setAttribute("id", id);
        return tbody;
        }
function createRow(elementName,className = "" ,id = ""){
    var tr = document.createElement(elementName);
    tr.setAttribute("class", className);
    tr.setAttribute("id", id);
    return tr;
    }
function createColumn(elementName,className = "" ,id = ""){
var td = document.createElement(elementName);
td.setAttribute("class", className);
td.setAttribute("id", id);
return td;
}