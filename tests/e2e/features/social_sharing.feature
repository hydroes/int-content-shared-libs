Feature: Social Sharing

@desktop
Scenario: Shows Social Sharing Component In Browser

  Given I open the shared components page to view Social Sharing icons
  And Facebook's data-social-share-url attribute url is "http://shared-libs.onebauer.media/testpath"
  And Clicked on the Facebook icon to open a new tab with a url of "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttp%253A%252F%252Fshared-libs.onebauer.media%252Ftestpath&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Freturn%2Fclose%3Ferror_code%3D4201%26error_message%3DUser%2Bcanceled%2Bthe%2BDialog%2Bflow%23_%3D_&display=popup&locale=en_GB"
  And Twitter's data-social-share-url attribute url is "http://shared-libs.onebauer.media/testpath"
  And Clicked on the Twitter icon to open a new tab with a url of "https://twitter.com/intent/tweet?text=Radio%20-%20&amp;url=http://shared-libs.onebauer.media/testpath&amp;original_referer="
  And Whatsapp's href link is "whatsapp://send?text=http%3a%2f%2fshared-libs.onebauer.media/testpath"
