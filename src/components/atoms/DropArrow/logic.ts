const useDropArrow = (condition: boolean) => {
  const arrowAnimation = {
    transition: 'all 0.3s ease-in-out',
    transform: condition ? 'rotate(0deg)' : 'rotate(180deg)'
  }

  return { arrowAnimation }
}

export { useDropArrow }
