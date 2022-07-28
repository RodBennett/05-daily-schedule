# 05 Third-Party APIs: Work Day Scheduler

Deployment link: https://rodbennett.github.io/daily-schedule/

In this assignment, I refactored some code to make a daily scheduler.  First, the day and date is displayed at the top of the page and stays current in real time with momnent.js:

<img width="756" alt="Screen Shot 2022-07-28 at 4 30 09 PM" src="https://user-images.githubusercontent.com/106923428/181648418-162c4712-8551-4846-a266-b439f581d464.png">


Second, There are rows of textareas for the user to enter "to dos" for the day.  Next to the text area are "Save" buttons which save the content of that particular row into local storage. This data remains visible even after refreshes thorugh the getItem function of JavaScript.

<img width="660" alt="Screen Shot 2022-07-28 at 4 30 34 PM" src="https://user-images.githubusercontent.com/106923428/181648836-576a836e-47ce-4e3c-a148-0877761bfb8b.png">

Third, there is a "Clear Entries" button which clears all the textareas of previos entries to be used again the next day.

<img width="671" alt="Screen Shot 2022-07-28 at 4 32 26 PM" src="https://user-images.githubusercontent.com/106923428/181648945-ca90c013-9c2b-4ec4-b98e-fd1f74d2630f.png">

This activity was straightforward enough, though I did have trouble getting each "save" button to correspond to each row of textarea.  I intutively knew there was an elegant and simple way to do this without setting numerous lines of code for each button.  After quite a bit of research and a little help from a tutor, I was able to get it straightened out.

