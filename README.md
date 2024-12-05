# PawsForU: A Pet Adoption System | MERN Stack Portfolio with Admin Panel

"PawsForU" is a website where you can either give a pet up for adoption or adopt one. If you have a pet you can't care for anymore, you fill out a form. The admin then decides if they can put your pet on PawsForU. If they approve, they'll ask you to bring the pet to an adoption center.

If you want to adopt a pet, you fill out a form with your details. The admin gets a lot of requests and picks the best one. If they choose you, they'll delete the other requests and take the pet off PawsForU. They'll keep a record of the pet and your contact info.

So, PawsForU makes it easy to find new homes for pets and connect them with people who want to adopt.

## Introduction

PawsForU is a web application that connects pet lovers with pets in need of a home. Our platform simplifies the process of pet adoption by providing a seamless user experience.

## Features

- Users can submit a pet for adoption by filling out a form.
- Admin reviews adoption submissions and can approve or reject them.
- Approved pets are listed on PawsForU for potential adopters to view.
- Users interested in adopting a pet fill out an application form.
- Admin evaluates adoption applications to select the most suitable adopter.
- Admin maintains a history of adopted pets and their new owners.
- User can browse and search for available pets for adoption.
- They can filter pets based on pet type i.e. dog, cat, fish, etc.
- PawsForU offer detailed pet profiles with photos and descriptions.

## Technology Stack

PawsForU is built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Installation

Follow these steps to set up the project locally:

1. Clone the repository: `git clone https://github.com/somanshh/paws-for-u.git`
2. Install dependencies:
   `cd server`
   `npm install`
4. Create a `.env` file in server with `mongooseURL` variable set to your MongoDB connection URL in the format `mongooseURL=mongodb://username:password@host:port/database_name`.
5. Run the backend server: `nodemon server`.
6. `cd ../client` `npm start` to start front end.

### Additional Notes

- Ensure you have Node.js and npm installed on your machine.
