# Trivia API Project
This application was an enjoyable experience using the API. It is an application that presents the user with simple set of questions and also provides the ability to search, add a new question and the possibility of deleting it. You will find here everything related to the application let's start.
### Featuer of the application:
  1. Display questions - both all questions and by category. Questions should show the question, category and difficulty rating by default and can show/hide the answer.
  2. Delete questions.
  3. Add questions and require that they include question and answer text.
  4. Search for questions.
  5. Play the quiz game.
# Getting Started
### pre-requisites and Local Development
Developers using this project should already have python3,pip and node installed on their local machines.
Developers using this project should already have Python3, pip, node, and npm installed.
#### backend
from the backend folder run ```pip install -r requirements.txt```.All required packages are included in the requirements file.

to run the applications run the following commands:
```
set FLASK_APP=flaskr
set FLASK_ENV=development
flask run
```
These commands put the application in development and direct our application to use the __init__.py file in our flaskr folder.Working in development mode shows an interactive debugger in the console and restarts the server whenever changes are made.

The applications is run on``` http://127.0.0.1:5000/``` by default and is proxy in the forntend configuration.

#### frontend

from the fronted folder, run the following commands to start the client:
```
npm install // only once to install dependencies
npm start
```
by default the frontend will run on localhost:3000.

## Testing
in order to run tests navigate to the backend folder and run the following commmands:
```
dropdb trivia_test
createdb trivia_test
psql trivia_test < trivia.psql
python test_flaskr.py
```

## API Reference
* Base URL: Currently this application is only hosted locally. The backend is hosted at `http://127.0.0.1:5000/`
* Authentication: This version does not require authentication or API keys.

### Error Handling
Errors are returned as JSON in the following format:<br>

    {
        "success": False,
        "error": 404,
        "message": "resource not found"
    }

The API will return three types of errors:
* 400 – bad request
* 404 – resource not found
* 422 – unprocessable
* 405 - method not allowed

### Endpoints

#### GET /categories

* General: Returns a list categories.
* Sample: `curl http://127.0.0.1:5000/categories`<br>

```
{
  "categories": {
    "1": "Science",
    "2": "Art",
    "3": "Geography",
    "4": "History",
    "5": "Entertainment",
    "6": "Sports"
  },
  "success": true
}
```
#### GET /questions
* General: Returns a list questions .
* Sample: `curl http://127.0.0.1:5000/questions`<br>
```
{
  "categories": {
    "1": "Science",
    "2": "Art",
    "3": "Geography",
    "4": "History",
    "5": "Entertainment",
    "6": "Sports"
  },
  "current_category": null,
  "questions": [
    {
      "answer": "Tom Cruise",
      "category": 5,
      "difficulty": 4,
      "id": 4,
      "question": "What actor did author Anne Rice first denounce, then praise in the role of her beloved Lestat?"
    },
    {
      "answer": "Edward Scissorhands",
      "category": 5,
      "difficulty": 3,
      "id": 6,
      "question": "What was the title of the 1990 fantasy directed by Tim Burton about a young man with multi-bladed appendages?"
    },
    {
      "answer": "Muhammad Ali",
      "category": 4,
      "difficulty": 1,
      "id": 9,
      "question": "What boxer's original name is Cassius Clay?"
    },
    {
      "answer": "George Washington Carver",
      "category": 4,
      "difficulty": 2,
      "id": 12,
      "question": "Who invented Peanut Butter?"
    },
    {
      "answer": "Lake Victoria",
      "category": 3,
      "difficulty": 2,
      "id": 13,
      "question": "What is the largest lake in Africa?"
    },
    {
      "answer": "The Palace of Versailles",
      "category": 3,
      "difficulty": 3,
      "id": 14,
      "question": "In which royal palace would you find the Hall of Mirrors?"
    },
    {
      "answer": "Agra",
      "category": 3,
      "difficulty": 2,
      "id": 15,
      "question": "The Taj Mahal is located in which Indian city?"
    },
    {
      "answer": "Escher",
      "category": 2,
      "difficulty": 1,
      "id": 16,
      "question": "Which Dutch graphic artist\u2013initials M C was a creator of optical illusions?"
    },
    {
      "answer": "Mona Lisa",
      "category": 2,
      "difficulty": 3,
      "id": 17,
      "question": "La Giaconda is better known as what?"
    },
    {
      "answer": "One",
      "category": 2,
      "difficulty": 4,
      "id": 18,
      "question": "How many paintings did Van Gogh sell in his lifetime?"
    }
  ],
  "success": true,
  "total_questions": 23
}
```
#### DELETE /questions/\<int:id\>
* Deletes a question by id using url parameters.
* Sample: `curl http://127.0.0.1:5000/questions/13 -X DELETE`<br>
  {
  "deleted": 13,
  "success": true
}
#### POST /questions
* Creates a new question using JSON request parameters.
* Sample: `curl http://127.0.0.1:5000/questions -X POST -H "Content-Type: application/json" -d "{ \"question\": \"Who is the author of the gambler novel?\", \"answer\": \"Fyodor Dostoyevsky.\", \"difficulty\": 4, \"category\": \"4\"}"
`<br>

