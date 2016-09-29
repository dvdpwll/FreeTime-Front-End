# Free Time

This app helps you keep track of your schedules. Enter your schedule and it will
display them on a calendar for easy viewing.

![screenshot](http://i.imgur.com/jKt2WwQ.png)
![screenshot](http://i.imgur.com/Yt7Apew.png)


## Technologies

Technologies used in this application.

Ember - front end

Rails - back end

ember-calendar - for the calendar

ember-power-select - for dropdown selectors


## Approach

This project I decided to start on the back-end first. I downloaded the rails
template and added a schedule model and controller with the fields title,
start, end, and day; all as strings. Then I moved to ember, the front end, and
created simple CRUD actions for schedules using ember-power-select. Then I
included the ember-calendar to show the schedules.



## Installation Instructions

-   [Ember-Calendar](https://emberobserver.com/addons/ember-calendar)
-   [Ember-Power-Select](http://www.ember-power-select.com/docs/installation)

## User Stories

-   As a user I want to save my schedules
-   As a user I want to see my schedules on a calendar
-   As a user I want to edit my schedules
-   As a user I want to delete my schedules

## Wireframes

-   [Scheduels](https://wireframe.cc/n9AlCF)
-   [Calendar](https://wireframe.cc/mopSbj)

## Pitch Deck

-   [Google Slides](https://drive.google.com/open?id=1_RovPRuEvGp-C6TOPyhyxUxcE7RXftQNeE3o3dJ0IXc)

## Troubles

I had some issues trying to use ember-calendar, I didn't fully read their
instructions and I didn't know that the calendar needed an array of occurances
to display things. Also, the calendar needed dates in a format that I was not
using, so I need to either throw away my back-end and remake it or use computed
properties to convert my dates to the dates the calendar wanted. I chose to use
computed properties b/c I didn't want to scrap my back-end.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
