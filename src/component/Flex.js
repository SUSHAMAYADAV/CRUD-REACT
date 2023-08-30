function Flex(){
 
    return(
        <>
        <h1>design of container</h1>
        <div style={{display:Flex,flexDirection:"row-reverse",justifyContent:"center",outline:"solid 1px black",width:"500px",height:"500px"}}>main div

            <div style={{width:"100px",height:"100px",backgroundColor:"red"}}>1
            </div>
            <div style={{width:"100px",height:"100px",backgroundColor:"blue"}}>2
            </div>
            <div style={{width:"100px",height:"100px",backgroundColor:"green"}}>3
            </div>
        </div>
        </>
    )
}
export default Flex;