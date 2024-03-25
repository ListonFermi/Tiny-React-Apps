function Button1(){

    const eventHandler =(e)=>console.log(e);;

    return (
        <>
            <button onClick={(e)=>eventHandler(e)} className="btn">External CSS</button>
        </>
    )
}

export default Button1