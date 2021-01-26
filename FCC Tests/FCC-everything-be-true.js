function truthCheck(collection, pre) {
  const propExists = (obj, prop) => !!obj[prop]

  return collection.every(item => propExists(item, pre))
}