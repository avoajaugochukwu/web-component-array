# Things to note

## Dependencies
- VSCode
- VSCode Live Server <em>by Ritwick Dey</em>

## Libraries
- None

## Assumptions
- Most of the svgs were not showing on the original code version, so I didn't fix them in my work. Like the lock and unlock svg on the credit history list.

## How to run
- Use VSCode
- Install Live Server Extension
- Go to the index.html file
- At the bottom right of VSCode, click on the 'Go Live', the app should open in your default browser

If you are having any issues please visit [Visual Studio market place](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Design choices
- I created a file structure that can be easily extended, with folders for `api`, `components`, `styles`, `templates`, `utils`.
- This allowed me to separate the data layer (`api`) from the view and business logic (`components`).
- For error handling, I created a new template, it is initially loaded in the `ArrayCreditLock` component and rendered when `URL` attribute is not provided.
- I moved logic that doesn't interface with the `shadowRoot` to the `utils` folder to reduce the size of the `ArrayCreditLock` component, and they can be reused.
- I also incorporated DRY principle by using methods like `clearCreditHistoryList()`, `getShowAllText()`, `clearCreditHistoryList()`.


## Note
- I used a style.css file to make the fonts work. Given more time, I can make it work in the web component.
- I have not worked with web components before, but I love vanilla javascript and I thoroughly enjoyed the process. I looked forward to working with it some more in the future.


### Thank you for your time
I hope to get positive feedback from you."# web-component-array" 
