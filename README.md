# Clean-Cut-PassCodes

## Password Generator

    This is a web-based application that randomly generates a password based on criteria selected by the user.

### User Interactivity

    When the user clicks on the "Generate Password" button, they will be prompted to answer a series of questions related to the password criteria. The user will be asked to specify the length of the password (minimum 8 characters and maximum 128 characters), and which character types to include in the password. The character types include lowercase, uppercase, numeric, and/or special characters. Once the user answers all the questions, the application generates a password that matches the selected criteria.

### User Story

    This application is designed to help employees with access to sensitive data generate strong passwords that provide greater security. When the user clicks the button to generate a password, a series of prompts for password criteria are presented. The user can select which criteria to include in the password, including the length of the password which must be at least 8 characters and no more than 128 characters. Additionally, the user is asked to confirm whether or not to include lowercase, uppercase, numeric, and/or special characters.
    To ensure the validity of user input, each prompt is validated and requires at least one character type to be selected. Once all prompts are answered, a password is generated that matches the selected criteria. The generated password is then either displayed in an alert or written to the page. The use of this application greatly enhances security and provides employees with a reliable tool for generating strong, secure passwords.

### JavaScript Files

    The JavaScript file used in this application contains the following functions:

    generatePassword() - This function contains a series of prompts that ask the user for the password criteria. Based on the user's responses, this function generates a random password.
    writePassword() - This function calls the generatePassword() function and writes the password to the HTML page. It also ensures that the password is displayed in the "Your Secure Password" text area.
    The script.js file is linked to the HTML file using the src attribute in the script tag. The HTML file contains an ID selector for the "Generate Password" button and the "Your Secure Password" text area, which are used to connect the JavaScript and HTML files.

### HTML File
    
    The HTML file for this application contains a title, a header, a card with a text area and a button, and a link to the CSS file. The "Generate Password" button has an ID selector of generate, which is used to connect the JavaScript and HTML files. The text area where the password is displayed has an ID selector of password, which is used by the writePassword() function to ensure that the password is displayed in the text area.
