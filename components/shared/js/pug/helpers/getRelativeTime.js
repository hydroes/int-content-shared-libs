/**
 * @param data article data
 * @returns relative time
 * @see relativeTimeUTC
 */
module.exports = function (data) {
  if (data.lastModifiedAt) {
    return window.bauerSharedLibs.pug.helpers.relativeTimeUTC(data.lastModifiedAt)
  } else {
    return window.bauerSharedLibs.pug.helpers.relativeTimeUTC(data.publicationDate)
  }
}
