// import LoginPic from '../../assets/Login.png';
import styled from 'styled-components';

const SignInSignOut = () => {
  return (
    <>
      <ImageContainer>
        <TextContainer>
          <p
            style={{
              fontSize: '6vw',
              lineHeight: '80px',
              width: '50%',
              position: 'relative',
              color: '#f9f9f9',
              fontFamily: 'Quattrocento, serif',
              fontWeight: '600',
              textAlign: 'center',
              fontStyle: 'normal',
              top: '20%',
            }}
          >
            Welcome to ChicCloset
          </p>
          <p
            style={{
              position: 'relative',
              top: '77%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '1.5vw',
              width: '75%',
              fontFamily: '"Quattrocento", serif',
              fontWeight: '400',
              fontStyle: 'normal',
            }}
          >
            Discover a world of fashion tailored just for you
          </p>
        </TextContainer>
        {/* <img src={LoginPic} className="image1" /> */}
      </ImageContainer>
    </>
  );
};
export default SignInSignOut;

const ImageContainer = styled.div`
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// background-image: url(${LoginPic});

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
`;
