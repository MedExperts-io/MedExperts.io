# Notes

## General

- Either add more items into the overflow menu or make profile and Logout links into separate buttons instead of the same menu. That menu is mostly for smaller screens where you don't have as much horizontal real estate

## When logging in correctly
- My Progress shows "Completed NaN%" when first logging in with no data in "Questions" route



## When logging in with wrong information

- When I first loaded up the app I was met with a "Page Not Found We're sorry, but the page you requested could not be found." message
- How do I verfy my login?
- Got this when trying to login => Warning: Failed prop type: The prop `direction` of `Grid` can only be used together with the `container` prop.

## Profile

- Expertise Level displays your current Expertise level twice in the select dropdown
- When I click on my first / last name it displays my current value for those items as the "value" attribute and as a placeholder in the html but then disappears when I click into it and just shows the placeholder... I would pick one and go with that.
- Update button looks like its disabled (I would swap out gray for green)

## After Seeding

### Dashboard page

- Dashboard shows "Admin Dashboard place holder" as the only text on the screen 🤷‍♂️

### All questions page

- Shows "The below charts represent the percentage of questions answered correctly in each category (i.e., of the 'Easy' questions answered, NaN% were answered correctly)."
- I can interact with Favorite button but when hovering over it I don't see a cursor to let me know I can click on this item
- Title should be a different color / font / font-size to indicate that you can click on it before hovering

### New question page

- This page is a little confusing to use. Try adding some divisions in the form to improve clarity
- New question button looks too similar to filtering dropdowns below, that is confusing
  - Does not initially look like a button on a desktop since its so wide
- What exactly does the "Save" button do when I click it when adding a new answer option... maybe just one save button for this section 🤔
- When adding a question and clicking "View Question" that is missing values it does not prompt you for errors
  - It also redirects you to the last question in the system even though it failed the operation
  - This should prompt you that you have some errors and not redirect you
- If you delete a question and then try to create a new question with no values it redirect you to a blank page

## Mobile

- App should be checked on mobile as there are improvements that can be made here
- Single column for layout would be an improvement

