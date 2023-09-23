# TaskMaster - Frontend React.
TaskMaster is a responsive website allowing visitors to view on a range of devices. It allows users to create and edit tasks and categories when signed in.

I used the Responsive Viewer chrome extenstion to test the responsiveness on each web page which you can see below:

- iPad view:




- Laptop view:




- Galaxy S9 view:




- iPhone S5 view:




---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

Welcome to TaskMaster, a web-based platform designed to streamline your task management experience. TaskMaster empowers users to efficiently organize their tasks into categories, assign titles and descriptions, set due dates, and mark tasks as urgent. This application is a fusion of a React frontend and a backend API.

### User Registration and Account Management

TaskMaster prioritizes user identity and account management. Users can register on the platform, which opens up a world of possibilities for creating and managing tasks and categories. Each task mandates a title, description, and a due date (with an enforced constraint that due dates cannot be set in the past). Users can also flag tasks as urgent with a simple checkbox. Categories play an essential role in organizing tasks; hence, users must create a category before adding a task.

### Task and Category Management

TaskMaster offers comprehensive control over your tasks and categories. Users can effortlessly edit or delete tasks and categories. However, it's worth noting that the platform employs a confirmation modal when deleting a task or category, ensuring that users make informed decisions.

### Personalized Experience

TaskMaster tailors the user experience to be personal and intuitive. Users can view, edit, and delete only the tasks and categories they've created. This approach fosters a clutter-free and focused workspace, enhancing overall productivity.

### Profile Customization

TaskMaster allows users to personalize their profiles, making them uniquely their own. Users can upload profile images, which will be prominently displayed on various pages, including the Task and Category Lists and the Navigation Bar. Additionally, users can update their usernames and passwords as needed.


#### Notable Features

- **Home Page Insights**: Users are greeted with a summary of incomplete and urgent tasks upon login, providing a quick overview of their workload.
- **Visitor-Friendly Introduction**: Users who are not logged in are presented with a clear description of the site's features and capabilities on the home page.
- **Sign Up and Login Pages**: Streamlined registration and login pages for ease of access.
- **Task Creation**: An intuitive form for creating tasks, ensuring all necessary information is provided.
- **Category Creation**: A straightforward form for creating categories to keep tasks organized.
- **Task and Category Lists**: Easy-to-navigate lists of tasks and categories.
- **Task Filtering**: Users can filter tasks by completion status (incomplete/completed/urgent).
- **Search Functionality**: Robust search options on both Task and Category list pages.
- **Profile Customization**: A dedicated profile page for updating usernames, changing profile images, adding a bio, and modifying passwords.

### User Stories

#### User/Customer Goals:
- I want to register an account so that I can create tasks and categories.
- I want to create a category so that I can categorize my tasks.
- I want to edit a category so that I can make amendments to category titles.
- I want to delete a category so that I can remove unwanted/unnecessary categories and associated tasks.
- I want to create a task so that I can clearly define what needs to be done, set a due date, and classify its urgency, ensuring effective task management.
- I want to update a task so that I can manage the task appropriately – marking the task as completed.
- I want to delete a task so that I can remove unwanted/outdated tasks.
- I want to update my profile so that I can add a profile image or some content such as a bio.
- I want to update my username so that I can change the name when I please.
- I want to update my password so that there is added security and I can follow best practices.
- I want to filter my tasks so that I can see what tasks are still open.
- I want to filter my tasks so that I can see what tasks are urgent.
- I want to search for tasks so that I can find specific tasks based on typing in the task title.
- I want to search for categories so that I can find specific categories based on typing in the category title.
- I want to view the count of incomplete tasks so that I can know which tasks are still outstanding.
- I want to view the count of Urgent tasks so that I can know which tasks are still outstanding and most urgent.

- - -

## Design

### Colour Scheme

