
# Contributing to Current Glimpse

Thank you for considering contributing to Current Glimpse! We appreciate your interest in improving our project. This guide outlines the contribution process to ensure a smooth and collaborative experience.

---

## How to Contribute

### 1. Reporting Bugs
- Use the [GitHub Issues](https://github.com/jtdietzer/Current-Glimpse/issues) page to report bugs.
- Clearly describe the issue and include steps to reproduce it.
- Provide relevant logs, screenshots, or code snippets if applicable.

### 2. Suggesting Features
- Open a feature request on the [GitHub Issues](https://github.com/jtdietzer/Current-Glimpse/issues) page.
- Clearly explain the feature and its purpose.
- Provide details about the problem it solves and any alternatives you've considered.

### 3. Submitting Code Changes
- Fork the repository and create a new branch:
  ```bash
  git checkout -b feature/your-feature-name
  ```
- Write clear, maintainable code and follow the project's coding standards.
- Add or update tests for your changes.
- Ensure your code passes existing tests and linters:
  ```bash
  npm run lint
  npm test
  ```
- Commit your changes with meaningful commit messages:
  ```bash
  git commit -m "Add feature: your-feature-name"
  ```
- Push your changes to your fork:
  ```bash
  git push origin feature/your-feature-name
  ```
- Submit a pull request to the `main` branch.

---

## Development Guidelines

### Code Style
- Follow the existing code style conventions.
- Use Prettier and ESLint for consistent formatting.
- For backend, ensure modularity and reusability in services and controllers.
- For frontend, structure components by feature when possible.

### Testing
- Write tests for all new features and bug fixes.
- Ensure tests are categorized as `unit`, `integration`, or `end-to-end`.

### Environment Setup
- Copy the `.env.example` file and configure the environment variables as needed:
  ```bash
  cp .env.example .env
  ```
- Start the backend server:
  ```bash
  cd backend && npm start
  ```
- Start the frontend client:
  ```bash
  cd client && npm start
  ```

---

## Code of Conduct
By contributing, you agree to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## Community Support
If you have any questions or need help, feel free to reach out:
- **Email**: jacobdietzer@currentglimpse.com
- **GitHub Discussions**: [Current Glimpse Discussions](https://github.com/jtdietzer/Current-Glimpse/discussions)

---

We look forward to your contributions!
