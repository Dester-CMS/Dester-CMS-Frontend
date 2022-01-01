import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { APP_LOGO_FULL, SKELETON_BASE_COLOR, SKELETON_SHINE_COLOR, SKELETON_WIDTH_70 } from '../../config'
import './style.css'

const SugoiNavbar = () => {
    return (
        <Navbar expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={APP_LOGO_FULL} width="180" className="logo-full d-inline-block align-top" alt="Sugoi-Sama Logo-Full"/>
                    <Badge pill bg="primary">v1</Badge>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/"><i className="icon-navbar color-1 gg-home-alt"></i>Home</Nav.Link>
                        <Nav.Link href="/movies"><i className="icon-navbar color-1 gg-film"></i>Movies</Nav.Link>
                        <Nav.Link href="/series"><i className="icon-navbar color-1 gg-tv"></i>Series</Nav.Link>
                        <Nav.Link href="/search"><i className="icon-navbar color-2 gg-search"></i>Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const SugoiMobileNavbar = () => {
    return (
        <Navbar className="main-bottom-navigation" fixed="bottom">
            <Container className="justify-content-center" fluid>
                <Nav variant="pills" color="white">
                    <Nav.Item>
                        <Nav.Link eventKey={1} href="/"><i className="icon-navbar color-1 gg-home-alt"></i>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={2} href="/search"><i className="icon-navbar color-1 gg-search"></i>Search</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={3} href="/settings"><i className="icon-navbar color-1 gg-options"></i>Settings</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

const SugoiNavbarPlaceHolder = () => {
    return (
        <Navbar expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img src={APP_LOGO_FULL} width="180" className="logo-full d-inline-block align-top" alt="Sugoi-Sama Logo-Full"/>
                    <Badge pill bg="primary">v1</Badge>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link></Nav.Link>
                        <Nav.Link><Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} width={SKELETON_WIDTH_70} /></Nav.Link>
                        <Nav.Link><Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} width={SKELETON_WIDTH_70} /></Nav.Link>
                        <Nav.Link><Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} width={SKELETON_WIDTH_70} /></Nav.Link>
                        <Nav.Link><Skeleton baseColor={SKELETON_BASE_COLOR} highlightColor={SKELETON_SHINE_COLOR} width={SKELETON_WIDTH_70} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { SugoiNavbar, SugoiMobileNavbar, SugoiNavbarPlaceHolder }
