To run the projects
1. Install Node JS 
2. Install the Databse Tool - MongoDB. Keep the server running  at 127.0.0.1:27017
3. Import the mongoDB data files provided as a bson to the database. (reference: https://stackoverflow.com/questions/6770498/how-to-import-bson-file-format-on-mongodb)
			mongorestore -d db_name -c collection_name /path/file.bson 
4. Pease Use only Google Chrome To work with this project.
5. Got to chrome://extensions and switch on the developer mode on the top right corner, and select the top left option of load unpacked and select the directory 'ChromExtension' within tthe zip file submitted.
6. Go to todo-api-master file directory then run the following commands
a) npm install
b) npm install -g nodemon
c) npm start
