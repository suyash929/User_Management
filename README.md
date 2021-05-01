# User_Management

- It is a basic user management app developed on node to perform crud operation.
- In this a user can be created with details:
    {
        login: username,
        password  : password for login,
        age :  age of user
    }
- User details can be updated and deleted
- To use this follow the below mentioned steps:
    1) clone repo on your system using:
        git clone https://github.com/suyash929/User_Management.git
    2) after cloning got to repo and run 'npm install' to install all required packages.
    3) start server using npm start command on terminal.

- To test this :

    - curl --location --request GET 'http://localhost:3000/:1' 

    - curl --location --request POST 'http://localhost:3000/crud/' with data in raw json:

        for eg: {"login":"adin123","password":"admin","age":25}

    - curl --location --request PUT 'http://localhost:3000/crud/1' with data in raw json:

        for eg: {"login":"adin123","password":"admin","age":25} parameters are optional

    - curl --location --request DELETE 'http://localhost:3000/crud/1' uing id 
