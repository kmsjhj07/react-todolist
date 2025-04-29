interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string
}

export default function OutlineInput({
    value,
    onChange,
    placeholder,
}: Props) {
    return (
        <input
          type="text"
          className="outline-input"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
    );
}