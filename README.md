# Portfolio Website

A responsive SPA built with React, using [Semantic UI React](https://react.semantic-ui.com/) and [styled-components](https://www.styled-components.com/). It was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). All the custom components are written as functional components, the state and side effects are managed with React Hooks. 

It has a fully functional anchor menu which would not only allow visitors to access different sections of the website by clicking menu items but would also listen to the scroll event.

The connection to the backend is provided via the fake REST API JSON Server deployed to Heroku. Requests to the server are performed using Fetch API.

View the running app [here](https://alex-codes.com)

## Features

- The navigation is automatically updated as the page is scrolled, indicating which menu item is currently active. So the navigation and the section in view are always in sync.

- If a menu item is clicked, the page is smoothly scrolled to the corresponding section.

- The layout is fully responsive.

- On smaller screens the menu is hidden and can be toggled by clicking a button. When set to visible, it is stacked vertically and takes up the whole screen.

- On larger screens the menu is fixed to the top of the page. Its appearance changes when you start scrolling the page down.

### Credits:

Menu based on [https://medium.com/the-well-of/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2](https://medium.com/the-well-of/smooth-scrolling-anchor-menu-in-reactjs-175030d0bce2)

### Images:

Photo https://unsplash.com/photos/ZMraoOybTLQ by [Artem Sapegin](https://unsplash.com/@sapegin) on [unsplash](https://unspash.com)

Most icons provided by [Icons8](https://icons8.com)

less, semantic ui, react router icons provided by [Worldvectorlogo](https://worldvectorlogo.com)

styled_components.png from [styled-components.com](https://www.styled-components.com/)

### Copyright © 2019 alex-codes

### License 

[GNU AGPLv3](/LICENSE)