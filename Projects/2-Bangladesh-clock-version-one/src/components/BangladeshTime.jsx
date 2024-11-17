

export default function BangladeshTime(){
    let time = new Date()
    return(
        <>
            <p>This is the current time : <span className="fw-bold text-light ">{time.toDateString() }--{time.toLocaleTimeString()}</span></p>
        </>
    )
}