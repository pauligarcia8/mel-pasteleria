const Title = ({title, body}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <p className="text-2xl text-gray-700 font-semibold">{body}</p>
        </div>
    )
}

export default Title;