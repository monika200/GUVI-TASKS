var div1 = createDiv('div', 'div1');
var div2 = createDiv('div', 'div2');

var head1 = document.createElement('h1');
head1.setAttribute("class", "head1");
head1.innerHTML = "Calculator";

var input1 = document.createElement('input');
input1.setAttribute("id", "input1");
input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "0");
input1.append("readonly");
input1.setAttribute("value", "");


var div3 = createDiv('div', 'btn-container');

var div4 = createDiv('div', 'row1');
var button1 = createButton('button','cbtn');
button1.innerHTML = "C";
button1.setAttribute("onclick","clear()");
var button2 = createButton('button','btn');
button2.innerHTML = "%";
button2.setAttribute("onclick","show("%")");
var button3 = createButton('button','btn');
button3.innerHTML = "/";
button3.setAttribute("onclick","show("/")");
var button4 = createButton('button','cbtn');
button4.innerHTML = "x";
button4.setAttribute("onclick","deleteback()");

var div5 = createDiv('div', 'row2');
var button5 = createButton('button','btn');
button5.innerHTML = "7";
button5.setAttribute("onclick",'show("7")');
var button6  = createButton('button','btn');
button6.innerHTML = "8";
button6.setAttribute("onclick",'show("8")');
var button7 = createButton('button','btn');
button7.innerHTML = "9";
button7.setAttribute("onclick",'show("9")');
var button8 = createButton('button','btn');
button8.innerHTML = "*";
button8.setAttribute("onclick",'show("*")');

var div6 = createDiv('div', 'row3');
var button9 = createButton('button','btn');
button9.innerHTML = "4";
button9.setAttribute("onclick",'show("4")');
var button10  = createButton('button','btn');
button10.innerHTML = "5";
button10.setAttribute("onclick",'show("5")');
var button11 = createButton('button','btn');
button11.innerHTML = "6";
button11.setAttribute("onclick",'show("6")');
var button12 = createButton('button','btn');
button12.innerHTML = "-";
button12.setAttribute("onclick",'show("-")');

var div7 = createDiv('div', 'row4');
var button13 = createButton('button','btn');
button13.innerHTML = "1";
button13.setAttribute("onclick",'show("1")');
var button14  = createButton('button','btn');
button14.innerHTML = "2";
button14.setAttribute("onclick",'show("2")');
var button15 = createButton('button','btn');
button15.innerHTML = "3";
button15.setAttribute("onclick",'show("3")');
var button16 = createButton('button','btn');
button16.innerHTML = "+";
button16.setAttribute("onclick",'show("+")');

var div8 = createDiv('div', 'row5');
var button17 = createButton('button','btn');
button17.innerHTML = "0";
button17.setAttribute("onclick",'show("0")');
var button18  = createButton('button','eqbtn');
button18.innerHTML = "=";
button18.setAttribute("onclick",'solve()');
var button19 = createButton('button','btn');
button19.innerHTML = ".";
button19.setAttribute("onclick",'show(".")');


div8.append(button17);
div8.append(button18);
div8.append(button19);

div7.append(button13);
div7.append(button14);
div7.append(button15);
div7.append(button16);

div6.append(button9);
div6.append(button10);
div6.append(button11);
div6.append(button12);

div5.append(button5);
div5.append(button6);
div5.append(button7);
div5.append(button8);

div4.append(button1);
div4.append(button2);
div4.append(button3);
div4.append(button4);

head1.append(input1);
div2.append(head1);



div3.append(div4);
div3.append(div5);
div3.append(div6);
div3.append(div7);
div3.append(div8);
div2.append(div3);
div1.append(div2);
document.body.append(div1);















function createDiv(elementName, className = "" ,id = ""){
    var div = document.createElement(elementName);
    div.setAttribute("class", className);
    div.setAttribute("id", id);
    return div;
    }
function createButton(elementName, className = "" ,id = ""){
    var button = document.createElement(elementName);
    button.setAttribute("class", className);
    button.setAttribute("id", id);
    return button;
    }
function screen(valuee)
    {
    document.getElementById("input1").value=valuee;
    }
function show(valuee)   {
        document.getElementById("input1").value+=valuee;
        } 
function solve() { 
            try     { 
                    screen(eval(document.getElementById("input1").value)) 
                    } 
            catch(e) {
                    screen('Error') 
                    } 
                         }
function clear() {
            document.getElementById("input1").value = "";
            }
function deleteback() {
                var valueneed = document.getElementById("input1").value;
                var finalvalueneed = valueneed.substr(0, valueneed.length-1); 
                document.getElementById("input1").value=finalvalueneed;
                
                }