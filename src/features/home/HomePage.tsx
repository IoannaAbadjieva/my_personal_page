import { NavLink } from "react-router-dom";
import { Segment, Image, Grid, Header, Icon, Container } from "semantic-ui-react";

export default function HomePage() {
    return (
        <Segment  inverted textAlign="center" style={{ minHeight: '100vh', padding: '5em 1em' }} vertical   >
            <Grid columns={2} stackable textAlign="center" verticalAlign="middle">
                <Grid.Column>
                    <Header as="h1" inverted>Welcome to My Page</Header>
                    <Header as="h5" inverted>Click on the links in the navigation bar to get started.</Header>
                    <Header as="h5" inverted>Enjoy your stay!</Header>
                    <Container textAlign="center" style={{ marginTop: '2em' }}>
                        <NavLink to="/about" style={{ color: 'white', fontStyle: 'italic' }}>
                            Learn More <Icon name="arrow right" style={{ marginLeft: '0.75em' }} />
                        </NavLink>
                    </Container>
                    <Container textAlign="center" style={{ marginTop: '1em' }}>
                        <NavLink to="/interests" style={{ color: 'white', fontStyle: 'italic' }}>
                            My Interests <Icon name="star" style={{ marginLeft: '0.5em' }} />
                        </NavLink>
                    </Container>
                    <Container textAlign="center" style={{ marginTop: '1em' }}>
                        <NavLink to="/contacts" style={{ color: 'white', fontStyle: 'italic' }}>
                            Contact Me <Icon name="mail" style={{ marginLeft: '0.5em' }} />
                        </NavLink>
                    </Container>

                </Grid.Column>
                <Grid.Column>
                    <Image as={Image}
                        size="large"
                        floated="left"
                        src="/bridge.jpg"
                        alt="bridge"
                        style={{ marginTop: '2em' }} />
                    
                </Grid.Column>
            </Grid>
        </Segment>
    );
}
