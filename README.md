# Student Management Application

This is a simple Student Management Application built with React, Redux Toolkit, React Router DOM, and Bootstrap. It allows you to add, view, edit, and delete student records.

## Demo

You can access the live demo of the application here: [Live demo](https://react-practical-exam-beta.vercel.app/)

## Features

*   **Add New Student:** Input student details (Name, Class, Roll Number) through a form.
*   **View Student List:** Display all student records in a sortable and searchable table.
*   **Edit Student:** Modify existing student details.
*   **Delete Student:** Remove student records from the list.
*   **Search/Filter:** Filter student records by name or class in the table.
*   **Responsive Design:** Built with Bootstrap for a mobile-friendly interface.
*   **State Management:** Utilizes Redux Toolkit for efficient and predictable state management.
*   **Routing:** Uses React Router DOM for navigation between the form and table views.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Redux Toolkit:** The official, opinionated, batteries-included toolset for efficient Redux development.
*   **React Router DOM:** Declarative routing for React.
*   **Axios:** Promise-based HTTP client for the browser and Node.js.
*   **Bootstrap:** A powerful, feature-packed frontend toolkit for building responsive, mobile-first sites.
*   **React Icons:** A collection of popular icons for React projects.

## Project Structure

The project follows a standard React application structure with a focus on Redux Toolkit for state management.

```
├── public/
├── src/
│   ├── app/
│   │   └── store.js          // Redux store configuration
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Form.jsx          // Component for adding/editing student data
│   │   ├── Header.jsx        // Navigation header
│   │   └── Table.jsx         // Component for displaying student list
│   ├── features/
│   │   ├── students/
│   │   │   └── studentSlice.js // Redux slice for student state
│   │   └── thunk/
│   │       └── thunk.js      // Redux Thunks for asynchronous operations (API calls)
│   ├── App.css
│   ├── App.jsx               // Main application component with routing
│   ├── index.css
│   └── main.jsx              // Entry point of the application
└── package.json
```

## Setup and Installation

To run this project locally, follow these steps:

**1. Clone the repository:**

```bash
git clone <repository-url>
cd student-management-app
```

**2. Install dependencies:**

```bash
npm install
# or
yarn install
```

**3. Set up a JSON Server (for mock API):**

This application uses `json-server` to simulate a backend API.

*   **Install `json-server` globally (if you haven't already):**

    ```bash
    npm install -g json-server
    ```

*   **Create a `db.json` file in the root of your project with the following content:**

    ```json
    {
      "students": []
    }
    ```

*   **Start the JSON Server:**

    ```bash
    json-server --watch db.json --port 3000
    ```
    Ensure the JSON server is running on `http://localhost:3000` as configured in `/src/features/thunk/thunk.js`.

**4. Start the React development server:**

```bash
npm run dev
# or
yarn dev
```

The application should now be running in your browser at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

1.  **Navigate to the Home page (Form):** When you first open the application, you'll be on the form page.
2.  **Add a Student:** Fill in the "Student Name", "Class", and "Roll.No" fields and click "Submit". After submission, you will be redirected to the "Table List" page.
3.  **View Students:** Click on "Table List" in the navigation bar to see all added students.
4.  **Search/Filter:** Use the search input field on the "Table List" page to filter students by name or class.
5.  **Edit a Student:** In the "Table List", click the "Edit" (pen) icon next to the student you want to modify. This will pre-fill the form with the student's data. Make your changes and click "Submit".
6.  **Delete a Student:** In the "Table List", click the "Delete" (trash can) icon next to the student you want to remove.

## Redux State Structure

The Redux store manages the `students` slice with the following structure:

```javascript
{
  students: {
    students: [],       // Array of student objects
    selectedData: null, // Holds the student object currently being edited
    loading: false,     // Indicates if an API request is in progress
    error: null         // Stores any error messages from API requests
  }
}
```

## API Endpoints (JSON Server)

The application interacts with the following mock API endpoints provided by `json-server`:

*   `GET /students`: Fetches all student records.
*   `POST /students`: Adds a new student record.
*   `PUT /students/:id`: Updates an existing student record.
*   `DELETE /students/:id`: Deletes a student record.

## Contributing

Feel free to fork this repository and contribute.

## License

This project is open source and available under the [MIT License](LICENSE).
