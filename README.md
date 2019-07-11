# TIC TAC TOE
Tic Tac Toe is a customizable complete browser-based game built with JQuery, HTML and CSS.

## Table of Contents

* [Game Rules](#game-rules)
* [Game Screenshots](#game-Screenshots)
* [Game Functional Requirements](#game-functional-requirements)
* [Game Design](#game-design)
* [How to Run and Play the Game](#how-to-run-and-play-the-game)
* [Credits](#credits)
* [Technologies Used](#technologies-used)
* [Dependencies](#dependencies)
* [Acknowledgement](#acknowledgement)
* [Future features](#future-features)

### Game Rules
The rules are simple: The game is played on a grid that's 3 squares by 3 squares. Players take turns putting their marks in empty squares. The first player to get 3 of the markers in a row (up, down, across or diagonally) is the winner (see **Fig 2**).

### Game Screenshots
**Fig 1. Start menu**

![alt menu](/img/menu.PNG)

**Fig 2. Winning Game**

![alt winning](/img/winning.PNG)

### Game Functional Requirements
The functionalities to be implemented are:

1. Create a ***starter menu*** to customize players' name and tokens (X,O, ...). (see **Fig 1**)

2. Create a ***restart button*** that allows the player to reset the game board.

3. Create a ***pop-up modal*** when the game ends. It should display which side won if a player gets three in a row or show a draw if neither wins.

4. Create a ***panel*** that displays the current player's name and marker.

5. Handle user's ***click*** interactions to ***display the marker***.

6. Add ***styling*** to the cell when clicked.

7. ***Usability***: All application components are usable (***responsive***) across modern desktop, tablet and mobile browsers.

### Game Design
The application consists of the following files:

* **index.html**: The DOM has a container that includes the following *components*:
    * *Header section*: it shows  the Game Title.
    * *Selection menu*: it shows a form for the player's name and symbol.
    * *Panel*: it shows the current Player's name and symbol. It also shows the restart button.
    * *Grid*: it shows the game board (unordered list) and contains the cell's id value.
    * *modal*: it controls the opacity of the page to enable the appearance of the pop-up window.
    * *result*: it shows the pop-up message and buttons.
* **app.css**: it contains the styling of the components for the game and the responsive optimization. The deck responsive design has been implemented by using a flex container and media queries.
* **main.js**: The game starts when the page is loaded:
```
gameController.init();
```
The gameController object is responsible to handle the interaction between the *model.js*
and *view.js* files. It also create the events listeners of the application.

 *Event Listeners*:
 - menuHandler
 - gridHandler
 - modalVictoryHandler

* **model.js**: This file contains the objects responsible to store the data of the application.

 *Objects*:
 - player (factory function to create players objects)
 - game (singleton object) to model a Tic Tac Toe game.

* **view.js**: This file contains the objects responsible to get and render the properties in the index.html *components*:

 *Objects:*
 - menu
 - panel
 - board
 - modalVictory

 ### How to Run and Play the Game

 - **Run:** Click [Here](https://lpinzari.github.io/tic-tac-toe/) to play the LivePreview of the Game hosted on GitHub. If you want to run the game *locally* on your computer, you can download the files from this repository or clone them.
   - **Download**: Click the <code>Clone or download</code> green button and you'll get the *Project Zip* file. When your download finishes, unzip the file and open the <code>index.html</code> on your browser.
   - **Clone**: type into your terminal the following <code> $ git clone https://github.com/lpinzari/tic-tac-toe.git </code>. When it finishes cloning, open the <code>index.html</code> file on your browser.
 - **Play:** The application is usable on desktop and tablet touch screen and mobile browsers.
    - *Desktop*: To mark a cell use the left button of your mouse or touch your trackpad.
    - *tablet/mobile*: To mark a cell just touch the secreen over the selected cell.
    - *select symbol*: click on the drop down button to select the player's symbol.

### Technologies Used
- **HTML** | **CSS** | **JQuery**

### Dependencies
- [Fontawsome 4.6.1](https://kit.fontawesome.com/0d98c9c217.js) to display the marker's symbol.
- [Google Fonts](https://fonts.googleapis.com/css?family=Kalam) to display the Game's title.

### Acknowledgement
I'd like to thank the GA's instructors for the useful advices.

### Future features
- Keep track of multiple game rounds.
- Create an AI opponent: teach Javascript to play an unbeatable game against you.
- Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity.
- Support networked multiplayer
- Create a leader scoreboard for a tournament competion.


#### Author
Ludovico Pinzari

#### License
MIT
