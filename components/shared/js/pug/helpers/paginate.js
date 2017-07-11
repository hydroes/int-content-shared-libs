/**
 * @description Creates an array of objects that contain pagination data.
 * <isActive> is for css classes.
 * Example Usage:
 * let pages = // e.g. require('helpers/paginate')(data)
 * ul.pagination
 *  each page in pages
 *    li
 *      a(href=page.href class=page.isActive ? 'active' : 'normal') #{page.display}
 *
 * @class Paginate
 * @param {array} pages
 * @param {number} limit The amount of pages numbers that get displayed
 * @param {number} totalPages
 * @param {string} path eg. /bauer-radio-web
 * @param {number} currentPage The current Page that is Active
 * @param {number} next
 */
function Paginate (options) {
  options = options || {}
  this.pages = options.pages || []
  this.limit = options.limit || null
  this.totalPages = options.totalPages || null
  this.path = options.path || ''
  this.currentPage = options.currentPage || null
  this.next = options.next || null
}

/**
 * @param {number} current
 * @param {string} path - If <current> is at 1 then just return <path> as required by Radio Web.
 * @return {string}
 */
Paginate.prototype.parsePath = function (current, path) {
  return current === 1 ? path : path + current
}
/**
 * @param {number} current
 * @return {boolean}
 */
Paginate.prototype.isAtLimit = function (current) {
  return (current + this.limit) >= this.totalPages
}
/**
 * @param {number} current - this is either the current or offset.
 * @return {number} - this is either the offset or limit.
 */
Paginate.prototype.counterOffset = function (current) {
  if (this.isAtLimit(current)) {
    return this.totalPages - this.limit
  } else {
    return current + this.limit
  }
}
/**
 * @param {number} isThisPAge
 * @return {boolean}
 */
Paginate.prototype.isActive = function (isThisPage) {
  return isThisPage === this.currentPage
}
/**
 * @param {number} current
 * @param {boolean} isActive
 * @param {string=} display (optional)
 * @return {Void}
 */
Paginate.prototype.createSinglePage = function (current, isActive, display) {
  this.pages.push({
    display: display || current,
    page: current,
    href: this.parsePath(current, this.path),
    isActive: isActive
  })
}
/**
 * @description Recursive method that builds an array based on the start
 * number being less than <limit> & checks the counter <isActive>.
 * @param {number} start - Either current or offset.
 * @param {number=} limit - (Optional) use either <limit>, <totalPages> or an offset value here.
 * @return {Void}
 */
Paginate.prototype.createPages = function (start, limit) {
  limit = limit || this.totalPages
  var _counter = start
  while (_counter <= limit) {
    var isCounterActive = this.isActive(_counter)
    this.createSinglePage(_counter, isCounterActive)
    _counter++
  }
}

module.exports = function (data) {
  var paginate = new Paginate({
    pages: [],
    limit: 10,
    totalPages: data.metadata.totalPages,
    path: data.path,
    currentPage: data.metadata.page,
    next: data.metadata.nextPage
  })

  function createPagination () {
    if (paginate.currentPage > 1) {
      paginate.createSinglePage(paginate.currentPage - 1, false, '<')
      paginate.createSinglePage(1, false, 1)
    }

    var offset = paginate.counterOffset(paginate.currentPage)
    paginate.isAtLimit(paginate.currentPage) ? paginate.createPages(offset) : paginate.createPages(paginate.currentPage, offset)

    if (!paginate.isAtLimit(paginate.currentPage)) {
      paginate.createSinglePage(paginate.totalPages, false, paginate.totalPages)
    }

    if (paginate.currentPage < paginate.totalPages) {
      paginate.createSinglePage(paginate.next, false, '>')
    }

    try {
      if (paginate.pages.length > 0) {
        console.log(paginate.pages)
        return paginate.pages
      }
    } catch (err) {
      console.log('ERROR: Pagintion Array has length <= 0')
      return null
    }
  }

  return createPagination()
}
