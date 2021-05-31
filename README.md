# Grofers-Test
Key Value Store API using Node.js and MongoDb:
This API has been written using node.js as server side programming languag, with mongodb. The API has been hosted on AWS EC2 instance with Virtual private network (VPC) and default subnet.
Docker has been used to make the applicaiton containerize to build the application faster.
- #### Node installation on Ubuntu
-   You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm
If the installation was successful, you should be able to run the following command.
node>= v12.22.1
npm>= 6.14.12

After cloning the code from repository there are different folder structures like
node_modules: The node_modules directory is only for build tools
src: src folder contains
    - app.js file which contains the db connection ,routes, plugin define etc.
      bin: bin contains all binaries files 
      controller: Controller contains key.js that is a wrapper to get and put the key and value.
      models:  model will define the schema for the database.
 With in the project root directory by running the below commands:
 npm run build
 npm run start
 
Once the application gets started we can verify by using the below URLs on browser:

http://13.234.76.62:3000/key/12

From command line terminal we can verify whether application is working as expected:

curl --location --request POST 'http://13.234.76.62:3000/key' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "key": "12",
     "value": "120"
 }'


curl --location --request GET 'http://13.234.76.62:3000/key/12'

I have tested the application using the Postman API which is an API tool where I have imported my API and working sucessfully.

Since Application is configured on AWS platform and API is accessible globally:

http://13.234.76.62:3000/key/12

The above are the some basics instructions which are required to setup the application and to verify the application working it could be done by using postman or curl request.

Attaching the screenshots of application working can be seen in issues.
