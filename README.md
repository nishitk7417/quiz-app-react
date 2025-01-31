
# Quiz Application

A web-based quiz application with gamification features, built using React. The app fetches quiz data from a provided API endpoint and presents it through an intuitive and engaging user interface. It includes a timer, question navigation, and a summary page with detailed results.

## Table of Contents

- [Features](#features)
  - [Quiz Flow](#quiz-flow)
  - [Timer](#timer)
  - [Summary Page](#summary-page)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Step to Run the Project](#Step-to-Run-the-Project)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

# Features
 ### Quiz Flow:

Start the quiz and answer multiple-choice questions.

Navigate between questions using "Previous" and "Next" buttons.

Submit the quiz to view results.

### Timer:

A countdown timer is displayed at the top-right corner.

The quiz automatically submits when the timer runs out.

### Summary Page:

Displays the user's score and a breakdown of correct/incorrect answers.

Shows the correct answer and detailed explanation for each question.

### Gamification:

Interactive UI with hover effects and selected answer highlighting.

Clean and modern design inspired by popular quiz apps.

# Technologies Used
### Frontend:

React (JavaScript library for building user interfaces)

Tailwind CSS (Utility-first CSS framework for styling)

React Router (For navigation between pages)

### Backend:

Mock API (Static JSON data for quiz questions and answers)

# Steps to Run the Project

Although I provided the live link-(https://quiz-app-react-six-xi.vercel.app/)
But if you want to run this project on your local machine then follow these steps:-

1. Clone the Repository:
```
git clone https://github.com/nishitk7417/quiz-app-react.git
cd quiz-app
```

2. Install Dependencies:
```
npm install
 ```

3. Run the Application:
 ```
run start
```

4. Open the App:
```
The app will open in your browser at http://localhost:3000.
```
```
quiz-app/
├── public/                  # Static assets (e.g., images)
├── src/
│   ├── components/          # Reusable components (e.g., Button)
│   ├── pages/               # Main pages (HomePage, QuizPage, SummaryPage)
│   ├── services/            # Data services (e.g., quizData.js)
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Screenshots

![HomePage](Assets/Homepage.jpg)

![QuizPage](Assets/QuizPage.jpg)

![SummaryPage](Assets/SummaryPage.jpg)

## Contributing

We welcome contributions to improve the project! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Contact Information**

If you have any questions or need support, feel free to reach out to the team at:

- **Email**: nishitku123@gamil.com
-**github**: https://github.com/nishitk7417
