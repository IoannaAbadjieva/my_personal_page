import { Segment, Grid, Header, Image } from "semantic-ui-react";

export default function MyInterests() {
    return (
        <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '0.5em 0.5em' }}
            vertical
        >
            <Grid celled style={{ marginTop: '2em' }}>
                <Grid.Row columns={3} textAlign="center" verticalAlign="middle">
                    <Grid.Column width={3}>
                        <Image src="/before.jpg" />
                        <p style={{ fontSize: 'small', fontStyle: 'italic' }}>We are preparing for competition</p>

                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Header inverted as="h1">
                            My Interests
                        </Header>
                        <p>
                            I am playing gymnastics for 4 years. I love it! I like to learn new tricks and improve my skills. I also enjoy reading books, especially fantasy and adventure stories. Drawing is another hobby of mine, where I can express my creativity. I listen to music while I draw. I like Nightwish, Pink, BTR and many others. Spending time with my friends and family is very important to me, and we often go for walks in the park.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image src="/STO6834.jpg" />
                        <p style={{ fontSize: 'small', fontStyle: 'italic' }}>Me at gymnastics competition in Sliven</p>

                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3} textAlign="center" verticalAlign="middle">
                    <Grid.Column width={6}>
                        <Header inverted as="h4">
                            At the sea camping
                        </Header>
                        <Image style={{margin: '0 auto' }} src="/friends.jpg" />
                        <p style={{ fontSize: 'small', fontStyle: 'italic' }}>With my friends at the camp at the sea</p>

                        <p>
                            I love going to the sea with my family and friends. We have a lot of fun swimming, building sandcastles, and collecting seashells. The beach is a great place to relax and enjoy the sun.
                        </p>
                    </Grid.Column>

                    
                    <Grid.Column width={5}>
                        <Header inverted as="h4">
                            My partners in gymnastics
                        </Header>
                        <Image src="/three.jpg" />
                        <p style={{ fontSize: 'small', fontStyle: 'italic' }}>From left to right: Emiliana, Jowana, and me</p>
                        <p>
                            My partners in gymnastics are very talented and hardworking.Emi is base,  We train together every day and support each other in learning new skills. I am grateful to have such amazing friends by my side.
                        </p>
                    </Grid.Column>

                    <Grid.Column width={5}>
                        <Header inverted as="h4">
                            We are going to a show
                        </Header>
                        <Image style={{margin: '0 auto' }} src="/waiting.jpg" />
                        <p style={{ fontSize: 'small', fontStyle: 'italic' }}>Waiting for Nightwish concert</p>
                        <p>
                            Our parents took us to a concert of our favorite band, Nightwish. It was an amazing experience! The music was loud and exciting, and we had so much fun singing along with the songs. Mom and Dad even made us t-shirts for the concert.
                        </p>

                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </Segment>
    );
}
