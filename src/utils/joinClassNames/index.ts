const joinClassNames = (names: string[]): string => {
  const allNames = names.reduce((prev, curr) => `.${prev}.${curr}`)

  const classNames = `<br/> ${allNames}.className`

  return classNames
}

export { joinClassNames }
