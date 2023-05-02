import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Hero from "../../Components/Hero";
import { Box } from "@mui/system";
import Discount from "../../Components/Content/Discount";
import AppDownlaod from "../../Components/Footer/AppDownlaod";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  const Section = styled.div`
    height: 100vh;
    display: flex;
  `;
  const Container = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
  `;

  const Title = styled.h1`
    font-weight: 200;
    color: black;
  `;

  const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media only screen and (max-width: 768px) {
      width: 300px;
    }
  `;

  const Input = styled.input`
    padding: 20px;
    background-color: #e8e6e6;
    border: none;
    border-radius: 5px;
  `;

  const TextArea = styled.textarea`
    padding: 20px;
    border: none;
    border-radius: 5px;
    background-color: #e8e6e6;
  `;
  const Button = styled.button`
    background-color: orange;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    padding: 20px;
  `;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w4y2n8i",
        "template_lnvfdxu",
        form.current,
        "KyiD_DA3gXbscQ8zy"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url("/images/hdr.jpg")`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <Hero />
      </Box>
      <Discount />
      {/* <AppDownlaod /> */}
      <Section>
        <Container>
          <Form ref={form} onSubmit={sendEmail}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="user_name" />
            <Input placeholder="Email" name="user_email" />
            <TextArea
              placeholder="Write your Message"
              rows={10}
              name="message"
            />
            <Button type="submit">Send</Button>
          </Form>
        </Container>
      </Section>
      <Footer />
    </Box>
  );
};

export default HomePage;
