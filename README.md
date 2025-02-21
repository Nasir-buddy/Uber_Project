# Uber Clone

This project is an Uber Clone application with a frontend built using React.js and a backend built using Express, JWT, and MongoDB. 

## Project Structure

The project is divided into two main parts:

1. **Frontend**: The frontend of the application is built using React.js. It has a well-defined structure and well-commented code to ensure readability and maintainability.
2. **Backend**: The backend of the application is built using Express.js. It uses JWT for authentication and MongoDB as the database.

## Frontend

The frontend is located in the `frontend` folder. It includes components, services, and utilities required for the application. The structure is as follows:

```
frontend
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── WaitForDriver
│   │   ├── LookingForDriver
│   │   ├── ConfirmRide
│   │   ├── VehiclePanel
│   │   └── LocationSearchPanel
│   ├── context
|   |   ├── CaptainContext
|   |   ├── UserContext
│   ├── pages
│   │   ├── Home
│   │   ├── UserSignup
│   │   ├── CaptainHome
│   │   ├── CaptainLogout
|   |   ├── CaptainProtectedWrapper
|   |   ├── CaptainLogin
|   |   ├── CaptainSignup
|   |   ├── UserLogout
|   |   ├── UserLogin
|   |   ├── Start
│   │   └── UserProtectedWrapper
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── package.json
└── README.md
```

## Backend

The backend is located in the `backend` folder. It includes routes, controllers, services, and models required for the application. The structure is as follows:

```
backend
├── services
│   ├── captain.services.js
│   ├── user.services.js
├── controllers
│   ├── user.controller.js
│   ├── captain.controller.js
├── middlewares
│   ├── auth.middleware.js
├── models
│   ├── captain.model.js
│   ├── user.model.js
|   ├── blacklistToken.modal.js
├── routes
│   ├── captain.routes.js
│   ├── user.routes.js
├── db
│   ├── db.js
├── .env
├── server.js
├── app.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/uber-clone.git
    ```

2. Navigate to the frontend folder and install dependencies:
    ```sh
    cd uber-clone/frontend
    npm install
    ```

3. Navigate to the backend folder and install dependencies:
    ```sh
    cd ../backend
    npm install
    ```

### Running the Application

1. Start the backend server:
    ```sh
    cd backend
    npm start
    ```

2. Start the frontend development server:
    ```sh
    cd ../frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
