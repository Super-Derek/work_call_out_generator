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

//Function to generate a random body message based on message tone preference
//Input desired tone (professional || unprofessional || weird)
const generateBody = (messageTone = 'professional') => {
    const messageChoice = Math.floor(Math.random() * 5); //generates random number from 0-4
    if (messageTone === 'professional') {
        switch (messageChoice) {
            case 0: 
                body = `probody1`;
                break;
            case 1:
                body = `probody2`;
                break;
            case 2:
                body = `probody3`;
                break;
            case 3:
                body = `probody4`;
                break;
            case 4:
                body = `probody5`;
                break;
            default:
                body = 'default';
        } 
    } else if (messageTone === 'unprofessional') {
        switch (messageChoice) {
            case 0: 
                body = `unprobody1`;
                break;
            case 1:
                body = `unprobody2`;
                break;
            case 2:
                body = `unprobody3`;
                break;
            case 3:
                body = `unprobody4`;
                break;
            case 4:
                body = `unprobody5`;
                break;
            default:
                body = 'default';
        } 
    } else if (messageTone === 'weird'){
        switch (messageChoice) {
            case 0: 
                body = `weirdbody1`;
                break;
            case 1:
                body = `weirdbody2`;
                break;
            case 2:
                body = `weirdbody3`;
                break;
            case 3:
                body = `weirdbody4`;
                break;
            case 4:
                body = `weirdbody5`;
                break;
            default:
                body = 'default';
        }
    }
    return body;
};

//Function to generate a random closing message based on message tone preference
//Input desired tone (sincere || rude || nonsense) and userName
const generateClosing = (userName = 'Your Devoted Employee', messageTone = 'sincere') => {
    const messageChoice = Math.floor(Math.random() * 5); //generates random number from 0-4
    if (messageTone === 'sincere') {
        switch (messageChoice) {
            case 0: 
                closing = `sincereclosing1 ${userName}`;
                break;
            case 1:
                closing = `sincereclosing2 ${userName}`;
                break;
            case 2:
                closing = `sincereclosing3 ${userName}`;
                break;
            case 3:
                closing = `sincereclosing4 ${userName}`;
                break;
            case 4:
                closing = `sincereclosing5 ${userName}`;
                break;
            default:
                closing = 'default';
        } 
    } else if (messageTone === 'rude') {
        switch (messageChoice) {
            case 0: 
                closing = `rudeclosing1 ${userName}`;
                break;
            case 1:
                closing = `rudeclosing2 ${userName}`;
                break;
            case 2:
                closing = `rudeclosing3 ${userName}`;
                break;
            case 3:
                closing = `rudeclosing4 ${userName}`;
                break;
            case 4:
                closing = `rudeclosing5 ${userName}`;
                break;
            default:
                closing = 'default';
        } 
    } else if (messageTone === 'nonsense'){
        switch (messageChoice) {
            case 0: 
                closing = `nonclosing1 ${userName}`;
                break;
            case 1:
                closing = `nonclosing2 ${userName}`;
                break;
            case 2:
                closing = `nonclosing3 ${userName}`;
                break;
            case 3:
                closing = `nonclosing4 ${userName}`;
                break;
            case 4:
                closing = `nonclosing5 ${userName}`;
                break;
            default:
                closing = 'default';
        }
    }
    return closing;
};






//Tests...//
console.log('\n\n*****************\n**********Testing...\n');
console.log(generateGreeting('Mr. Guy', 'disrespectful')); //expects Mr. Guy and random disrespectul greeting
console.log(generateGreeting()); //expects Mr(s). Boss and random respectful greeting
console.log(generateGreeting('Mrs. Smith')); //expects Mrs. Smith and random respectful greeting
console.log(generateGreeting('Capt. Blub', 'cringe')); //expects Capt. Bulb and random cringe greeting
console.log(generateBody()); //expects rand pro body
console.log(generateBody('professional')); //expects random pro body
console.log(generateBody('unprofessional')); //expects rand unpro body
console.log(generateBody('weird')); //expects rand weird body
console.log(generateClosing()); //expects rand sincere closing Your Devoted Employee
console.log(generateClosing('Doug E. Fresh')); //expects rand sincere closing Doug E. Fresh
console.log(generateClosing('Spaceman', 'rude')); //expects rand rude closing Spaceman
console.log(generateClosing('Sally Face', 'nonsense')); //expects rand nonsense closing Sally Face