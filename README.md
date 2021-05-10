# Sarah Katz - Quicken Loans Code Challenge

## About This Project
### How I Approached The Project
I started by looking at the project and making an outline of what I think needed to be done. I created a GitHub repository (starting with a README) on GitHub.com and cloned it to my computer. I then set up 3 files - `index.html`, `styles.css`, and `index.js`. In each file, I made a list of what needed to be done, and I slowly worked my way down those lists.

For each part of the project, I started with the small-screen/mobile layout and interactivity and then confirmed that the larger screen version worked as well (and made changes if necessary).

I set up time limits for each part of the project, and made a schedule that maxed out at 7 hours. I was able to complete most things faster than I expected, and completed the project in less than 6 hours.

### Time Spent
- Thursday 5/6 - 30 minutes, prep/setup
- Thursday 5/6 - 70 minutes, company name and nav
- Friday 5/7 - 40 minutes, table setup
- Saturday 5/8 - 70 minutes, filtering & filtering layout
- Sunday 5/9 - 60 minutes, sorting
- Sunday 5/9 - 40 minutes, deploying and writing README
- Monday 5/10 - 20 minutes, cleanup and sending it over

**Total Time: 5 hours, 30 minutes**

## Viewing the Project
There are two ways to view this project:
1. Clone or download the repository and open `index.html` in the browser of your choice.
2. Visit [https://sarah-quicken-0521.netlify.app/](https://sarah-quicken-0521.netlify.app/) for a deployed version of the app.

## Decision Log
- **CSS Grid** - I used CSS grid to lay out the header for this project because I wanted something that I could easily adjust. I've used CSS grid in the past and have found that it helps in creating flexible layouts. I was able to make this decision because I knew that I did not need to support older browsers. If you were to open this project in Internet Explorer, the header would not look as expected (also none of the JavaScript seems to work, but that could just be my IE settings).
- **Interactivity in Nav/Header** - There was no guidance as to the interactivity in the header, so I decided to have all links direct to the current page. I had initially set up a `console.log()` for when the "Sign Out" button is clicked, but because that would only be visible with the console open (and I wasn't sure if this project would be reviewed with the console open), I decided instead to do an alert.
- **Accessibility** - The instructions said that the product should pass an accesibility test through the Axe browser extension. However, I don't have access to that paid tool, and rather than set up a free trial just for this project, I decided to use a free tool (that I use with some regularity at my current company), the [ANDI](https://www.ssa.gov/accessibility/andi/help/install.html) browser extension.

## Struggles/Difficulties
- **Sizing, Spacing, and Padding** - I struggled a lot with font sizes, table size, spacing, and padding. I'm used to working with either annotated designs or designs that I can inspect (generally using InVision), and it was hard for me to know whether my decisions were anywhere close to correct.
- **Vanilla JavaScript** - I generally work in React and haven't really worked in vanilla JavaScript recently, so there were a few sitatuions where I had to spend some time googling how to access a particular element or property. However, I was able to find solutions to my questions fairly easily, and I am confident that I can easily continue to work with vanilla javascript (and with time I know there will be less and less googling necessary - although there will always be things that I need help with).
- **Table a11y** - I've actually never built an accessible table before, and I wasn't sure how to make sure that the sorting buttons were properly accessible (I'm still not entirely sure I did that properly) or how to connect the table name (which I have as a separate heading) to the table itself.

## Next Steps
I'm looking forward to meeting with the team on Wednesday and I'm excited to answer any questions you have about my work here and/or how I can be an asset to the team. See you Wednedsday!