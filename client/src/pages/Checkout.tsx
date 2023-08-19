import { Container, Card, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import { useNavigate } from "react-router-dom";
import storeItems from "../data/items.json"

export function Checkout() {
    const { cartItems } = useShoppingCart()
    const { removeFromCart } = useShoppingCart()
    const navigate = useNavigate();

    return (
        <Container style={{width: "50%", minWidth: "450px"}}>
            <Card>
                <Card.Body className="d-flex flex-column">
                    <Card.Title><h1>Checkout</h1></Card.Title>
                    <Stack gap={3}>
                        {cartItems.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))}
                        <div className="ms-auto fw-bold fs-5">
                            Total{" "}
                            {formatCurrency(
                                cartItems.reduce((total, cartItem) => {
                                    const item = storeItems.find(i => i.id === cartItem.id)
                                    return total + (item?.price || 0) * cartItem.quantity
                                }, 0)
                            )}
                        </div>
                        <div className="d-flex justify-content-center" style={{width: "100%"}}>
                            <Button style={{width: "50%"}} onClick={() => {
                                cartItems.map((item) => {
                                    removeFromCart(item.id)
                                    navigate('/')
                                })
                            }}>
                                Place Order
                            </Button>
                        </div>
                    </Stack>
                </Card.Body>
            </Card>
        </Container>
    )
}