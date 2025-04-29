interface Props {
    label: string;
    onClick: () => void;
}

export default function TextButton({
    label,
    onClick,
    }: Props) {
    return (
        <p
            className="text-button"
            onClick={onClick}
        >
            {label}
        </p>
    );
}