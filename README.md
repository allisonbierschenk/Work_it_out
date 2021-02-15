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
- Redirect to homepage once form is submitted

#### PostMVP

- Profiles for users
- Edit Submissions
- Categorize the category page by "workout". If the "workout" input equals another "workout" then group together
- Click to expand the details on the page

## Project Schedule

| Day       | Deliverable                                                                                     | Status     |
| --------- | ----------------------------------------------------------------------------------------------- | ---------- |
| Feb 13-15 | Create Project Proposal / Wireframes / Component Heirarchy / Timelines / Airtable Setup         | Complete   |
| Feb 16    | Project Proposal Approval / Pseudocode / (HTML, App.js, Index.js,Route) / Start Components      | Incomplete |
| Feb 17    | Components / Route Components on App. js / / Event Handlers                                     | Incomplete |
| Feb 18    | Finish up Components and core functionality / Start CSS / Mobile Design                         | Incomplete |
| Feb 19    | CSS / Bug Testing & Tweaking / Finish MVP                                                       | Incomplete |
| Feb 22    | Extra time for anything that pushes past the above timeline / (and/or time permitting) Post-MVP | Incomplete |

## Timeframes

| Component                                                                                | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Nav component                                                                            |    H     |      1hr       |      n/a      |     n/a     |
| Basic HTML or Header component (tbd)                                                     |    H     |     30 min     |      n/a      |     n/a     |
| React set up                                                                             |    H     |      1hr       |      n/a      |     n/a     |
| App.js set up                                                                            |    H     |     30 min     |      n/a      |     n/a     |
| Axios call                                                                               |    H     |      1hr       |      n/a      |     n/a     |
| Set up state                                                                             |    H     |      2hrs      |      n/a      |     n/a     |
| Set up one component                                                                     |    H     |      3hrs      |      n/a      |     n/a     |
| Render content on page                                                                   |    H     |      2hrs      |      n/a      |     n/a     |
| Route content to category pages based on "category" selected on the form/in the Airtable |    H     |      2hrs      |      n/a      |     n/a     |
| Set up form component                                                                    |    H     |      2hrs      |      n/a      |     n/a     |
| Code route to homepage upon form submission                                              |    H     |      2hrs      |      n/a      |     n/a     |
| Create the rest of the category component pages                                          |    H     |      3hrs      |      n/a      |     n/a     |
| Basic CSS                                                                                |    H     |     1.5hrs     |      n/a      |     n/a     |
| Testing and Tweaking                                                                     |    H     |      3hrs      |      n/a      |     n/a     |
| Mobile Query and CSS                                                                     |    H     |      3hrs      |      n/a      |     n/a     |
| CSS                                                                                      |    H     |      3hrs      |      n/a      |     n/a     |
| Code ability to edit submissions by ID                                                   |    H     |      3hrs      |      n/a      |     n/a     |
| Organize cateogy pages by "workout"                                                      |    H     |      3hrs      |      n/a      |     n/a     |
| Total                                                                                    |    H     |    36.5hrs     |      n/a      |     n/a     |

## SWOT Analysis

### Strengths:

I know what I want to do functionally and have a high expectation for functionality and style. I have a basic understanding of how to apply what I have learned about react functional components.

I think I will be most successful in learning React and Components by choosing to use functional componenets instead of class components.

### Weaknesses:

I can't remember which repo wrnt over editing forms. I am not sure what "toggleFetch" does
[Nav bar reference and looping through specific indicies in array](https://git.generalassemb.ly/sei-nyc-sapphire/train-router/blob/master/src/Station.jsx)
<br>
[.map](https://git.generalassemb.ly/sei-nyc-sapphire/robotanist/tree/main/src)
<br>
[handleSubmit](https://git.generalassemb.ly/sei-nyc-sapphire/pokedex-lab/blob/solution/pokedex-starter/src/App.js)
<br>
[Artist/card lab](https://git.generalassemb.ly/sei-nyc-sapphire/react-and-events/blob/solution/src/App.js)
<br>
[Ternary](https://git.generalassemb.ly/sei-nyc-sapphire/components-functions-to-classes/blob/master/src/App.js)
<br>
[React Router Intro/ Routes](https://git.generalassemb.ly/sei-nyc-sapphire/react-router-intro/blob/solution/client/src/App.js)
<br>
[Post and delete](https://git.generalassemb.ly/sei-nyc-sapphire/post-and-delete/blob/main/src/App.js)
<br>
[Capturing form](https://git.generalassemb.ly/sei-nyc-sapphire/react-state/blob/master/2.%20capturing-form-input.md#10-minute-practice)
<br>
[Conditional rendering](https://git.generalassemb.ly/sei-nyc-sapphire/audubon-website)

### Opportunities:

I look forward to being on my own to apply what I have learned and create a useful tool for my daily life using the skills I have learned over the last 2 weeks. I learn the best by doing my own work and struggling with code I don't quite understand.

### Threats:

I worry I will run out of time, I may have bit off more than I can chew.
