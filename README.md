# Feature Toggle React Component

## AD 311 - Intermediate Development
### Victoria Salomon

--- 
# Feature Toggle Component – React

## Project Overview

This project demonstrates a simple **Feature Toggle component** built with React.
The component uses **props and conditional rendering** to control whether a feature is enabled or disabled.

The project was created using **Vite + React** and developed in Visual Studio Code.

---

## Objective

The goal of this assignment is to:

* Understand how **props** work in React
* Implement **conditional rendering**
* Create a reusable **FeatureToggle component**
* Demonstrate **normal and edge test cases**

---

## How It Works

The `FeatureToggle` component accepts two props:

* **isEnabled** (boolean) → Determines if the feature is enabled or disabled
* **featureName** (string) → Name of the feature being toggled

If `isEnabled` is **true**, the feature is displayed as enabled.

If `isEnabled` is **false**, the component displays:

Feature [featureName] is disabled

---

## Test Cases

### Normal Test Cases

1. Dark Mode → enabled
2. Chat Feature → disabled
3. Notifications → enabled

### Edge Test Cases

1. Empty feature name
2. Blank feature name
3. Numeric feature name (123Feature)

These cases demonstrate that the component still renders correctly under unusual inputs.

---

## Project Structure

src/

* App.jsx – Uses the FeatureToggle component and displays test cases
* FeatureToggle.jsx – Component implementing conditional rendering
* main.jsx – React application entry point

---

## How to Run the Project

1. Clone the repository

git clone [https://github.com/PaulinaS123/Assignment-Creating-a-Feature-Toggle-Component-in-React.git]

2. Navigate into the project folder

cd feature-toggle-demo

3. Install dependencies

npm install

4. Start the development server

npm run dev

Then open the local development URL shown in the terminal.

---

## Technologies Used

* React
* Vite
* JavaScript
* Visual Studio Code
