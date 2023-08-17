function Color(props){
    const {children} = props

        return(
            <div>
                <h1> El color elegido es</h1>
                <p>{children}</p> 
                <button onClick={props.onDelete}> Borrar el color elegido</button>


            </div>


        )



}

export default Color