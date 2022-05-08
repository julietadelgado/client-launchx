# vue-3-crud

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Flow
```mermaid
  graph TD;
      main.js-->routes.js;
      routes.js-->components;
      components-->EM[ExplorerService - MissionCommanderService];
      EM[ExplorerService - MissionCommanderService]-->H[HTTP Request Axio];
      H[HTTP Request Axio]-->L[http://localhost:3000/ Prisma Project];
      L[http://localhost:3000/ Prisma Project]-->H[HTTP Request Axio];
      H[HTTP Request Axio]-->EM[ExplorerService - MissionCommanderService];
      EM[ExplorerService - MissionCommanderService]-->components;
```

### Flow Explorers
![image](https://user-images.githubusercontent.com/48570016/167302360-ec0cd7db-ddb1-468d-93e1-7e335be8bbc8.png)

### Flow Mission Commanders
![image](https://user-images.githubusercontent.com/48570016/167302430-080cd8ec-e1cd-4cf0-951f-944cda1eaeb1.png)

### http-common.js
![image](https://user-images.githubusercontent.com/48570016/167302453-ade9673e-df7c-440f-9695-798f3bcfb64f.png)

### ExplorerService.js
![image](https://user-images.githubusercontent.com/48570016/167302470-14d1cee3-64ca-4b4e-a969-fca95cc1e909.png)

### MissionCommander.js
![image](https://user-images.githubusercontent.com/48570016/167302583-172e04a5-bbd0-4778-b0d4-650890a97e17.png)

### router.js
![image](https://user-images.githubusercontent.com/48570016/167302599-65d0d355-fa55-4172-9d0f-7a02ca1b401c.png)
