# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming (often shortened to oop) received its initial mainstream push in the 90's with languages like C, Java, Ruby and even Python. It is based around the idea that objects, holding key:value pairs, can hold different types of data. Objects are also able to perform logic and functionality. The functions that are inside of an object are called Methods. Ruby and Java are examples of OOP based languages. Functional programming leans very heavily on creating software using functions that always have predictable outputs based on the input.   

Researched answer:
Object oriented programming (OOP) is based on the extensive use of objects. Depending on the OOP based language that is being used, there are multiple types of inheritance that are used (An example of this would be class based inheritance with ruby or prototypal inheritance with Javascript). Classes within the objects can be viewed as a template or set of blueprints for how data and functions (Called methods when used in an object) is to be used and/or shared (This is what inheritance is). Data in objects tend to be mutable by design. 
Functional programming is based on the use of functions. Functions in a functional programming based language can, and are, treated very similar to other types of values. They can be used as arguments or even as the output of another function (These are called higher order functions). Unlike objects and OOP, functional programming works off the idea that most values are immutable therefore making copies of the original value versus permanently changing the original value. Functional programming along with their use of immutable data allows for predictable and consistent behavior.
As I was reading through  various examples of both OOP and FP, one of the summaries that really stuck out to me was this, 'Functional programming is best used when there are fewer things and many operations while Object Oriented programming is better used when there are many things with fewer operations'      

2. What is the difference between a Float and an Integer in Ruby?

Your answer: The main difference between a float and integer in Ruby is the decimal point. The float will have at least one decimal whereas the integer is a whole number. When using Ruby, decimal returns will default to integers unless at least one float is used within the method.

Researched answer:
In Ruby, floats, also called floating point numbers are able to contain both irrational and rational numbers. Numbers that hold a partial number. It is essentially a number that has a decimal point. These are referred to as inexact numbers They are considered to be imprecise within the Ruby documentation. Here are a couple examples of floats: 554.3, 5.24, -116.49
An integer represents a numeric integer value in Ruby. They are whole numbers. You are able to perform calculations on them with consistent and repeatable outcomes. 
The following are a examples of integers: 1, -5583, 1034139483
When using these two data types as the operands for when performing calculations in Ruby, the following applies,
integer + integer = integer
float + float = float
float + integer = float
A caveat to this is when dividing integers when there is a remainder. Ruby will convert these into a float
ie. 5/2=2.5

3. Ruby has an implicit return. What does that mean?

Your answer: 
Implicit return in Ruby means that the last part of an action or method, the data that you would like to be returned as the output, does not require the word 'return' before it as it does in other languages such as javascript. It is implied that for Ruby, this is unspokenly there and that the return action will be automatically performed.

Researched answer:
The meaning of implicit return in Ruby is that "if the return is the last expression in a path of execution" that it does not require you to add the keyword return before it. Another way to look at this is that every block in Ruby will automatically return the value of the last line or the last evaluated statement. Other programming languages such as C, python and javascript, the use of explicit (written) return statements are used. On a brief side note to this, you CAN still use the keyword 'return' in Ruby however most people do not since it allows for cleaner and more elegant and minimalistic code. Below are two small examples of an implicit and explicit return.
example:
# Implicit Return
def assessment(josh)
  josh
end
# Explicit Return
def assessment(josh)
  return josh
end

4. What is a block in Ruby?

Your answer:
A block in Ruby is similar to an anonymous function in Javascript. The block can be passed into a Ruby method like the anonymous function can be passed into a function in Javascript. The block uses curly brackets or do/end statements. Arguments are passed through PIPES! ||. 

Researched answer:
A block in Ruby is made up of a chuck (ie.. a block) of code. They are similar to a method however they are not given unique names and are passed to a method call. They are a type of anonymous function that will receive an input and  output a value. There are two different syntax variations to implement a block in Ruby. The first one encapsulates the the block in {} curly brackets. The best practice for this variation is when the block is a single line of code.
The other variation is to use the do / end statement. This is best used for multiline blocks of code. 
In both of the above discussed variations, arguments are passed in between ||, referred to as "PIPES!!!" in Ruby. 
There is an additional way to implement a block in Ruby that we have not covered in class, that is to use the "yield statement to pass arguments into the block.
What this does is uses the yield keyword with a method to call a block.

Here is an example of three separate blocks in Ruby:
- [2, 4, 6].each { |j| puts j }
  
- [1, 3, 5].each do |j|
     puts j
   end
- def this_is_a_yield_block
   p "Method1."
   yield
   p "Method2."
   yield
end   

5. How do you extract a value in a Ruby hash?

Your answer:
To get a specific value from a Ruby hash you call the hash using the specific name of the hash and pass the key name of the value you want to extract in [] brackets.

Researched answer:
Depending on what the specific value you are looking to extract from the Ruby hash is, there are a few different ways to extract the value(s).
If you would like to log all of the key:value pairs inside of the hash, you can just print the entire hash. p hashname
example: 
p truck
output: { :chevy => 'suburban', :ford => 'explorer', :dodge => 'ram', :subaru => 'brat' }

If you were looking to just pull the values out of this block, all of the values, we would use the .values notation. hashname.values
example:
p truck.values
output: ['suburban', 'explorer', 'ram', 'brat'] 

And if you are looking to extract a specific value out of the hash you would call the hash by name and then, inside of a set of brackets, [], pass the name of the key that contains the the value you are trying to extract with a colon before the value. 
example:
p truck[:subaru]
output: 'brat'

In Ruby you can also use symbols, which are immutable and unique identifiers, as keys within a hash.
Looking Ahead: Terms for Next Week

1. Class Inheritance: 
Class inheritance is the idea that classes and the objects that they are associated with can be essentially assigned to be associated with other classes thus being able to share common behavior between classes. 

2. RSpec:
RSpec is short for Ruby Specification. It is a test framework used with the Ruby coding language. Similar to test driven development (TDD) it focuses on behavior-driven development (BDD)

3. CRUD: 
create - read - update - delete
Create: Ability to create new data
Read = Being able to rad/return data
Update: Able to change and modify current data
Delete: Delete and remove current data

4. Test-driven development: 
Test driven development (TDD) - A methodology of writing your tests, watching them fail BEFORE you write you actual code. Then writing the code to make the tests pass.


5. HTTP:
6. HTTP stands for Hypertext Transfer Protocol. It is the application layer for transmitting hypermedia documents between servers and browsers. HTML is one of the types of hypermedia documents that is transferred using this client-server protocol.
