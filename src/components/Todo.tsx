interface Props {
  isComplete: boolean;
  value: string;
  onClick: () => void;
}

export default function Todo({
  isComplete,
  value,
  onClick,
}: Props) {
  // TODO: 완료된 경우 3초 후에 해당 TODO가 삭제되도록 구현
  // TODO: 클린업까지 같이 구현
  
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
