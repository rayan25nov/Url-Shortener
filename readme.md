# ![URL Shortener](https://img.icons8.com/ios-filled/50/000000/link.png) URL Shortener

## 📑 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Technologies Used](#-technologies-used)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Introduction

This project is a URL Shortener service that allows users to shorten long URLs into more manageable, shorter links. It also tracks the visit history of each shortened URL.

## 🚀 Features

- Shorten long URLs
- Redirect to original URLs using short codes
- Track visit history of shortened URLs
- Light and dark mode for the user interface

## 🔨 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rayan25nov/Url-Shortener.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Url-Shortener
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```bash
   DB_CNN=your_mongodb_connection_string
   PORT=your_port_number
   ```
5. Start the server:
   ```bash
   npm start
   ```

## 📖 Usage

1. Open your browser and navigate to `http://localhost:your_port_number`.
2. Enter the long URL you want to shorten in the input field and click "Shorten Now!".
3. Copy the generated short URL and use it as needed.

## 📡 API Endpoints

- `POST /url` - Generate a short URL
  - Request body: `{ "longUrl": "https://example.com" }`
  - Response: `{ "shortUrl": { "shortCode": "abc123", "redirectUrl": "https://example.com", "visitHistory": [] }, "message": "Short Url created successfully" }`
- `GET /url/:shortCode` - Redirect to the original URL

## 🛞 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nanoid
- HTML, CSS, JavaScript

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## 📜 License

This project is licensed under the MIT License.
