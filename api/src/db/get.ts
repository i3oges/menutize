const pgp = require('pg-promise')();
const auth = require('../../auth').postgres;
const db = pgp(`postgres://${auth.user}:${auth.password}@${auth.host}:${auth.port}/${auth.db}`);

async function get(query: string, quantity: string = 'many') {
  let data = {};
  try {
    switch (quantity) {
      case 'one':
        data = await db.one(query);
        break;
      case 'many':
        data = await db.many(query);
        break;
      default:
        data = await db.many(query);
    }
  } catch (e) {
    console.log(e);
  }
  return data;
}

export default get;
