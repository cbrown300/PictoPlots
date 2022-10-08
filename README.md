# Picto Plots - An 80s Sci-Fi Movie Experience

## Once downloaded - In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## My Implementation of Picto Plots
* Begin by getting info from OMDB using list of movies
    * Get Titles, Plots, imdbID
* Set-up buttons for selecting from the list of movies
* Create comparison for selected movie and winning movie
* Randomize winning movie generation
* Narrow down plot grabbing for just winning movie
* Shorten plot and remove filler words for image generation
* Generate images using Pixabay from each word of the shortened plot
* Cleanup and add styles to make website pretty
* Additionally add popup for better display of winner/loser and easier restarting

## Features to Improve the Experience
* More specific image generation as some images are less accurate to the meaning given to them
  * Possibly try grouping words to find more specific images and then use single words as a failsafe if nothing is found
    * Use a thesaurus of some kind in combination to also search for better words/images
  * Maybe use some kind of AI art generator to make more specific images
* Allow each movie to only be generated again after all other movies have been exhausted
    * Have different image generation for each time a movie is seen again in the same session
* Larger movie list to pull from that can change on each reload
* Scoring mechanic for all movies to show amount of correct/incorrect guesses for each specific movie
* Overall scoring during a session to track amount of correct to incorrect guesses
* Make it so you can only get hover text hints so many times to increase the difficulty
* Only show hover text after guessing incorrectly
* Limit the amount of incorrect guesses and force to restart/try a different picture
* Remove incorrect guesses from the list so you can't select them again
* Make winning seem like a bigger deal and more exciting
    * Add sounds for winning/losing
    * Flashing lights or sparks
