# Implementing MVC pattern

This project is a simple social media platform developed as the culmination of our web development course at University of Tartu. It allows users to make, edit, delete and interact with posts. The main aim was to get familiar with the MVC model and user authentication and not so much on the actual usefulness and practicality of the web application.

## Technologies Used

- Vue.js
- Node.js
- PostgreSQL
- JSON Web Tokens (JWT)

## Features

- User Registration: Users can register for an account.
- User Login: Registered users can log in to their accounts securely using JWT.
- User Authentication and Authorization
- Post Creation and Removal
- Post Retrieval and Modification

## Setup

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/d4gl4s/WAD2023-HW4.git
```

2. Navigate to the backend directory:

```bash
cd WAD2023-HW4/backend
```

3. Install dependencies:

```bash
npm install
```

4. Set up PostgreSQL database:
   - Create a PostgreSQL database and configure the connection details in `database.js`.

5. Start the backend server:

```bash
npm start
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Configure API endpoint:
   - Update the API endpoint in the Vue application to point to your backend server.

4. Start the frontend development server:

```bash
npm run serve
```

5. Access the application in your browser at `http://localhost:8080`.
   
## Contributors

- [Daglas Aitsen](https://github.com/d4gl4s)
- [Karen Roht](https://github.com/karenroht)
- [Uku Laik](https://github.com/ukuku8)
