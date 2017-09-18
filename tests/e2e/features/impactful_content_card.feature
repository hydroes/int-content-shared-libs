Feature: Impactful Content Card

@desktop
Scenario: Shows Impactful Card Component In Browser

  Given I open the shared components page to view a impactful hero card
  Then the cards image url is "//via.placeholder.com/900x500"
  And the alt text from the image is "We asked the Love Island narrator everything you want to know about the show"
  And the titles text from the card is "We asked the Love Island narrator everything you want to know about the show"
  And the cards link itself is "//www.google.com"


@mobile
Scenario: Shows Impactful Card Component In Mobile view
  Given the shared components page is open in mobile view, the impactful cards small image url is "//via.placeholder.com/350x250"