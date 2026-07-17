export default function Heading({tag, title, supporting}) {
    return(
        <div className="text-center space-y-4 mb-16">
            <span className="text-(--orange) uppercase tracking-widest font-semibold">
                {tag}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold pt-2">
                {title}
            </h1>
            <p className="max-w-3xl mx-auto text-gray-500 lg:leading-8">{supporting}</p>
        </div>
    )
}