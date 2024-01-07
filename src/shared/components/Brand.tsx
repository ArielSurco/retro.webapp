import Image from 'next/image'
import { ComponentProps } from 'react'

interface BrandProps extends Omit<ComponentProps<typeof Image>, 'src' | 'alt'> {}

export const Brand = ({ ...props }: BrandProps) => {
  return <Image alt='Brand Logo' height={38} src='/img/brand-logo.svg' width={38} {...props} />
}