```
{
  "created": 36,
  "question_created": "Who is the author of the gambler novel?",
  "questions": [
    {
      "answer": "Tom Cruise",
      "category": 5,
      "difficulty": 4,
      "id": 4,
      "question": "What actor did author Anne Rice first denounce, then praise in the role of her beloved Lestat?"
    },
    {
      "answer": "Edward Scissorhands",
      "category": 5,
      "difficulty": 3,
      "id": 6,
      "question": "What was the title of the 1990 fantasy directed by Tim Burton about a young man with multi-bladed appendages?"
    },
    {
      "answer": "Muhammad Ali",
      "category": 4,
      "difficulty": 1,
      "id": 9,
      "question": "What boxer's original name is Cassius Clay?"
    },
    {
      "answer": "George Washington Carver",
      "category": 4,
      "difficulty": 2,
      "id": 12,
      "question": "Who invented Peanut Butter?"
    },
    {
      "answer": "The Palace of Versailles",
      "category": 3,
      "difficulty": 3,
      "id": 14,
      "question": "In which royal palace would you find the Hall of Mirrors?"
    },
    {
      "answer": "Agra",
      "category": 3,
      "difficulty": 2,
      "id": 15,
      "question": "The Taj Mahal is located in which Indian city?"
    },
    {
      "answer": "Escher",
      "category": 2,
      "difficulty": 1,
      "id": 16,
      "question": "Which Dutch graphic artist\u2013initials M C was a creator of optical illusions?"
    },
    {
      "answer": "Mona Lisa",
      "category": 2,
      "difficulty": 3,
      "id": 17,
      "question": "La Giaconda is better known as what?"
    },
    {
      "answer": "One",
      "category": 2,
      "difficulty": 4,
      "id": 18,
      "question": "How many paintings did Van Gogh sell in his lifetime?"
    },
    {
      "answer": "Jackson Pollock",
      "category": 2,
      "difficulty": 2,
      "id": 19,
      "question": "Which American artist was a pioneer of Abstract Expressionism, and a leading exponent of action painting?"
    }
  ],
  "success": true,
  "total_questions": 23
}
 ```
 #### POST /questions
 * Fetches all questions where a substring matches the search term.
 * Sample: Here is a simple example of how to search.
 curl http://127.0.0.1:5000/questions -X POST -H "Content-Type: application/json" -d "{\"searchTerm\": \"gambler\"}"

 ```
 {
  "questions": [
    {
      "answer": "Fyodor Dostoevsky",
      "category": 4,
      "difficulty": 4,
      "id": 25,
      "question": "Who is the author of the gambler novel?"
    }
  ],
  "success": true,
  "total_questions": 22
}
 ```
#### GET/categories/<int:category_id>/questions
* Fetches a dictionary of questions for the specified category.
* Sample: curl http://127.0.0.1:5000/categories/5/questions
 ```
 {
 {
  "current_category": "Entertainment",
  "questions": [
    {
      "answer": "Tom Cruise",
      "category": 5,
      "difficulty": 4,
      "id": 4,
      "question": "What actor did author Anne Rice first denounce, then praise in the role of her beloved Lestat?"
    },
    {
      "answer": "Edward Scissorhands",
      "category": 5,
      "difficulty": 3,
      "id": 6,
      "question": "What was the title of the 1990 fantasy directed by Tim Burton about a young man with multi-bladed appendages?"
    }
  ],
  "success": true,
  "total_questions": 22
}
 ```

#### POST /quizzes
* Allows users to play the quiz game.
* Sample: `curl http://127.0.0.1:5000/quizzes -X POST -H "Content-Type: application/json" -d "{\"previous_questions\": [29, 30],\"quiz_category\": {\"type\": \"History\", \"id\": \"4\"}}"`<br>

```
{
  "question": {
    "answer": "George Orwell's ",
    "category": 4,
    "difficulty": 4,
    "id": 28,
    "question": "Who is the author of the novel 1984?"
  },
  "success": true
}
 ```
