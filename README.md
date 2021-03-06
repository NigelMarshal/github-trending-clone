![What is this](https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif)

# GitHub Trending Page Clone

I created a clone of the GitHub Trending page built with React and styled with Tailwind. It consists of two pages which are routed through react router and pulling in API data with React query and axios. The custom dropdown filters are made using react-select and are searchable. Users can view the latest trending repos and developers just like the GitHub trending page and the page is responsive...of course. 

## Technologies used:

- ReactJS bootstrapped with CRA
- Tailwind CSS (Initially I was going to go with Primer but decided to go with Tailwind due to it being light weight and I wanted flexibility with customization. The app did not justify just yet to use a full blown component library)
- React query
- Axios
- React select
- Iconify API for icons


## Tell me more details!

https://user-images.githubusercontent.com/11574237/149673693-a16ae038-2b87-4482-8366-ff40748bb009.mp4



Bootstrapped with CRA, the user can interact with either the developer page or repository page through react router and data is being fetched from a custom API, to load in the trending data. The app is setup to run a proxy for API calls to prevent CORS issues.

I used Tailwind CSS and set a custom theme to match the GitHub colour palette. For data fetching I paired axios with react query as it can handle data fetching, error handling and caching without needing to incorporate state management. I've also used react select to emulate the filter dropdowns and users can search through the options they want and select. The API has some limitations so it was not possible to filter data through use effect; however the flexibility is there, thanks to the callback functions react select provides.

![How to use](https://media.giphy.com/media/Wsju5zAb5kcOfxJV9i/giphy.gif)

## How to get this up and running on my machine?

Just clone this repo

`cd` into the cloned folder

run `npm install` to install the necessary packages

and then run `npm start` to boot up local server which will load the home page(redirects to /trending)

And you're all ready to go!
