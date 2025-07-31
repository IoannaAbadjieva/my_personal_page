import {
  Grid,
  Header,
  Image,
  Segment,

} from 'semantic-ui-react';

export default function AboutMe() {
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
            <Image src="/STO6837.jpg" />
            <p style={{ fontSize: 'small', fontStyle: 'italic' }}>Me at gymnastics competition</p>

          </Grid.Column>
          <Grid.Column width={10}>
            <Header inverted as="h1">
              About Me
            </Header>
            <p>
              
Hello! My name is Magda, and I’m 10 years old. I live in a small town, where I go to a school called Saints Cyril and Methodius High School. This year, I’m starting 4th grade, and I’m really excited to learn new things. My favorite color is blue because it reminds me of the sky and the sea. I also have a big brother who is two years older than me, and we love spending time together. I love
              gymnastics, reading books, and drawing. I also enjoy spending time with my friends and
              family. I'll have a dog soon, and I can't wait to take care of it! His name will be Kaito.
            </p>
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src="/atSchool.jpg" />
            <p style={{ fontSize: 'small', fontStyle: 'italic' }}>With my brother - first day at school</p>
           
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3} textAlign="center" verticalAlign="middle">
          <Grid.Column width={5}>
            <Header inverted as="h4">
              My brother
            </Header>
            <Image src="/myBrother.jpg" />
            <p style={{ fontSize: 'small', fontStyle: 'italic' }}>My brother made me a fruit salad</p>
            <p>
              My brother is 12 years old. He is very smart and funny. He likes to play video games and
              watch movies. We often play together and help each other with homework. I love spending time with him.
            </p>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted as="h4">
              My dog Kaito will be just like this
            </Header>
            <Image  src="/kaito.jpg" />
             <p style={{ fontSize: 'small', fontStyle: 'italic' }}>Czechoslovakian wolfdog</p>
            <p>
              I love animals, and I can't wait to have my own dog. I want to take care of him, play with him, and teach him tricks. I hope he will be a good friend and companion.
            </p>


          </Grid.Column>
          <Grid.Column width={6}>
            <Header inverted as="h4">
              My school
            </Header>
            <Image src="/1728373149.jpg" />
            <Image src="/school.jpg" />
            <p style={{ fontSize: 'small', fontStyle: 'italic' }}>With our director and my school friends</p>
            <p>
              My school is a great place to learn and have fun. I have many friends there, and we enjoy learning new things together. The teachers are very nice and always help us when we need it. I like going to school every day.  
            </p>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Segment>
  );
}
