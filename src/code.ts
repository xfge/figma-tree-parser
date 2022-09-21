import { CssStyle, UnitType } from './types'
import { buildTagTree } from './buildTagTree'
import { buildCode } from './buildCode'
import { buildCssString } from './cssParser/buildCssString'

export const generate = (node: SceneNode, config: { cssStyle?: CssStyle; unitType?: UnitType }): { code: string; css: string } => {
  let cssStyle = config.cssStyle
  let unitType = config.unitType

  const originalTagTree = buildTagTree(node, unitType)
  if (originalTagTree === null) {
    return { code: '', css: '' }
  }

  const generatedCodeStr = buildCode(originalTagTree, cssStyle)
  const cssString = buildCssString(originalTagTree, cssStyle)

  return { code: generatedCodeStr, css: cssString }
}
