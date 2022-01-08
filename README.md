# Arsenal Quiz
This website was built to give users a fun and interactive quiz to test their knowledge of Arsenal FC History. 

This website was made as the fulfillment of the Milestone Project 2 for the Full-Stack Software Development Course provided by Code Institute. It was made using HTML, CSS and JavaScript.

The live website can be found [here](link)

![Responsive Website](./assets/images/readme-images/responsive-design-test.PNG)

## Table of Contents

- [UX Desgin](#UX-Design)
    - [User Stories](#User-Stories)
    - [Structure](#Structure)
    - [Design](#Design)
        - [Colour Scheme](#Colour-Scheme)
        - [Typography](#Typography)
        - [Imagery](#Imagery)
    - [Wireframes/Skeleton](#Wireframes/Skeleton)
    - [Differences in finished site](#Differences-in-finished-site-to-initial-design)
    - [Limitations](#Limitations)
- [Features](#Features)
    - [Home Page](#Home-Page)
    - [Gallery](#Gallery)
    - [Explore Page](#Explore-Page)
    - [Booking Page](#Booking-Page)
    - [Future Features](#Future-Features-to-Implement)
- [Technologies](#Technologies)
    - [Languages](#Languages)
    - [Tools](#Tools)
- [Testing](#Testing)
    - [Overview](#Overview)
    - [Validator Testing](#Validator-Testing)
    - [Issues/Bugs Resolved During Testing](#Issues/Bugs-Resolved-During-Testing)
    - [Testing User Stories](#Testing-User-Stories)
- [Deployment](#Deployment)
    - [GitHub Pages](#GitHub-Pages)
    - [Fork the GitHub](#Fork-the-GitHub)
    - [Make a local clone](#Make-a-local-clone)
- [Credits](#Credits)
- [Acknowledgments](#Acknowledgments)

****

## UX Design 

### User Stories

#### First Time Visitor Expectations

- As a first-time visitor I want:

    - T

#### Returning Visitor Expectations

- As a returning visitor I want:

    - T

#### Frequent Visitor Expectations

- As a frequent visitor I want:

    - T

### Structure

- A navigation bar will be on all pages with links to each page. Nav bar titles will be Home, Gallery, Explore, Book and Contact. This fulfills the user stories:
    - > "I want to understand the purpose of the website and the services on offer"
    - > "I want to be able to easily navigate the website"
- The homepage will provide a basic intro and an overview of courses. This fulfills the user story:
    - >"I want to understand the purpose of the website and the services on offer"
- The use of CSS and media queries will make the website responsive. The initial design will be for mobile devices and the responsive design will ensure the layout changes as the screen size increases. This fulfills the user story:
    - >"I want to be able to view the website on all devices"
- A footer will be on all pages with a newsletter, contact information and social media links. This fulfills the user stories:
    - >"I want to be able to easily navigate the website and find the social media links"
    - >"I want to be able to contact the business to request further information"
    - >"I want to sign up to the newsletter so I can receive updates and potential deals"
- The Gallery page will contain two media carousels, one for photos and one for videos. There will be a horizontal scroll bar enabling the user to scroll between the images/videos. This will fulfill user stories:
    - >"I want to see and watch initial photos/videos to get me inspired"
    - >"I want to check for any new photos or videos uploaded"
- The Book page will contain a form requesting information to book the relevant lessons or events. In this form will be an abilities section, which will contain links to YouTube videos explaining the required skills. It will also contain more specific information on lessons. This will fulfill the user story: 
    - >"I want to be able to book lessons online"
    - >"I want to see courses on offer with prices to quickly decide if it is right for me"
- The Explore page will contain information on the team, upcoming events and more detailed information on snow reports and equipment hire. This fulfills user stories:
    - >"I want to find information on how I can hire equipment"
    - >"I want to be able to check for upcoming events and competitions"
    - >"I want to be able to find information on snow conditions and trail maps"

### Design

#### Colour Scheme

- The three main colours used were Red #EF0001, White #FFFFFF and Oxford Blue #172030. These colours were taken from the Arsenal FC logo to ensure they are official Arsenal FC colours. This allows the site to be instantly identifiable by football fans. 

- The kick off button is coloured in Metallic Sunburst #9D8349 and the background of the page is coloured in Cultured #F1F2F3. Both these colours are taken from the official Arsenal FC website and stick with the main theme.

![Colour Scheme](/assets/images/readme-images/coolers.PNG)

#### Typography

- Source Sans Pro is used throughout the site. It is a sharp, clear and crisp font making it easy to read. It is similar to FF Meta which is the font used on the official Arsenal FC site.

- The site uses uppercase for titles and buttons and capitalisation for all other text. This enables readability and allows the buttons to be easily identified.  

- The font has a sans-serif backup.

#### Imagery

- The images were selected as they show famous moments in Arsenal's history. They were chosen to create excitement whilst being a trip down memory lane.

- The images have been resized to be responsive.

### Wireframes/Skeleton

##### Home Page
![Home Page Wireframe](assets/wireframes/homepage-wireframe.png)

##### Gallery Page
![Gallery Page Wireframe](assets/wireframes/gallery-wireframe.png)

##### Explore Page
![Explore Page Wireframe](assets/wireframes/explore-wireframe.png)

##### Booking Page
![Booking Page Wireframe](assets/wireframes/book-wireframe.png)

### Differences in finished site to initial design 



### Limitations



***

## Features

### Existing Features

#### Home Page



### Future Features to Implement

- 

***

## Technologies

- Languages
    - HTML was the main language used for structure and layout
    - CSS was used the style the website
    - JavaScript was used to run the game and add functionality to the buttons

- Tools    
    - Font Awesome was used for the icons for the social media links
    - Gitpod was used as an online IDE
    - Github was used as the repository for the source code
    - Google Fonts was used for selecting the font styles
    - Coolers.co was used for creating the colour palette, extracting the main colours from the hero image
    - Balsamiq Wireframes was used to create the wireframes in the Structure section of the design
    - Google Dev Tools was used for debugging throughout development and before deployment 
    - Lighthouse was used to audit the website for quality and accessibility 

***

**

## Testing

### Overview

Testing will be performed on the layout, structure and styling of the website. To do this dev-tools (and its other browser counterparts) will be used to view the site on different browsers and different device sizes.

In addition, the deployed site will be tested directly on different devices. The devices used were:
- Laptop with 1920 x 1080px screen
- Google Pixel 3a phone
- iPhone XR

Testing will look for the following:

- All elements will remain where designed for all screen widths, with no overlapping or misalignment
- All links will direct correctly with external links opening in a new browser tab
- Photo titles will appear when hovered over or click upon (for handheld devices)
- The form inputs take the correct information type and are required
- Media shows clearly and is not distorted
- HTML and CSS will be validated using W3C and Jigsaw
- All pages will have a Lighthouse report generated to test for
    - Performance
    - Accessibility
    - Good Practices
    - SEO
- The User Stories from the UX Design section will also be tested

### Validator Testing

- HTML 
    - The official W3C validator came back with one error. 

    ![W3C Validator Results](assets/images/readme-images/w3-validator.PNG) 

    - As the empty h2 tag will be filled from the script.js file when the game is run, this issue does not need to be fixed

- CSS
    - The official Jigsaw validator was used and came back with no errors.

### Lighthouse Report
- Lighthouse Reports for all pages were run on both mobile and desktop devices. All areas tested: Performances, Accessibility, Good Practices and SEO were reported to be in the good range of 90-100.

![Lighthouse Report Desktop](assets/readme.md-images/lighthouse-report-desktop.png)

![Lighthouse Report Mobile](assets/readme.md-images/lighthouse-report-mobile.png)

### Issues/Bugs resolved during testing


### Testing User Stories

The user stories explained in the UX Design section were tested to ensure they work as intended and are easy for the users to achieve. 

As a first time visitor I want:

As a returning visitor I want:

As a frequent visitor I want:


***

## Deployment 

### GitHub Pages

The project is hosted by GitHub and deployed using the following steps:

1. Log in to Github and locate the [Arsenal Quiz Repository](https://github.com/tdawes93/arsenal-quiz)
2. Click the settings button on the menu
3. Click 'Pages' on the list on the right or scroll down until you reach 'Github Pages' and click the link
4. Under 'Sources' select 'main' on the drop-down called 'None' and click save
5. The page will refresh with a link to the deployed site at the top, click this to go to the live website.

### Fork the GitHub

If you wish to view or make changes without affecting the original repository you can 'fork the repository'. This creates a copy to your GitHub and can be done using the following steps:

1. Log in to Github and locate the [Arsenal Quiz Repository](https://github.com/tdawes93/arsenal-quiz)
2. At the top right of the repository underneath the notification icon is the 'fork' button
3. Click this button and you should now have a copy of the repository in your Github account

### Make a local clone

1. Log in to Github and locate the [Arsenal Quiz Repository](https://github.com/tdawes93/arsenal-quiz)
2. At the top of the repository next to the 'Gitpod' button click the dropdown named 'Code'
3. To clone the repository using HTTPS, make sure HTTPS is selected and copy the link
4. Open the Git Bash
5. Change the working directory to the location you wish the clone to be made
6. Type 'git clone' and paste the copied URL
7. Press 'Enter' and your local clone will be created

***

## Credits

- Content
    - [Sunshine](https://www.skibanff.com/), [Lake Louise](https://www.skilouise.com/) and [Whistler](https://www.whistler.com/) ski schools as general inspiration for content and layout.

- Code
    - The code for the saveScore function and the appendScore function was taken and adapted from James Q Quick's YouTube series [Build a Quiz App](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw).

    - The method and some of the code for the checkAnswer function was taken from David Walsh's article on [Event Delegation](https://davidwalsh.name/event-delegate).

    - The questions and answers were taken from [Fun Trivia Arsenal Section](https://www.funtrivia.com/en/Sports/Arsenal-7231.html).

    - General inspiration for the layout and functionality of the quiz was taken from [Buzzfeed Quizzes](https://www.buzzfeed.com/uk/quizzes) and Paul Bowden's [MP2 project](https://github.com/PaulBowden673/Projects-MP-MP2-Quiz). 

- Media
    - All photos were either downloaded from [Unsplash](https://unsplash.com/) or [Pexels](https://www.pexels.com/).

***

## Acknowledgments

I'd like to thank my mentor Spencer Bariball for his support and feedback throughout the project. I'd also like to thank the group of friends and family I had test and give feedback on the site on their various mobiles and laptops.