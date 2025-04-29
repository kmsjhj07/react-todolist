import { useEffect } from "react";

interface Props {
  isComplete: boolean;
  value: string;
  onClick: () => void;
  deleteAllCompletedTodo?: () => void;
}

export default function Todo({
  isComplete,
  value,
  onClick,
  deleteAllCompletedTodo,
}: Props) {
  // TODO: useEffect를 통해 완료한 경우 3초 후(setTimeout)에 사라지도록 구현
  // TODO: 클린업으로 정리하도록 구현
  useEffect(() => {
    if (isComplete) {
      const time = setTimeout(() => {
        if (deleteAllCompletedTodo) {
          deleteAllCompletedTodo();
        }
        console.log('3초 후 사라짐');
      }, 3000);
      return () => clearTimeout(time);
    }
  }, [isComplete]);

  return (
    <div
      className="to-do"
      onClick={onClick}
      data-is-complete={isComplete}
    >
      <p>{isComplete && <span>&#10004;</span>}</p>
      <p>{value}</p>
    </div>
  )
}