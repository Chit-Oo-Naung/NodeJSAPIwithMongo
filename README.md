#Installation Guide

1. Install Node.js and npm with this command
	sudo apt update
	sudo apt install nodejs npm -y
    - Verify installation
	node —version
	npm —version

2. Get Project from GitHub https://github.com/Chit-Oo-Naung/NodeJSAPIwithMongo.git

3. OpenProject and install node_modules
    npm install

4. Check the env for Atlas MongoDB
    MONGODB_URI='mongodb+srv://...'
    PORT=4231

5. Run the server with this command
    npm run start 

6. Test the base endpoint
    http://localhost:4231