import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <Container
      fluid
      className="login-page d-flex justify-content-center align-items-center"
    >
      <Row>
        <Col>
          <Card className="login-card shadow-lg text-center p-4">
            <h2 className="mb-3">Welcome Back!</h2>
            <p className="mb-2 text-muted">Login to access my exercise</p>

            <div className="google-login-btn">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log("Google success", credentialResponse);
                  localStorage.setItem(
                    "loginDetails",
                    JSON.stringify(jwtDecode(credentialResponse.credential)),
                  );

                  login(Array.from(credentialResponse.credential));
                  navigate("/landingpage");
                }}
                onError={() => console.log("Login Failed")}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
