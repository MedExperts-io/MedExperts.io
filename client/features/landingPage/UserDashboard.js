import React from "react";
import { Stack, Box } from "@mui/material";
import { Card, Row, Col } from "react-bootstrap";

const UserDashboard = ({
  firstName,
  totalEasyAnswered,
  totalmoderateAnswere,
  totalhardAnswered,
  totalallAnswered,
  UsereasyQuestionsTotal,
  EasyQuestionsTotal,
  UserModerateQuestionsTotal,
  ModerateQuestionsTotal,
  UserHardQuestionsTotal,
  HardQuestionsTotal,
  UserAllQuestionsTotal,
  AllUserQuestions,
  allCategories,
  progressBarRatio,
  progressCircleBackground,
  styles,
  stylesCategory
}) => {
  return (
    <Stack spacing={4} sx={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
      {/* Welcome Section */}
      <Box sx={{
        display: 'inline-flex',
        backgroundColor: '#FFF0F0',
        color: '#FF6262',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        fontSize: '1.2rem',
        fontWeight: '500',
        animation: 'slideDown 0.6s ease-out',
        alignSelf: 'center',
      }}>
        Welcome back, {firstName ? firstName.charAt(0).toUpperCase() + firstName.slice(1) : "User"}!
      </Box>

      {/* Questions Answered Section */}
      <Card style={{
        backgroundColor: 'white',
        borderRadius: '24px',
        boxShadow: '0 4px 14px rgba(255, 98, 98, 0.1)',
        animation: 'slideUp 0.8s ease-out',
        border: 'none',
      }}>
        <Card.Body className="p-4">
          <h2 style={{
            fontSize: '1.8rem',
            color: '#332C2C',
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: '600',
          }}>
            Questions Answered
          </h2>
          <Row>
            {[
              { title: 'Easy Level', data: totalEasyAnswered, style: styles.progressBarEasy, color: 'lightgreen' },
              { title: 'Moderate Level', data: totalmoderateAnswere, style: styles.progressBarModerate, color: '#f5ad27' },
              { title: 'Hard Level', data: totalhardAnswered, style: styles.progressBarHard, color: '#f55b49' },
              { title: 'All Levels', data: totalallAnswered, style: styles.progressBarAll, color: '#bf5eff' }
            ].map((item, index) => (
              <Col key={index} xs={12} sm={6} md={3}>
                <div style={{
                  textAlign: 'center',
                  animation: `fadeIn ${0.8 + index * 0.2}s ease-out`,
                  padding: '1rem',
                }}>
                  <div className="mx-auto" style={{
                    ...item.style,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}>
                    <div style={styles.progressBarMiddle}>{item.data}</div>
                    <div style={styles.progressBarBackground}>Completed</div>
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    color: '#332C2C',
                    marginTop: '1rem',
                    fontWeight: '600',
                  }}>{item.title}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Questions Answered Correctly Section */}
      <Card style={{
        backgroundColor: 'white',
        borderRadius: '24px',
        boxShadow: '0 4px 14px rgba(255, 98, 98, 0.1)',
        animation: 'slideUp 1s ease-out',
        border: 'none',
      }}>
        <Card.Body className="p-4">
          <h2 style={{
            fontSize: '1.8rem',
            color: '#332C2C',
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: '600',
          }}>
            Questions Answered Correctly
          </h2>
          <Row>
            {[
              { 
                title: 'Easy Level',
                percentage: Math.round((UsereasyQuestionsTotal.length / EasyQuestionsTotal.length) * 100) || 0,
                style: styles.progressBarEasy,
                color: 'lightgreen'
              },
              { 
                title: 'Moderate Level',
                percentage: Math.round((UserModerateQuestionsTotal.length / ModerateQuestionsTotal.length) * 100) || 0,
                style: styles.progressBarModerate,
                color: '#f5ad27'
              },
              { 
                title: 'Hard Level',
                percentage: Math.round((UserHardQuestionsTotal.length / HardQuestionsTotal.length) * 100) || 0,
                style: styles.progressBarHard,
                color: '#f55b49'
              },
              { 
                title: 'All Levels',
                percentage: Math.round((UserAllQuestionsTotal.length / AllUserQuestions.length) * 100) || 0,
                style: styles.progressBarAll,
                color: '#bf5eff'
              }
            ].map((item, index) => (
              <Col key={index} xs={12} sm={6} md={3}>
                <div style={{
                  textAlign: 'center',
                  animation: `fadeIn ${0.8 + index * 0.2}s ease-out`,
                  padding: '1rem',
                }}>
                  <div className="mx-auto" style={{
                    ...item.style,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}>
                    <div style={styles.progressBarMiddle}>{item.percentage}%</div>
                    <div style={styles.progressBarBackground}>Correct</div>
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    color: '#332C2C',
                    marginTop: '1rem',
                    fontWeight: '600',
                  }}>{item.title}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Categories Section */}
      <Card style={{
        backgroundColor: 'white',
        borderRadius: '24px',
        boxShadow: '0 4px 14px rgba(255, 98, 98, 0.1)',
        animation: 'slideUp 1.2s ease-out',
        border: 'none',
      }}>
        <Card.Body className="p-4">
          <h2 style={{
            fontSize: '1.8rem',
            color: '#332C2C',
            textAlign: 'center',
            marginBottom: '2rem',
            fontWeight: '600',
          }}>
            Categories
          </h2>
          <Row>
            {allCategories.map((category, index) => (
              <Col 
                key={index}
                xs={12} 
                sm={6} 
                md={4} 
                lg={3}
                style={{
                  padding: '1rem',
                  animation: `fadeIn ${0.8 + index * 0.1}s ease-out`,
                }}
              >
                <div style={{
                  textAlign: 'center',
                }}>
                  <div className="mx-auto" style={{
                    background: progressCircleBackground(progressBarRatio(category, false), '#f5ad27'),
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    position: 'relative',
                    margin: '0 auto',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}>
                    <div style={stylesCategory.progressBarMiddle}>
                      {progressBarRatio(category, true)}
                    </div>
                    <div style={stylesCategory.progressBarBackground}>
                      Completed
                    </div>
                  </div>
                  <h3 style={{
                    fontSize: '1rem',
                    color: '#332C2C',
                    marginTop: '1rem',
                    fontWeight: '600',
                  }}>
                    {category !== "Chronic Obstructive Pulmonary Disease" ? category : "COPD"}
                  </h3>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Stack>
  );
};

export default UserDashboard; 