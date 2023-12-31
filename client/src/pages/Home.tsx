import { Nav, Button, Row } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Home() {
    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <div className="container-fluid p-0">
            <div className="sticky-top">
                <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: "rgb(192, 220, 241)", color: "#C1FAFF", height: "4rem"}}>
                    <h3 className="m-0" style={{fontFamily: "monospace"}}>EXTRA 25% OFF SELECT STYLES</h3>
                </div>
                <Nav className="me-auto d-flex justify-content-between pb-2 pt-3 ps-5 pe-5" style={{backgroundColor: "white", borderBottom: "2px solid lightgrey" }}>
                    <h1 style={{letterSpacing: "3px"}}>wearables.</h1>
                    <div className="d-flex">
                        <Nav.Link to="/store" as={NavLink} style={{color: "black"}}>Store</Nav.Link>
                        <Nav.Link to="/about" as={NavLink} style={{color: "black"}}>About</Nav.Link>
                        {cartQuantity > 0 && <Button 
                        onClick={openCart}
                        style={{width: "3rem", height: "3rem", position: "relative", color: "black"}}
                        variant="outline-secondary"
                        className="rounded-circle">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                        >
                            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>
                        <div 
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(35%, 25%)"
                        }}
                        >{cartQuantity}</div>
                        </Button>}
                    </div>
                </Nav>
            </div>
            <div style={{height: "2rem"}}>
            </div>
            <div className="d-flex justify-content-center align-items-end" style={{backgroundImage: "url(imgs/running.jpg)", height: "600px", maxWidth: "100%", backgroundSize: "cover", backgroundPosition: "center"}}>
                <Link to={"/store"}>
                    <Button className="mb-4 rounded-0" style={{ width: "200px", backgroundColor: "white", color: "black", border: " 1px solid black"}}>
                        Shop All Styles
                    </Button>
                </Link>
            </div>
            <div className="container-fluid mt-4 mb-4 ps-5 pe-5">
                <Row xs={1} md={2} lg={2} xl={4} className="g-3">
                    <div>
                        <img src="imgs/homePic1.jpg" style={{objectFit: "cover", height: "400px", width: "100%"}} />
                        <Link to={"/store"} style={{color: "black"}}>
                            <p className="mt-4">Performance Wear</p> 
                        </Link>
                    </div>
                    <div>
                        <img src="imgs/homePic3.jpg" style={{objectFit: "cover", height: "400px", width: "100%"}} /> 
                        <Link to={"/store"} style={{color: "black"}}>
                            <p className="mt-4">Wearable Tech</p> 
                        </Link>
                    </div>
                    <div>
                        <img src="imgs/homePic2.jpg" style={{objectFit: "cover", height: "400px", width: "100%"}} /> 
                        <Link to={"/store"} style={{color: "black"}}>
                            <p className="mt-4">Women's Styles</p> 
                        </Link>
                    </div>
                    <div>
                        <img src="imgs/homePic4.jpg" style={{objectFit: "cover", height: "400px", width: "100%"}} />
                        <Link to={"/store"} style={{color: "black"}}>
                            <p className="mt-4">Men's Styles</p>
                        </Link> 
                    </div>
                </Row>
            </div>
        </div>
    )
}