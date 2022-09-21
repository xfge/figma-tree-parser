import { FluentComponentType } from './fluentTypes'

export type CSSData = {
  className: string
  properties: {
    name: string
    value: string | number
  }[]
}

export type UnitType = 'px' | 'rem' | 'remAs10px'

export type CssStyle = 'css' | 'styled-components'

export type Property = {
  name: string
  value: string | null
  notStringValue?: boolean
}

export type Tag = {
  name: string
  isText: boolean
  textCharacters: string | null
  isImg: boolean
  properties: Property[]
  css?: CSSData
  children: Tag[]
  node: SceneNode
  isComponent?: boolean
  fluentType?: FluentComponentType
  variables: { [key: string]: string }
}
