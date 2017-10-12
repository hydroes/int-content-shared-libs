'use strict'

class PageGenerator {
  constructor (data) {
    this._data = data
  }

  generatePages () {
    this._pages = []
  }

  createPage (display, isActive, pageNumber) {
    this._pages.push({
      display: display,
      page: pageNumber,
      href: this.parsePath(this._data.page, pageNumber, this._data.path),
      isActive: isActive
    })
  }

  parsePath (page, current, path) {
    let pathArray = path.split('/', 3)
    if (pathArray[2] === '' || parseInt(pathArray[2]) === page) {
      return current === 1 ? `/${pathArray[1]}` : `/${pathArray[1]}/${current}`
    }

    if (isNaN(pathArray[2])) {
      let fullPath = `${pathArray[1]}/${pathArray[2]}`
      return current === 1 ? `/${fullPath}/` : `/${fullPath}/${current}/`
    }

    return '/'
  }
}

class SequentialGenerator extends PageGenerator {
  generatePages () {
    super.generatePages()
    let noOfPagesToRender
    if (this._data.limit) {
      noOfPagesToRender = this._data.limit > this._data.totalPages ? this._data.totalPages - 1 : this._data.limit
    } else {
      noOfPagesToRender = this._data.totalPages < 10 ? this._data.totalPages - 1 : 10
    }

    // render the back arrow if we arent on page 1
    if (this._data.page !== 1) {
      this.createPage('<', false, this._data.page - 1)
    }

    // we always want page 1
    this.createPage(1, this._data.page === 1, 1)

    if (this._data.totalPages > 1) {
    // create the pages either side of the current page
      this.createMovingPageWindow(noOfPagesToRender)

      // we always want the last page
      this.createPage(this._data.totalPages, this._data.totalPages === this._data.page, this._data.totalPages)

      // render the forward arrow if we arent at the end
      if (this._data.page !== this._data.totalPages) {
        this.createPage('>', false, this._data.nextPage)
      }
    }

    return this._pages
  }

  createMovingPageWindow (noOfPagesToRender) {
    const defaultLowerBound = 2
    const defaultUpperBound = this._data.totalPages - 1
    const windowSize = noOfPagesToRender - 1
    const numberToFillBy = Math.ceil((noOfPagesToRender - 2) / 2)
    let lowerPageBound = noOfPagesToRender
    let upperPageBound

    if (this._data.page === 1) { // selected page is the first one
      lowerPageBound = defaultLowerBound
      upperPageBound = noOfPagesToRender
    } else if (this._data.page === this._data.totalPages) { // selected page is the last one
      lowerPageBound = this._data.totalPages - windowSize
      upperPageBound = defaultUpperBound
    } else {
      // we are in the middle of the two ends somewhere.
      lowerPageBound = this._data.page - numberToFillBy
      upperPageBound = this._data.page + numberToFillBy
    }

    // reset the bounds if the window has set negative numbers or greater than the total page count
    lowerPageBound = lowerPageBound <= 1 ? defaultLowerBound : lowerPageBound
    upperPageBound = upperPageBound > defaultUpperBound ? defaultUpperBound : upperPageBound

    for (let i = lowerPageBound; i <= upperPageBound; i++) {
      this.createPage(i, i === this._data.page, i)
    }
  }
}

class LogarithmicGenerator extends PageGenerator { // eslint-disable-line
  generatePages () { // eslint-disable-line
    super.generatePages() // eslint-disable-line
  } // eslint-disable-line
} // eslint-disable-line

class Paginator {
  constructor (pageGenerator) { // e.g. sequential or logarithmic
    this._pageGenerator = pageGenerator
    this._pages = []

    if (this._pageGenerator) { // and generate function exists
      this._pages = this._pageGenerator.generatePages()
    }
  }

  get pages () {
    return this._pages
  }
}

module.exports = (data = {}) => {
  const paginate = new Paginator(new SequentialGenerator(data))
  return paginate.pages
}
