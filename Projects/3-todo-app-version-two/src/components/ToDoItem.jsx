

// eslint-disable-next-line react/prop-types
export default function ToDoItem( {todoName, todoDate} ) {
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