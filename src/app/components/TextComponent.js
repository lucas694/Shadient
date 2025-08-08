const TextComponent = (props) => {
    const {title,text} = props
    return (
        <div className="p-6 flex flex-col bg-black md:p-14">
            <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
            <p className="text-[#A09F9F] pt-2 text-xs md:pt-5 md:text-base">{text}</p>
        </div>
    )
};
export default TextComponent