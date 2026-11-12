## Repo + commit

https://github.com/JMucgm01/Vel-study

## What changes at each width (see RESPONSIVE_NOTES.md + screenshots/)

As explained in those files; images, padding, section height, font are changed when the width is at a certain level.

## Nav links (how you checked all 11 open)

For these links, made sure there weren't any typos when referencing the file. I then went through each page and made sure i can get to every link through every page. 

## DevTools check
Now that i stored the screenshots, i went into my webpages elements and network tab and after refreshing the page with cmd+R i saw that my html,css,js, jpg, and svg files have loaded properly. After, i scaled the page to be at an iphones aspect ratio and clicked the menu, checking the console tab and seeing that i had no errors and the click was registered.

## Flexbox vs Grid
Felxbox is like my navbar. items listed in one direction.
grid is like my main, the img and featuredText

Flexbox is a nice way to display webpage options without overcrowding the screen. And when the screens width gets too narrow (when using a phone for example) it makes more sense to have those in a vertical flexbox view hidden behind a drop down menu. This avoids clutter and having overlapping or just terribly tight text.
Grid layout is better when spreading out content throught the screen like the body of a page. 

## Relative paths

Wether it be href or img src, These reference relative content based ona. relative path. Meaning relative to the folder you are working on, how will the webpage get the content you are directing it towards. an example would be ../jimmyjohns.https to go up one folder and then go into that html file.

an example from my files is like ../style.css for a navLinks/visionPage.html

## Why the script tag goes at the bottom

The script tag goes after everything in body because it needs to load everything else to allow a button to be pressed. If we put it at the top then we would risk the button not being loaded before an action/click.

## Semantic HTML

Semantics act like a guide for where content is positioned or what its purposed is. 
an example would be how the main tag desribes what the main content for the page will be. if there is a webpage for a recipe. the main will contain everything having to do with the recipe. 

the body is everything visible.

the header is for anything going at the very top of the page. typically redirection links and icons/banners.

the head is hidden from the user but it is for content the user doesnt see such as where the css is coming from using a relative path, and what the title of the webpage will be.

also h1-6 are like headers and are made in layers by iportance. 

## Git commands I used

 git status to see what changes i have made.
 git add . gets your changes ready for the commit and show up in git status.
 git commmit -m to get it ready to be pushed to the repo and add a discription. saves locally
 git mv to change my file name.
 git push uploads it to GitHub
 

## Still different / unsure
i grasped all the content here well i just think that since i see some slight imperfections on the text, i wonder what i was missing when i referenced the apple webpage elements. 
