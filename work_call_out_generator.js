//Work Call Out Generator//
//Randomly generate an excuse to send to your boss!//

//Function to generate a random greeting based on message tone preference
//Input boss's name and desired tone (respectful || disrespectful || cringe)
const generateGreeting = (bossName = 'Mr(s). Boss', messageTone = 'respectful') => {
    const messageChoice = Math.floor(Math.random() * 5); //generates random number from 0-4
    if (messageTone === 'respectful') {
        switch (messageChoice) {
            case 0: 
                greeting = `resgreeting1, ${bossName}`;
                break;
            case 1:
                greeting = `resgreeting2, ${bossName}`;
                break;
            case 2:
                greeting = `resgreeting3, ${bossName}`;
                break;
            case 3:
                greeting = `resgreeting4, ${bossName}`;
                break;
            case 4:
                greeting = `resgreeting5, ${bossName}`;
                break;
            default:
                greeting = 'default';
        } 
    } else if (messageTone === 'disrespectful') {
        switch (messageChoice) {
            case 0: 
                greeting = `disgreeting1, ${bossName}`;
                break;
            case 1:
                greeting = `disgreeting2, ${bossName}`;
                break;
            case 2:
                greeting = `disgreeting3, ${bossName}`;
                break;
            case 3:
                greeting = `disgreeting4, ${bossName}`;
                break;
            case 4:
                greeting = `disgreeting5, ${bossName}`;
                break;
            default:
                greeting = 'default';
        } 
    } else if (messageTone === 'cringe'){
        switch (messageChoice) {
            case 0: 
                greeting = `cringegreeting1, ${bossName}`;
                break;
            case 1:
                greeting = `cringegreeting2, ${bossName}`;
                break;
            case 2:
                greeting = `cringegreeting3, ${bossName}`;
                break;
            case 3:
                greeting = `cringegreeting4, ${bossName}`;
                break;
            case 4:
                greeting = `cringegreeting5, ${bossName}`;
                break;
            default:
                greeting = 'default';
        }
    }
    return greeting;
};








//Tests...//
console.log('\n\n*****************\n**********Testing...\n');
console.log(generateGreeting('Mr. Guy', 'disrespectful')); //expects Mr. Guy and random disrespectul greeting
console.log(generateGreeting()); //expects Mr(s). Boss and random respectful greeting
console.log(generateGreeting('Mrs. Smith')); //expects Mrs. Smith and random respectful greeting
console.log(generateGreeting('Capt. Blub', 'cringe')); //expects Capt. Bulb and random cringe greeting