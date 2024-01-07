type ValidClassName = string | number | boolean | undefined | null

export const cn = (...classNames: ValidClassName[]) => {
  return classNames.filter(Boolean).join(' ')
}
