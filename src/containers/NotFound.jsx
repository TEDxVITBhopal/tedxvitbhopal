const NotFound = () => {
    return(
        <main style={pageStyle}>
            <h1><span style={spanStyle}>404</span> NOT FOUND</h1>
        </main>
    )
}

export default NotFound

let pageStyle = {
    display: 'flex',
    height: '100vh',
    width:  '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    color:  'black',
    fontSize: '20px',
    backgroundColor: 'white',
}
let spanStyle = {
    color: 'red',
}