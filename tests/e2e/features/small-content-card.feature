# features/small-content-card.feature

@desktop
Feature: Small Content Card

Scenario: Displaying small content card properly

  Given I open the shared components page locally
  Then the card has a title text of "We asked the Love Island narrator everything you want to know about the show"
  And the card has a date-time of "17 minutes ago" and a category of "TV"
  And the card has images displayed correctly with from cdn host "http://via.placeholder.com"
