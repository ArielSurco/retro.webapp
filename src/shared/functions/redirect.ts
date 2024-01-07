import { ROUTES } from '@constants/routes'
import { ObjectValues } from '@customTypes/constants'

export const getRouteWithParams = (
  route: ObjectValues<typeof ROUTES>,
  params: Record<string, string | number>,
) => {
  let path: string = route

  Object.keys(params).forEach((key) => {
    path = path.replace(`:${key}`, params[key].toString())
  })

  return path
}
