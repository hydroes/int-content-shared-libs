Feature: Test button

@phone
Scenario: Clicking button

  Given I open the shared components page
  Then the test button text is "test button"
  And the buttons background color is red

@desktop
Scenario: Clicking button

  Given I open the shared components page
  Then the test button text is "test button"
  And the buttons background color is red