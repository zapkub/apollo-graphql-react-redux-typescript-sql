import * as bookShelf from 'bookshelf';

const bookshelf = bookShelf(require('knex')(require('../../knexfile').development))
const knex = (bookshelf as any).knex;
(bookshelf as any).plugin('pagination');
export { knex }
export default bookshelf;