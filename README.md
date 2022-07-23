<p align="center">
  <img src="https://user-images.githubusercontent.com/62235952/178112276-6a7284bd-a117-4d96-9850-fb1c5c8a2e09.jpg" />
</p>

<h3 align="center">
  SMK Multistudi High School Library Website
</h3>

# Table of Contents

<ol>
  <li><a href="#deployed-website">Deployed Website</a></li>
  <li><a href="#built-with">Built With</a></li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#environment-variables">Environment Variables</a></li>
    </ul>
  </li>
  <li><a href="#deployment">User & Admin Deployment</a></li>
  <li><a href="#authors">Authors</a></li>
</ol>

# Deployed Website

- Users Landing Page = https://multistudi-library.web.app/
- Admin Dashboard = https://mhs-library-5a9e5.web.app/

# Built With

- ReactJS: 17.0.2^
- NPM: 8.13.1^
- Firebase: 9.8.3^

# Getting Started

## Prerequisites

1. Clone the repo into local machine

```
git clone git@github.com:AlviGeo/mhs-library-react-firebase.git
```

2. Move to folder just created

```
cd frontend for users page and react-template for admin
```

3. Install npm

```
npm install
```

4. Run the application with npm start

```
npm start
```
<p align="right">(<a href="#top">back to table of contents</a>)</p>

## Environment Variables
File konfigurasi layanan MHS Library ditulis menggunakan .env. File ini harus berada di dalam folder src dengan contoh file lengkap seperti berikut ini.

```env
#filename: .env
REACT_APP_FIREBASE_API_KEY=""
REACT_APP_FIREBASE_AUTH_DOMAIN=""
REACT_APP_FIREBASE_DATABASE_URL=""
REACT_APP_FIREBASE_PROJECT_ID=""
REACT_APP_FIREBASE_STORAGE_BUCKET=""
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=""
REACT_APP_FIREBASE_APP_ID=""

```

<p align="right">(<a href="#top">back to table of contents</a>)</p>

## Deployment

1. cd into frontend / react-template
2. npm run build
3. cd ..
4. For hosting admin folder = firebase deploy --only hosting:admin 
5. For hosting user folder = firebase deploy --only hosting:public

<p align="right">(<a href="#top">back to table of contents</a>)</p>

## Authors
- [Alvi Geovanny](https://github.com/AlviGeo)