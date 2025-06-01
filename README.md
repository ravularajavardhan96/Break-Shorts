# YouTube Shorts Redirector

A simple Chrome extension that automatically redirects YouTube Shorts URLs (`youtube.com/shorts/`) to the normal YouTube video URLs (`youtube.com/watch?v=`). This helps reduce endless scrolling through Shorts and lets you watch videos with full stats and sound.

---

## Features

- Redirect YouTube Shorts URLs to normal video URLs.
- Keeps daily count of redirects using Chrome storage.
- Lightweight and easy to use.

---

## Installation

### From GitHub (Manual installation)

1. **Clone or Download the repository**

   ```bash
   git clone https://github.com/your-username/Break-Shorts.git
   
2. **Open Chrome Extensions page**

 &nbsp; &nbsp; &nbsp; &nbsp;Open Chrome and go to chrome://extensions/

  &nbsp; &nbsp; &nbsp; &nbsp; Alternatively, click on the Chrome menu (three dots) > More Tools > Extensions.

3.**Enable Developer Mode**

   &nbsp; &nbsp; &nbsp; &nbsp; Toggle the Developer mode switch on the top right corner.

4.**Load unpacked extension**

   &nbsp; &nbsp; &nbsp; &nbsp; Click on Load unpacked and select the folder where you cloned or extracted the repository.


5.**Extension is now installed**

   &nbsp; &nbsp; &nbsp; &nbsp; You should see YouTube Shorts Redirector in your extensions list.
   
## Usage

- Browse YouTube normally.

- When you open a Shorts URL like https://www.youtube.com/shorts/VIDEO_ID, the extension automatically redirects you to the standard video page https://www.youtube.com/watch?v=VIDEO_ID.

## Permissions

This extension uses the following permissions:

- "storage": To save and track the number of redirects per day.

- "tabs": To detect URL changes and perform redirection.

- "webNavigation": To monitor navigation events related to YouTube URLs.

- "host_permissions": Access to https://www.youtube.com/* URLs to detect Shorts and redirect.


## How it works
- Listens for tab updates to detect when a YouTube Shorts URL loads.

- Extracts the video ID from the Shorts URL.

- Redirects the tab to the normal video URL with full video stats and sound.

- Tracks the number of redirects each day using Chrome local storage.

## Credits
- Idea inspired by my own struggle to reduce mindless scrolling on YouTube Shorts.

- Developed with help from ChatGPT.

 ## License
- This project is open source and free to use.

## Contributing
- Feel free to open issues or submit pull requests to improve the extension.

## Contact
- For any questions or feedback, reach out to me on LinkedIn.



### Thank you for checking out YouTube Shorts Redirector!
