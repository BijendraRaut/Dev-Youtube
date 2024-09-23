

# YouTube Web App - README

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##  Overview

This project is a YouTube web app built using **React** and **Tailwind CSS**, providing users with features like searching for videos, viewing video details, fetching comments, suggested videos, live comments, and more. The app integrates seamlessly with the **YouTube API** to deliver real-time data and smooth user experiences.

## Features

- **Search Bar:** Allows users to search for videos using keywords and get relevant video results.
- **Video Player:** Plays selected videos with essential controls like play, pause, and fullscreen.
- **Comments Section:** Displays comments for each video fetched using the YouTube API.
- **Live Comments:** Real-time live comment feed for live-streaming videos.
- **Suggested Videos:** Displays a list of related or suggested videos.
- **Responsive Design:** Optimized for different screen sizes using Tailwind CSS.


## Tech Stack
- **React:** Used for building the user interface and handling component-based architecture.
- **Tailwind CSS:** For designing a responsive and aesthetically pleasing UI.
- **YouTube API:** To fetch video data, comments, and other relevant information.

  
## Getting Started
### Prerequisites

To run this project locally, you'll need the following:

- **Node.js** (v12 or above)
- **npm** or **yarn**
![image](https://github.com/user-attachments/assets/991501a1-d2b5-4ec7-990a-a19ed94ba997)


### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/BijendraRaut/Dev-Youtube.git

2. **Navigate to the project folder:**
   
    ```bash
    cd youtube-web-app

3. **Install Dependencies**
   
    ```bash
    npm install
    
4. **Set up YouTube API key:**

- Go to the [Google Developers Console].
- Create a new project and enable the YouTube Data API v3.
- Obtain an API key.
- Create a .env file in the project root and add the API key like this:
  ```makefile
  REACT_APP_YOUTUBE_API_KEY=your_api_key_here

5. **Run The App**
    ```bash
    npm start
## API Integration
- **YouTube API** is integrated using the Axios library to make HTTP requests. The API calls are handled in a separate utility file (`youtubeAPI.js`) to keep the code modular and clean.
- API responses are parsed and displayed in the respective components like video data, comments, and suggested videos.

## Styling
All the styling is done using Tailwind CSS, a utility-first CSS framework that allows for rapid and responsive design. Custom styles can be added using `@apply` or inline class attributes.

## Key Components

- **Search Bar:** Handles user input and sends requests to the YouTube API for video search.
- **Video Player:** Renders the selected video along with playback controls.
- **Comments Section:** Fetches and displays video comments from the YouTube API.
- **Suggested Videos:** Displays a list of recommended videos based on the current video.
- **Live Comments:** Provides a live feed of comments for live-streamed videos.


## Future Improvements

- **Authentication:** Integrate user login to save video history or likes.
- **Video Upload:** Add functionality to upload videos via the YouTube API.
- **Dark Mode:** Add a toggle for light/dark themes.

## Conclusion

This project demonstrates how to use React and Tailwind CSS to create a responsive and functional YouTube web app, integrating the YouTube API for real-time data. Feel free to contribute, modify, or use this as a learning resource!
