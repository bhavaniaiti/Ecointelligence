import React, { useRef } from "react";
import {
  Layout,
  Typography,
  Button,
  Form,
  Input,
  Carousel,
  Row,
  Col,
} from "antd";
import { GlobalOutlined, RightOutlined } from "@ant-design/icons";
import "./App.css";
import bg from "./BG.png";
import service1 from "./service1.png";
import service2 from "./service2.png";
import service3 from "./service3.png";
import about1 from "./about1.png";
import about2 from "./about2.png";
import about3 from "./about3.png";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  function scrollToRef(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Layout>
      <Header>
        <Title level={3} style={{ color: "#fff", width: "100%" }}>
          <Row justify={"space-around"} style={{ alignItems: "center" }}>
            <Col style={{ display: "flex" }}>
              {<GlobalOutlined style={{ color: "white", fontSize: 30 }} />}
              <div style={{ margin: "1px 0 0 10px", fontSize: 20 }}>
                EcoIntelligence
              </div>
            </Col>
            <Col className="headerContainer">
              <Row
                gutter={100}
                style={{
                  height: "30px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Col
                  style={{ fontSize: "20px" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Col>
                <Col
                  style={{ fontSize: "20px" }}
                  onClick={() => scrollToRef(aboutRef)}
                >
                  About us
                </Col>
                <Col
                  style={{ fontSize: "20px" }}
                  onClick={() => scrollToRef(servicesRef)}
                >
                  Our Services
                </Col>
                <Col
                  style={{ fontSize: "20px" }}
                  onClick={() => scrollToRef(contactRef)}
                >
                  Contact Us
                </Col>
              </Row>
            </Col>
          </Row>
        </Title>
      </Header>
      <Content>
        <HeroSection />
        <div ref={aboutRef}>
          <AboutUsSection />
        </div>
        <div ref={servicesRef}>
          <ServicesSection />
        </div>
        <div ref={contactRef}>
          <ContactUsSection />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#001529",
          color: "white",
        }}
      >
        EcoIntelligence ©2024
      </Footer>
    </Layout>
  );
}

function HeroSection() {
  return (
    <div className="hero">
      <img className="backimg" src={bg} />
      <div className="hero-content">
        <div className="heading">
          Empower Your Business with Cutting-Edge Intelligence
        </div>
        <Text className="subheadline">
          EcoIntelligence delivers innovative analytics solutions to enhance
          your operational efficiency and strategic decisions.
        </Text>
        <div>
          <Button size="large" className="btn">
            Explore Our Solutions {<RightOutlined />}
          </Button>
        </div>
      </div>
    </div>
  );
}

function AboutUsSection() {
  const images = [
    { src: about2, title: "Integrity" },
    { src: about1, title: "Innovation" },
    { src: about3, title: "Sustainability" },
  ];

  return (
    <div className="about">
      <div className="about-content">
        <Title level={2}>Leading Innovation in Business Intelligence</Title>
        <Text>
          We harness the power of data to transform business operations,
          promoting sustainability and competitiveness.
        </Text>
      </div>

      <Row justify="space-around" className="container" gutter={[20, 40]}>
        {images.map((image, index) => (
          <Col key={index + 1}>
            <div className="box">
              <img src={image.src} alt={image.title} className="image" />
              <div className="image-title">{image.title}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

function ServicesSection() {
  const images = [
    { src: service3, title: "Data Analytics" },
    { src: service2, title: "Performance Management" },
    { src: service1, title: "Predictive Analysis" },
  ];

  return (
    <div className="services">
      <div className="services-content">
        <Title level={2}>
          Robust Solutions for Intelligent Business Operations
        </Title>
        <Carousel autoplaySpeed={1500} autoplay dots={false}>
          {images.map((item, index) => (
            <Row key={index} style={{ width: "100%" }}>
              <Title level={3}>{item.title}</Title>
              <Row style={{ width: "100%", justifyContent: "center" }}>
                <img src={item.src} alt={"#"} className="caroselImage" />
              </Row>
              <div className="image-title">{item.title}</div>
              <Button
                type="default"
                className="service_btn"
                style={{ marginTop: "10px" }}
              >
                Learn More
              </Button>
            </Row>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

function ContactUsSection() {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <Title level={2}>Let's Drive Success Together</Title>
        <Text>
          Connect with us for a consultation or to explore partnerships. We are
          your partners in business intelligence.
        </Text>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Your Email" />
          </Form.Item>
          <Form.Item
            label="Company"
            name="company"
            rules={[{ required: true, message: "Please input your company!" }]}
          >
            <Input placeholder="Your Company" />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please input your message!" }]}
          >
            <Input.TextArea
              placeholder="Your Message"
              autoSize={{ minRows: 3, maxRows: 6 }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="default" className="submit_btn" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default App;
