# Sistema de agendamento - Hiring Coders #3

## Summary
- [*Sistema de agendamento - Hiring Coders #3*](#sistema-de-agendamento---hiring-coders-3)
    - [🛠️ *Technologies*](#🛠️-technologies)
    - [🐘 *Creating a PostgreSQL DB in a Docker Container*](#🐘-creating-a-postgresql-db-in-a-docker-container)
    - [🧑‍💻 *Running the project locally in your machine*](#🧑‍💻-running-the-project-locally-in-your-machine)
        - The .env file
        - PostgreSQL Database and Migrations with Sequelize
        - The .env file
        - Using a Database GUI Client
    - [🤔 What now?!](#🤔-what-now)
---
  
## 🛠️ ***Technologies***
  
- *Node.JS*
- *Sequelize*
- *Docker*
- *PostgreSQL 14.4 (in a Docker Container)*
    - *[TablePlus](https://tableplus.com) or [Postbird](https://www.electronjs.org/apps/postbird) (Database GUI)*
- *MongoDB*
    - *[MongoDB Compass](https://www.mongodb.com/try/download/compass) (Database GUI)*
---
  
## 🐘 ***Creating a PostgreSQL DB in a Docker Container***

You can run this command in your terminal if you already have Docker installed in your machine.  
If you dont have a PostgreSQL 14.4 image downloaded yet *it will pull the image in the correct version from Docker Hub automatically.*
  
<!-- TODO: Concertar o comando docker para baixar a imagem da versão 14.4 do PostgreSQL -->
```powershell
docker run --name <container_name> -e POSTGRES_PASSWORD=<password> -e POSTGRES_USER=<user> -p 5432:5432 -d postgres:14.4 
```
  
| To Replace        | Description                                                    |
|-------------------|----------------------------------------------------------------|
| \<container_name> | Replace it with with a **name** of your choice                 |
| \<password>       | Replace it with the **password** chosen for your PostgreSQL DB |
| \<user>           | Replace it with the **username** chosen for your PostgreSQL DB |

| Docker Flags      | Description                                                    |
|-------------------|----------------------------------------------------------------|
| --name            | Container name                                                 |
| -e                | Environment variable                                           |
| -p                | Publish a container's port(s) to the host                      |
| -d                | Run container in background and print container ID             |
  
You can manage your Containers in the *Docker Desktop App*, but if you prefer to do it via CLI it's okay.

Here are some simple Docker CLI Commands:

- List containers:
    ```
    // list running containers
    docker ps

    // -a to show all containers
    docker ps -a
    ```
- Start a stopped container:
    ```
    docker start <container_name>
    ```
- Stop a running container:
    ```
    docker stop <container_name>
    ```
---

## 🧑‍💻 ***Running the project locally in your machine***
After downloading the project the first thing you need to do is to download all the packages it will need to work properly.  
You can run one of the following commands to get our packages good to go:

- Using NPM?
    ```
    npm install 
    ```

- Using Yarn?  
    ```
    yarn 
    ```

Now let's continue. We have some steps before it's all working fine.

1. **The .env file**

    > There's a ***.env_exemplo*** file in the project folder, give it a look. You can rename it to ***.env*** to make it functional.  
    >
    > In this file are listed all environments variables that this project have, you can easily configure PostgreSQL / MongoDB databases and the JWT Web Token from here.
    
    | ENV Variables     | Value Description                                                                                                                                 |
    |-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
    | MONGODB_URI       | Your MongoDB connection URI                                       |
    | MONGODB_DBNAME    | This will be the name of your MongoDB Database                                                                                                    |
    | POSTGRES_HOST     | The host name identifies the host that holds the resource. *Eg*: www.example.com. In your local environment you will probable use `"localhost"`   |
    | POSTGRES_USERNAME | Here goes the same value defined for POSTGRES_USER (PostgreSQL Container) env variable                                                            |
    | POSTGRES_PASSWORD | Here goes the same value defined for POSTGRES_PASSWORD (PostgreSQL Container) env variable                                                        |
    | POSTGRES_DBNAME   | This will be the name of your PostgreSQL Database                                                                                                 |
    | JWT_SECRET        | Can be generated from a script that can be found in *helpers folder* inside the root folder of this project                                       |
    | JWT_EXPIRES_DATE  | Is expressed in seconds or a string describing a time span [zeit/ms](https://github.com/vercel/ms). *Eg*: `60, "2 days", "10h", "7d"`             |
  
2. **PostgreSQL Database and Migrations with Sequelize**

    > Be sure your PostgreSQL Container in running in Docker. Now you are going to create the database and its tables.  
    >
    > What is a Migration? [See about Sequelize Migrations here.](https://sequelize.org/docs/v6/other-topics/migrations/)  
    >
    > Follow the commands below in the same order they are.  
    >
    > - Using NPM?
    >   ```
    >   npx sequelize db:create
    >   npx sequelize db:migrate
    >   ```
    >
    > - Using Yarn?
    >    ```
    >    yarn sequelize db:create
    >    yarn sequelize db:migrate
    >    ```
    >
    >   [For details see the CLI GitHub repository.](https://github.com/sequelize/cli)  

3. **Using a Database GUI Client**

    > You can choose which one serves you, but here are the ones I have used.
    >
    > - Using Postbird? (PostgreSQL)
    >    
    >    | Field     | Value                                                                                                                                                                                                                       |
    >    |-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    >    | Host      | The same value defined in POSTGRES_HOST (.env file)                                                                                                                                                                         |
    >    | Port      | The same value defined for PostgreSQL Container Port. If you used the command mentioned earlier [here](#🐘-creating-a-postgresql-db-in-a-docker-container) the port will be the default PostgreSQL Port, which is **5432**  |
    >    | Username  | The same value defined for PostgreSQL Container POSTGRES_USER env variable                                                                                                                                                  |
    >    | Password  | The same value defined for PostgreSQL Container POSTGRES_PASSWORD env variable                                                                                                                                              |
    >    
    > - Using another one? (PostgreSQL)  
    >   Then all you need to do is fill the same fields mentioned in the table above and you probably good to go.
    >
    > - Using MongoDB Compass?  
    >   For this one, all you have to do is paste your MongoDB URI in the field and... well, good to go!

## 🤔 ***What now?!***

Now? Dunno... Just kidding! Well, you can test the routes with Insomnia. I'll as soon as possible document about all the routes here, but for now I'm dropping this README without it yet. 

You can make some changes or some clean in the code (Well, this is something I for sure will have to do 😂). Also, you can make the frontend integration too (Something that I'll definitely do too).

---
<center>This project was buildt during the Hiring Coders #3 program.</center>