Feature: Embeds Pinterest

@desktop
Scenario: Show Pinterest Embed Component In Browser

  Given I open the shared components page to view Pinterest embed
  And the pin embed is present
  And the pin is visible
  And the pin's ID is "25755029102698128"