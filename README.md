# React Quiz Application

[English](#React-Quiz) | [中文](#React测验)

---

## React Quiz

A full-stack quiz application built with a modern technology stack, featuring a React frontend, Node.js + Express backend, and MongoDB for data persistence. The project showcases the use of various development tools and techniques to create a dynamic, scalable quiz platform.

## Features

- **Frontend**:
	- Developed using **React** with **Vite** as the build tool.
	- Utilizes **React's `useReducer`** hook for efficient state management.
	- Makes **API requests** using **Axios** to interact with the backend.
	- Styled components for a modern and responsive user interface.
	- **Timer** functionality with interval-based state updates.

- **Backend**:
	- Powered by **Node.js** and **Express.js**.
	- Uses **MongoDB** and **Mongoose** for database operations.
	- **CORS** enabled to handle cross-origin requests between frontend and backend.

- **Technologies Used**:
	- **Frontend**: React, Vite, Axios, SCSS, useReducer.
	- **Backend**: Node.js, Express.js, MongoDB, Mongoose.
	- **Tools**: CORS, Postman for API testing, Axios for data fetching.

## Project Setup

### Prerequisites

- **Node.js** (version 14.x or later)
- **MongoDB** (local or cloud instance)

### Installation

1. Clone the repository:

	```bash
	git clone https://github.com/your-username/react-quiz-app.git
	cd react-quiz-app
	```

2. Install dependencies for both the frontend and backend:

	```bash
	npm install
	```

### Running the Application

#### Backend (Node.js + Express)

1. If you're using **MongoDB Atlas** for cloud-based MongoDB, follow these steps:

	- Open the `config.env` file.

	- Update the `USERNAME` and `DATABASE_PASSWORD` with your MongoDB Atlas credentials as provided in the Atlas connection string. The format should look like this:

		```bash
		USERNAME=(YOUR MONGODB USERNAME)    
		DATABASE_PASSWORD=(YOUR MONGODB PASSWORD)
		DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.fnghc.mongodb.net/react_quiz?retryWrites=true&w=majority&appName=Cluster0
		```

	- Ensure you've replaced `<USERNAME>`, `<DATABASE_PASSWORD>`, and `<DB_NAME>` with your actual credentials and database name.

2. After configuring your MongoDB connection, start the backend server:

	```bash
	npm run server
	```

	The backend will run on `http://localhost:3000`.

#### Frontend (React + Vite)

1. Start the frontend development server:

	```bash
	npm run dev
	```

	The frontend will run on `http://localhost:3000`.

### API Endpoints

- `GET /api/v1/quizzes`: Fetch all quizzes
- `POST /api/v1/quizzes`: Create a new quiz
- `GET /api/v1/quizzes/:id`: Fetch a single quiz by ID
- `PUT /api/v1/quizzes/:id`: Update a quiz by ID
- `DELETE /api/v1/quizzes/:id`: Delete a quiz by ID

### Key Technologies

#### Frontend:

- **React with Vite**: Leveraging Vite for faster build times and modern development features.
- **`useReducer` Hook**: Efficiently managing complex application state (questions, timer, scores).
- **Axios**: Simplified API requests to fetch and update quiz data from the backend.
- **SCSS**: Styling for a responsive and modern user interface.

#### Backend:

- **Node.js + Express.js**: Scalable and flexible server-side framework for API development.
- **MongoDB + Mongoose**: Robust NoSQL database with schema-based validation and querying using Mongoose.
- **CORS**: Secure and controlled cross-origin requests between frontend and backend.

### Future Improvements

- Add user authentication and authorization (JWT).
- Implement quiz categories and difficulty levels.
- Add leaderboard and user performance tracking.

## Conclusion

This project demonstrates the use of a **full-stack JavaScript** environment with a rich and mature technology stack, providing a foundation for scalable web applications. The React frontend and Node.js backend work seamlessly together to provide a dynamic quiz platform with real-time feedback and interaction.

---

## React测验

一个基于现代技术栈的全栈测验应用，前端使用React，后端使用Node.js和Express，数据库采用MongoDB持久化数据。该项目展示了各种开发工具和技术的应用，创建了一个动态、可扩展的测验平台。

## 功能特点

- **前端**:
	- 使用 **React** 通过 **Vite** 进行构建。
	- 使用 **React 的 `useReducer`** 钩子高效管理应用状态。
	- 通过 **Axios** 发起API请求与后端交互。
	- 使用样式化组件，构建现代化和响应式的用户界面。
	- **计时器** 功能，基于时间间隔进行状态更新。

- **后端**:
	- 基于 **Node.js 和 Express.js** 搭建的后端服务器。
	- 使用 **MongoDB 和 Mongoose** 进行数据库操作。
	- 使用 **CORS** 技术处理前后端的跨域请求。

- **使用的技术**:
	- **前端**: React, Vite, Axios, SCSS, useReducer。
	- **后端**: Node.js, Express.js, MongoDB, Mongoose。
	- **开发工具**: CORS, Postman用于API测试，Axios用于数据请求。

## 项目设置

### 先决条件

- **Node.js** (14.x或更高版本)
- **MongoDB** (本地或云端实例)

### 安装步骤

1. 克隆仓库:

	```bash
	git clone https://github.com/your-username/react-quiz-app.git
	cd react-quiz-app
	```

2. 安装前端和后端的依赖:

	```bash
	npm install
	```

### 运行应用

#### 后端 (Node.js + Express)

1. 如果使用 **MongoDB Atlas** 云数据库，请按照以下步骤操作：

	- 打开 `config.env` 文件。

	- 根据Atlas提供的连接信息，更新 `USERNAME` 和 `DATABASE_PASSWORD`。格式如下:

		```bash
		USERNAME=(你的MongoDB用户名)    
		DATABASE_PASSWORD=(你的MongoDB密码)
		DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.fnghc.mongodb.net/react_quiz?retryWrites=true&w=majority&appName=Cluster0
		```

	- 确保将 `<USERNAME>`、`<DATABASE_PASSWORD>` 和 `<DB_NAME>` 替换为你的实际信息。

2. 配置好MongoDB连接后，启动后端服务器：

	```bash
	npm run server
	```

	后端将在 `http://localhost:3000` 运行。

#### 前端 (React + Vite)

1. 启动前端开发服务器:

	```bash
	npm run dev
	```

	前端将在 `http://localhost:3000` 运行。

### API 接口

- `GET /api/v1/quizzes`: 获取所有测验
- `POST /api/v1/quizzes`: 创建新测验
- `GET /api/v1/quizzes/:id`: 根据ID获取单个测验
- `PUT /api/v1/quizzes/:id`: 根据ID更新测验
- `DELETE /api/v1/quizzes/:id`: 根据ID删除测验

### 关键技术

#### 前端:

- **React 与 Vite**: 利用Vite实现更快的构建速度和现代化开发功能。
- **`useReducer` 钩子**: 高效管理复杂应用状态（问题列表、计时器、得分等）。
- **Axios**: 简化API请求，获取和更新测验数据。
- **SCSS**: 为现代化和响应式用户界面提供样式支持。

#### 后端:

- **Node.js 与 Express.js**: 可扩展的后端框架，用于API开发。
- **MongoDB 与 Mongoose**: 使用Mongoose进行基于模式的数据库验证和查询。
- **CORS**: 保障前后端跨域请求的安全和控制。

### 未来改进

- 添加用户认证和授权（JWT）。
- 实现测验分类和难度级别。
- 添加排行榜和用户表现跟踪。

## 结论

该项目展示了如何使用一个 **全栈JavaScript** 环境构建具有丰富功能和成熟技术栈的可扩展Web应用。React前端与Node.js后端无缝结合，提供了一个动态的测验平台，实现实时反馈和互动。

---

By clicking the links at the top of the document, users can easily switch between English and Chinese versions.
