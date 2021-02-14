# Project Overview

## Work_It_Out

## Project Description

I plan to create an App that allows me track my workout progress.

There will be a "homepage" where you click on a category which has stored all of the previously logged data. The next page will have each category option and below the category will be all of the logged data rendering from the API submissions.

Submissions will come from the form. The form will include a category dropdown so that the submission is stored in the appropriate category.

You should be able to edit a post (postMVP)

## Wireframes

[Wireframes](https://app.diagrams.net/#G10uECuNSzUqB7gdFfd7ecsreq3le71hmP)

## Component Hierarchy

[Component Heirarchy](https://app.diagrams.net/#G162FR5rNiqhsmso5JTEIHvFKWwatvjv0J)

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This **must** be properly formatted. An example is below:

```json
{
  "records": [
    {
      "id": "recONRzIUTuZ5lXaF",
      "fields": {
        "author": "Liz Yrineo",
        "setup": "Why did the tomato turn red?",
        "punchline": "Because it saw the salad dressing!"
      },
      "createdTime": "2020-11-30T16:03:09.000Z"
    },
    {
      "id": "rec3oYZ5Tp0AIDsKe",
      "fields": {
        "author": "Rachel Moskowitz",
        "setup": "What did the green grape say to the red grape?",
        "punchline": "Breathe, idiot, breathe!"
      },
      "createdTime": "2020-11-30T16:03:09.000Z"
    },
    {
      "id": "recA34tOaoE1IVeC1",
      "fields": {
        "author": "Gary Grant",
        "setup": "How do you make holy water?",
        "punchline": "You boil the hell out of it!"
      },
      "createdTime": "2020-11-30T16:03:09.000Z"
    }
  ],
  "offset": "recA34tOaoE1IVeC1"
}
```

### MVP/PostMVP

#### MVP

- Homepage with clickable buttons leading to category
- Each category page will display stored data from state/submissions
- Form for submitting workouts
- Components :
  - Homepage
  - Header
  - Footer
  - Arms
  - Legs
  - Abs
  - Back
  - Cardio
  - Recovery
  - Form
- Media Query for mobile screens (350px)
- Filter submissions based on pre-set category options

#### PostMVP

- Profiles for users
- Edit Submissions
- Categorize the category page by "workout". If the "workout" input equals another "workout" then group together
- Click to expand the details on the page

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

| Day       | Deliverable                                                                                | Status     |
| --------- | ------------------------------------------------------------------------------------------ | ---------- |
| Feb 13-15 | Create Project Proposal / Wireframes / Component Heirarchy / Timelines / Airtable Setup    | Complete   |
| Feb 16    | Project Proposal Approval / Pseudocode / (HTML, App.js, Index.js,Route) / Start Components | Incomplete |
| Feb 17    | Components / Route Components on App.js                                                    | Incomplete |
| Feb 18    | Finish up Components / Event Handlers / Start CSS / Mobile Query                           | Incomplete |
| Feb 19    | CSS / Bug Testing & Tweaking                                                               | Incomplete |
| Feb 22    | Extra time for anything that pushes past the above timeline                                | Incomplete |

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all parts of your app. Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Adding Form      |    H     |      3hrs      |    3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |    2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |     5hrs      |    5hrs     |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
