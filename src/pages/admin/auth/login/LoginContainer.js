import { connect } from "react-redux"
import { initializeGoogleAuth } from "../../store/april/auth/auth-reducer"
import index from "./index"


const mapStateToProps = (state) => ({
    app: state.app
})

export default connect(mapStateToProps, {
    initializeGoogleAuth
})(index)