import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";

const EnrolledCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const handleEnroll = (courseId) => {
    // Handle enrollment logic here
    console.log("Enroll in course:", courseId);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Enrolled Course(s)
      </Typography>
      <div>
        {courses.map((course) => (
          <Card key={course.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {course.title}
              </Typography>
              <Typography variant="body1">{course.description}</Typography>
              <Link to="/course">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEnroll(course.id)}
                  sx={{ marginTop: 2 }}
                >
                  Start Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default EnrolledCourses;
