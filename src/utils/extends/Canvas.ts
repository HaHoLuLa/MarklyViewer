import { mergeAttributes, Node, ReactNodeViewRenderer, nodeInputRule } from "@tiptap/react";
import Component from "./Component";

export default Node.create({
  name: "canvasNode",
  group: "block",
  atom: true,
  addAttributes() {
    return {
      lines: {
        default: [],
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: "canvas-node",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["canvas-node", mergeAttributes(HTMLAttributes)];
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: /^\[canvas\]$/,
        type: this.type,
      }),
    ]
  },  

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
