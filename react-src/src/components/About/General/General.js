import _ from 'lodash';
import React, { Component } from 'react';
import { Container, Icon, Menu, Visibility } from 'semantic-ui-react';

const overlayStyle = {
  float: 'left',
  margin: '0em 4em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}
const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '750px'
}

const Paragraph = () => (
  <p>
    {[
      'Green energy is the future. It will be vital to focus on the use of renewable energy sources in order to slow ',
      'the degradation of our environment. But green energy also provides an interesting edge over traditional forms ',
      'of energy generation. It is absolutely feasible economically for individuals and businesses to tap into the ',
      'energy generation market without an enormous amount of infrastructure or upfront cost. As solar and wind ',
      'technology becomes less and less expensive, this will become easier and easier to do, and the payoff will come ',
      'quicker and quicker.'
    ].join('')}
  </p>
)

const Paragraph2 = () => (
  <p>
    {[
      "But what if there was a way to take advantage of this new distributed energy generation that doesn't",
      ' revolve around the control of the utility company? This is exactly what we are proposing with our project.',
      " With only a smart meter and a web application, a new open and competitive market will be created. It's a",
      " sunny day and you're producing more energy than you're consuming? Great, there's some extra money you can ",
      'make by selling it directly to someone who needs it. Our software will allow the user to have as much control',
      ' or as little as desired. They can manage every watt-hour of energy, or they can allow the software to optimize',
      ' their transactions within a certain range. The hardware and software will integrate seamlessly such that after',
      ' installation, the system can be essentially fully automated, requiring little to no work from the user. With this',
      ' technology, we hope to change the energy market to better fit the upcoming trend of widespread renewable energy sources. '
    ].join('')}
  </p>
)



// const LeftImage = () => (
//   <Image
//     floated='left'
//     size='medium'
//     src='/assets/images/wireframe/square-image.png'
//     style={{ margin: '2em 2em 2em -4em' }}
//   />
// )

// const RightImage = () => (
//   <Image
//     floated='right'
//     size='medium'
//     src='/assets/images/wireframe/square-image.png'
//     style={{ margin: '2em -4em 2em 2em' }}
//   />
// )

class General extends Component {

    constructor() {
    super();

    this.state = {
      overlayFixed: false,
      overlayRect: false
    }

  }

  unStickOverlay = () => this.setState({ overlayFixed: false });

  stickOverlay = () => this.setState({ overlayFixed: true });

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
  }


  render(){
    
    return (
      <div>
        <Container text>
          <Paragraph />

          {/* Example with overlay menu is more complex, SUI simply clones all elements inside, but we should use a
              different approach.
              An empty Visibility element controls the need to change the fixing of element below, it also uses height
              and width params received from its ref for correct display.
            */}
          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={this.state.overlayFixed ? { ...overlayStyle, ...this.state.overlayRect } : {}}
          />

          <div
            ref={this.handleOverlayRef}
            style={this.state.overlayFixed ? fixedOverlayStyle : overlayStyle}
          >
            <Menu
              icon='labeled'
              style={this.state.overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
              <a href="http://brendongeils.com/energy" target="_blank" rel="noopener noreferrer">
              <Menu.Item >
                <Icon name='world' />
               Web
              </Menu.Item>
              </a>

              <a href="mailto:brendonjgeils@gmail.com">
              <Menu.Item>
                <Icon name='mail' />
               Email
              </Menu.Item>
              </a>

            </Menu>
          </div>

          <Paragraph2/>
          
        </Container>
        </div>
      )
  }
}

export default General;

