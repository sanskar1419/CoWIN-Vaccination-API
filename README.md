# Hospital API

Hospital API is a server side api where client as doctor can register and login on the web application. Simultaneously the doctor can register the patient and create checkup report. On the other hand patient can download all his past reports.

## Render Deployment Link

To view the web application go to this link

```bash
  https://hospital-api-kqkr.onrender.com
```

## Swagger Hospital API Documentation

To view the API Documentation for local hosting go to this link

```bash
  http://127.0.0.1:8000/api-docs/
```

To view the API Documentation for render deployment go to this link

```bash
  https://hospital-api-kqkr.onrender.com/api-docs/
```

## Tech Stack

**Server:** NodeJs, Express, MongoDB, Mongoose

## NPM Dependencies

- bcrypt
- body-parser
- cors
- dotenv
- express
- express-validator
- jsonwebtoken
- mongoose
- swagger-ui-express
- winston

## Installation

To install the Habit_Tracker, follow these steps:

Clone this repository using the following command:

```
$ git clone https://github.com/sanskar1419/Hospital_API.git
```

Install the required dependencies using the following command:

```
$ npm install
```

or

```
$ npm i
```

Start the application using the following command:

```
$ node server.js
```

or

```
$ nodemon server.js
```

Open the application in your web browser by visiting the following URL:

```
$ http://localhost:8000
```

## API Reference

#### Register Doctor

```http
  POST /api/doctors/register
```

| Body Parameter    | Type     | Description                            |
| :---------------- | :------- | :------------------------------------- |
| `name`            | `string` | **Required**. Doctor name is required  |
| `userName`        | `string` | **Required**. User Name is Required    |
| `password`        | `string` | **Required**. Password is Required     |
| `confirmPassword` | `string` | **Required**. Must be same as Password |

#### Login Doctor

```http
  POST /api/doctors/login
```

| Body Parameter | Type     | Description                         |
| :------------- | :------- | :---------------------------------- |
| `userName`     | `string` | **Required**. User Name is Required |
| `password`     | `string` | **Required**. Password is Required  |

#### Register Patient

```http
  POST /api/patients/register
```

| Body Parameter | Type     | Description                                 |
| :------------- | :------- | :------------------------------------------ |
| `name`         | `string` | **Required**. Patient name is required      |
| `userName`     | `string` | **Required**. Must be Patient Mobile Number |

| Header Parameter | Type     | Description             |
| :--------------- | :------- | :---------------------- |
| `Authorization`  | `string` | **Required**. JWT Token |

#### Create Patient Report

```http
  POST /api/patients/{id}/create_report
```

| Body Parameter | Type     | Description                |
| :------------- | :------- | :------------------------- |
| `status`       | `string` | **Required**. Covid Status |

| Header Parameter | Type     | Description             |
| :--------------- | :------- | :---------------------- |
| `Authorization`  | `string` | **Required**. JWT Token |

| Params Parameter | Type     | Description                       |
| :--------------- | :------- | :-------------------------------- |
| `id`             | `string` | **Required**. ObjectId of patient |

#### Get Patient All Reports

```http
  GET /api/patients/{id}/all_reports
```

| Params Parameter | Type     | Description                       |
| :--------------- | :------- | :-------------------------------- |
| `id`             | `string` | **Required**. ObjectId of patient |

#### Filter All Reports Based On Status

```http
  GET /api/reports/{status}
```

| Params Parameter | Type     | Description                      |
| :--------------- | :------- | :------------------------------- |
| `status`         | `string` | **Required**. Status is required |

## Screenshots

### Documentation

![Documentation](https://github.com/sanskar1419/Project_Screenshot/blob/master/Hospital%20API/Screenshot%202024-02-03%20201753.png?raw=true)
