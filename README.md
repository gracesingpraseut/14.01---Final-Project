# CS208 Full Stack Final Project - Donut Shop Application

- Name: Grace Singpraseuth
- GitHub: [https://github.com/gracesingpraseut](https://github.com/gracesingpraseut)
- Term: Spring 2026

## Project Description

This is my full stack web application built using Node.js. The application is a prototype website for Downtown Donuts, a donut and coffee shop. Users can view the menu, learn about the shop, and post comments through the full stack comment system. The site is designed to be cozy and modern to draw the users' attention. 

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

1. For the layout of the website, I made everything centered and evenly spaced to give it the minimal, modern feel that the client specified. I also decided not to use many harsh lines and used mainly curved edges. This helped create the cozy feel that the client asked for. 

2. I decided to use a large heading with a top navigation bar on the homepage to help users easily navigate through the website. 

3. I used the client's color palette throughout the entire website for consistency and to help with the cozy feeling the client wants. 

## Sources

https://developers.google.com/fonts/docs/getting_started?utm_source=chatgpt.com
https://www.w3schools.com/css/css_website_layout.asp
https://www.w3schools.com/howto/howto_css_center_website.asp

