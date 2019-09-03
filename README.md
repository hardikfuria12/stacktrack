
<div style="text-align:center; margin: 50px 0"><img src ="/ChromExtension/images/asu-logo.png" height="200"/>

# Stack-Track : User Behaviour Tracking on Stackoverflow.


<p>This project was implemented as part of curricullum for CSE 591: Adaptive Web Technologies at Arizona State University.</p>

</div>


## Background

In this particular course emphasis was on Open Social Student Model, described in this [paper](http://d-scholarship.pitt.edu/12031/1/umap_camera_ready_final.pdf), and as a part of the learning process this project was implemented to build a Interactive Social Visualization with Behavioral Logging Tool. 


## Problem Statement
<p> To implement concepts of User Modeling by tracking User's Behavior on Stackoverflow website. Data should be collected and persisted at each interaction of the user for every session with the Stackoverflow Website. Data points are to be selected such that it help create user behavioral models.</p>

## Proposed Solution
<p> A web application which authenticates user and then tracks its behavior on the Stackoverflow Website. To enable this a Chrome Extension was built to gather data from the selected data points. ExpressJS was used as the web framework to route user actions to specific services backed by NodeJS. MongoDB is used to store the collected data. Data Visualization Charts, to showcase user model based on behaviour, was built using Google Charts.   

## Environment Setup Instructions
1. Install Node JS 
2. Install MongoDB. Keep the server running  at 127.0.0.1:27017
3. Import the MongoDB data files provided as a bson to the database. (reference: https://stackoverflow.com/questions/6770498/how-to-import-bson-file-format-on-mongodb)
        
        mongorestore -d db_name -c collection_name /path/file.bson 
       
4. Please Use only Google Chrome To work with this project.
5. Got to chrome://extensions and switch on the developer mode on the top right corner, and select the top left option of load unpacked and select the directory 'ChromeExtension' within the zip file submitted.
6. Go to todo-api-master file directory then run the following commands
   
    a) npm install
   
    b) npm install -g nodemon
   
    c) npm start




