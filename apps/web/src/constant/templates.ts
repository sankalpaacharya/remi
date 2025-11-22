export interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
  content: string;
  tags: string[];
}

export const templates: Template[] = [
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean and simple README with essential sections",
    tags: ["basic", "simple", "starter"],
    preview: `# Project Name

A brief description of your project.

## Installation

\`\`\`bash
npm install
\`\`\`

## Usage

\`\`\`bash
npm start
\`\`\``,
    content: `# Project Name

A brief description of your project.

## Features

- Feature 1
- Feature 2
- Feature 3

## Installation

\`\`\`bash
npm install
\`\`\`

## Usage

\`\`\`bash
npm start
\`\`\`

## Contributing

Contributions are welcome!

## License

MIT`,
  },
  {
    id: "comprehensive",
    name: "Comprehensive",
    description: "Full-featured README with all standard sections",
    tags: ["complete", "detailed", "professional"],
    preview: `# Project Name

![Logo](https://via.placeholder.com/150)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)`,
    content: `# Project Name

![Logo](https://via.placeholder.com/150)

[![GitHub Stars](https://img.shields.io/github/stars/user/repo)](https://github.com/user/repo)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

Detailed description of your project.

## Features

- ✨ Feature 1
- 🚀 Feature 2
- 🎯 Feature 3

## Installation

\`\`\`bash
git clone https://github.com/user/repo.git
cd repo
npm install
\`\`\`

## Usage

\`\`\`javascript
const example = require('example');
console.log(example());
\`\`\`

## API

### \`function()\`

Description of the function.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License.

## Contact

- [@username](https://github.com/username)
- email@example.com`,
  },
  {
    id: "centered",
    name: "Centered & Stylish",
    description: "Eye-catching centered design with badges and icons",
    tags: ["styled", "centered", "badges"],
    preview: `<div align="center">

# 🚀 Project Name

**Beautiful tagline for your project**

[![Stars](https://img.shields.io/github/stars/user/repo)](https://github.com/user/repo)`,
    content: `<div align="center">

# 🚀 Project Name

**Beautiful tagline for your project**

[![Stars](https://img.shields.io/github/stars/user/repo)](https://github.com/user/repo)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Made with Love](https://img.shields.io/badge/Made%20with-Love-ff69b4)](https://github.com/user)

![Demo](https://via.placeholder.com/800x400)

[Demo](https://example.com) • [Documentation](https://docs.example.com) • [Report Bug](https://github.com/user/repo/issues)

</div>

## ✨ Features

- 🎨 Beautiful UI
- ⚡ Lightning fast
- 🔒 Secure
- 📱 Responsive

## 🚀 Quick Start

\`\`\`bash
npm install project-name
\`\`\`

## 📖 Usage

\`\`\`javascript
import { feature } from 'project-name';

feature.use();
\`\`\`

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 📝 License

MIT © [Your Name](https://github.com/username)`,
  },
  {
    id: "tech-stack",
    name: "Tech Stack Showcase",
    description: "Perfect for projects showcasing technologies used",
    tags: ["tech", "stack", "frameworks"],
    preview: `# Project Name

## 🛠️ Built With

<div align="center">
  <img src="https://skillicons.dev/icons?i=react,typescript,nodejs" />
</div>`,
    content: `# Project Name

> Tagline describing your project

## 🛠️ Built With

<div align="center">
  <img src="https://skillicons.dev/icons?i=react,typescript,nodejs,express,mongodb,tailwind" />
</div>

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## 🚀 Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/user/repo.git

# Navigate to project
cd repo

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

## 🏗️ Project Structure

\`\`\`
project/
├── src/
│   ├── components/
│   ├── pages/
│   └── utils/
├── public/
└── package.json
\`\`\`

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License.`,
  },
  {
    id: "api-docs",
    name: "API Documentation",
    description: "Ideal for API projects and libraries",
    tags: ["api", "documentation", "library"],
    preview: `# API Name

RESTful API for [purpose]

## 🔌 Endpoints

### GET /api/resource

Returns a list of resources.`,
    content: `# API Name

RESTful API for [purpose]

## 📚 Table of Contents

- [Authentication](#authentication)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)

## 🔐 Authentication

\`\`\`bash
Authorization: Bearer YOUR_API_KEY
\`\`\`

## 🔌 Endpoints

### GET /api/resource

Returns a list of resources.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| \`limit\` | integer | No | Number of items to return |
| \`offset\` | integer | No | Offset for pagination |

**Response:**

\`\`\`json
{
  "data": [],
  "total": 100,
  "limit": 10,
  "offset": 0
}
\`\`\`

### POST /api/resource

Creates a new resource.

**Request Body:**

\`\`\`json
{
  "name": "string",
  "description": "string"
}
\`\`\`

## ⚠️ Error Handling

\`\`\`json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
\`\`\`

## ⏱️ Rate Limiting

- 100 requests per minute
- 1000 requests per hour`,
  },
  {
    id: "open-source",
    name: "Open Source Project",
    description: "Community-focused with contribution guidelines",
    tags: ["opensource", "community", "collaborative"],
    preview: `# 🌟 Project Name

<p align="center">Help us grow and star us on Github! ⭐️</p>

## 👥 Community`,
    content: `# 🌟 Project Name

<p align="center">
  <strong>Making [purpose] accessible to everyone</strong>
</p>

<p align="center">
  Help us grow and star us on Github! ⭐️
</p>

<p align="center">
  <a href="https://github.com/user/repo/stargazers">
    <img src="https://img.shields.io/github/stars/user/repo" alt="Stars">
  </a>
  <a href="https://github.com/user/repo/network/members">
    <img src="https://img.shields.io/github/forks/user/repo" alt="Forks">
  </a>
  <a href="https://github.com/user/repo/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/user/repo" alt="Contributors">
  </a>
</p>

## 🎯 Mission

Our mission is to [mission statement].

## 🚀 Getting Started

Follow these steps to get started with the project.

## 👥 Community

- [Discord](https://discord.gg/invite)
- [Twitter](https://twitter.com/username)
- [Discussions](https://github.com/user/repo/discussions)

## 🤝 Contributing

We love contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Contributors

<a href="https://github.com/user/repo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=user/repo" />
</a>

## 📜 Code of Conduct

Please read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file.

## 💖 Sponsors

Support this project by becoming a sponsor!`,
  },
];
