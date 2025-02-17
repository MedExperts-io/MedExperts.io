import React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuizIcon from "@mui/icons-material/Quiz";
import { Button } from "react-bootstrap/";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SortIcon from "@mui/icons-material/Sort";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import TimelineIcon from "@mui/icons-material/Timeline";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const MainLandingPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.me.id);
  const navigate = useNavigate();

  return (
    <Grid container direction="column">
      {/* Hero Section */}
      <Grid
        container
        sx={{
          minHeight: '90vh',
          background: 'linear-gradient(135deg, #FFF5F5 0%, #FFF 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated background elements */}
        {[...Array(5)].map((_, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: 'radial-gradient(circle, rgba(255,98,98,0.05) 0%, rgba(255,98,98,0) 70%)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              animation: `pulse${index} ${4 + index}s ease-in-out infinite alternate`,
              '@keyframes pulse${index}': {
                '0%': { transform: 'translate(-50%, -50%) scale(1)' },
                '100%': { transform: 'translate(-50%, -50%) scale(1.2)' },
              },
            }}
          />
        ))}

        {/* Main content */}
        <Grid
          container
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: { xs: '2rem', md: '4rem 2rem' },
            position: 'relative',
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* Animated badge */}
            <Box sx={{
              display: 'inline-flex',
              backgroundColor: '#FFF0F0',
              color: '#FF6262',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              fontWeight: '500',
              animation: 'slideDown 0.6s ease-out',
              '@keyframes slideDown': {
                from: { transform: 'translateY(-20px)', opacity: 0 },
                to: { transform: 'translateY(0)', opacity: 1 },
              },
            }}>
              The Ultimate Medical Learning Platform
            </Box>
            
            {/* Animated heading */}
            <h1 style={{ 
              fontSize: '4rem', 
              marginBottom: '1.5rem',
              fontWeight: '800',
              color: '#332C2C',
              lineHeight: '1.2',
              animation: 'fadeIn 0.8s ease-out',
            }}>
              Master Pulmonary Medicine
              <span style={{ 
                display: 'block', 
                color: '#FF6262',
                marginTop: '0.5rem',
                fontSize: '3.5rem',
                animation: 'slideUp 0.8s ease-out',
              }}>
                With Confidence
              </span>
            </h1>

            {/* Animated description */}
            <p style={{ 
              fontSize: '1.3rem', 
              lineHeight: '1.6', 
              marginBottom: '2.5rem',
              color: '#666',
              maxWidth: '700px',
              animation: 'fadeIn 1s ease-out',
            }}>
              Join thousands of medical professionals enhancing their knowledge through 
              expert-curated questions and comprehensive explanations.
            </p>

            {/* Animated buttons */}
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2}
              sx={{ 
                animation: 'slideUp 1.2s ease-out',
              }}
            >
              <Button
                variant="contained"
                size="lg"
                onClick={() => navigate('/signup')}
                style={{
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  backgroundColor: '#FF6262',
                  color: 'white',
                  border: 'none',
                  boxShadow: '0 4px 14px rgba(255, 98, 98, 0.25)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 98, 98, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 98, 98, 0.25)';
                }}
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/about')}
                style={{
                  padding: '15px 40px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  backgroundColor: 'transparent',
                  color: '#FF6262',
                  border: '2px solid #FF6262',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 98, 98, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Learn More
              </Button>
            </Stack>

            {/* Animated stats */}
            <Box sx={{ 
              display: 'flex',
              gap: '3rem',
              marginTop: '4rem',
              justifyContent: 'center',
              animation: 'slideUp 1.4s ease-out',
            }}>
              {[
                { number: '240+', label: 'Expert Questions' },
                { number: '15+', label: 'Categories' },
                { number: '1000+', label: 'Active Users' },
              ].map((stat, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    textAlign: 'center',
                    animation: `fadeIn ${1.6 + index * 0.2}s ease-out`,
                  }}
                >
                  <div style={{ 
                    fontSize: '2.2rem', 
                    fontWeight: '700',
                    color: '#FF6262',
                    marginBottom: '0.2rem',
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ 
                    fontSize: '1rem',
                    color: '#666',
                  }}>
                    {stat.label}
                  </div>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Vision Section */}
      <Box sx={{ 
        padding: '100px 5%',
        background: 'linear-gradient(135deg, #FFF5F5 0%, #FFF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Animated background elements */}
        {[...Array(4)].map((_, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: 'radial-gradient(circle, rgba(255,98,98,0.05) 0%, rgba(255,98,98,0) 70%)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              animation: `pulse${index} ${4 + index}s ease-in-out infinite alternate`,
              '@keyframes pulse${index}': {
                '0%': { transform: 'translate(-50%, -50%) scale(1)' },
                '100%': { transform: 'translate(-50%, -50%) scale(1.2)' },
              },
            }}
          />
        ))}
        
        <Grid container spacing={8} alignItems="center" sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              position: 'relative',
              animation: 'slideUp 0.8s ease-out',
            }}>
              {/* Vision Badge */}
              <Box sx={{
                display: 'inline-flex',
                backgroundColor: '#FFF0F0',
                color: '#FF6262',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                fontWeight: '500',
              }}>
                Our Vision
              </Box>

              <h2 style={{ 
                fontSize: '3.2rem', 
                marginBottom: '1.5rem',
                color: '#332C2C',
                fontWeight: '700',
                lineHeight: '1.2',
              }}>
                Transforming Medical Education
                <span style={{ 
                  display: 'block',
                  color: '#FF6262',
                  fontSize: '2.8rem',
                  marginTop: '0.5rem',
                }}>
                  Through Technology
                </span>
              </h2>

              <p style={{ 
                fontSize: '1.2rem', 
                lineHeight: '1.8',
                color: '#666',
                marginBottom: '3rem',
              }}>
                We believe in empowering medical professionals with innovative tools and 
                comprehensive resources to excel in their field and deliver better patient care.
              </p>

              <Grid container spacing={4}>
                {[
                  { 
                    icon: <SchoolIcon sx={{ fontSize: '2rem' }} />, 
                    title: 'Continuous Learning',
                    description: 'Adaptive learning paths that evolve with your progress'
                  },
                  { 
                    icon: <TimelineIcon sx={{ fontSize: '2rem' }} />, 
                    title: 'Progress Tracking',
                    description: 'Detailed analytics to monitor your improvement'
                  },
                  { 
                    icon: <LightbulbIcon sx={{ fontSize: '2rem' }} />, 
                    title: 'Knowledge Mastery',
                    description: 'Comprehensive coverage of pulmonary medicine'
                  },
                ].map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <Box sx={{ 
                      display: 'flex', 
                      gap: '1.5rem',
                      padding: '1.5rem',
                      backgroundColor: 'white',
                      borderRadius: '16px',
                      boxShadow: '0 4px 14px rgba(255, 98, 98, 0.1)',
                      transition: 'all 0.3s ease',
                      animation: `slideUp ${0.8 + index * 0.2}s ease-out`,
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 6px 20px rgba(255, 98, 98, 0.15)',
                      }
                    }}>
                      <div style={{ 
                        color: '#FF6262',
                        backgroundColor: '#FFF0F0',
                        padding: '15px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 style={{ 
                          fontSize: '1.3rem',
                          fontWeight: '600',
                          color: '#332C2C',
                          marginBottom: '0.5rem',
                        }}>
                          {item.title}
                        </h3>
                        <p style={{
                          fontSize: '1.1rem',
                          color: '#666',
                          lineHeight: '1.5',
                          margin: 0,
                        }}>
                          {item.description}
                        </p>
                      </div>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'center',
              animation: 'fadeIn 1s ease-out',
            }}>
              <Box sx={{
                padding: '3rem',
                backgroundColor: '#FF6262',
                color: 'white',
                borderRadius: '24px',
                width: '100%',
                maxWidth: '500px',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(255, 98, 98, 0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                }} />
                
                <h3 style={{
                  fontSize: '2rem',
                  marginBottom: '1.5rem',
                  fontWeight: '600',
                }}>
                  Join Our Community
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  marginBottom: '2rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)',
                }}>
                  Be part of a growing community of medical professionals dedicated to excellence.
                </p>
                <Button
                  variant="light"
                  onClick={() => navigate('/signup')}
                  style={{
                    padding: '15px 40px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    backgroundColor: 'white',
                    color: '#FF6262',
                    border: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Features Section */}
      <Box sx={{ 
        padding: '100px 5%',
        background: 'linear-gradient(135deg, #FFF 0%, #FFF5F5 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Animated background elements */}
        {[...Array(4)].map((_, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: 'radial-gradient(circle, rgba(255,98,98,0.05) 0%, rgba(255,98,98,0) 70%)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              animation: `pulse${index} ${4 + index}s ease-in-out infinite alternate`,
            }}
          />
        ))}

        <Box sx={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          {/* Section Header */}
          <Box sx={{
            display: 'inline-flex',
            backgroundColor: '#FFF0F0',
            color: '#FF6262',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            animation: 'slideDown 0.6s ease-out',
          }}>
            Powerful Features
          </Box>

          <h2 style={{ 
            fontSize: '3.2rem', 
            marginBottom: '1rem',
            color: '#332C2C',
            fontWeight: '700',
            animation: 'fadeIn 0.8s ease-out',
          }}>
            Everything You Need to Excel
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto 4rem',
            animation: 'fadeIn 1s ease-out',
          }}>
            Comprehensive tools and resources designed specifically for medical professionals
          </p>

          {/* Features Grid */}
          <Grid container spacing={4}>
            {[
              { 
                icon: <QuestionAnswerIcon sx={{ fontSize: '2.5rem' }} />,
                title: 'Expert-Curated Questions',
                description: 'Access a vast library of carefully selected questions with detailed explanations',
                color: '#FF6262',
              },
              { 
                icon: <CategoryIcon sx={{ fontSize: '2.5rem' }} />,
                title: 'Specialized Categories',
                description: 'Focus your study with organized topics covering all aspects of pulmonary medicine',
                color: '#FF8C42',
              },
              { 
                icon: <DashboardIcon sx={{ fontSize: '2.5rem' }} />,
                title: 'Performance Analytics',
                description: 'Track your progress with detailed insights and personalized recommendations',
                color: '#FF6B6B',
              },
              { 
                icon: <Diversity1Icon sx={{ fontSize: '2.5rem' }} />,
                title: 'Adaptive Learning',
                description: 'Experience a learning journey that adapts to your knowledge level and goals',
                color: '#FF7676',
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ 
                  backgroundColor: 'white',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  height: '100%',
                  textAlign: 'left',
                  boxShadow: '0 4px 14px rgba(255, 98, 98, 0.1)',
                  transition: 'all 0.3s ease',
                  animation: `slideUp ${0.6 + index * 0.2}s ease-out`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(255, 98, 98, 0.15)',
                  }
                }}>
                  <Box sx={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    backgroundColor: '#FFF0F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    color: feature.color,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'rotate(5deg)',
                    }
                  }}>
                    {feature.icon}
                  </Box>
                  
                  <h3 style={{ 
                    fontSize: '1.5rem',
                    color: '#332C2C',
                    marginBottom: '1rem',
                    fontWeight: '600',
                  }}>
                    {feature.title}
                  </h3>
                  
                  <p style={{ 
                    fontSize: '1.1rem',
                    color: '#666',
                    lineHeight: '1.6',
                    margin: 0,
                  }}>
                    {feature.description}
                  </p>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{
        padding: '80px 5%',
        backgroundColor: '#FF6262',
        color: 'white',
        textAlign: 'center',
      }}>
        <h2 style={{ 
          fontSize: '2.8rem',
          marginBottom: '1.5rem',
          fontWeight: '700',
        }}>
          Ready to Start Your Journey?
        </h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          color: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '700px',
          margin: '0 auto 2rem',
        }}>
          Join thousands of medical professionals who are already improving their 
          knowledge with MedExperts.
        </p>
        <Button
          variant="light"
          size="lg"
          onClick={() => navigate('/signup')}
          style={{
            padding: '15px 40px',
            fontSize: '1.1rem',
            fontWeight: '600',
            backgroundColor: 'white',
            color: '#FF6262',
          }}
        >
          Get Started Now
        </Button>
      </Box>

      {/* Add global keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </Grid>
  );
};

export default MainLandingPage;
