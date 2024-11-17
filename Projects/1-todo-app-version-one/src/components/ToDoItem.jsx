

export default function ToDoItem() {
    let todoName = "Going the University"
    let todoDate = '12/17/2024'
    return (
        <>
            <div className="container">
                <div className="row ar-row">
                    <div className="col-6">
                        {todoName}
                    </div>
                    <div className="col-4">
                        {todoDate}
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger ar-button">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}   