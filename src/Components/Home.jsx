import React from "react";
import { Row, Col, Button, Container, Image } from "react-bootstrap";
import MyNavbar from './Navbar'
import Me from './images/Azizz.png'
import Card_Display from "./Card";
import animation from './animations/Animation - 1712609199135.json'
import Lottie from 'lottie-react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import ScrollImage from "./Appearing_animation";
import ImageSlider from "./Swiper_slider";
import Work from './images/chosn.jpg'
import School from './images/Midwestern State.png'
import Urban from './images/urban.png'
import Coffee from './images/logo - Copy.jpg'
import Slot from './images/slot-machine.jpeg'
import Tic from './images/tic-tac-toe.png'
import Contact from './Modal'
import './Home.css'


const Home = () =>{
      
    const [text] = useTypewriter({
        words : ['React Developer', 'Front-End Developer'],
        loop : {},
        typeSpeed : 100,
        deleteSpeed : 100
    })

    return (      
        <Container fluid className="full-screen">
            <Row className="bg-color mb-5">
            <MyNavbar/>
            </Row>
            <Row id="Home" className="mt-5">
                <Col className="disappear">
                <Lottie animationData={animation}/>
                </Col>                
            <Col className="d-flex flex-column justify-content-center align-items-center p-4">
               <Row className="d-flex justify-content-center align-items-center"> 
               <Col>
                    <h1>Hi!!!</h1>
                    <h2>I'm Azizz</h2>
                    <h2>A {' '}
                        <span>
                        {text}
                        </span>
                        <span style={{fontWeight : 'bold'}}>
                            <Cursor cursorStyle='|'/>
                        </span>                        
                    </h2>   
               </Col>                
               </Row>                             
               <Row className="d-flex justify-content-center align-items-center">
                <Col className="d-flex justify-content-center align-items-center m-2">  

                {/*For the download below place the document in the public folder*/}

                <a href="./React-Resume.docx" download="Resume.docx" style={{textDecoration:'none'}}>                  
                <Button className="d-flex justify-content-center align-items-center button-background">
                    Resume
                </Button>               
                </a>     
                </Col>
                <Col className="d-flex justify-content-center align-items-center m-2">                
                <Contact/>
                </Col>
               </Row>            
            </Col>            
        </Row>
        <Row className="d-flex flex-wrap justify-content-center align-items-center" id="About-Me">
        <h1 className="d-flex justify-content-center align-items-center">About Me</h1>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={12} md={6} lg={6} xl={6}>                             
                    <Image src={Me} className="profile-picture" alt="Profile picture"/>                              
        </Col>
        <Col className="d-flex justify-content-center align-items-center" xs={12} sm={12} md={6} lg={6} xl={6}>
            <ScrollImage pic={
                <p>
                    I am a passionate front-end developer specializing in React.
                    With a keen eye for design and crafting user experiences, 
                    I thrive on bringing ideas to life. <br/><br/>
 
                    I've found my niche in front-end development, particularly 
                    with React, where I enjoy leveraging its powerful capabilities to build dynamic,
                    interactive web applications. <br/><br/>
 
                    I look forward to the opportunity to collaborate on exciting projects and help
                    bring your vision to fruition. Let's connect and embark on this journey together!
                </p>
            } className='d-flex justify-content-center align-items-center'/>
        </Col>
        </Row>
        <Row>
            <h1 className="d-flex justify-content-center align-items-center">Skills</h1>
            <Col className="d-flex justify-content-center align-items-center ">
            <Row id="Skills">
                <ImageSlider/>
            </Row>
            </Col>            
        </Row>
        <Row id="Career">
        <h1 className="d-flex justify-content-center align-items-center">Career</h1>
        <Col className="d-flex justify-content-center align-items-center">
            <VerticalTimeline>
            <VerticalTimelineElement
                    date="May 2024 - Present" 
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
                    icon={<img src={Urban} style={{height: '100%', width: '100%'}}/>}
                    contentStyle={{ background: 'blue', color: '#fff' }} 
                    contentArrowStyle={{ borderRight: '7px solid  blue' }}                  
                >
                <h1 className="vertical-timeline-element-title">WordPress Developer/Web Manager</h1>
                <h2 className="vertical-timeline-element-subtitle" style={{color:'white'}}>
                    NJ Urban News
                </h2>
                <ul>
                    <li>
                    Enhanced user experience and engagement, leading to increasing website traffic 
                    and user retention by 27%.
                    </li>
                    <li>
                    Provided insights into user behavior and website performance, guiding data-driven 
                    decisions to enhance site effectiveness by 20%.
                    </li>
                    <li>
                    Improved user experience across all platforms, increasing accessibility and user 
                    satisfaction by 15%
                    </li>
                </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="May 2023 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img src={Work} style={{height: '100%', width: '100%', borderRadius:'40px'}}/>}
                    contentStyle={{ background: 'blue', color: '#fff' }}  
                    contentArrowStyle={{ borderRight: '7px solid  blue' }}                   
                >
                <h1 className="vertical-timeline-element-title">Chosn App</h1>
                <h2 className="vertical-timeline-element-subtitle" style={{color:'white'}}>
                    React Developer
                </h2>
                    <ul style={{listStyle:'circle'}}>
                        <li>
                        Develop and maintain responsive, user-friendly web and mobile applications using 
                        the latest frontend technologies such as ReactJS, JavaScript, Typescript, 
                        HTML5, and CSS3.
                        </li>
                        <li>
                        Collaborating closely with the back-end development team to integrate front-end 
                        components with server-side APIs, enabling smooth data flow and real-time updates.
                        </li>
                        <li>
                        Participating in weekly meetings to review the progress and outline the future work
                        </li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Mar 2021 - Dec 2023" 
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
                    icon={<img src={School} style={{height: '100%', width: '100%'}}/>}
                    contentStyle={{ background: 'blue', color: '#fff' }} 
                    contentArrowStyle={{ borderRight: '7px solid  blue' }}                  
                >
                <h1 className="vertical-timeline-element-title">CRM System Administrator</h1>
                <h2 className="vertical-timeline-element-subtitle" style={{color:'white'}}>
                    Midwestern State University
                </h2>
                <ul>
                    <li>
                    Develop dynamic custom email templates using HTML, CSS, and SQL to accurately target
                    recipients and manage content.
                    </li>
                    <li>
                    Perform data analysis based on complex requirements and filters, parsing 1M+ student 
                    records maintained in a scalable CRM.
                    </li>
                    <li>
                    Automate workflows by developing a Python-based system that converts external 
                    documents into CRM-based layouts.
                    </li>
                </ul>
                </VerticalTimelineElement>                
            </VerticalTimeline>
        </Col>
        </Row>
        <Row id="Projects">
            <h1 className="d-flex justify-content-center align-items-center">PROJECTS</h1>
            <Row>
            <Col className="d-flex justify-content-center align-items-center m-2 ">
            <Card_Display
            title={"Mills' Coffee Shop Menu"}
            text={'A catalogy of beverages on display for a coffee shop'}
            pic={Coffee}
            url={'https://azizzmills.github.io/Coffee-Shop/'}
            />
            </Col>
            <Col className="d-flex justify-content-center align-items-center m-2">
            <Card_Display
            title={'Tic-Tac-Toe'}
            text={"A classical two player game of Tic-Tac-Toe."}
            pic={Tic}
            url={'https://azizzmills.github.io/Tic-Tac-Toe/'}
            />
            </Col>
            <Col className="d-flex justify-content-center align-items-center m-2">
            <Card_Display
            title={'Slot Machine'}
            text={'A simple casino slot machine simulation '}
            pic={Slot}
            url={'https://azizzmills.github.io/Slot-Machine/'}
            />
            </Col> 
            </Row>                                   
        </Row>
        </Container>        
    );
}
export default Home;