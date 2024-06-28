# AnalogVods

# Streamer VOD Analysis App

This application allows users to search for streamers and display their past VODs. When a user clicks on a VOD, the app connects to the Twitch API to retrieve all the messages for that VOD. The app then performs analysis and provides statistics such as the most active users, most used emotes, etc.

## todo

- [x] Set up the AnalogJs workspace
- [ ] Deploy the application
- [ ] Initialize basic layout (Spartan-ui)
- [ ] Setup CI/CD
- [ ] Integrate Twitch API for retrieving streamers and VODs
- [ ] Develop search functionality for streamers
- [ ] Display list of past VODs for selected streamers
- [ ] Fetch and display messages for selected VODs
- [ ] Analyze messages to provide statistics (e.g., most active users, most used emotes)
- [ ] Design and implement user interface
- [ ] Set up CI/CD pipelines (if required)
- [ ] Write tests for client and server applications

## Technologies Used

- AnalogJS
- Trpc
- ... (idk yet)

## Installation

Clone the repository and install the dependencies:

```bash
git clone ...
pnpm i
```

## Running the App

To start the application:

```bash
npx nx serve
```
