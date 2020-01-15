import React, {Component} from "react"
import classes from "./LayoutTwo.module.css"
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle"

class LayoutTwo extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return(
            <div className={classes.LayoutTwo}>

                <MenuToggle
                    onToggle = {this.toggleMenuHandler}
                    isOpen = {this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default LayoutTwo
