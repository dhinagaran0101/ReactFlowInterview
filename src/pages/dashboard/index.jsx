import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';


const initialNodes = [
  {
    id: '1',
    data: { label: 'External user' },
    position: {
      x: -200,
      y: 150,
    },
    sourcePosition: "right",
    targetPosition: "right"
  },
  {
    id: '2',
    data: { label: 'Login' },
    position: {
      x: 100,
      y: 0,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '3',
    data: { label: 'Enter Prompt' },
    position: {
      x: 100,
      y: 100,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '4',
    data: { label: 'Display Response' },
    position: {
      x: 100,
      y: 200,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '5',
    data: { label: 'Correct Response' },
    position: {
      x: 100,
      y: 300,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '6',
    data: { label: 'Website API Interface' },
    position: {
      x: 300,
      y: 150,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '7',
    data: { label: 'Store Prompt' },
    position: {
      x: 500,
      y: 50,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '8',
    data: { label: 'Pass Prompt To LLM' },
    position: {
      x: 700,
      y: 150,
    },
    targetPosition: "left",
    sourcePosition: "bottom"
  },
  {
    id: '9',
    data: { label: 'Generate Response' },
    position: {
      x: 500,
      y: 250,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '10',
    data: { label: 'LLM Interface' },
    position: {
      x: 850,
      y: 250,
    },
    targetPosition: "left",
    sourcePosition: "left"
  },
  {
    id: '11',
    data: { label: 'Store Wrong Response And Correction' },
    position: {
      x: 500,
      y: 350,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '12',
    data: { label: 'Validate User Login And Accounts' },
    position: {
      x: 500,
      y: -50,
    },
    targetPosition: "left",
    sourcePosition: "top"
  },
  {
    id: '13',
    data: { label: 'Accounts Database' },
    position: {
      x: 500,
      y: -150,
    },
    targetPosition: "bottom",
    sourcePosition: "bottom"
  },
  {
    id: '14',
    data: { label: 'User Correction' },
    position: {
      x: 800,
      y: 370,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '15',
    data: { label: 'User Prompts' },
    position: {
      x: 800,
      y: 50,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '16',
    data: { label: 'Read Prompts' },
    position: {
      x: 1050,
      y: 50,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '17',
    data: { label: 'Read Correction' },
    position: {
      x: 1050,
      y: 370,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
  {
    id: '18',
    data: { label: 'Large Language Model' },
    position: {
      x: 1500,
      y: 100,
    },
    targetPosition: "left",
    sourcePosition: "bottom"
  },
  {
    id: '19',
    data: { label: 'Integrate Into LLM' },
    position: {
      x: 1500,
      y: 300,
    },
    targetPosition: "top",
    sourcePosition: "top"
  },
  {
    id: '20',
    data: { label: 'Training Algorithm' },
    position: {
      x: 1250,
      y: 200,
    },
    targetPosition: "left",
    sourcePosition: "right"
  },
];

const initialEdges = [
  {
    type: 'bezier',
    source: '1',
    target: '2',
    id: '1',

  },
  {
    type: 'bezier',
    source: '1',
    target: '3',
    id: '2',
  },
  {
    type: 'bezier',
    source: '1',
    target: '4',
    id: '3',
  },
  {
    type: 'bezier',
    source: '1',
    target: '5',
    id: '4',
  },
  {
    type: 'bezier',
    source: '2',
    target: '6',
    id: '5',
  },
  {
    type: 'bezier',
    source: '3',
    target: '6',
    id: '6',
  },
  {
    type: 'bezier',
    source: '4',
    target: '6',
    id: '7',
  },
  {
    type: 'bezier',
    source: '5',
    target: '6',
    id: '8',
  },
  {
    type: 'bezier',
    source: '6',
    target: '7',
    id: '9',
  },
  {
    type: 'bezier',
    source: '6',
    target: '8',
    id: '10',
  },
  {
    type: 'bezier',
    source: '6',
    target: '9',
    id: '11',
  },
  {
    type: 'bezier',
    source: '9',
    target: '10',
    id: '12',
  },
  {
    type: 'bezier',
    source: '8',
    target: '10',
    id: '13',
  },
  {
    type: 'bezier',
    source: '6',
    target: '11',
    id: '14',
  },
  {
    type: 'bezier',
    source: '6',
    target: '12',
    id: '15',
  },
  {
    type: 'bezier',
    source: '12',
    target: '13',
    id: '16',
  },
  {
    type: 'bezier',
    source: '11',
    target: '14',
    id: '17',
  },
  {
    type: 'bezier',
    source: '7',
    target: '15',
    id: '18',
  },
  {
    type: 'bezier',
    source: '15',
    target: '16',
    id: '19',
  },
  {
    type: 'bezier',
    source: '14',
    target: '17',
    id: '20',
  },
  {
    type: 'bezier',
    source: '17',
    target: '20',
    id: '21',
  },
  {
    type: 'bezier',
    source: '16',
    target: '20',
    id: '22',
  },
  {
    type: 'bezier',
    source: '20',
    target: '19',
    id: '23',
  },
  {
    type: 'bezier',
    source: '20',
    target: '18',
    id: '24',
  },
  {
    type: 'bezier',
    source: '18',
    target: '19',
    id: '25',
  },
];

export default function Dashboard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <div className='w-full h-[80vh]'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        minZoom={0.2}
        style={{ backgroundColor: "#F7F9FB" }}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};
