/**
 * @description Creates an array of objects that contain pagination data.
 * <isActive> is for css classes.
 * @class Paginate
 * @param {array} pagination
 * @param {number} limit The amount of pagination numbers that get displayed
 * @param {number} totalPages
 * @param {string} path eg. /bauer-radio-web
 * @param {number} currentPage The current Page that is Active
 */
function Paginate (options) {
  options = options || {}
  this.pagination = options.pagination || []
  this.limit = options.limit || null
  this.totalPages = options.totalPages || null
  this.path = options.path || ''
  this.currentPage = options.currentPage || null
}

/**
 * @param {number} current
 * @param {string} path - If <current> is at 1 then just returns <path> as required by Radio Web.
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
Paginate.prototype.createSingleNumber = function (current, isActive, display) {
  this.pagination.push({
    display: display || current,
    page: current,
    href: this.parsePath(current, this.path),
    isActive: isActive
  })
}
/**
 * @description Recursive method that builds an array based on the start
 * number being less than <limit> & checks the counter <isActive>.
 * @param {number} start
 * @param {number=} limit - (Optional) use either <limit>, <totalPages> or an offset value here.
 * @return {Void}
 */
Paginate.prototype.paginateArray = function (start, limit) {
  limit = limit || this.totalPages
  var _counter = start
  if (_counter <= limit) {
    var isCounterActive = this.isActive(_counter)
    this.createSingleNumber(_counter, isCounterActive)
    _counter++
    this.paginateArray(_counter, limit)
  }
}

module.exports = function (data) {
  var main = {
    limit: 10,
    current: data.metadata.page,
    totalPages: data.metadata.totalPages,
    next: data.metadata.nextPage
  }
  var paginate = new Paginate({
    pagination: [],
    limit: main.limit,
    totalPages: main.totalPages,
    path: data.path,
    currentPage: main.current
  })

  var prevPage = main.current

  function createPagination () {
    if (main.current > 1) {
      paginate.createSingleNumber(--prevPage, false, '<')
      paginate.createSingleNumber(1, false, 1)
    }

    var offset = paginate.counterOffset(main.current)
    paginate.isAtLimit(main.current) ? paginate.paginateArray(offset) : paginate.paginateArray(main.current, offset)

    if (!paginate.isAtLimit(main.current)) {
      paginate.createSingleNumber(paginate.totalPages, false, paginate.totalPages)
    }

    if (main.current < main.totalPages) {
      paginate.createSingleNumber(main.next, false, '>')
    }

    try {
      if (paginate.pagination.length > 0) {
        console.log(paginate.pagination)
        return paginate.pagination
      }
    } catch (err) {
      console.log('ERROR: Pagintion Array has length <= 0')
      return null
    }
  }

  return createPagination()
}
