import React, {Component} from "react"
import classes from "./LayoutTwo.module.css"
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle"
import Drawer from "../../components/Navigation/Drawer/Drawer"


class LayoutTwo extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return(
            <div className={classes.LayoutTwo}>
                <Drawer
                    isOpen = {this.state.menu}
                    onClose={this.menuCloseHandler}
                />

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
