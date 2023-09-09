import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Assets from "../../components/Assets";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from '../../context/CurrentUserContext';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const [{data: pageProfile}] = await Promise.all([
                axiosReq.get(`/profiles/${id}/`)
            ])
        } catch(err){
            console.log(err)
        }
    }
      setHasLoaded(true);
  }, [])

  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <p>Image</p>
        </Col>
        <Col lg={6}>
          <h3 className="m-2">Profile username</h3>
          <p>Profile stats</p>
        </Col>
        <Col className="p-3">Profile content</Col>
      </Row>
    </>
  );


  return (
    <Row>
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
            {mainProfile}
            </>
          ) : (
            <Assets spinner />
          )}
        </Container>
    </Row>
  );
}

export default ProfilePage