# Project Overview

## Project Links

- [GitHub](https://github.com/smwellmer/Project2)
- [Deployed on Netlify](https://swellmer-project2.netlify.app/)

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 


[API URL](https://cdn.contentful.com/spaces/0ds39ghov63b/environments/master/entries?access_token=MhC6oO1V5NEeiAYNdZRgfn8m3yrWMxgt__MEatT-oJM&content_types/product)


```
{fields: {
productName: "Coffee Mug",
image: {
sys: {
type: "Link",
linkType: "Asset",
id: "6jlB4UpUPww2Kt1pDdbVUb"
}
},
productPrice: 12.99,
description: "Coffee mug made specifically for programmers. It will not work if you're not a programmer. Sorry."
}} }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Home Page Wireframe](https://i.imgur.com/gIJwrGp.jpg)
- [MyCart Page Wireframe](https://i.imgur.com/4AxYRTW.jpg)
- [coffeeVERSE React Architecture](https://i.imgur.com/EBi92Mt.jpg)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- Create and call my Contentful API
- Home page contains Product tiles
- Functioning links for Home and MyCart
- Create myCart Page
- Allow user to add items to cart

#### PostMVP

- create search feature
- Categorize types of products on main page

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Item | This will render data from API call  |
| Button | This will contain the "add to cart" function and be placed in each item component |
| Home | Containing all of the Items |
| Main | Container for Header, and where Home and MyCart populate |
| MyCart | Where all of the "added" items will be listed  |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | 
| --- | :---: |  :---: | :---: |
| Planning (Wireframe, Architecture, Timetable) | H | 3hrs| 3hrs | 
| Creating data in API | H | 3hrs | 1.5hrs |
| Create Header with Links | H | 2.5hrs| 1 hr |
| Create Home Page/Component | M | 3hrs| 2hrs |
| Create MyCart Page/Component | M | 3hrs| 2hrs |
| Create Item Component | H | 1.5hrs| 1hr |
| Routing & add/removeFromCart functions| H | 3hrs| 5hrs |
| Styling | L | 3hrs| 8hrs |
| Total | H | 22 hrs| 23.5 hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
