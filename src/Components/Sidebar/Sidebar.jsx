// import LOGO from "../../assets/Frame 4.png"
import "./Sidebar.css"
function Sidebar({username}){
    return(
        <div className="sidepiece">
                <img src={LOGO} className="logoo"/>
            <div className="acting">
                <div className="actions">
                    <a className="activ"><div className="mynaui--home "></div>Home</a>
                    <a className="activ"><div className="bx--category"></div>Catergories</a>
                    <a href="#" className="activ"><div  className="gg--shopping-cart"></div>My Cart</a>
                    <a href="#" className="activ"><div className="wi--time-4"></div>Order History</a>
                </div>
                <div className="actions">
                    <a href="#" className="activ"><div className="lets-icons--setting-line"></div>Settings</a>
                    <a href="#" className="activ"><div className="lucide--messages-square"></div>Support</a>
                    <div className="profiling">
                        <div className="circle"></div>
                        <div className="prof">
                            <p>Profile</p>
                            <p>{username}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}
export default Sidebar