import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup'; // Import the Popup component

const Container = styled.div`
  width: 100vw;
  height: 110vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F303%2F937%2Flarge_2x%2Fabstract-gray-background-with-wavy-lines-vector.jpg&f=1&nofb=1&ipt=c678e9b4fd4efef2b13f915f220e9e9ad6105d55ee2b000eba5871b6fba858b5&ipo=images")
  center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 150px;
  width: 50%;
  padding: 20px;

  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 200px;
  font-size: 50px;
  line-height: 1;
  font-family: 'El Messiri';
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  margin: 20px 0px;
  padding: 10px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  font-family: "Poppins", sans-serif;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  font-family: "Poppins", sans-serif;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Apply = () => {
  const [users, setUsers] = useState({
    firstname: "",
    lastname: "",
    age: "",
    parents: "",
    email: "",
    number: "",
  });

  const [submittedData, setSubmittedData] = useState({});
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const getUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    setSubmittedData(data);
    console.log('Form data:', data);
  };

  const postData = async (e) => {
    const { firstname, lastname, age, parents, email, number } = users;

    if (firstname && lastname && age && parents && email && number) {
      const res = await fetch(
        "https://babyviilla-default-rtdb.firebaseio.com/applyedtoprogram.json", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            age,
            parents,
            email,
            number,
          }),
        }
      );

      if (res) {
        setUsers({
          firstname: "",
          lastname: "",
          age: "",
          parents: "",
          email: "",
          number: "",
        });
        setShowPopup(true); // Show popup after successful submission
      }
    } else {
      alert("Please fill in all the data");
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Apply to our Program Now</Title>
          <Form onSubmit={handleSubmit} method='POST'>
            <Input
              type="text"
              placeholder="First name"
              name="firstname"
              value={users.firstname}
              onChange={getUserData}
              required
            />
            <Input
              type="text"
              placeholder="Last name"
              name="lastname"
              value={users.lastname}
              onChange={getUserData}
              required
            />
            <Input
              type="tel"
              placeholder="Student Age"
              name="age"
              value={users.age}
              onChange={getUserData}
              required
            />
            <Input
              placeholder="Parents/Guardian name"
              name="parents"
              value={users.parents}
              onChange={getUserData}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={users.email}
              onChange={getUserData}
              required
            />
            <Input
              type="tel"
              placeholder="Phone number"
              name="number"
              value={users.number}
              onChange={getUserData}
              required
            />
            <Agreement>
              By Applying, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type="submit" onClick={postData}>Apply</Button>
          </Form>
        </Wrapper>
      </Container>
      {showPopup && (
       <Popup
       message="Thank you for applying"
       imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fniceillustrations.com%2Fwp-content%2Fuploads%2F2021%2F02%2FThank-You-color-800px-768x768.png&f=1&nofb=1&ipt=40904a8093d9062dd63f18c7ee669bc00685a994e03d5d8a4c873ed6f648e3e4&ipo=images"
       onClose={() => setShowPopup(false)}
     />
      )}
      <Footer />
    </>
  );
};

export default Apply;
