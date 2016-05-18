#Instruction

This little webpage should be able to run by opening the index.html.
For development environment, please follow the steps below:

Step 1: ``` npm install ```  to install all required modules for the project
Step 2: Open index.html 

#Development

Source code location:

* Sass : /css/sass/main.scss
* JS: 
	+ /js/profile.js
	+ /js/emailaddress.js
	+ /js/main.js


If you edit any .sass or .js files, please run the following commands to convert sass to css and minify + combine all .js files

```	sass --watch css/sass:css ```
```	NODE_ENV=production webpack ```