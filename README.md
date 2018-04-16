# simpleapi
- Usage
  - npm install forever -g
  - forever start /nodeapp/index.js
  - forever restart /nodeapp/index.js
  - forever stop /nodeapp/index.js
  - forever list
- Kill Process
 - You can stop the process using the kill command as well:
 - First you need to know which process ID to kill, list all the process running node by running:

- ps axl | grep node

-The second column of your result is probably the PID, take that number and run the command below:

- kill -9 [PID]
