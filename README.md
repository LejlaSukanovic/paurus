# Paurus - Student Management System

A modern student management application built with Angular 20 and PrimeNG, featuring a comprehensive interface for managing students, courses, and academic information.

## Features

- 📊 **Student Overview Dashboard** - Statistics and student table with search/filtering
- 👥 **Student Management** - Add, edit, view, and delete students
- 📚 **Course Management** - Dynamic course assignment and editing
- 🔍 **Advanced Search** - Global search across student data
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ✨ **Modern UI** - Built with PrimeNG components and modern styling
- 🔔 **Toast Notifications** - Success/error feedback for all operations

## Tech Stack

- **Frontend**: Angular 20 (Standalone Components)
- **UI Library**: PrimeNG
- **Backend**: JSON Server (Mock API)
- **Styling**: CSS with modern design patterns
- **Package Manager**: pnpm

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) package manager
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/LejlaSukanovic/paurus.git
```

### 2. Navigate to Project Directory

```bash
cd paurus
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Start the JSON Server (Mock API)

Open a terminal and run:

```bash
pnpm json-server --watch db.json --port 3000
```

Keep this terminal running. The API will be available at `http://localhost:3000`

### 5. Start the Angular Development Server

Open a **new terminal** and run:

```bash
pnpm start
```

The application will be available at `http://localhost:4200`

## Quick Start Commands

Here are the copy-paste ready commands to get everything running:

```bash
# Clone and setup
git clone https://github.com/LejlaSukanovic/paurus.git
cd paurus
pnpm install

# Terminal 1 - Start JSON Server
pnpm json-server --watch db.json --port 3000

# Terminal 2 - Start Angular App
pnpm start
```

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── header/         # Navigation header
│   │   ├── students-table/ # Student data table
│   │   ├── student-add-form/    # Add student form
│   │   ├── student-edit-form/   # Edit student courses
│   │   └── student-details/     # Student detail view
│   ├── pages/              # Page components
│   │   ├── overview/       # Dashboard page
│   │   ├── add-student/    # Add student page
│   │   └── student-details/     # Student details page
│   ├── services/           # API services
│   ├── models/             # TypeScript interfaces
│   └── app.routes.ts       # Application routing
├── styles.css              # Global styles
└── db.json                 # Mock database
```

## Available Scripts

- `pnpm start` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run unit tests
- `pnpm json-server --watch db.json --port 3000` - Start mock API server

## API Endpoints

The JSON Server provides the following endpoints:

- `GET /students` - Get all students
- `GET /students/:id` - Get student by ID
- `POST /students` - Create new student
- `PUT /students/:id` - Update student
- `DELETE /students/:id` - Delete student

## Usage

1. **Overview Page** (`/overview`) - View dashboard with student statistics and searchable table
2. **Add Student** (`/add-student`) - Create new students with course assignments
3. **Student Details** (`/student/:id`) - View and edit individual student information
4. **Navigation** - Use the header navigation or click on student rows

## Features in Detail

### Student Management
- Add students with personal information and courses
- Edit student courses dynamically
- Delete students
- View detailed student profiles

### Search & Filtering
- Global search across ID, name, email, and major
- Sortable columns in the data table
- Pagination with customizable page sizes

### Course Management
- Dynamic course addition/removal
- Course validation (title and credits)
- Visual course tags with credit information

## Troubleshooting

### Port Already in Use
If port 3000 or 4200 is already in use:

```bash
# For JSON Server (use different port)
pnpm json-server --watch db.json --port 3001

# For Angular (usually auto-assigns new port)
pnpm start
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### API Connection Issues
- Ensure JSON Server is running on port 3000
- Check that `db.json` exists in the project root
- Verify API calls in browser developer tools

## Contact

For questions or support, please contact [Lejla Sukanovic](https://github.com/LejlaSukanovic).
