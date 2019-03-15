# FRONT END
# Full Stack Project Practice


## Project Idea

What is your project idea?  How did you come up with it? Why? Who would use it?

```md
My project idea is a webapp designed to track how much your daily food incidentals are by entering how much you have spent in one day. A lot of it could be saved -- I am witnessing a culture that normalizes eating outside food and reduces the will to prepare and cook ones own food, which is a healthier choice, in many aspects including a financial one. From my own experience,  it is an eye opener. My target market would be college (and above) students and young professionals, as this demographic's habits will determine future spending habits in respect to food/meals.
```
Back end respository: https://github.com/rishisurana13/track-stacks-back

## Write between 3-5 user stories

We have gone over this before. Please refer to your notes, previous repos or the
google machine if you need further assistance.

```md
+ As a user, I want to be able to enter exectly how much I spent on a given day
+ As a user, I want to categorize item consumed and the establishment of origin. (stretch)
+ As a user, I want to see my daily/weekly/monthly average (stretch)
+ As a user I want to see what I spent on one day
+ As a user I want to see what I spent on every log I've made

+ (V2) As a user, I want to see the aforementioned statistics by specified time-frame
```

## Plan your tables and columns

What tables will you need? What will the columns on the table be?

```md
date, day, {item,establishment: price, item,establishment: price...}, total spent, avg (only for sunday)

```

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your tables are related to one another
(one to many, many to many, etc).

Include an image (or a link to image) below.

```md
https://imgur.com/a/qBrXcIi
```

## Routing

What routes will you need to make the proper request to your API?

```md
requests to CRUD items, category, establishment, total spent today, total spent on x date. (loose terms)
```

## Wireframes

Please create a wireframe of your planned front end.

```md
https://imgur.com/a/xKVY2SB
```

## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.

```md
+ plan out website and features, create wireframe for all relevant pages
+ make sure auth is working
+ create db
+ create classes/modify controllers to create rows and manipulate info(average)
+ test
+ link db and auth
+ test
+ create front end using html
+ basic styling
+ link to backend
+ test
+ restyle to fit theme of choice
+ render graphing tools for UI
+ test
+ functionality for UI (hide/show, auth, etc)
+ test
+ final UI/backend revisions
+ test


```
