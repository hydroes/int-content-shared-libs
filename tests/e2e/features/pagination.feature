Feature: Pagination

@desktop
Scenario: Viewing pagination

  Given I open the shared components page, to view pagination
  Then the first page button is 1
  And the current page is 698
  And the total amount of pages is 700
  And all page number buttons link to "entertainment", with its respective page number