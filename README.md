# College Locator

## If this was intended for production...

- There are some pretty common UX use cases I'd want to address:
  - I'd add a proper loading state indicator. We're fetching the data asynchronously, and that could take awhile--for a number of possible reasons. I'd want to let the user know that the web app is working on their request.
  - In the case of an error, I'd want provide some indication to the user.
  - I'd give a better indication to the user in cases where a search term returns no results.
- A UX improvement would be either to scroll the results list or have the map "follow" the user as they scroll down the page. Either would avoid the unfortunate (but common!) scenario of a user clicking on a result that's far down on the list and then having to scroll up to the map to see it.
- I've limited the results of a search to 100. Conceivably there could be more of course. We could implement a "paging" system to allow the user to navigate through large result sets.
- An advanced version might allow the user to choose the fields they'd want to see.
- I'd want to research and perhaps discuss why a search sometimes returns names that don't match the search term. An example is "south"; one its results is "Amridge University".
- From a team and code organizing perspective, I'd want to confirm that I'm structuring the code in a way that's consistent with the team's way of doing things.

## Something to note...

- There are 2 API keys needed for this app. One, of course, is for the College Scorecard Data. The other is for Google Maps, required if one wants to see a proper map. I have those stashed in a local `.env` file. If you need to borrow these for review of my submission, please let me know. I can share them directly. For obvious reasons I don't want to share them on Github :)
