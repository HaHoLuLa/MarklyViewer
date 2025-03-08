import { NodeViewWrapper, NodeViewProps } from "@tiptap/react";

interface Line {
  id: string;
  color: string;
  size: number;
  path: string;
}

export default function Component({ node }: NodeViewProps) {

  return (
    <NodeViewWrapper>
      <div className="draw">
        <div className="control-group" style={{ position: "relative" }}>
          <svg viewBox="0 0 500 250">
            {node.attrs.lines.map((item: Line) =>
              (
                <path key={item.id} d={item.path} stroke={item.color} strokeWidth={item.size} />
              )
            )}
          </svg>
        </div>
      </div>
    </NodeViewWrapper>
  );
}