import React from "react";
import { Stack, Box } from "@mui/material";
import { Card, Row, Col } from "react-bootstrap";
import {
  People as PeopleIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Assignment as AssignmentIcon,
  School as SchoolIcon,
} from '@mui/icons-material';

const AdminDashboard = ({ 
  allUsers, 
  questionsAnswers, 
  EasyQuestionsTotal,
  HardQuestionsTotal,
  UserQuestionsAnswered,
  surveyDataSatisfaction,
  allCategories,
  progressBarRatio 
}) => {
  return (
    <Stack spacing={4} sx={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
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
        marginBottom: '2rem',
      }}>
        Admin Dashboard
      </Box>

      {/* Stats Overview Cards */}
      <Row>
        {[
          {
            title: 'Total Users',
            value: allUsers.length,
            icon: <PeopleIcon sx={{ fontSize: '2.5rem' }} />,
            color: '#FF6262',
          },
          {
            title: 'Total Questions',
            value: questionsAnswers?.length || 0,
            icon: <QuestionAnswerIcon sx={{ fontSize: '2.5rem' }} />,
            color: '#FF8C42',
          },
          {
            title: 'Easy Questions',
            value: EasyQuestionsTotal.length,
            icon: <SchoolIcon sx={{ fontSize: '2.5rem' }} />,
            color: '#4CAF50',
          },
          {
            title: 'Hard Questions',
            value: HardQuestionsTotal.length,
            icon: <AssignmentIcon sx={{ fontSize: '2.5rem' }} />,
            color: '#f55b49',
          },
        ].map((stat, index) => (
          <Col key={index} xs={12} md={6} lg={3} className="mb-4">
            <Card className="h-100" style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              boxShadow: '0 4px 14px rgba(255, 98, 98, 0.1)',
              animation: `slideUp ${0.6 + index * 0.1}s ease-out`,
              border: 'none',
            }}>
              <Card.Body className="p-4">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{
                    backgroundColor: `${stat.color}15`,
                    borderRadius: '12px',
                    padding: '12px',
                    marginRight: '12px',
                  }}>
                    {React.cloneElement(stat.icon, { style: { color: stat.color } })}
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    margin: 0,
                    color: '#666',
                    fontWeight: '500',
                  }}>{stat.title}</h3>
                </div>
                <h2 style={{
                  fontSize: '2.5rem',
                  color: stat.color,
                  margin: 0,
                  fontWeight: '600',
                }}>{stat.value}</h2>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* User Activity Section */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            boxShadow: '0 4px 14px rgba(255, 98, 98, 0.1)',
            animation: 'slideUp 0.8s ease-out',
            border: 'none',
          }}>
            <Card.Body className="p-4">
              <h3 style={{
                fontSize: '1.5rem',
                color: '#332C2C',
                marginBottom: '1.5rem',
                fontWeight: '600',
              }}>
                User Performance Overview
              </h3>
              <Row>
                <Col xs={12} md={4}>
                  <div style={{
                    backgroundColor: '#FFF5F5',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    marginBottom: '1rem',
                  }}>
                    <h4 style={{ color: '#FF6262', marginBottom: '0.5rem' }}>Average Completion Rate</h4>
                    <h2 style={{ color: '#332C2C', margin: 0 }}>
                      {Math.round((UserQuestionsAnswered?.length / questionsAnswers?.length) * 100) || 0}%
                    </h2>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{
                    backgroundColor: '#FFF5F5',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    marginBottom: '1rem',
                  }}>
                    <h4 style={{ color: '#FF6262', marginBottom: '0.5rem' }}>Questions Answered</h4>
                    <h2 style={{ color: '#332C2C', margin: 0 }}>
                      {UserQuestionsAnswered?.length || 0} / {questionsAnswers?.length || 0}
                    </h2>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div style={{
                    backgroundColor: '#FFF5F5',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    marginBottom: '1rem',
                  }}>
                    <h4 style={{ color: '#FF6262', marginBottom: '0.5rem' }}>User Satisfaction</h4>
                    <h2 style={{ color: '#332C2C', margin: 0 }}>
                      {surveyDataSatisfaction ? `${Math.round(surveyDataSatisfaction * 100)}%` : 'N/A'}
                    </h2>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Category Distribution */}
      <Row className="mt-4">
        <Col xs={12}>
          <Card style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            boxShadow: '0 4px 14px rgba(255, 98, 98, 0.1)',
            animation: 'slideUp 1s ease-out',
            border: 'none',
          }}>
            <Card.Body className="p-4">
              <h3 style={{
                fontSize: '1.5rem',
                color: '#332C2C',
                marginBottom: '1.5rem',
                fontWeight: '600',
              }}>
                Category Distribution
              </h3>
              <Row>
                {allCategories.map((category, index) => (
                  <Col key={index} xs={12} md={6} lg={4} className="mb-3">
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem',
                      backgroundColor: '#FFF5F5',
                      borderRadius: '12px',
                    }}>
                      <span style={{ color: '#666' }}>
                        {category !== "Chronic Obstructive Pulmonary Disease" ? category : "COPD"}
                      </span>
                      <span style={{ color: '#FF6262', fontWeight: '500' }}>
                        {progressBarRatio(category, true)}
                      </span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Stack>
  );
};

export default AdminDashboard; 