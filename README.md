# Mobile-Web-Component-Development
# Smart Urban Mobility Platform

This project is a simple web prototype for a smart urban mobility system. It was created as part of a software engineering assignment and shows how one platform can support journey planning, booking, payment, and eco rewards.

The main aim of the project is to explore how digital solutions can make urban travel easier, more organised, and more sustainable.

## Project Overview

The prototype allows a user to:
- sign in with demo login details,
- plan a journey from one location to another,
- review and book the trip,
- complete a sample payment,
- and view eco reward points for choosing a greener option.

Alongside the prototype, the project also includes system design work created in StarUML and a written assignment report explaining the design and development process.

## Features

### Login
Users start from a login page and enter the demo credentials to access the system.

### Journey planning
The user enters a start point and destination, and the system displays a sample smart route.

### Booking
The selected trip can then be reviewed on the booking page, including fare details.

### Payment simulation
The payment step is included as part of the user journey, but it is only simulated for prototype purposes.

### Eco rewards
After completing the trip flow, the user can view eco reward points that encourage more sustainable travel choices.

## Built With

- HTML
- CSS
- JavaScript
- StarUML
- Microsoft Word

## Repository Structure

```text
.
├── index.html
├── journey.html
├── booking.html
├── rewards.html
├── css/
│   └── style.css
├── js/
│   ├── authService.js
│   ├── journeyService.js
│   ├── paymentService.js
│   └── rewardService.js
├── Star_UML/
│   ├── Untitled1.mdj
│   ├── Untitled2.mdj
│   ├── Untitled3.mdj
│   ├── Untitled4.mdj
│   ├── Untitled5.mdj
│   └── Untitled7.mdj
├── Pb202603018.docx
└── Pb202603018_Video.mp4
```

## How to Run

This is a front-end prototype, so there is no installation needed.

1. Open the project folder in your code editor or file explorer.
2. Open `index.html` in a web browser.
3. Use the demo login details below to test the system.

## Demo Login

- **Email:** `admin@mobility.com`
- **Password:** `12345`

## User Flow

The system follows a simple step-by-step flow:

1. Log in from the main page.
2. Enter the starting point and destination.
3. View the suggested route.
4. Continue to the booking page.
5. Confirm the payment step.
6. View the eco rewards page.

## Design and Modelling

A big part of this assignment is the system design work.

The StarUML files were used to model different parts of the system, including:
- use case diagrams,
- business concept models,
- type models,
- component design,
- sequence diagrams,
- and deployment structure.

These diagrams help explain how the system works before and during development.

## Project Approach

The prototype follows a simple component-based structure. The JavaScript logic is separated into small service files, which keeps the project easier to read and manage.

For example:
- `authService.js` handles login logic,
- `journeyService.js` handles route-related behaviour,
- `paymentService.js` handles the payment step,
- `rewardService.js` handles eco reward information.

## Limitations

This project is a prototype, so some features are simplified.

- The login is hard-coded.
- Journey results are fixed.
- Payment is only simulated.
- There is no database connection.
- No live transport API is used.
- Reward data is not stored permanently.

## Future Improvements

This project could be improved further by adding:
- real-time transport data,
- proper user authentication,
- database integration,
- real payment processing,
- smarter route recommendations,
- and a more responsive mobile-friendly design.

## Purpose

This repository was created for academic use and presents both the system design and the working prototype for the assignment.

## Author

Student Assignment Project

## License

This project is for academic and educational use only.
