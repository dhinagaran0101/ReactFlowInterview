import { BaseEdge, getSmoothStepPath } from '@xyflow/react';
import { getBezierPath, getStraightPath } from 'reactflow';
 
export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
 
  return <BaseEdge id={id} path={edgePath} />;
}