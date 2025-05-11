---
url: /etc\jest\src/use.md
---
## 十、Jest 在不同场景下的应用

### 10.1 前端开发中的应用

* **React 组件测试**：使用 Jest 结合 React Testing Library 或 Enzyme，可以方便地测试 React 组件的渲染、交互和状态变化。

```javascript
import React from'react';
import { render, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';
test('renders MyComponent and clicks button', () => {
    const { getByText } = render(<MyComponent />);
    const button = getByText('Click me');
    fireEvent.click(button);
    // 断言组件状态变化
});
```

* **Vue 组件测试**：对于 Vue 组件，可以使用 Jest 结合 Vue Test Utils 进行测试。

```javascript
import { mount } from '@vue/test-utils';
import MyVueComponent from './MyVueComponent.vue';
test('renders Vue component and updates data', () => {
    const wrapper = mount(MyVueComponent);
    wrapper.find('button').trigger('click');
    // 断言组件数据变化
});
```

### 10.2 后端开发中的应用

* **Node.js 应用测试**：在 Node.js 应用开发中，Jest 可以用于测试路由、中间件、数据库操作等功能。

```javascript
const request = require('supertest');
const app = require('./app');
test('GET / returns 200', async () => {
    const response = await request(app).get('/
```

### 10.2 后端开发中的应用（续）

* **Node.js 应用测试**：

- - **路由测试**：在测试路由时，除了验证响应状态码，还可以检查响应体的内容。例如，假设我们有一个简单的 Express 应用，包含一个返回用户列表的路由。

```javascript
const express = require('express');
const app = express();
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
app.get('/users', (req, res) => {
    res.json(users);
});
const request = require('supertest');
test('GET /users returns users list', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(users);
});
```

* **中间件测试**：中间件在 Node.js 应用中起着至关重要的作用，比如验证用户身份、记录日志等。以一个简单的身份验证中间件为例，使用 Jest 测试它是否能正确拦截未授权的请求。

```javascript
const express = require('express');
const app = express();
// 模拟身份验证中间件
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        // 这里简单模拟token验证
        if (token === 'validToken') {
            return next();
        }
    }
    res.status(401).send('Unauthorized');
};
app.get('/protected', authMiddleware, (req, res) => {
    res.send('Protected resource');
});
const request = require('supertest');
test('GET /protected rejects unauthenticated requests', async () => {
    const response = await request(app).get('/protected');
    expect(response.status).toBe(401);
    expect(response.text).toBe('Unauthorized');
});
test('GET /protected allows authenticated requests', async () => {
    const response = await request(app)
     .get('/protected')
     .set('Authorization', 'Bearer validToken');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Protected resource');
});
```

* **数据库操作测试**：对于涉及数据库操作的函数，利用 Jest 的模拟函数来隔离测试。以使用mysql模块进行数据库查询为例。

```javascript
const mysql = require('mysql');
// 模拟数据库连接池
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'testdb'
});
// 假设一个获取用户信息的函数
function getUserById(id, callback) {
    const query = 'SELECT * FROM users WHERE id =?';
    pool.query(query, [id], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results[0]);
    });
}
// 测试文件
const { getUserById } = require('./userService');
const mysql = require('mysql');
jest.mock('mysql');
test('getUserById retrieves user from database', (done) => {
    const mockResults = [{ id: 1, name: 'Alice' }];
    const mockQuery = jest.fn((sql, values, cb) => {
        cb(null, mockResults);
    });
    mysql.createPool.mockReturnValue({
        query: mockQuery
    });
    getUserById(1, (error, user) => {
        expect(error).toBe(null);
        expect(user).toEqual(mockResults[0]);
        done();
    });
});
```

### 10.3 测试 GraphQL API

随着 GraphQL 在前后端开发中的广泛应用，使用 Jest 测试 GraphQL API 也变得越来越重要。以express - graphql为例，展示如何使用 Jest 测试 GraphQL 的查询和变更。

```javascript
const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express - graphql');
// 构建GraphQL schema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`);
// 定义解析器
const root = {
    hello: () => 'Hello world!'
};
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true // 开启GraphiQL调试工具
}));
const request = require('supertest');
test('GraphQL query hello returns "Hello world!"', async () => {
    const response = await request(app)
     .post('/graphql')
     .send({ query: '{ hello }' });
    expect(response.status).toBe(200);
    expect(response.body.data.hello).toBe('Hello world!');
});
```

### 10.4 测试工具与库的结合使用

在实际项目中，Jest 常常与其他工具和库结合使用，以提高测试效率和质量。

* **Sinon.js**：Sinon.js 是一个功能强大的 JavaScript 测试库，提供了丰富的模拟、桩（stub）和间谍（spy）功能。与 Jest 结合使用，可以更灵活地控制测试环境。例如，在测试一个依赖外部 API 的函数时，使用 Sinon 的stub来模拟 API 调用，而不是实际发送请求。

```javascript
const sinon = require('sinon');
const axios = require('axios');
const myFunction = require('./myFunction');
test('myFunction calls external API correctly', async () => {
    const mockResponse = { data: { message: 'Mocked response' } };
    const stub = sinon.stub(axios, 'get').resolves(mockResponse);
    const result = await myFunction();
    expect(result).toEqual(mockResponse.data);
    stub.restore();
});
```

* **Cypress**：Cypress 是一个用于前端自动化测试的工具，专注于浏览器端的交互测试。虽然 Jest 主要用于单元测试，但在一些场景下，结合 Cypress 可以实现更全面的测试覆盖。例如，使用 Jest 进行组件的单元测试，使用 Cypress 进行端到端的集成测试，确保整个应用在浏览器环境中的行为符合预期。

### 10.5 持续集成中的 Jest

在持续集成（CI）环境中，Jest 扮演着关键角色，确保每次代码提交都经过充分的测试。以 GitHub Actions 为例，展示如何在 CI 环境中配置 Jest 测试。

```
name: Jest Tests
on:
  push:
    branches:
      - main
