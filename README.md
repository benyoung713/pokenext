## Welcome to the PokeNext app

This app gives users the opportunity to choose a Pokemon from the dropdown to see more information about them.
Choose a Pokemon from the dropdown and on the right hand side, you will see some information about them.
If you can't find the Pokemon you want in the initial dropdown, scroll to the bottom of the dropdown and select: "Load more..."
This will load more Pokemon into the menu.

The app runs on NextJS and is styled using TailWindCSS

The app can be found at https://pokenext-benyoung713.vercel.app/

To run the project, pull the repo to your preferred location

Run the following commands:
```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There are obviously some areas for improvement: 
- I don't deal with errors at all. So some sort of snackbar which shows error messages would be good.
- I don't deal with loading states; some sort of hook which performs the http requests would be a good way of dealing with this.
- The dropdown doesn't reset after choosing 'Load more'; it would be better if the dropdown reverted back to the default
