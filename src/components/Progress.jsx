import React from "react";

export default function Progress() {
  return (
    <div>
      <div class="w-full bg-transparent h-2 dark: bg-slate-50">
        <div class="bg-[#4ba4a1] h-1 w-[10%] rounded-full"></div>
      </div>
    </div>
  );
}
Progress.js;
// import React from "react";
// import { useProgress } from "./ProgressContext";

// export default function Progress() {
//   const { progress } = useProgress();

//   return (
//     <div className="w-full bg-transparent h-2 dark:bg-slate-50">
//       <div
//         className="bg-[#4ba4a1] h-1 rounded-full"
//         style={{ width: `${progress}%` }}
//       ></div>
//     </div>
//   );
// }
