## Technical Test - Backend Engineer Node.js
### Prerequisite
        - Installed Node.js
        - NPM
        - Postgrestql
Please running `npm install` in the time you clone this repository.
 1. **Simple Database Querying**

This is my SQL query to get expected output:

```
    SELECT
	    u.ID,
	    u.UserName,
	    u1.UserName AS 'ParentUserName'
    FROM
	    USER AS u
    LEFT JOIN USER AS u1 on u.Parent = u1.ID
``` 
I also created the SQL table and implemented query of given data you can check it in this repository in the folder [`1-simple-database-query`](https://github.com/mromiario/technical-test/tree/main/1-simple-database-query)

For running it in your local computer, please write this command in your terminal:
```
npm run simple_database
```
2. **ExpressJS Server**
	- Import your `.env` text. For the env example you can go to this file [env.example](https://github.com/mromiario/technical-test/blob/main/.env.example)
	
		- ` OMDB_API_KEY` is API key for the OMDB open API. You can use this key `42a75c64` as well as long as it is still can be used
		- `NODE_ENV` you can fill it with `development`
		- `HOST_DB` your postgres host database
		- `USER_DB` your postgres user name
		- `PASSWORD_DB` your password of postgres user
		- `NAME_DB` your database name
		- `PORT_DB` your allocated port of database
		- `PORT`your allocated port for running the express server
	- For running the express server you can run this command in your terminal `npm run express-task`
	- I already deploy it to heroku with this base url: https://bibit-test-romi.herokuapp.com/
	- API Docs:
		1.  **URL:  {baseUrl}/detail**
		-  Method: GET
		- Please user this API key to access the API: *kQA92nad9q0d* (this the Backend Authorization not the OMDB API key)
		- Parameters:
			- `apiKey` (Query String) (Required)
			- `i` or `t` (please choose one between this query params for `i` or IMDB ID or `t` for title. (Required)
			- You can as well use additional query string that provided from the [original source](http://www.omdbapi.com/)
		- Example API call: [http://localhost:3003/detail?apiKey=kQA92nad9q0d&t=batman](http://localhost:3003/detail?apiKey=kQA92nad9q0d&t=batman) 
		-  Response (Success)
			```json
			{"Title":"Batman","Year":"1989","Rated":"PG-13","Released":"23 Jun 1989","Runtime":"126 min","Genre":"Action, Adventure","Director":"Tim Burton","Writer":"Bob Kane, Sam Hamm, Warren Skaaren","Actors":"Michael Keaton, Jack Nicholson, Kim Basinger","Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.","Language":"English, French, Spanish","Country":"United States, United Kingdom","Awards":"Won 1 Oscar. 9 wins & 26 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"71%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"7.5","imdbVotes":"352,984","imdbID":"tt0096895","Type":"movie","DVD":"22 Aug 1997","BoxOffice":"$251,348,343","Production":"N/A","Website":"N/A","Response":"True"}
			```
		- Response (400) (Query string i or t is not provided)
		 ```json 
		{"statusCode":400,"message":"Please choose between query \"i\" (find by imdb id) or \"t\" (find by title)"}
		```
		- Response 401 (Wrong Backend API key)
			```json
			{"statusCode":401,"message":"Unauthorized"}
			```
		<br>
		
		2.  **URL:  {baseUrl}/search**
		-  Method: GET
		- Please user this API key to access the API: *kQA92nad9q0d* (this the Backend Authorization not the OMDB API key)
		- Parameters:
			- `apiKey` (Query String)  (Required)
			- `s` search query (Query String) (Requires)
			- You can as well use additional query string that provided from the [original source](http://www.omdbapi.com/)
		- Example API call:[http://localhost:3003/search?apiKey=kQA92nad9q0d&s=batman](http://localhost:3003/search?apiKey=kQA92nad9q0d&s=batman)
		-  Response (Success)
			```json
			{"Search":[{"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman","Year":"1989","imdbID":"tt0096895","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"},{"Title":"Batman Returns","Year":"1992","imdbID":"tt0103776","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},{"Title":"Batman Forever","Year":"1995","imdbID":"tt0112462","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"Batman & Robin","Year":"1997","imdbID":"tt0118688","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"},{"Title":"The Lego Batman Movie","Year":"2017","imdbID":"tt4116284","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"},{"Title":"Batman: The Animated Series","Year":"1992–1995","imdbID":"tt0103359","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"},{"Title":"Batman: Under the Red Hood","Year":"2010","imdbID":"tt1569923","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Batman: The Dark Knight Returns, Part 1","Year":"2012","imdbID":"tt2313197","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"}],"totalResults":"470","Response":"True"}
			```
		- Response (400) (Query string `s` not provided)
			```json 
			{"statusCode":400,"message":"Please input query \"s\" (find by title)"}``
		- Response 401 (Wrong Backend API key)
			```json
			{"statusCode":401,"message":"Unauthorized"}
			```
	- I am also implemented clean architecture and this my first time. One of my reference is come from [https://github.com/howardmann/clean-node](https://github.com/howardmann/clean-node). I will really appreciate if there were feedback to be improved in this repo.
	<br>
	- For **Unit Testing** you can run `npm run express-test`
	- The file of unit testing(s) can be found in this for functions [**log**](https://github.com/mromiario/technical-test/blob/main/2-express-task/data-access/log/index.spec.js) and [**movies**](https://github.com/mromiario/technical-test/blob/main/2-express-task/data-access/movies/index.spec.js)

3.  **Refactor**
	Below is my version of refactored code. For better view you go to the source code in [this repo](https://github.com/mromiario/technical-test/blob/main/3-refactor/index.js). Or you can running in your local computer by write this command in your terminal `npm run refactor` and edit the simple test case.
	```javascript
	function findFirstStringInBracket (str) {
		const indexFirstBracketFound = str.indexOf('(')
		const indexClosingBracketFound = str.indexOf(')')
		if (indexFirstBracketFound >= 0 && indexClosingBracketFound >= 0 && indexClosingBracketFound >= indexFirstBracketFound) {
			return str.substring(indexFirstBracketFound + 1, indexClosingBracketFound)
		}
		return ''
	}
	```

5. **Logic Test**
	Below is my version of anagram function. For better view you go to the source code in [this repo](https://github.com/mromiario/technical-test/blob/main/4-logic-test/index.js). Or you can running in your local computer by write this command in your terminal `npm run logic-test`.
```javascript
function getAnagram(words) {
	const dictionary = {}
	for (let i = 0; i < words.length; i += 1) {
		const sortedWord = words[i].split('').sort().join('')
		if (dictionary[sortedWord]) {
			dictionary[sortedWord] = [...dictionary[sortedWord], words[i]]} 
		else {
			dictionary[sortedWord] = [words[i]]
		}
	}
	return (Object.values(dictionary))
}
```
