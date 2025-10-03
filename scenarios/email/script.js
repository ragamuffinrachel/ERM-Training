// Get references to our HTML elements
const emailView = document.getElementById('email-view');
const outcomeView = document.getElementById('outcome-view');
const outcomeTitle = document.getElementById('outcome-title');
const outcomeFeedback = document.getElementById('outcome-feedback');

// Store the feedback for each choice in an object
const outcomes = {
    1: { // Correct Choice: Report the email
        title: "✅ Correct! You Protected the Organization.",
        feedback: "This is the perfect response. By reporting the threat, you not only protected yourself but also helped the IT department defend the entire organization against the attack."
    },
    2: { // Incorrect Choice: Click the link
        title: "❌ Account Compromised!",
        feedback: "This action created a serious Technology risk. Clicking the link and entering your credentials would lead to a data breach. Always verify urgent requests through official channels, never through a suspicious link."
    },
    3: { // Incorrect Choice: Delete the email
        title: "⚠️ A Missed Opportunity.",
        feedback: "While you avoided the trap yourself, just deleting the email leaves your colleagues vulnerable. Reporting the threat is a critical step that allows our security team to block the attack for everyone."
    }
};

/**
 * Handles the user's choice, hides the scenario, and shows the corresponding outcome.
 * @param {number} choiceNumber - The number (1, 2, or 3) of the choice made.
 */
function handleChoice(choiceNumber) {
    // Dims the email in the background
    emailView.classList.add('dimmed');

    // Get the correct outcome text based on the choice
    const selectedOutcome = outcomes[choiceNumber];

    // Update the outcome view with the correct title and feedback
    outcomeTitle.textContent = selectedOutcome.title;
    outcomeFeedback.textContent = selectedOutcome.feedback;

    // Show the outcome view
    outcomeView.classList.remove('hidden');
}

/**
 * Resets the view to show the initial scenario again.
 */
function resetScenario() {
    // Removes the dim effect
    emailView.classList.remove('dimmed');

    // Hides the outcome view and shows the scenario view
    outcomeView.classList.add('hidden');
}
