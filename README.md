# _Epicodus Independent Project - February 7, 2020_

#### By _**Brandan Sayarath**_

## Description

This is the Epicodus independent end-of-week assignment for Friday, February 7, 2020.  The purpose of this assignment is to create an application that will convert the user's "earth age" into their age on the planet Mercury, Venus, Mars, and Jupiter.  

This application will also determine how many years the user has left to live on each planet, depending on the user's average life expectancy for their demographic.  If the user has already surpassed their average life expectancy, the program will return the number of years they have lived past their life expectancy. 

## Behavior Driven Development Specifications

| Specification             | Input 	|     Output      |
|-------------------------	|-------	|----------------	|
| ***Convert age from Earth years...*** |
| ...to Mercury years (1 Mercury year = 0.24 Earth years) | 20 Earth years    | 83.3 Mercury years  	|
| ...to Venus years (1 Venus year = 0.62 Earth years) | 20 Earth years   | 32.2 Venus years   	|
| ...to Mars years (1 Mars year = 1.88 Earth years) | 20 Earth years     | 10.6 Mars years  	|
| ...to Jupiter years (1 Jupiter year = 11.86 Earth years) | 20 Earth years    |  1.6 Jupiter years  	|
|***Determine life expectancy...*** |
| ...on Earth for U.S. Citizen  | 20 Earth years   |  80 Earth years 	|
| ...on Mercury for U.S. Citizen  | 20 Earth years   | 333.3 expected Mercury years  	|
| ...on Venus for U.S. Citizen  | 20 Earth years   |   129.2 expected Venus years  	|
| ...on Mars for U.S. Citizen  | 20 Earth years  | 42.5 expected Mars years  	|
| ...on Jupiter for U.S. Citizen  | 20 Earth years  | 6.74 expected Jupiter years  	|
| ***Determine remaining life expectancy...*** |
| ...on Earth  | 20 Earth years   | 60 Earth years remaining   	|
| ...on Mercury  | 20 Earth years   | 250 Mercury years remaining 	|
| ...on Venus  | 20 Earth years   | 97 Venus years remaining   	|
| ...on Mars  | 20 Earth years   | 31.92 Mars years remaining   	|
| ...on Jupiter | 20 Earth years   | 5.06 Jupiter years remaining    	|
| ***Determine years surpassed life expectancy...*** |
| ...on Earth  | 100 Earth years   | 20 Earth years surpassed  expectancy 	|
| ...on Mercury  | 100 Earth years   | 83.36 Mercury years surpassed  expectancy 	|
| ...on Venus  | 100 Earth years   | 32.09 Venus years surpassed  expectancy 	|
| ...on Mars  | 100 Earth years   |  10.69 Mars years surpassed  expectancy 	|
| ...on Jupiter | 100 Earth years   | 1.69 Jupiter years surpassed expectancy 	|


## Setup/Installation Requirements

#### Node install

###### For macOS:
If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:
* $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
* $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

Install Git with the following command:
* $ brew install git

Next, install Node.js by entering the following command in Terminal:
* $ brew install node

###### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._


#### Install this application

Clone this repository via Terminal using the following commands:
* _$ cd desktop_
* $ git clone https://github.com/brandanpdx/super-galactic-age-calculator
* _$ cd solar-age_
Then, confirm that you have navigated to the solar-age project directory by entering "pwd" in Terminal.

Next, install npm at the project's root directory via the following commands:
* _$ npm install_
* _$ npm run build_

Open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code on macOS, enter the command "code ." in Terminal).



## Support and Contact

Please email Brandan Sayarath: brandan@brandan.tech for any questions.

## Technologies Used

_This program was created with:_

* Javascript
* Node Package Manager
* Jest 
* Webpack

## License

This code is licensed under MIT permissive free software license

Copyright (c) 2020 **_Brandan Sayarath_**

