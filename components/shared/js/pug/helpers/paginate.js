'use strict'

module.exports = function (data) {
  return {
    limit: data.metadata.limit || null,
    page: data.metadata.page || null,
    fields: data.metadata.fields || null,
    offset: data.metadata.offset || null,
    totalCount: data.metadata.totalCount || null,
    totalPages: data.metadata.totalPages || null,
    nextPage: data.metadata.nextPage || null
  }
}
