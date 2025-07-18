# Simple Law Firm Website

This is a simple, clean, and easy-to-deploy website for a law firm, built with Next.js.

## How to Run Locally

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd your-repo-name
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Run the development server**:
    ```bash
    npm run dev
    ```
5.  **View the website**: Open your web browser and go to `http://localhost:3000`.

## How to Deploy to GitHub Pages

1.  **Build the static files**:
    ```bash
    npm run export
    ```
    This will create an `out` folder with all the static files of your website.

2.  **Push the `out` folder to a `gh-pages` branch**:
    You can use a command-line tool like `gh-pages` to automate this process.
    -   Install it: `npm install gh-pages --save-dev`
    -   Add a script to your `package.json`: `"deploy": "npm run export && gh-pages -d out"`
    -   Run the script: `npm run deploy`

3.  **Configure GitHub Pages**:
    In your repository settings on GitHub, go to the "Pages" section and select the `gh-pages` branch as the source. Your website will be live at `https://your-username.github.io/your-repo-name`.
