# Capture | Portfolio Site

### [Capture-portfolio-alm.netlify.app]

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

"Capture" is a responsive, eye-catching, React-powered portfolio site built specifically as a playground for learning Framer-Motion animations and as a baseline for reusable components. This is the first step of many in rebuilding from scratch an old team project I did with my bootcamp Elevent Fifty Academy called [GameChest][gc]; I hope to rebuild this PERN application with much more depth taken to its frontend design.

## Features

- Navigation bar has responsive animations working in tandem with React-Router-Dom V6.
- A transition animation when switching to the Our Work page.
- Intuitive, fluid component animations that adapt to the scrollbar using React-Intersection-Observer.
- Uses a powerful combination of Styled-Components and Framer-Motion for organized code.
- My first time using Netlify as a host site.

## Technologies

- [Framer-Motion]
- [Netlify]
- [React]
- [React-Intersection-Observer]
- [React-Router-Dom-V6]
- [Styled-Components]

## Log

| Date        | Files, Commits and Comments                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _06/18/22:_ | Final Update: Ensured all animations were working in a wide variety of ways. Fixed up some small details like eliminating an unnecessary horizontal scroll and other small details. Updated ReadMe completely. I am now going to move on to a new project where I am going to go more in-depth into Redux and learn Axios for first time instead of Fetch requests.                                                                                  |
| _06/17/22:_ | Over a few hours made sure scrolling was interactive in a non-obtrusive way and it worked with RRDV6 upon refreshing the page or switching between pages to take the scrollbar to the top again. ContactUs page was given a very small update of both content and animations.                                                                                                                                                                        |
| _06/16/22:_ | Completed FAQ sections animations.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| _06/14/22:_ | Major update day. Fixed the Animations.jsx file to work again and eliminated the Animations being on their components again, which saved many lines of code for repeat use cases. React 18 showed different behavior for exporting multiple values in a single file. Quality control day of checking if my current build was working across browsers and operating systems. Began work on FAQ section and making it cleaner. Tabled for another day. |
| _06/13/22:_ | Had to troubleshoot my IDE VisualStudioCode as it was erroring out for a few extensions I use.                                                                                                                                                                                                                                                                                                                                                       |
| _06/12/22:_ | Temporarily moved Animations back to their original files so I could change them up a bit to be more fluid.                                                                                                                                                                                                                                                                                                                                          |
| _06/11/22:_ | Finished content update for OurWork page. Outlet RRDV6 implemented as well. React 18 had conflicting issues with it I had to heavily problem solve since not much information is available currently due to it being a new release. Animations were put into single file, but that broke them. Will look into on another day.                                                                                                                        |
| _06/09/22:_ | React-Router-Dom V6 (RRDV6) implemented. OurWork page had its content worked on.                                                                                                                                                                                                                                                                                                                                                                     |
| _06/08/22:_ | Added in mock-up information for multiple sections in order to start having base styling. Setup reusable styles as well for quick development.                                                                                                                                                                                                                                                                                                       |
| _06/01/22:_ | Troubleshooted a bit of new React 18 details. First commit for base template.                                                                                                                                                                                                                                                                                                                                                                        |

[gc]: https://github.com/coderap931/teamBluePern-Client
[git-repo-url]: https://github.com/Alex-Lee-Myers/Capture-Portfolio-JS
[framer-motion]: https://www.framer.com/motion/
[styled-components]: https://styled-components.com/
[react-intersection-observer]: https://github.com/researchgate/react-intersection-observer
[netlify]: https://www.netlify.com/
[react]: https://reactjs.org/
[react-router-dom-v6]: https://reactrouter.com/
[capture-portfolio-alm.netlify.app]: https://Capture-portfolio-alm.netlify.app
