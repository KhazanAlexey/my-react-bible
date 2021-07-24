export function App5 () {
    return (
        <>
        <Card title='title1'>
            content1

        </Card>
            <Card title='title2'>
                content2

            </Card>

        </>

    )
}


function Card ({title,children}) {
    return (
        <div style={{color:'yellow', backgroundColor: "pink"}}>
            <h2>{title}</h2>
            <div style={{fontsize:'20px'}}>
            {children}
            </div>

        </div>
    )
}


