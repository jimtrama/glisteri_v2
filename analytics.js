const { log } = require('console');
const fs = require('fs');

function countUniqueIPs(filePath) {
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const lines = fileData.split('\n');
    const data = {};
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        // Extract the IP address from each line
        
        const vals = line.split(" ");
        
        
        let date = "";
        let ipAddress = null;
        for (let val of vals){
            if(val.includes("/") && date == ""){date = val};
            if(val.includes(".")&&date != ""&&!val.includes("μ")) {
                ipAddress = val;
                break;
            }
        }
        
        
        if(data.hasOwnProperty(date)){
            let exists = false;
            
            for ( let ip of data[date] ){
                if (ip == ipAddress){
                    exists = true;
                    break;
                }
            }
            if(!exists){
                data[date].push(ipAddress);
            }
        
        }else if(date != ""){
            data[date] = [];
            
        }
    }
    for(let date in data){

        console.log(date + " : "+data[date].length);
    }

  } catch (error) {
    console.error('Error reading file:', error);
    return 0;
  }
}

// Replace 'path/to/logfile.log' with the actual path to your log file
const logFilePath = './out.log';

const uniqueIPCount = countUniqueIPs(logFilePath);

