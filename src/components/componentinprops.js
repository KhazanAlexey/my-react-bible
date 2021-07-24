export function App2 () {
    return (
        <Card title="Lorem ipsum" action={<CustomButton />}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus ac feugiat dui. Nunc elit purus, lobortis et h
            endrerit sed, hendrerit in purus. Suspendisse et sollici
            tudin massa. Sed non lacus facilisis, sollicitudin libero
            at, imperdiet ante. Aliquam efficitur justo tincidunt ligula
            gravida feugiat.
        </Card>

    )
}


function CustomButton () {
    return (
        <button className="primary">Delete</button>
    )
}


function Card ({ title, children, action }) {
    return (
        <div className="card">
            <div className="card-title">{title}</div>
            <div className="card-content">
                {children}
            </div>
            <div className="card-actions">
                {action}
            </div>
        </div>
    )
}
