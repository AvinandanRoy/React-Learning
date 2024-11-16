
export default function Random() {
    const number = Math.random() * 10 ;
    return(
        <>
            <h1 style={{"background-color" : "#776691"}}>The Random Number is : {number}</h1>
        </>
    )
}
