function getValidOrder(orderParam = 'ASC') {
  const hasValidOrderBy = /^(asc|desc)$/i.test(orderParam);
  return hasValidOrderBy ? orderParam : 'ASC';
}

module.exports = {
  getValidOrder,
};
