# Comoarrison Operators: *Evaluating Conditions*


## It is going to be LOGIC (T/F) so, Focus

- Is Equal : `==`
    + which compares the VALUE.
- Is NOT Equal:` !=`
- Strict Equal To: `===`
    + which compares the VALUE and DATA TYPE.
- Strict NOT Equal To: `!==`
- Greater Than:` >`
- Less Than:` <`
- Greater than or Equal: `>=`
- Less than or Equal:`<=`


# Logical Operators

- Logical AND: `&&` *where both sides of the condition must be True then,the result is True*
- Logical OR: `||` *where both sides of the condition must be False then,the result is False*
- Logical NOT: `!` *This operator takes a single boolean value and inverts it*



# LOOP



Loops are handy, if you want to run the same code over and over again, each time with a different value.
*we have three Loop types, each on with a diffrent structure and  PURPOSE.*

## For loop
A for loop enables a particular set of conditions to be executed repeatedly until a condition is satisfied. Imagine a situation where you would have to print numbers from 1 to 100. What would you do? Will you type in the printf command a hundred times or try to copy/paste it? This simple task would take an eternity. Using a for loop you can perform this action in three statements. This is the most basic example of the for loop. It can also be used in many advanced scenarios depending on the problem statement.
![forLoop!](https://media.geeksforgeeks.org/wp-content/uploads/20191108131134/For-Loop.jpg)

Note:  you should use a for loop when you know how many times the loop should run

## While loop
A while loop is one of the most common types of loop. The main characteristic of a while loop is that it will repeat a set of instructions based on a condition. As far as the loop returns a boolean value of TRUE, the code inside it will keep repeating. We use this kind of loop when we don't know the exact number of times a code needs to be executed.

![whileloop!](https://media.geeksforgeeks.org/wp-content/uploads/20191118164726/While-Loop-GeeksforGeeks.jpg)

Note: While loop is used in situations where we do not know how many times loop needs to be excuted beforehand.


## Do While loop
If you recall the way the for and while loops work, you will remember that these loop types check for the loop condition at the beginning of the loop. Unless the condition is satisfied the loop will not be executed.
The do while loop checks the condition at the end of the loop. This means that the statements inside the loop body will be executed at least once even if the condition is never true.
![doWhileLoop1](https://media.geeksforgeeks.org/wp-content/uploads/20191118154342/do-while-Loop-GeeksforGeeks2.jpg)

Note: A while loop is normally used in a scenario where you don't know how many times a loop will actually execute at runtime. A do-while loop is used where your loop should execute at least one time

### while loop example 

```javascript
let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}
```

