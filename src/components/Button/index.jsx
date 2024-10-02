import PropTypes from "prop-types"
import Button from "./style"



function MyButton({children, theme,  ...props}){

    return(
        <>
        <Button {...props} theme={theme} >
            {children}
        </Button>
        </>
    )
}

MyButton.propTypes={
    children: PropTypes.node.isRequired,
    theme:PropTypes.string
 
}

export default MyButton 