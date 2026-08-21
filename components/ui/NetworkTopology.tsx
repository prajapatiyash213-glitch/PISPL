"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function NetworkTopology() {
  const rootRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Generate hexagonal (honeycomb) grid matching reference image 2
  const { nodes, traces } = useMemo(() => {
    if (!hasMounted) return { nodes: [], traces: [] };

    const uniqueNodes: { x: number; y: number }[] = [];
    const nodeMap = new Map<string, number>();
    const uniqueEdges: { id: number; d: string; nodes: number[]; isAmbient: boolean }[] = [];
    const edgeSet = new Set<string>();

    const R = 54; // Hexagon radius
    const dx = Math.sqrt(3) * R; // Horizontal separation
    const dy = 1.5 * R; // Vertical separation
    const cols = 15;
    const rows = 9;

    const getNodeIndex = (x: number, y: number) => {
      const key = `${x.toFixed(1)},${y.toFixed(1)}`;
      if (nodeMap.has(key)) {
        return nodeMap.get(key)!;
      }
      const idx = uniqueNodes.length;
      uniqueNodes.push({ x, y });
      nodeMap.set(key, idx);
      return idx;
    };

    // Generate hexagonal cells clustered on the right, fading out to the left
    for (let row = -1; row <= rows + 1; row++) {
      for (let col = -1; col <= cols + 1; col++) {
        let cx = col * dx;
        const cy = row * dy;
        
        // Offset alternate rows
        if (row % 2 !== 0) {
          cx += dx / 2;
        }

        // Probability of rendering this hexagon increases from left to right (concentrates on the visual side)
        const normalizedX = cx / 1200;
        const probability = 0.05 + Math.pow(normalizedX, 1.4) * 0.85;

        // Deterministic pseudo-random number based on row and col coordinates to prevent grid regenerating on hot reload/Fast Refresh
        const pseudoRandom = (Math.abs(Math.sin(row * 12.9898 + col * 78.233) * 43758.5453123)) % 1;

        if (pseudoRandom > probability) continue;

        // Vertices coordinates
        const angles = [
          Math.PI / 6,
          Math.PI / 2,
          (5 * Math.PI) / 6,
          (7 * Math.PI) / 6,
          (3 * Math.PI) / 2,
          (11 * Math.PI) / 6,
        ];
        
        const vertices = angles.map((angle) => {
          const vx = cx + R * Math.cos(angle);
          const vy = cy + R * Math.sin(angle);
          return getNodeIndex(vx, vy);
        });

        // Add 6 connections (edges)
        for (let j = 0; j < 6; j++) {
          const idx1 = vertices[j];
          const idx2 = vertices[(j + 1) % 6];
          const key = [idx1, idx2].sort((a, b) => a - b).join("-");
          
          if (!edgeSet.has(key)) {
            edgeSet.add(key);
            const p1 = uniqueNodes[idx1];
            const p2 = uniqueNodes[idx2];
            const d = `M ${p1.x.toFixed(1)},${p1.y.toFixed(1)} L ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
            
            const traceId = uniqueEdges.length + 1;
            const pseudoRandomForTrace = (Math.abs(Math.sin(traceId * 32.9898 + 45.233) * 43758.5453123)) % 1;
            const isAmbient = pseudoRandomForTrace < 0.15; // 15% of traces are ambient

            uniqueEdges.push({
              id: traceId,
              d,
              nodes: [idx1, idx2],
              isAmbient,
            });
          }
        }
      }
    }

    return { nodes: uniqueNodes, traces: uniqueEdges };
  }, [hasMounted]);

  const activeNeighbors = useMemo(() => {
    if (hoveredNode === null) return new Set<number>();
    const neighbors = new Set<number>();
    traces.forEach((t) => {
      if (t.nodes.includes(hoveredNode)) {
        t.nodes.forEach((nIdx) => {
          if (nIdx !== hoveredNode) {
            neighbors.add(nIdx);
          }
        });
      }
    });
    return neighbors;
  }, [hoveredNode, traces]);

  useEffect(() => {
    if (!hasMounted) return;

    const parentSection = containerRef.current?.closest("section");
    if (!parentSection) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parentSection.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setHoveredNode(null);
    };

    parentSection.addEventListener("mousemove", handleMouseMove);
    parentSection.addEventListener("mouseenter", handleMouseEnter);
    parentSection.addEventListener("mouseleave", handleMouseLeave);

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(rootRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      parentSection.removeEventListener("mousemove", handleMouseMove);
      parentSection.removeEventListener("mouseenter", handleMouseEnter);
      parentSection.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasMounted]);

  if (!hasMounted) {
    return <div className="absolute inset-0 bg-white" />;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-white pointer-events-auto"
    >
      {/* Neon Cursor Glow Aura - Green and Blue (Hardware accelerated translate3d) */}
      <div
        className="pointer-events-none absolute top-0 left-0 rounded-full blur-3xl transition-opacity duration-300"
        style={{
          transform: `translate3d(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%), 0)`,
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.09) 0%, rgba(59, 130, 246, 0.03) 50%, transparent 70%)",
          opacity: isHovered ? 1 : 0,
          willChange: "transform",
        }}
      />

      {/* SVG Honeycomb Network Topology (GPU composited) */}
      <svg
        ref={rootRef}
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-[110%] w-full"
        style={{ opacity: 0.32, willChange: "transform", transform: "translateZ(0)" }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="neon-gradient" x1="0" y1="0" x2="1200" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00F2FE" /> {/* Neon Cyan */}
            <stop offset="50%" stopColor="#06B6D4" /> {/* Cyan/Teal */}
            <stop offset="100%" stopColor="#2D80FE" /> {/* Neon Blue (Brand Blue) */}
          </linearGradient>
        </defs>

        {/* Faint Base Hexagonal Traces */}
        <g stroke="#E2E8F0" strokeWidth="1.6" opacity="0.45" strokeLinecap="round" strokeLinejoin="round">
          {traces.map((t) => (
            <path key={`base-${t.id}`} d={t.d} />
          ))}
        </g>
        <g stroke="#F1F5F9" strokeWidth="0.8" opacity="0.6" strokeLinecap="round" strokeLinejoin="round">
          {traces.map((t) => (
            <path key={`sub-base-${t.id}`} d={t.d} />
          ))}
        </g>

        {/* Dynamic Running Solid Light Pulse (Laser segment) on Hover (Double-stroke for hardware acceleration) */}
        <g strokeLinecap="round" strokeLinejoin="round">
          {traces.map((t) => {
            const isActive = hoveredNode !== null && t.nodes.includes(hoveredNode);
            if (!isActive) return null;
            
            return (
              <g key={`glow-group-${t.id}`}>
                {/* Soft glow backing stroke */}
                <path
                  d={t.d}
                  stroke="url(#neon-gradient)"
                  strokeWidth="4.5"
                  opacity="0.35"
                  style={{
                    strokeDasharray: "25 50",
                    animation: "neon-flow 1.8s linear infinite",
                  }}
                />
                {/* Sharp core stroke */}
                <path
                  d={t.d}
                  stroke="url(#neon-gradient)"
                  strokeWidth="1.4"
                  opacity="0.95"
                  style={{
                    strokeDasharray: "25 50",
                    animation: "neon-flow 1.8s linear infinite",
                  }}
                />
              </g>
            );
          })}
        </g>

        {/* Vertices Nodes */}
        <g>
          {nodes.map((n, i) => {
            const isNodeHovered = hoveredNode === i;
            const isActiveNeighbor = activeNeighbors.has(i);

            return (
              <g key={`node-${i}`}>
                {/* Node Center Solder Pad */}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="3.5"
                  fill={isNodeHovered ? "#00F2FE" : isActiveNeighbor ? "#2D80FE" : "#E2E8F0"}
                  className="transition-colors duration-300"
                >
                  {isActiveNeighbor && (
                    <animate
                      attributeName="opacity"
                      values="0.4;1;0.4"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  )}
                </circle>
                
                {/* Node Pulse Halo (Hovered node) */}
                {isNodeHovered && (
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="8.5"
                    stroke="#00F2FE"
                    strokeWidth="1.2"
                    fill="none"
                    className="origin-center animate-pulse2"
                  />
                )}

                {/* Radar Pulse Blinking Halo (Active neighbors where lines end) */}
                {isActiveNeighbor && (
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="3.5"
                    stroke="#2D80FE"
                    strokeWidth="1"
                    fill="none"
                  >
                    <animate
                      attributeName="r"
                      values="3.5;10;3.5"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.8;0;0.8"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                {/* Invisible Hover Area Target */}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="18"
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredNode(i)}
                  onMouseLeave={() => setHoveredNode(null)}
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
