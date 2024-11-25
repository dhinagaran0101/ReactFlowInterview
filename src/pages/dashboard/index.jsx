import {
  ReactFlow,
  useEdgesState,
  useNodesState,
  addEdge,
} from "@xyflow/react";
import { Slide, SLIDE_HEIGHT, SLIDE_WIDTH } from "../../components/Slide";
import CustomEdge from "../../components/CustomEdge";
import { useCallback } from "react";

const nodeTypes = {
  slide: Slide,
};

// const edgeTypes = {
//   "custom-edge": CustomEdge,
// };

const initialSlide = "01";

export default function Dashboard() {
  const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'An input node' },
        position: { x: 0, y: 50 },
        sourcePosition: 'right',
      },
      {
        id: '2',
        type: 'selectorNode',
        data: { label: 'Output A' },
        position: { x: 300, y: 50 },
      },
      {
        id: '3',
        type: 'output',
        data: { label: 'Output A' },
        position: { x: 650, y: 25 },
        targetPosition: 'left',
      },
      {
        id: '4',
        type: 'output',
        data: { label: 'Output B' },
        position: { x: 650, y: 100 },
        targetPosition: 'left',
      },
  ];

  const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
      },
      {
        id: 'e2a-3',
        source: '2',
        target: '3',
        sourceHandle: 'a',
        animated: true,
      },
      {
        id: 'e2b-4',
        source: '2',
        target: '4',
        sourceHandle: 'b',
        animated: true,
      },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection) => {
      const edge = { ...connection };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );
  return (
    <div>
      <div className="h-[600px] w-full bg-white">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodesDraggable={true}
          fitView
          fitViewOptions={{ nodes: [{ id: initialSlide }], duration: 100 }}
        />
      </div>
    </div>
  );
}
