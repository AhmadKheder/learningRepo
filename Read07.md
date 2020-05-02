# JavaScript

## Introduction
Javascript allows you to make web pages more interactive by acessing and modifying the content and markup used in  a web page while it is being viewd in the browser.

1. ACCESS CONTENT 
    - You can use JavaScript to select any
    element, attribute, or text from an
    HTML page.
2. MODIFY CONTENT 
    - You can use JavaScript to add
    elements, attributes, and text to the
    page, or remove them.
3. PROGRAM RULES 
    - You can specify a set of steps for
the browser to follow (like a recipe),
which allows it to access or change the
content of a page. 
4. REACT TO EVENTS 
    - You can specify that a script should run
when a specific event has occurred



# A SCRIPT IS A SERI ES OF INSTRUCTIONS *that a computer can follow to achieve a goal.*

#### lets Start with the big picture of what you want to achieve, and break that down into smaller steps.

1.  DEFINE THE GOAL 
First, you need to define the task you want to
achieve. You can think of this as a puzzle for the
computer to solve. 

2. DESIGN THE SCRIPT 
To design a script you split the goal out into a series
of tasks that are going to be involved in solving this
puzzle. This can be represented using a flowchart.

You can then write down individual steps that the
computer needs to perform in order to complete
each individual task (and any information it needs to
perform the task), rather like writing a recipe that it
can follow. 

3. CODE EACH STEP 
Each of the steps needs to be written in a
programming language that the compu ter
understands. In our case, this is JavaScript. 


+ Designing a script *tasks* could be done using the FLOWCHART
+ Designing a script *STEPS* could be doneBY BREAKING DOWN TASKS INTO S SEQUENCE OF STEPS

[SKETCHING OUT THE TASKS IN A FLOWCHART ](https://www.hci.com.au/flowcharting/)







# EXPRESSIONS

1. EXPRESSIONS THAT JUST ASSIGN A VALUE TO A VARIABLE 
```javascript
var color = 'beige'; 

```

1. EXPRESSIONS THAT USE TWO OR MORE VALUES TO RETURN A  SINGLE VALUE
```javascript
var area = 3 * 2; 

```

# OPERATORS 
Expressions rely on things called operators; they allow programmers to
create a single value from one or more values. 


* ASSIGNMENT OPERATORS 

```javascript
color = 'beige'; 
// The value of co 1 or is now beige.
```

* ARITHMETIC OPERATORS
```javascript
area = 3 * 2; 
//The value of area is now 6. 
```
* STRING OPERATORS
```javascript
greeting= 'Hi 1 + 'Mol ly'; 
// The value of greeting is now Hi Molly
```


* COMPARISON OPERATORS  

```javascript
buy = 3 > 5; 
// The value of buy is fa1se. 
```

* LOGICAL OPERATORS 


```javascript
buy= (5 > 3) && (2 < 4)
// The value of buy is now true. 
```
## ARITHMETI C OPERATORS 

[![img](https://qph.fs.quoracdn.net/main-qimg-720169782501646e393ccbbdc82323a6)](https://press.rebus.community/programmingfundamentals/chapter/arithmetic-operators/)

## STRING OPERATOR 



There is just one string operator: the+ symbol.
It is used to join the strings on either side of it. 

![stringOperator](https://image.slidesharecdn.com/christina-truong-javascript-ebookcraft2017-slides-170322154857/95/javascript-and-epub-making-interactive-ebooks-christina-truong-ebookcraft-2017-63-638.jpg?cb=1490197752)





# Fuctions

### WHAT IS A FUNCTION? 
Functions let you group a series of statements together to perform a
specific task. If different parts of a script repeat the same task, you can
reuse the function (rather than repeating the same set of statements). 


*A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().*

```javascript
var p1 = 2;
var p2 = 3;

function multiply(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

```
## Declaring a Function
![JSFUNC](https://tutorial.techaltum.com/images/javascript-functions.jpg)


## Calling the Fuction above

```javascript
multiply(); // by its name with the pranthesisi
```

## Calling the Fuction above and passing values

```javascript
multiply(4,5); // returns 20 which is a SINGLE VALUE returned by the function
```


