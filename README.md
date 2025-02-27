#Installation Guide

1. Install Node.js and npm with this command
	sudo apt update
	sudo apt install nodejs npm -y
	- Verify installation
		- node —version
		- npm —version

3. Get Project from GitHub https://github.com/Chit-Oo-Naung/NodeJSAPIwithMongo.git

4. OpenProject and install node_modules
    npm install

5. Check the env for Atlas MongoDB
    - MONGODB_URI='mongodb+srv://...'
    - PORT=4231

6. Run the server with this command
    npm run start 

7. Test the base endpoint
    http://localhost:4231
