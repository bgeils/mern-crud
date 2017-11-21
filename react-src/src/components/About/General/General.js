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
    Open Energy seeks to provide energy consumers and producers a platform to reduce their energy bill and profit from energy generation. 
    Through our transparent energy consumption tools, we provide consumers with real time analysis after installing our smart meter hardware 
    technology. Consumers have the opportunity to understand trends within their usage in an effort to systematically reduce their consumption. 
  </p>
)


const Paragraph2 = () => (
  <p>
    Currently under development is the energy production platform at Open Energy. The energy production platform consists of real time monitoring 
    similar to the consumption platform while also employing an energy marketplace. The marketplace allows users that have energy generation to sell 
    their excess energy to consumers. This is a net benefit for the consumer with a more competitive market to drive energy prices down. A small 
    transactional fee is paid to the grid in order to facilitate this cost of energy transmission. 
  </p>
)
const Paragraph3 = () => (
  <p>
    The energy marketplace will consist of an automated matching system for users that would like to purchase or sell third party energy. 
    From a consumer’s perspective the system would identify the cheapest energy source and purchase accordingly. With increased usage the automation 
    algorithm will match better energy sources due to more predictable energy consumption at your meter. As renewable energy generation technology 
    prices drop, Open Energy is the platform to capitalize on sustainable energy at reduced prices.  
  </p>
)

const Paragraph4 = () => (
  <p>
    At a grid level having real time energy data will allow the whole sale purchase of energy less variability and thus a reduction in over 
    purchasing. Furthermore, with third party energy generation the upfront cost of new generation plants is reduced. A focus on grid transmission 
    infrastructure can become top of mind for utilities. Taking into account the distance of each marketplace energy transaction there is an 
    opportunity to reduce loss of power during transmission and distribution.
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

          <Paragraph3/>

          <Paragraph4/>
          
        </Container>
        </div>
      )
  }
}

export default General;

