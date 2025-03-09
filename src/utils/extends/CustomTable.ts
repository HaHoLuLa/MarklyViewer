import { createColGroup, Table } from '@tiptap/extension-table'
import { DOMOutputSpec } from '@tiptap/pm/model'
import { mergeAttributes } from '@tiptap/react'

export const CustomTable = Table.extend({
  renderHTML({ node, HTMLAttributes }) {
    const { colgroup, tableWidth, tableMinWidth } = createColGroup(
      node,
      this.options.cellMinWidth,
    )
  
    const table: DOMOutputSpec = [
      'table',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        style: tableWidth ? `width: ${tableWidth}` : `min-width: ${tableMinWidth}`,
      }),
      colgroup,
      ['tbody', 0],
    ]
  
    return ['div', { class: 'tableWrapper' }, table]
  }
})