# Zen Chat Service

`ZenChat` is a ReactJs based web chat application made for one and all to express their thoughts and worries to their close ones or newly made friends!!!

This repo contains the source code and setup instructions for the same.

## Table Of Contents
* [Setting Up](#building-from-source)
* [System Design](#system-design)
   * [Pages and Components](#pages-components)
   * [Context](#context)
* [Limitations and Future Improvements](#limitations)

## Setting Up
1. Clone the Zen Chat in your preferred directory as:
    * `git clone https://github.com/StrawHat56/Zen_Chat_Service.git`
2. Zen Chat uses yarn for its dependencies, so ensure that your system has yarn installed. Now to install dependenccies do:
    * `yarn install`
3. To run the web chat application you can run:
    * `yarn start`

This process would open the application in your default browser. For a new user, start with the register page else continue with the login page. Logging in would direct one to their home page.

## System Design
For the structure of the web application, we have three main pages, each page uses some components present in the respective directory. For providing context to all components, we have Authentication and Chat contexts in the context directory. All images required for the app are present in the img directory.
### Pages and Components
1. **Register**: This page handles creating new users, authenticating them and storing related informations in the Firebase database. In case the user already has a account, they can navigate to the login page using the Login link.
2. **Login**: Login is similar to the register page. It handles signing in an user with an account beforehand. It is also the default page in case an unauthenticated user tries to enter homepage. 
3. **Home**: This is the main web chat page. For modularity, each basic function/widget is split into components. There are two main components, Sidebar and Chat sections which are further split into many components. Following are the components:
    1. **Navbar**: It is top left header of the web app. It contains the app name, user name and their avatar. It also has a logout button which brings the user back to login page logged out.
    2. **Search**: The next section is search, which gives the utility to search for users in the database and add them to your chats. We use Firebase for authentication, storage and databse management.
    3. **Chats**: This is the remaining left sidebar which stores all the accounts that the user has had chats with.
    4. **Chat**: This is the top right section of the app, containing currently non-implemented video call, add user and settings options.
    5. **Messages**: This section loads all the messages that has taken place between the two users. 
    6. **Input**: Lastly we have the input component which takes the messages and image files that the user may want to send. There is also an icon for uploading files but it hasn't been implemented yet.

### Context
We have only implemented two context files regarding user authentification and identification and the other regarding chats between users. 

## Limitations and Future Improvements
Due to the limited timeframe of the project, there are many ideas left unimplemented and some errors left unchecked. 
### Ideas left to Implement
As mentioned earlier, our navbar has three icons for video call, add user and settings options. The settings options was planned to contain basic functionalities like changing the username and avatar icon associated with said user, changing the theme of the web app and the ability to create groups. Also mentioned earlier was the ability to send files other than image files. 
### Current Bugs
1. The most major bug present is user authentication. For any user to access the homepage they should have been authenticated and mapped to an account. This implementation fell a bit short and one can try to access the homepage without logging in. 
2. Another error is that when no chat is selected, the app still allows the user to type messages and send which results in an error. 
3. Lastly, the user is able to input files other than images which throws an error. 

These are the errors that have been found with minimal testing. There will be many other cases that have yet to bee handled.



