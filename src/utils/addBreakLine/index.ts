const addBreakLine = (names: string[]): string =>
  '<br/>' + names.reduce((prev, curr) => `${prev} <br/> ${curr}`).toString()

export { addBreakLine }
