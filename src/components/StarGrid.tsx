// export default function StarGrid() {

//   const grid: [number, number] = [14, 30];

//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 935 425"
//       className="absolute -top-14 -z-10"
//       id="star-grid"
//       opacity={0}
//       style={{
//         maskImage: "linear-gradient(black, transparent)",
//       }}
//     >
//       <g className="star-grid-group">
//         {[...Array(grid[0])].map((_, i) => {
//           return [...Array(grid[1])].map((_, j) => {
//             return (
//               <path
//                 key={i + j}
//                 fill="currentColor"
//                 opacity=".2"
//                 className="star-grid-item"
//                 d={`M${j * 32},${i * 32 + 10}a0.14,0.14,0,0,1,0.26,0l0.14,0.36a2.132,2.132,0,0,0,1.27,1.27l0.37,0.14a0.14,0.14,0,0,1,0,0.26l-0.37,0.14a2.132,2.132,0,0,0,-1.27,1.27l-0.14,0.37a0.14,0.14,0,0,1,-0.26,0l-0.14,-0.37a2.132,2.132,0,0,0,-1.27,-1.27l-0.36,-0.14a0.14,0.14,0,0,1,0,-0.26l0.37,-0.14a2.132,2.132,0,0,0,1.26,-1.27l0.14,-0.36z`}
//               />
//             );
//           });
//         })}
//       </g>
//     </svg>
//   );
// }

export default function StarGrid() {
  const grid: [number, number] = [14, 30];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 935 425"
      className="absolute -top-14 -z-10"
      id="star-grid"
      style={{
        maskImage: "linear-gradient(black, transparent)",
      }}
    >
      <defs>
        <path
          fillOpacity="1"
          id="star-icon"
          d="M1.87.1a.14.14 0 01.26 0l.14.36a2.13 2.13 0 001.27 1.27l.37.14a.14.14 0 010 .26l-.37.14a2.13 2.13 0 00-1.27 1.27l-.14.37a.14.14 0 01-.26 0l-.14-.37A2.13 2.13 0 00.46 2.27L.1 2.13a.14.14 0 010-.26l.37-.14A2.13 2.13 0 001.73.46L1.87.1z"
        />
      </defs>
      <g className="star-grid-group">
        {[...Array(grid[0])].map((_, i) => {
          return [...Array(grid[1])].map((_, j) => {
            return (
              <use
                x={j * 32}
                y={i * 32 + 10}
                fill="currentColor"
                href="#star-icon"
                opacity=".2"
                className="star-grid-item"
                d="M1.87.1a.14.14 0 01.26 0l.14.36a2.13 2.13 0 001.27 1.27l.37.14a.14.14 0 010 .26l-.37.14a2.13 2.13 0 00-1.27 1.27l-.14.37a.14.14 0 01-.26 0l-.14-.37A2.13 2.13 0 00.46 2.27L.1 2.13a.14.14 0 010-.26l.37-.14A2.13 2.13 0 001.73.46L1.87.1z"
                key={i + j}
              />
            );
          });
        })}
      </g>
    </svg>
  );
}