Colour scheme used was adopted from the [Materialize CSS](https://materializecss.com/). Images from [Color Hex](https://www.color-hex.com/)

- Used for the Navbar:

 ![image](https://user-images.githubusercontent.com/109948740/235197870-22302e5a-cd6d-4911-a406-bc10791bc723.png)


- Used for the menu background (To contrast from the rest of the Home Page):

 ![image](https://user-images.githubusercontent.com/109948740/235199057-ca1d4abe-dfe2-4652-8e1d-6e98fc96a64c.png)
 

- Used within the menu - to contrast the color of the food items from the white collapsible headers of Starter, Main Course and Dessert:

 ![image](https://user-images.githubusercontent.com/109948740/235199820-9f1c12fd-bf89-4916-8ae7-af15c41b8907.png)
 
 
 - Used for the Booking Pages Form:
 
 ![image](https://user-images.githubusercontent.com/109948740/235201743-aac969b4-2d6b-49ce-ad8a-225dbe607ebe.png)


- The Edit and Delete Buttons are green (to notify user that this is to edit) and red (which is suitable warning user that this is a delete button):

 ![image](https://user-images.githubusercontent.com/109948740/235202126-e60a079d-5a47-452a-96f8-72df5c946376.png)

 ![image](https://user-images.githubusercontent.com/109948740/235202290-d65ad13e-a048-4b8a-8670-f88ba62d4e7d.png)

- - -

### Typography

The Font used is lato & Merriweather which is easy to read and easy on the eye.

- - -

### Imagery

I did not use much imagery only the picture of the Burger on the Home page which gives the page the impression to the user that this is a resturant with good food.

![image](https://user-images.githubusercontent.com/109948740/235203591-5bd54567-1b0e-4390-bee5-a618975abedb.png)


- - -

### Wireframes

I decided to draw the website in both Desktop and Mobile view as this is how I planned out my project from the begining:

#### Desktop view:
- Home Page (Not logged in)

 ![image](https://user-images.githubusercontent.com/109948740/235210490-de5c6e84-fbfb-4893-ad04-1d0d40faeac8.png)


- Home Page (When logged in):

 ![image](https://user-images.githubusercontent.com/109948740/235210775-821cc0c6-1442-4647-b264-2186c2d19a5f.png)


- Make a Booking Page:

 ![image](https://user-images.githubusercontent.com/109948740/235210930-81e0fdd5-6cac-4fe7-b0c2-74025305d09e.png)


- Your Bookings Page:

 ![image](https://user-images.githubusercontent.com/109948740/235211106-a71a3600-0b06-4ea3-b944-132dca0cb741.png)

- - -

#### Mobile View:

- Home Page:

![image](https://user-images.githubusercontent.com/109948740/235211523-18accd6f-4932-4e90-8537-ec3dd7c1bbf7.png) 


- Make a Booking Page:

 ![image](https://user-images.githubusercontent.com/109948740/235211631-b6093750-422f-43fb-bfd1-09eda9abcba1.png)


- Your Bookings Page:

 ![image](https://user-images.githubusercontent.com/109948740/235211870-535c9526-c258-4e52-813a-0fb03c28b009.png)


- - -

## Features

The website is comprised of a home page, login, register and sign out pages, a booking page, an update bookings page and a Your Bookings page.

All Pages on the website are responsive and have:

- The title of the site at the top of every page. This title also acts as a link back to the home page.
![image](https://user-images.githubusercontent.com/109948740/234081436-51b304c9-8f15-40bb-a40c-e52def0e926d.png)

- The Buttons will highlight when the cursor is hovering over them, This is to indicate to the user that this button is the one that is being selected:

When Button is not highlighted:

![image](https://user-images.githubusercontent.com/109948740/234083160-55a69603-b4bb-4f03-bd84-e797d6f93c4f.png)

When Button is highlighted:

![image](https://user-images.githubusercontent.com/109948740/234083620-b09e5077-ac13-4d97-b97c-aac9d73fa55d.png)

- - -

### General features on each page

### The Home Page

The home page of TableFor2 displays the sites name as a title and then a container which holds some welcome text, the times and menu. The Welcome Text will change for the user, from indicating that the user will need to sign in to make a booking to providing links to make a booking when signed in:

- When the user is not registered or signed in:
  ![image](https://user-images.githubusercontent.com/109948740/234085541-666f3c25-b19f-49c7-ab91-0d5935b15c17.png)


- When the user is signed in:
  ![image](https://user-images.githubusercontent.com/109948740/234085691-572b8c89-130c-45ae-bb7b-2a0b537843c3.png)


Another feature to notify that the user is signed in or not is the Nav-bar will change from providing links to the Register/Login pages to Make a Booking, Your Bookings and Logout pages:

- When the user is not registered or signed in:

  ![image](https://user-images.githubusercontent.com/109948740/234086164-c78ad6b0-7a59-46ca-b78d-15ef42c049d4.png)


- When the user is signed in:

  ![image](https://user-images.githubusercontent.com/109948740/234086102-31519ca7-2e85-4294-81de-64774032ab85.png)


The Times portion of the home page (this is displayed to the user, whether they are logged in or not) and all times are based on GMT, which means that users will need to take into account the time difference if located in a different timezone:

![image](https://user-images.githubusercontent.com/109948740/234086515-004fe18f-fe1a-48d4-91af-799e131a23fa.png)

The Menu is also displayed to the user regardless of login/Registeration and is a collapsible list when clicked on consisting of Starter, Main Course and Dessert selections:

![image](https://user-images.githubusercontent.com/109948740/234087251-2952bee7-0da9-4b7f-aa53-c531c2172238.png)

![image](https://user-images.githubusercontent.com/109948740/234087288-096b30da-d1b6-483d-a379-b4eb1a8a870e.png)

- - -

### Registeration Page

This consist of a title, a link to login if you are already have an account, a means to type in a username, and email (optional) and a password.

![image](https://user-images.githubusercontent.com/109948740/234365245-18ba1fd9-f18b-41fd-8415-f60263dac061.png)


- - -

### Sign in page

This consist of a title, a link to register if you do not have an account, a means to type in your username and password. 

TO NOTE: There is a remember me checkbox which is part of the django library allauth which was used in this project that is not functioning (will be a future implemenation).

![image](https://user-images.githubusercontent.com/109948740/234366047-97a1815b-1afc-4f73-bf4d-5d9669d469a7.png)

- - -

### Sign out page

This consist of a title, and a signout button:

![image](https://user-images.githubusercontent.com/109948740/234367296-b3b65089-0f1e-4d30-9602-7b03d3d68902.png)

- - -

### Make a Booking Page:

This consists of short sentences outlining what the user can and cannot do such as how many guests the user can have, a link to the home page for the user to be reminded of the available times and an additional note that each booking must have an email which will give a booking its uniqueness and so if the user wishes to book on behalf of a friend on the same day as a booking they made, a different email will allow the user to proceed with the booking.

The user will be notifed by error message if the following happens:
- Double booking - as mentioned above, if the user inputs the same email and selects the same day as a booking that is already made, it will be rejected.
- Day in the past - if the user selects a day in the past, an error message will appear preventing the user from booking.
- Time in the past - if the user selects a time in the past, an error message will appear preventing the user from booking.
- Number of guests - if the user selects more than 6 and less than 1, an error message will appear preventing the user from booking.

![image](https://user-images.githubusercontent.com/109948740/234372929-2c1a2e5a-9591-4fe6-b0a3-699dffc5e865.png)

- - -

### Your Bookings page:

This outlines the bookings the user has made, whether it is pending approval or is approved. It is also the page in which the user can edit bookings but only if they are pending approval. Any Booking that is approved can only be deleted. When there is no bookings, rather than have a blank page, there will be a message displayed to the user that there is no bookings and a link be available to direct the user to the Make a booking page.

- Page with no bookings:

  ![image](https://user-images.githubusercontent.com/109948740/234650447-e941a541-4b63-4063-b6bd-866a266f0b52.png)

- Booking example pending approval:
  
  ![image](https://user-images.githubusercontent.com/109948740/234651087-123a3973-01e5-49c3-a86e-731d06e1181e.png)

- Booking that is approved:
  
  ![image](https://user-images.githubusercontent.com/109948740/234651788-01566b67-81d2-447d-b1bb-54f8933047e8.png)

- - -

### Update Bookings page:

If the user wishes to update their booking, by clicking on the green EDIT BOOKING button, the user will be redirected to a new update bookings page which will have all the details of teh booking you wish to edit. When the user has made the required updates (provided that the user has followed the same criteria as the Make a bookings page e.g. guests between 1-6, cannot book a day in the past etc.) by clicking on the update booking button, the user will return to the Your Bookings page with the message (Booking has been updated successfully) and the booking will appear with the new updates.

- Update Bookings page (with updates):

 ![image](https://user-images.githubusercontent.com/109948740/234655023-1f15e69b-bf33-45a3-957f-f8fca745ff6a.png)
 
- Yours Bookings page with the message and updated booking:

 ![image](https://user-images.githubusercontent.com/109948740/234655294-5ac1cded-aeb5-46b7-b926-c6d93d6a4acb.png)

 - - -
 
### Delete Booking function:

The final part to the bookings page is the delete function which is indicated to the user as a bright red button. Once the button is clicked a modal will appear with a warning to the user that the action will result in the booking being deleted, in which the user can either delete the booking or click close to return to the Your Bookings page.


![image](https://user-images.githubusercontent.com/109948740/234656155-f7418fe7-9700-435c-a1df-2d41d724de67.png)

- - -

### Future Implementations

- Special request textbox for customers/users. Allow users to leave a special reguest with their bookings.
- Automated email sent to user - use Javascript to issue a automated email (via emailJS) outlining the details of their booking and that it is pending approval, plus an email to be issued to user when booking is approved.
- A notifcation to be sent to the site admin that there are bookings pending approval.
- Add a js listener for the checkbox in the Sign in page so that users can be automatically signed in when they logon to the website.
- Error Messages will not appear for the user when they are editing a booking but the functions that prevent the user from booking outside of the parameters set (i.e. number of guest must be between 1-6, day and time must be in the present or future etc.) still apply. Will look to update website with this capability in the future.

- - -

### Accessibility

- Using semantic HTML.
- Using descriptive alt attributes on images on the site.
- Providing information for screen readers where there are icons used and no text - such as the icons beside each menu section & footer icons.
- Ensuring that there is a sufficient colour contrast throughout the site.

- - -

## Technologies Used

### Languages Used:
HTML, CSS, javascript and Python Django were used to create this website.

### Frameworks, Libraries & Programs Used:

Git - For version control.

Github - To save and store the files for the website.

Materialize CSS Version 1.0 - The framework for the website. Code for the navigation bar, collapsible for the menu, cards and form were used and modified. Additional CSS styling was also implemented in style.css.

Google Fonts - To import the fonts used on the website.

Font Awesome - For the iconography on the website.

Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

[Responsive Viewer Chrome Extension](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en) - To show the website image on a range of devices.

[Cloudinary](https://cloudinary.com/ip/gr-sea-gg-brand-home-base?utm_source=google&utm_medium=search&utm_campaign=goog_selfserve_brand_wk22_replicate_core_branded_keyword&utm_term=1329&campaignid=17601148700&adgroupid=141182782954&keyword=cloudinary&device=c&matchtype=e&adposition=&gad=1&gclid=EAIaIQobChMI0sPw_5fI_gIVqujtCh229gdBEAAYASAAEgL7YvD_BwE) - To easily upload images and videos to the cloud and automate smart manipulations of those media without installing any other software.

[ElephantSQL](https://www.elephantsql.com/) - To install and manage PostgreSQL database.

- - -

## Deployment & Local Development

### Deployment

The site is deployed using Heroku - [TableFor2](https://tablefor2-pp4.herokuapp.com/)

To Deploy the site using Heroku:

1. Login (or signup) to Heroku.
2. Create a new Heroku app.
3. Click the Settings button.
4. Select Reveal Config vars and input the environment variables.
5. Click the Deploy button.
6. Connect to GitHub.
7. Search for the GitHub Repository [Neillcllghn/Tablefor2](https://github.com/Neillcllghn/Tablefor2)
8. Click on Deploy Branch.
9. Once app has completed building - Click on Open app on top right hand corner of page.

The site has now been deployed.

- - -

### Local Development

#### How to Fork

To fork the Tablefor2 repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Neillcllghn/Tablefor2](https://github.com/Neillcllghn/Tablefor2)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Neillcllghn/Tablefor2](https://github.com/Neillcllghn/Tablefor2)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

Please see [TESTING.md](https://github.com/Neillcllghn/Tablefor2/blob/main/TESTING.md) for all testing performed

- - -

## Credits

### Code Used:

1. The sign-up submit button was inspired by a Youtube video titled: [CSS Button Hover Animation Effects using Only HTML & CSS.](https://www.youtube.com/watch?v=zPcvAwp71uA)

2. The messages css and coding used was from the Youtube video titled: [Django user login form and django messages.](https://www.youtube.com/watch?v=3c9eywCcRG4)

3. The forms.py Clean function and error messages for the Bookings page was inspired by Youtube video titled: [Django forms | How to create beautiful forms in django with materialize css](https://www.youtube.com/watch?v=qte0MSKClVM)

4. Inspriation in regards the views.py code came from Code Institute walkthrough projects Hello Django, Taskmanager, and I think Therefore I Blog

### Content:

1. The format of the `Make a booking` page was inspired by an article written by John Abdsho Khosrowabadi - [Django Tutorial On How To Create A Booking System For A Health Clinic.](https://blog.devgenius.io/django-tutorial-on-how-to-create-a-booking-system-for-a-health-clinic-9b1920fc2b78)

2. All other content for the site, such as menu, booking form and instructions etc. were written by myself.

- - -

### Media:

1. The images of the burger came from [Unsplash](https://unsplash.com/).

2. The icons in the footer in all pages of the website were taken from [Font Awesome.](https://fontawesome.com/)

- - -

###  Acknowledgments:

I would like to acknowledge the following people:

- Jubril Akolade - My Code Institute Mentor.
- The Code Tutors for assisting me with errors I was running into from time to time and testing my code to confirm that they were free of bugs.
- Ian Meigh - Graduate of Code Institute who helped out checking a 404 error in regards redirecting to home page function at the very beginining of the project.
- Rachel Lane - my girlfriend - Assisted with drafting the menu that is used on the website
