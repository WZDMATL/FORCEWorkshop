# PIE 2-DAY FORCE Workshop Coding Template
This code was created by Amethyst Bush El for Powerful Improvements for Education's 2-Day FORCE Workshop! #PiEForever ‼️

<img alt="FORCE Workshop" src="https://infallible-archimedes-8c04df.netlify.app/images/FORCE%20Workshop.png" />

## Description

This coding template was created to serve as a template for a coding workshop for students between the ages of 4 to 18. The FORCE Workshop was a 5-location tour held in 2021 and taught 200+ students in Georgia HTML5, CSS3, JS and Bootstrap.

# How it's built

### Table of Contents
∙ [images](https://github.com/WZDMATL/FORCEWorkshop/tree/main/images)
<br />
  a. [Responsive](https://github.com/WZDMATL/FORCEWorkshop/tree/main/images/Responsive)
  <br />
∙ [src](https://github.com/WZDMATL/FORCEWorkshop/tree/main/src)
<br />
  a. [index.css](https://github.com/WZDMATL/FORCEWorkshop/blob/main/src/index.css)
  <br />
  b. [index.js](https://github.com/WZDMATL/FORCEWorkshop/blob/main/src/index.js)
  <br />
  c. [links.html](https://github.com/WZDMATL/FORCEWorkshop/blob/main/src/links.html)
  <br />
∙ [README.md](https://github.com/WZDMATL/FORCEWorkshop/blob/main/README.md)
<br />
∙ [index.html](https://github.com/WZDMATL/FORCEWorkshop/blob/main/index.html)
<br />

## images
The images folder contains the header logo in a png file and the social media placeholder png file at the bottom of the homepage.

#### responsive
These are the images used in the slider. 

## src
A majority of the website's page content is stored in the <code>/src/</code> directory and in an HTML file. I started with index.html and then created the src folder to store the css file, js file and an additional html file (links.html). The images are placed in the <code>/images/</code> folder.

#### index.css
Establishing the <code>root</code> makes coding css easier.

<code>
  :root {
  --primary-color: black;
  --secondary-color: white;
  --primary-font-family: "Playfair Display", serif;
  --default-font-family: "Poppins", sans-serif;
  --box-shadow: rgba(46, 46, 51, 0.08) 0px 18px 18px 0;
}
</code>  
<br />
<br />
The <code>body</code> element is established first to cover the entire webpage. Next, elements (ex. h1, a, form, button, etc.) are styled. Afterwards, classes (ex. class="navbar") are styled. Lastly, each <code>id</code> is styled.
<br />
<br />

In development, margin is the space around the outside of an element, while padding is around the inside of an element. Notice how the yellow box moves in this [margin example](https://developer.mozilla.org/en-US/docs/Web/CSS/margin), but it does not move at all in this [padding example](https://developer.mozilla.org/en-US/docs/Web/CSS/padding). 

This difference is because padding will not move the margin at all, it will only create space between the margin's edge and the edge of what's inside it. See how padding above 0px pushes the text away from the yellow box.

Elements Examples: <code>h1 {} a {} form {} button {}</code>
<br />
Classes Example: <code>.navbar {}</code>
<br />
ID Example: <code>#sourceLink {}</code>

##### Flex & Grid
The parent div element <code>class="slide-track"</code> display is set to grid, creating a column and row. Display is set to flex for each child div element <code>class="slide"</code> to create a row  for the slider images.

##### Animation
::before and ::after are [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/::after), and they establish properties for what comes before and after an element. In development, they create the first child (before) and last child (after) of an element.

<code>@keyframes scroll</code> is set to initiate the scroll horizontally. 

TranslateX: rearranges an element along the x axis (horizontally)

<code>
  @keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 9));
  }
} 
</code>

TranslateZ: rearranges an element along the z-axis in a three-dimensional (3D) space

<code>.curLogo:hover {
  transform: translateZ(20px);
}</code>

CSS Transitions: provide a way to control animation speed when properties change.

CSS Properties: list of specific changes of an element, class or id inside the { ... } block

Transform: used to alter an element's coordinates. 

In this case, we use transition and transform to expand each image on hover. Each logo (curLogo class) includes the transition property. <code>transition: transform 1s</code> is set to expand each image in the scroll for one second each, meaning it starts to expand at 0 and finishes expanding at the end of 1 second. 

<code>animation: scroll 25s linear running infinite;</code> makes it scrolls at 25 seconds in a linear direction running infinitely 
}

<code>.slide-track:hover {animation-play-state: paused;}</code> makes it pause on hover

##### Box-shadow
The box-shadow on the images gives the images their 3D appearance. 

#### index.js
The index file contains the ? that ?. <code>subscribeButton</code> grabs the <code>#subscribe-form</code> id in the html file and adds an <code>addeventListener</code> that sets off the <code>emailSubscribe</code> function. 
<br />
<br />
The <code>function emailSubscribe() {}</code> is prompted upon hitting the submit button. It defines <code>name</code> to prompt a question and alert a message that contains the name entered. 

#### links.html
This file links important software, installations and other key resources students need to recreate the website on their own with explanations for each.

## index.html
The index file contains <code>header, nav, div and footer</code> elements in the <code>body</code> element. 

The <code>head</code> element contains the basic SEO elements <code>title and meta</code>. 

It also contains the <code>link</code> to the stylesheet <code>link rel="stylesheet" href="./src/index.css"</code> and <code>link</code> elements for google fonts. 

At the bottom of the index.html file, the <code>script</code> element links the js code to the file.  <code>src="src/index.js"</code> 

A Bootstrap css link is in the <code>head</code> element and the Bootstrap js link is below the footer in the <code>body</code>. 
<br />

#### header
The header contains the navigation bar.

##### nav
Bootstrap was used to create the navigation bar. 

The <code>navbar</code> class initiates the Bootstrap scss code. 

<code>navbar-expand-lg</code> makes the navbar collapsable on medium and small screens. 

<code>navbar-light</code> is used to get hex code #000 text color. 

<code>bg-transparent</code> is used to make the background of the navigation bar transparent. 

<code>class="container-fluid"</code> makes the container margins move proportionately with the size of the screen. 

The [logo] in the [images]() folder is placed in the <code>anchor</code> element with several <code>button</code> elements placed beneath it. 

The class <code>navbar-toggler</code> and <code>data-bs-toggler="collapse"</code> creates a hamburger menu when the screen in minimized, while <code>navbar-toggler-icon</code> is the Bootstrap image used.

The <code>form</code> element uses <code>class="d-flex"</code> to create a flexbox container for the subscription form. 

#### div 
The main <code>div</code> on the page contains the <code>h1, h3, p</code> and <code>anchor</code> elements on the page (outside of the header and footer). 

##### class="pagetop"
The <code>div</code> element with this class covers all the text on the page, except the footer text. Specifically, it contains <code>h1, h3, p</code> and the only <code>anchor</code> element in this part of the file.

##### class="slider"
The "slider" class holds the scrolling images going across the screen.

#### footer 
<code>d-flex</code> and <code>justify-content-center</code> are used to teach students how to create fluid, centered images in the footer. Next, <code>text-center</code> is used to also show students how to center text.


# Tips

1. Be sure to right click + inspect your code to console.log() debugging and uncheck properties in css when you want to see exactly how it impacts your code
2. Play around by editing html when you right click + inspect your code
3. Always add alt text to your links, and title your images
