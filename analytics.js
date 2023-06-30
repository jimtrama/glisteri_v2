const fs = require('fs');

function countUniqueIPs(filePath) {
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const lines = fileData.split('\n');
    const data = {};
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        // Extract the IP address from each line
        const date = line.split(' ')[1];
        const ipAddress = line.split(' ')[4];
        if(data.hasOwnProperty(date)){
            let exists = false;
            for ( let ip of data[date].values ){
                if (ip == ipAddress){
                    exists = true;
                    break;
                }
            }
            if(!exists){
                data[date].add(ipAddress);
            }
        
        }else{
            data[date] = new Set();
        }
    }
    for(let date in data){
        console.log(date + " : "+data[date].size());
    }

  } catch (error) {
    console.error('Error reading file:', error);
    return 0;
  }
}

// Replace 'path/to/logfile.log' with the actual path to your log file
const logFilePath = './out.log';

const uniqueIPCount = countUniqueIPs(logFilePath);
console.log('Unique IP count:', uniqueIPCount);
