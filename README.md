# Amazona: An ECommerce Website like Amazon.com
Demo: localhost
## Table of Content

 - Video-01-Intro
 - Video-02-Install-VSCode-Chrome
 - Video-03-Website-Template
 - Video-04-Product-List
 - Video-05-Sidebar


## Video-06- Create React App
    We use React library to build the UI elements. To use React write the command 
    "npx create-react-app frontend" (frontend is name of folder)


## Part 7: Render Products (JSX)
This is the home page of e-commerce. It shows a list of products.
Create data.js like class in C# to use OOP.

### JSX (JavaScript XML)
JSX is an XML/HTML - like syntax used by React that extends ECMAScript so that XML/HTML -like text can co-exits with JavaScript/React code. The syntax is intended to be used by preprocessors (i.e., transpilers like Babel) to transform HTML-like text found in JavaScript files into standard JavaScript objects that a JavaScript engine will parse.

Basically, by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures) in the same file as you write JavaScript code, then Babel will transform these expressions into actual JavaScript code. Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScript.


## Part 8: Product Details (React Router)
When the user clicks on a product there should a page to show details about that product. This lesson is all about making an attractive details page.
### Knowledged
#### About React Router
React Router is a collection of **navigational components** that compose declaratively with your application. Whether you want to have **bookmarkable URLs** for your web app or a composable way to navigate in **React Native**, React Router works wherever React is rendering.
![alt text]images/Part8-ReactRouter.jpg

In this part I learn about HTML Links file, ul and li element:
#### Links
We have some method to get file in folder in index.html (code file)[2][3]. Example:
 - "picture.jpg": **a file in the current folder**
 - "images/picture.jpg": the file path points to **a file in the images folder located in the current folder**
 - "/images/picture.jpg": the file path points to a file in **the images folder located at the root of the current web**
 - "../picture.jpg": the file path points to **a file in the images folder located in the folder one level above the current folder**

Reference: 
 [1] https://reacttraining.com/react-router/web/guides/quick-start
 [2] https://bom.to/bhXbWd
 [3] https://www.w3schools.com/html/html_filepaths.asp