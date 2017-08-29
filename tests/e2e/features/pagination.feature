Feature: Pagination

@desktop
Scenario: Viewing pagination

  Given I open the shared components page, to view pagination
  Then the first page button is 1
  And the current page is 698
  And as a result, the back button should go to 697 and the next page button should go to 699
  And the total amount of pages is 700