import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  //for select field
  options?: string[];
  selected?: string;
  onOptionChanged?: (value: string) => void;
}
export default function InputField(props: Props) {
  const { label, selected, options, onOptionChanged } = props;
  return (
    <div className="inline-flex flex-col">
      <label htmlFor="" className="text-[#6F7482]">
        {label}
      </label>
      {options ? (
        <select
          className="bg-[#F8FAFC] rounded-md border-[1px] border-[#0E6245] h-full outline-none px-2"
          onChange={(e) => onOptionChanged && onOptionChanged(e.target.value)}
        >
          {options.map((option: string) => (
            <option selected={selected === option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...props}
          type={props.type}
          name=""
          id=""
          className="bg-[#F8FAFC] p-2 border-[1px] border-[#0048D9] rounded-md outline-none"
        />
      )}
    </div>
  );
}
