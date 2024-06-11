const emailApp = {
    user: {
        name: "John Doe",
        email: "john.doe@example.com"
    },
    mailboxes: {
        inbox: [
            {
                sender: "alice@example.com",
                recipients: ["john.doe@example.com"],
                subject: "Meeting Reminder",
                body: "Don't forget about the meeting at 10 AM.",
                timestamp: "2024-06-01T09:00:00",
                status: "Unread"
            },
            {
                sender: "bob@example.com",
                recipients: ["john.doe@example.com"],
                subject: "Lunch Plans",
                body: "Are we still on for lunch at noon?",
                timestamp: "2024-06-01T08:30:00",
                status: "Read"
            }
        ],
        sent: [],
        drafts: [],
        trash: []
    }
};

const mailboxNames = Object.keys(emailApp.mailboxes);
console.log(mailboxNames); 

const emailsInInbox = emailApp.mailboxes.inbox;
console.log(emailsInInbox);

if (emailsInInbox.length > 1) {
    const secondEmail = emailsInInbox[1];
    console.log(secondEmail.body);
} else {
    console.log("There are less than two emails in the inbox.");
}

const draftEmail = {
    sender: "john.doe@example.com",
    recipients: ["carol@example.com"],
    subject: "Project Update",
    body: "Here's the latest update on the project.",
    timestamp: "2024-06-01T10:00:00",
    status: "Draft"
};

emailApp.mailboxes.drafts.push(draftEmail);
console.log(emailApp.mailboxes.drafts);

const emailToSend = emailApp.mailboxes.drafts.pop();
emailToSend.status = "Sent";
emailApp.mailboxes.sent.push(emailToSend);
console.log(emailApp.mailboxes.sent);
console.log(emailApp.mailboxes.drafts);
