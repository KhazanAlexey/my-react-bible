
export function App3 () {
    const handleClick = (parameter) => {
        console.log('Mouse click', parameter)
        alert('Mouse click', parameter)

    }

    return (
        <form>
            <button onClick={() => handleClick('button 1')} type="button">
                Click me 1
            </button>
            <button onClick={() => handleClick('button 2')} type="button">
                Click me 2
            </button>

            {/* WRONG - the function executes if you don't provide it as a return value */}
            {/*<button onClick={handleClick('button 3')} type="button">*/}
            {/*    Click me 3*/}
            {/*</button>*/}
        </form>
    )
}
