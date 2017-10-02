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
 * @param {array}  _pages - read only
 * @param {number} limit The amount of pages numbers that get displayed
 * @param {number} totalPages
 * @param {string} path eg. /bauer-radio-web
 * @param {number} currentPage The current Page that is Active
 * @param {number} next
 */
class Paginate {
  constructor (options = {}) {
    this._pages = options.pages || []
    this.limit = options.limit || 0
    this.totalPages = options.totalPages || 0
    this.path = options.path || ''
    this.currentPage = options.currentPage || 0
    this.next = options.next || 0
  }

  /**
   * @readonly
   * @return {Object[]}
   */
  get pages () {
    return this._pages
  }

  /**
   * @param {Object} item
   */
  set pages (item) {
    this._pages.push(item)
  }
  /**
   * @param {number} current
   * @param {string} path - If <current> is at 1 then just return <path> as required by Radio Web.
   * @return {string}
   * @static
   */
  static parsePath (current, path) {
    return current === 1 ? path : path + current
  }
  /**
   * @param {number} current
   * @return {boolean}
   */
  isAtLimit (current) {
    return (current + this.limit) >= this.totalPages
  }
  /**
   * @param {number} current - this is either the current or offset.
   * @return {number} - this is either the offset or limit.
   */
  counterOffset (current) {
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
  isActive (isThisPage) {
    return isThisPage === this.currentPage
  }
  /**
   * @param {number} current
   * @param {boolean} isActive
   * @param {string=} display (optional)
   * @return {Void}
   */
  createSinglePage (current, isActive, display) {
    if (current > 0) {
      this.pages = {
        display: display || current,
        page: current,
        href: Paginate.parsePath(current, this.path),
        isActive
      }
    }
  }
  /**
   * @description Recursive method that builds an array based on the start
   * number being less than <limit> & checks the counter <isActive>.
   * @param {number} start - Either current or offset.
   * @param {number=} limit - (Optional) use either <limit>, <totalPages> or an offset value here.
   * @return {Void}
   */
  createPages (start, limit) {
    limit = limit || this.totalPages
    let _counter = start
    while (_counter <= limit) {
      let isCounterActive = this.isActive(_counter)
      this.createSinglePage(_counter, isCounterActive)
      _counter++
    }
  }
}

module.exports = (data = {}) => {
  const paginate = new Paginate({
    pages: [],
    limit: data.limit || 10,
    totalPages: data.totalPages || null,
    path: data.path || '',
    currentPage: data.page || null,
    next: data.nextPage || null
  })

  function createPagination () {
    if (paginate.currentPage > 1) {
      paginate.createSinglePage(paginate.currentPage - 1, false, '<')
      paginate.createSinglePage(1, false, 1)
    }

    let offset = paginate.counterOffset(paginate.currentPage)
    paginate.isAtLimit(paginate.currentPage) ? paginate.createPages(offset) : paginate.createPages(paginate.currentPage, offset)

    if (!paginate.isAtLimit(paginate.currentPage)) {
      paginate.createSinglePage(paginate.totalPages, false, paginate.totalPages)
    }

    if (paginate.currentPage < paginate.totalPages) {
      paginate.createSinglePage(paginate.next, false, '>')
    }

    try {
      if (paginate.pages.length > 0) {
        return paginate.pages
      }
    } catch (err) {
      console.log('ERROR: Pagintion Array has length <= 0')
      return null
    }
  }

  return createPagination()
}
