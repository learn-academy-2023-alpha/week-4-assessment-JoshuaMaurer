# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# input: a number
# output: The number that was input and a string stating whether or not the number is even or odd 

# pseudo: Defining the method oddOrEven, use the conditional if else statment to pass the input argument through the % (modulo) 2. Since the modulo devides then return the remainder, if the remainder == 0 then the input number is even and will return "#{number} is even" using string interpolation. Else will be used to catch the odd numbers using string interpolation as well, "#{number} is odd"

def odd_or_even (number)
    if number % 2 == 0
        "#{number} is even"
    else
        "#{number} is odd"
    end
end

p odd_or_even(7)
p odd_or_even(42)
p odd_or_even(221)

# practice using ternary operator.
p 'Enter any number you would like then press enter: '
p gets.to_i.even? ? 'That is an even number' : 'That is an odd number'

# p 'Enter any number you would like then press enter: '
# input = gets.chomp
# p input.to_i.even? ? "#{input} is an even number" : "#{input} is an odd number"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# input: A string
# output: the input string with all of the vowels removed.

# pseudo: Create a method called no_vowels. pass a string through as the parameter. Using regex, use .gsub to search for all the vowels in the input string. /i is used so that they can be either upper or lower case in the search.  The quotes with no spaces inbetween will be used to replace (substitute) the vowels in the string with nothing, not even a space. Effectively removing all vowels from the input string. 

# def no_vowles (string)
#     string.delete "uoieaAEIOU" # I was currious if the order that the delete criteria were in mattered. It does not
# end

def no_vowles (string)
    string.gsub(/[aeiou]/i, '') # I wrote this method out a second way because I like using regex when I can and I wanted to see how it worked in Ruby. After some research and finding out that it does not work with .delete, gsub seemed to be the best route. 
end

p no_vowles(beatles_album1)
p no_vowles(beatles_album2)
p no_vowles(beatles_album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# input:  A string
# output: The input string and a string interpolation statment of if the input string is a palindrome or not. 

# pseudo: Create a method called is_this_a_palindrome. Pass the input string argument as a parameter for a if else conditional statment. If the string.downcase (using .downcase so that it does not matter what case the input string is in) is equal too (==) string.downcase.reverse. (the addition of .reverse is used to literally reverse the order of the characters in a string.) Then "#{string} is a palindrome" 
# else if the input string is not a palindrome then "#{string} is not a palindrome" 


def is_this_a_palindrome (string)
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome" 
    else
        "#{string} is not a palindrome"    
    end
end

p is_this_a_palindrome(palindrome_tester1)
p is_this_a_palindrome(palindrome_tester2)
p is_this_a_palindrome(palindrome_tester3)