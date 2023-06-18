interface InputProps {
    label: string;
    width?: string;
    classNameLabel?: string;
    classNameInput?: string;

}

export const Input = ({ label, width = '', classNameLabel, classNameInput }: InputProps) => {
    return (
        <label className={`flex flex-col 
        ${classNameLabel}
        `}
            style={{
                width: width,
            }}
        >
            <span
                className={`text-[1.6rem] font-800 text-[#545454] mb-[0.6rem]`}

            >
                {label}
            </span>
            <input

                type="text"
                className={`h-[3.52rem] bg-[#F9F9F9] border-[#D9D9D9] border-[0.1rem] outline-none rounded p-[1rem] text-[1.28rem] leading-6 font-400 w-full
                ${classNameInput}
                `}
            />
        </label>
    )
}