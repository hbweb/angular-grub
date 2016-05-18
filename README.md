#Instruction

This little webpage should be able to run by opening the index.html.


For development environment, please follow the steps below:

* Step 1:  	Run command to install all required modules for the project
			``` npm install ```  
* Step 2: 	Open index.html 

#Development

Source code location:

* SASS : /css/sass/main.scss
* JS: 
	+ /js/profile.js
	+ /js/emailaddress.js
	+ /js/main.js


If you edit any .scss or .js files, please run the following commands to convert .sass to .css and minify all js files.


```	sass --watch css/sass:css --style compressed ```


```	NODE_ENV=production webpack ```