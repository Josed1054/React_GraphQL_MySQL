import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export function ProgressBarElem(props: { progress: number }) {
  return (
    <>
      <ProgressBar
        className="ProgressBar"
        completed={props.progress}
        maxCompleted={3}
        isLabelVisible={false}
        bgColor="#faebd7"
      />
    </>
  );
}