jobs:
  build:
    runs - on: ubuntu - latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup - node@v2
        with:
          node - version: '14'
      - name: Install dependencies
        run: npm install
      - name: Run Jest tests
        run: npm test -- --coverage
```

通过上述配置，每次代码推送到main分支时，GitHub Actions 会自动拉取代码，安装依赖，然后运行 Jest 测试，并生成测试覆盖率报告。这有助于及时发现代码中的问题，保证项目的稳定性和质量。

### 10.6 Jest 在微服务架构中的应用

在微服务架构中，各个服务相互独立又协同工作。Jest 可以用于对每个微服务进行单元测试和集成测试，确保服务的可靠性和稳定性。

#### 10.6.1 服务接口测试

每个微服务都会暴露一些接口供其他服务调用。使用 Jest 结合supertest等库，可以测试这些接口的正确性。例如，假设我们有一个用户管理微服务，提供了获取用户信息的接口。

```javascript
const express = require('express');
const app = express();
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});
const request = require('supertest');
test('GET /users/:id returns correct user', async () => {
    const response = await request(app).get('/users/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(users[0]);
});
test('GET /users/:id returns 404 for non - existent user', async () => {
    const response = await request(app).get('/users/3');
    expect(response.status).toBe(404);
    expect(response.text).toBe('User not found');
});
```

#### 10.6.2 服务间通信测试

微服务之间通常通过 HTTP、消息队列等方式进行通信。在测试时，可以使用 Jest 模拟其他服务的响应，测试当前服务在不同通信场景下的行为。例如，使用nock库来模拟 HTTP 请求的响应，测试一个依赖其他服务获取数据的微服务。

```javascript
const axios = require('axios');
const nock = require('nock');
const myService = require('./myService');
test('myService calls other service and processes response', async () => {
    const mockData = { message: 'Mocked data from other service' };
    nock('http://other - service.com')
     .get('/data')
     .reply(200, mockData);
    const result = await myService.fetchData();
    expect(result).toEqual(mockData);
});
```

### 10.7 Jest 与测试报告工具的整合

为了更直观地展示测试结果，Jest 可以与一些测试报告工具进行整合。

#### 10.7.1 Jest 与 Allure 的整合

Allure 是一个功能强大的测试报告工具，它可以生成美观、详细的测试报告。通过jest - allure - reporter插件，可以将 Jest 的测试结果集成到 Allure 报告中。

1. 安装插件：

```sh
npm install --save - dev jest - allure - reporter
```

2. 在jest.config.js中配置：

```javascript
module.exports = {
    // 其他配置项
    reporters: [
        'default',
        'jest - allure - reporter'
    ]
};
```

3. 运行测试后，在项目根目录下会生成allure - results目录，使用 Allure 命令行工具可以生成报告：

```sh
allure serve allure - results
```

生成的报告中会包含每个测试用例的详细信息，如执行时间、状态、断言结果等，方便团队成员查看和分析测试结果。

#### 10.7.2 Jest 与 Cucumber 的整合（BDD 风格测试）

Cucumber 是一个支持行为驱动开发（BDD）的工具，它使用自然语言描述测试场景。通过cucumber - jest库，可以将 Jest 与 Cucumber 结合，实现 BDD 风格的测试。

1. 安装依赖：

```
npm install --save - dev cucumber - jest cucumber
```

2. 创建features目录，在其中编写 Cucumber 的特性文件（.feature），例如login.feature：

```javascript
Feature: User Login
  As a user
  I want to log in to the application
  So that I can access my account
  Scenario: Successful login
    Given I am on the login page
    When I enter my username "testuser" and password "testpass"
    And I click the login button
    Then I should be redirected to my account page
```

3. 创建相应的步骤定义文件（.js），在其中使用 Jest 的断言实现每个步骤的逻辑：

```javascript
const { Given, When, Then } = require('cucumber - jest');
const { render, fireEvent } = require('@testing - library/react');
const LoginPage = require('./LoginPage');
Given('I am on the login page', () => {
    // 渲染登录页面组件
    const { container } = render(<LoginPage />);
    // 可以进行一些初始化操作，如保存页面容器
});
When('I enter my username "testuser" and password "testpass"', () => {
    // 找到用户名和密码输入框，模拟输入
    const usernameInput = document.getElementsByName('username')[0];
    const passwordInput = document.getElementsByName('password')[0];
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpass' } });
});
When('I click the login button', () => {
    // 找到登录按钮，模拟点击
    const loginButton = document.querySelector('button[type="submit"]');
    fireEvent.click(loginButton);
});
Then('I should be redirected to my account page', () => {
    // 断言页面是否重定向到正确的URL
    expect(window.location.href).toContain('/account');
});
```

通过这种方式，可以将业务逻辑以自然语言的形式描述出来，使非技术人员也能理解测试的目的和场景，同时利用 Jest 强大的断言和测试功能实现具体的测试逻辑。
