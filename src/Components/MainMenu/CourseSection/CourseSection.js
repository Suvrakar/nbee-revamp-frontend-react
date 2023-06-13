import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const CourseHubContentPage = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {selectedContent && (
            <div style={{ paddingTop: '56.25%', position: 'relative' }}>
              <iframe
                src={selectedContent.videoUrl}
                style={{
                  border: 0,
                  maxWidth: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                }}
                allowFullScreen={true}
                allow="encrypted-media"
              ></iframe>
            </div>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="content-list">
            <Card
              onClick={() =>
                handleClick({
                  videoUrl: 'https://player.vdocipher.com/v2/?otp=20160313versASE323AArAHrhp8qk0G4GlhKAIOCAEmf9eZqt4GvU3c4Kv5Nnfjk&playbackInfo=eyJ2aWRlb0lkIjoiNDg5MmNkYjFiYTMzMmNjZDdiZDcxOTBiNmY2NTQ0MmQifQ==',
                })
              }
              style={{
                marginBottom: '10px',
                cursor: 'pointer',
                backgroundColor:
                  selectedContent && selectedContent.videoUrl === 'https://player.vdocipher.com/v2/?otp=20160313versASE323AArAHrhp8qk0G4GlhKAIOCAEmf9eZqt4GvU3c4Kv5Nnfjk&playbackInfo=eyJ2aWRlb0lkIjoiNDg5MmNkYjFiYTMzMmNjZDdiZDcxOTBiNmY2NTQ0MmQifQ=='
                    ? 'lightgray'
                    : 'white',
              }}
            >
              <CardContent>
                <Typography variant="h6">Content 1</Typography>
                <Typography variant="body2">Description of Content 1</Typography>
              </CardContent>
            </Card>

            <Card
              onClick={() =>
                handleClick({
                  videoUrl: 'https://player.vdocipher.com/v2/?otp=20160313versASE323mYVYPbBjOaLOGF1GzWvkxCrUbwDPck5U48bdVYNvIvEsQb&playbackInfo=eyJ2aWRlb0lkIjoiM2NmOTBkMGQ1MmZlNDkzZDhjZWI1NTVhNjY0NTU3N2UifQ==',
                })
              }
              style={{
                marginBottom: '10px',
                cursor: 'pointer',
                backgroundColor:
                  selectedContent && selectedContent.videoUrl === 'https://player.vdocipher.com/v2/?otp=20160313versASE323mYVYPbBjOaLOGF1GzWvkxCrUbwDPck5U48bdVYNvIvEsQb&playbackInfo=eyJ2aWRlb0lkIjoiM2NmOTBkMGQ1MmZlNDkzZDhjZWI1NTVhNjY0NTU3N2UifQ=='
                    ? 'lightgray'
                    : 'white',
              }}
            >
              <CardContent>
                <Typography variant="h6">Content 2</Typography>
                <Typography variant="body2">Description of Content 2</Typography>
              </CardContent>
            </Card>

            <Card
              onClick={() =>
                handleClick({
                  videoUrl: 'https://player.vdocipher.com/v2/?otp=20160313versASE323AArAHrhp8qk0G4GlhKAIOCAEmf9eZqt4GvU3c4Kv5Nnfjk&playbackInfo=eyJ2aWRlb0lkIjoiNDg5MmNkYjFiYTMzMmNjZDdiZDcxOTBiNmY2NTQ0MmQifQ==',
                })
              }
              style={{
                marginBottom: '10px',
                cursor: 'pointer',
                backgroundColor:
                  selectedContent && selectedContent.videoUrl === 'https://player.vdocipher.com/v2/?otp=20160313versASE323AArAHrhp8qk0G4GlhKAIOCAEmf9eZqt4GvU3c4Kv5Nnfjk&playbackInfo=eyJ2aWRlb0lkIjoiNDg5MmNkYjFiYTMzMmNjZDdiZDcxOTBiNmY2NTQ0MmQifQ=='
                    ? 'lightgray'
                    : 'white',
              }}
            >
              <CardContent>
                <Typography variant="h6">Content 3</Typography>
                <Typography variant="body2">Description of Content 3</Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CourseHubContentPage;
