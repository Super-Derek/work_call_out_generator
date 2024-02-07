//Work Call Out Generator//
//Randomly generate an excuse to send to your boss!//

//Function to generate a random greeting based on message tone preference
//Input boss's name and desired tone (respectful || disrespectful || cringe)
const generateGreeting = (bossName = 'Mr(s). Boss', messageTone = 'respectful') => {
    const messageChoice = Math.floor(Math.random() * 5); //generates random number from 0-4
    if (messageTone === 'respectful') {
        switch (messageChoice) {
            case 0: 
                greeting = `Dear ${bossName},`;
                break;
            case 1:
                greeting = `Hello ${bossName},`;
                break;
            case 2:
                greeting = `Greetings to you ${bossName},`;
                break;
            case 3:
                greeting = `Good day ${bossName},`;
                break;
            case 4:
                greeting = `Aloha ${bossName},`;
                break;
            default:
                greeting = 'Hello There,';
        } 
    } else if (messageTone === 'disrespectful') {
        switch (messageChoice) {
            case 0: 
                greeting = `Wussup ${bossName}-face,`;
                break;
            case 1:
                greeting = `Yo yo ${bossName}-aroni,`;
                break;
            case 2:
                greeting = `${bossName} My Dude,`;
                break;
            case 3:
                greeting = `${bossName} Bruh,`;
                break;
            case 4:
                greeting = `Bossy Mc${bossName},`;
                break;
            default:
                greeting = 'Sup?';
        } 
    } else if (messageTone === 'cringe'){
        switch (messageChoice) {
            case 0: 
                greeting = `Gweetins and Salutashins ${bossName},`;
                break;
            case 1:
                greeting = `OMG HiHi ${bossName},`;
                break;
            case 2:
                greeting = `uwu ${bossName},`;
                break;
            case 3:
                greeting = `dEaRe$t LeAdeRrr ${bossName}!!!!!111!`;
                break;
            case 4:
                greeting = `Ohai ${bossName},`;
                break;
            default:
                greeting = 'Howdy Partner,';
        }
    } else {
        greeting = "Please submit a greeting tone of respectful, disrespectful, or cringe."
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
                body = `I regret to inform you that I will be absent today due to personal matters.`;
                break;
            case 1:
                body = `An unexpected issue will prevent me from arriving today. I appologize for any inconvenience.`;
                break;
            case 2:
                body = `I am unfortunately ill today and therefore unable to go into work. I'll update you when I can return and let you know my plan to catch up on any missed business.`;
                break;
            case 3:
                body = `I will not make it into work today. I look forward to returning tomorrow.`;
                break;
            case 4:
                body = `I must request the day off and will make up any lost work upon my return.`;
                break;
            default:
                body = 'I will be absent from work today.';
        } 
    } else if (messageTone === 'unprofessional') {
        switch (messageChoice) {
            case 0: 
                body = `I'm taking the day off. Got shit to do.`;
                break;
            case 1:
                body = `Am I sick? Hungover? Just not feeling it? All I know is I'm staying home today.`;
                break;
            case 2:
                body = `Woke up and said nope. See you tomorrow... maybe.`;
                break;
            case 3:
                body = `Whatever is going around- that's what I got. Don't ask me for a doctor's note.`;
                break;
            case 4:
                body = `Spending the day applying to other jobs. Might be in tomorrow.`;
                break;
            default:
                body = `I'm staying in bed today.`;
        } 
    } else if (messageTone === 'weird'){
        switch (messageChoice) {
            case 0: 
                body = `So, this is awkward, but the ghost of my third grade teacher told me not to go into work today. I'll announce my return after my consult with the exorcist.`;
                break;
            case 1:
                body = `I had some stuff come out of me that I'm pretty sure never went into me, so I think I have to stay home and monitor the situation.`;
                break;
            case 2:
                body = `I won't be at work today. I also won't be home. If anyone asks about me, you don't know anything. 7-16-42-3.`;
                break;
            case 3:
                body = `I pulled a real bad Tarot card this morning. REAL bad. I'm staying in bed.`;
                break;
            case 4:
                body = `The black crows cry out our unspoken desires. For me, they cry STAY HOME. Caw!`;
                break;
            default:
                body = 'Time is an illusion. Today does not exist for me.';
        }
    } else {
        body = "Please submit a body tone of professional, unprofessional, or weird."
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
                closing = `Sincerely,\n ${userName}`;
                break;
            case 1:
                closing = `Kind Regards,\n ${userName}`;
                break;
            case 2:
                closing = `Have a Good Day,\n ${userName}`;
                break;
            case 3:
                closing = `Thank You,\n ${userName}`;
                break;
            case 4:
                closing = `Take Care,\n ${userName}`;
                break;
            default:
                closing = 'Regards';
        } 
    } else if (messageTone === 'rude') {
        switch (messageChoice) {
            case 0: 
                closing = `Peace Out,\n ${userName}`;
                break;
            case 1:
                closing = `See Ya!\n ${userName}, The Real Boss`;
                break;
            case 2:
                closing = `Don't Call Me,\n ${userName}`;
                break;
            case 3:
                closing = `Piss Off,\n ${userName}`;
                break;
            case 4:
                closing = `K.\n ${userName} ╭∩╮(︶︿︶)╭∩╮`;
                break;
            default:
                closing = '-Me';
        } 
    } else if (messageTone === 'nonsense'){
        switch (messageChoice) {
            case 0: 
                closing = `Adieudly-doo,\n Captain ${userName}`;
                break;
            case 1:
                closing = `Brontosaurus Apatosaurus,\n ${userName}asaurus`;
                break;
            case 2:
                closing = `Areevadarchee,\n ${userName}`;
                break;
            case 3:
                closing = `As the Wind Blows,\n ${userName} of the Forest`;
                break;
            case 4:
                closing = `Oh Canada!\n ${userName}`;
                break;
            default:
                closing = '-Like Grains of Sand';
        }
    } else {
        closing = "Please submit a closing tone of sincere, rude, or nonsense."
    }
    return closing;
};

//Function to combine generated greeting, body, and closing to combine into one final, random message
//greetingTone (respectful || disrespectful || cringe), bodyTone (professional || unprofessional || weird), closingTone (sincere || rude || nonsense)
const generateCallOut = (bossName, greetingTone, bodyTone, employeeName, closingTone) => {
    return (`${generateGreeting(bossName, greetingTone)}\n${generateBody(bodyTone)}\n\n${generateClosing(employeeName, closingTone)}`);
};






//Tests...//
console.log('\n\n*****************\n********Testing...\n');
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
console.log('\n****Final Testing...\n');
console.log(generateCallOut() + `\n`); //expects all default values with random respectful greeting, professional body, sincere closing
console.log(generateCallOut('Mrs. Katt', 'disrespectful', 'unprofessional', 'Skip Skipper', 'rude') + `\n`); //expects Mrs. Katt, disresp, unpro, Skip Skipper, rude
console.log(generateCallOut('Sir Fonz', 'respectful', 'professional', 'Itsa Mee', 'sincere') + `\n`); //expects Sir Fonz, resp, pro, Itsa Mee, sincere
console.log(generateCallOut('Bossdude', 'cringe', 'weird', 'The Dude', 'nonsense') + `\n`); //expects Bossdude, cringe, weird, The Dude, nonsense
console.log('\n****Testing Concluded...\n');
