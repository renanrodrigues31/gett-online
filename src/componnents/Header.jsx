import { Container } from "./HeaderStyles";
import logo from '../imagens/logo-header.svg'

export default function Header() {
    return (
        <Container>
            <img src={logo} />

        </Container>
    );
}