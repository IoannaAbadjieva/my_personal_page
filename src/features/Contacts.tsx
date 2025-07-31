import { NavLink } from "react-router-dom";
import { Segment, Grid, Header, Container, Icon } from "semantic-ui-react";

export default function Contacts() {
  return (
    <Segment inverted textAlign="center" style={{ minHeight: 700, padding: '2em 1em' }} vertical>
      <Grid celled style={{ marginTop: '2em' }}>
        <Grid.Row columns={2} textAlign="center" verticalAlign="middle">
          <Grid.Column>
            <Header as="h3" inverted>Contact Me</Header>
            <p>
              I would love to hear from you! Whether you have questions, suggestions, or just want to say hello, feel free to reach out.
            </p>

            <Container textAlign="center" style={{ marginTop: '1em' }}>
              <a href="mailto:your-email@example.com" style={{ color: 'white', fontStyle: 'italic' }}>
                Mail Me <Icon name="mail" style={{ marginLeft: '0.5em' }} />
              </a>
            </Container>
            <Container textAlign="center" style={{ marginTop: '1em' }}>
              <a href="https://www.linkedin.com/in/yourprofile" style={{ color: 'white', fontStyle: 'italic' }}>
                LinkedIn <Icon name="linkedin" style={{ marginLeft: '0.5em' }} />
              </a>
            </Container>
            <Container textAlign="center" style={{ marginTop: '1em' }}>
              <a href="https://twitter.com/yourprofile" style={{ color: 'white', fontStyle: 'italic' }}>
                Twitter <Icon name="twitter" style={{ marginLeft: '0.5em' }} />
              </a>
            </Container>
            <Container textAlign="center" style={{ marginTop: '1em' }}>
              <a href="https://facebook.com/yourprofile" style={{ color: 'white', fontStyle: 'italic' }}>
                Facebook <Icon name="facebook" style={{ marginLeft: '0.5em' }} />
              </a>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container textAlign="center" style={{ marginTop: '1em' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23379.325086092693!2d23.757639536899692!3d42.90627447693769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa5744d3ddab19%3A0x666c7ebf9c81f055!2z0JHQvtGC0LXQstCz0YDQsNC0!5e0!3m2!1sbg!2sbg!4v1752777651208!5m2!1sbg!2sbg"
                width="400"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Container textAlign="center" style={{ marginTop: '1em' }}>
              <NavLink to="/" style={{ color: 'white', fontStyle: 'italic' }}>
                Back to Home <Icon name="home" style={{ marginLeft: '0.5em' }} />
              </NavLink>
            </Container>
            <p>
              I hope you enjoyed learning more about me. If you have any questions or just want to chat, don't hesitate to reach out!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
