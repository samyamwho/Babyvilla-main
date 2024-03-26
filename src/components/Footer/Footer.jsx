import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { mobile } from "../../responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";


const backgroundImageUrl = "url('https://greystanespreschool.nsw.edu.au/wp-content/uploads/2019/10/footer-background-light.png')";


const Container = styled.div`
margin-top : 200px;
  display: flex;
  ${mobile({ flexDirection: "column" })}
  background-image: ${backgroundImageUrl}; /* Add background image */
  background-size:cover; /* Adjust background size */
  background-position: top; /* Center the background image */
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left:200px;
  margin-top:60px;
`;

const Logo = styled.div`

`;

const Desc = styled.p`
  margin: 20px 0px;
  display: block; /* Ensure the h1 is displayed as a block element */
    margin-bottom: 20px;
    font-size: 20px;
    font-Family: 'Poppins';
    font-weight: 250;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  text-decoration: none; /* Add this line to remove the underline */
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 30px;
    font-Family: 'Poppins';
    font-weight: 250;

`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
  margin-top:100px;
  margin-left:10%;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
    font-Family: 'Poppins';
    font-weight: 250;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
    const handleScroll = (id) => {
        const item = document.getElementById(id);
        window.scrollTo({
            top: item.offsetTop - 115,
            behavior: 'smooth'
        });
    }

    return (
        <Container>
            <Left>
                <Logo><img src="https://i.ibb.co/KykFrNk/logo-dark-removebg-preview.png" alt="" style={{ width: '300px', height: 'auto' }} /></Logo>
                <Desc>Learners Today Leaders Tomorrow<br /> We are commited in the excelence of your child in eductaion</Desc>
                <SocialContainer>
                    <SocialIcon href="https://www.facebook.com/samyam.shrestha.69" target="_blank" color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon href="https://www.instagram.com/samyam_shh/" target="_blank" color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon href="https://twitter.com/samyam_who" target="_blank" color="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon href="https://www.linkedin.com/in/samyam-shrestha-130991224/" target="_blank" color="E60023">
                        <LinkedInIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{ marginRight: "10px" }} /> Gatthaghar, Bhaktapur,
                    Nepal
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style={{ marginRight: "10px" }} /> +977 9841956958
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{ marginRight: "10px" }} /> samyamshr@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
