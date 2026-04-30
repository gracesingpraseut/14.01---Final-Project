# CS208 Full Stack Final Project - Donut Shop Application

- Name: Grace Singpraseuth
- GitHub: [https://github.com/gracesingpraseut](https://github.com/gracesingpraseut)
- Term: Spring 2026

## Project Description

This is my full stack web application built using Node.js. The application is a prototype website for Downtown Donuts, a donut and coffee shop. Users can view the menu, learn about the shop, and post comments through the full stack comment system. The site is designed to be cozy and modern to draw users' attention. 

## Install the Database

To set up the database, run the `install_db.sh` script in the setup_scripts
directory. This script will install MariaDB and start the server running. You
only need to run this script once per Codespace.

```bash
./setup_scripts/install_db.sh
```

## Create the Database Tables

Create the initial tables by running the following command:

```bash
sudo mysql -u root -p < ./setup_scripts/create_demo_table.sql
```

## Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

## Run the Application

Start the application using the following command:

```bash
npm start
```

## Access the Application

On Codespaces, you can access the application by forwarding port 3000. Open the
forwarded port in your browser to view the application.

## Design Decisions

- For the layout of the website, I made everything centered and evenly spaced to give it the minimal, modern feel that the client specified. I also decided not to use many harsh lines and used mainly curved edges. This helped create the cozy feel that the client asked for. 

- I decided to use a large heading with a top navigation bar on the homepage to help users easily navigate through the website. 

- I used the client's color palette throughout the entire website for consistency and to help with the cozy feeling the client wants. 

## Edge Cases

- Empty comments are prevented using server side validation by checking if the input is blank or only consists of whitespace.
- Comments longer than 255 characters are excluded to prevent invalid data from being stored in the database.
- If an error comes up while loading comments, a friendly message is displayed for the user. 
- The program limits the number of comments shown at once by only displaying a certain number at a time which helps keep the page organized and easy to navigate. 
- Rapidly clicking the submit button is prevented by disabling the submit button after the first click to avoid duplicate comments.

## Challenges and Learnings

- One challenge I faced was preventing users from submitting multiple comments by rapidly clicking the submit button. I originally disabled the button after the first click but this caused an issue where the button would not re-enable in some cases. I fixed this by adding logic to the form submission that prevents multiple submissions while still allowing normal use of the form. This helped me better understand how client-side behavior can affect user interaction.
- Another challenge was formatting timestamps. The default timestamp format was difficult to read for the user. I solved this by converting the timestamp into a user-friendly version before displaying it on the page. This helped me learn how to adjust data so it displays in a cleaner and more readable way for the users.

## Citations

- https://developers.google.com/fonts/docs/getting_started
- https://www.w3schools.com/css/css_website_layout.asp
- https://www.w3schools.com/howto/howto_css_center_website.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString