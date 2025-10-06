// --- DATA FOR ALL SCENARIOS ---
const scenarios = [
    {
        type: 'knowledge-check',
        title: "Scenario 1: The Hallway Conversation",
        description: "While walking to the breakroom, you overhear two colleagues discussing a member's specific health condition and test results in detail. The conversation is happening in a public hallway where others could overhear them. What do you do?",
        choices: [
            { text: "Politely interrupt and suggest a more private place.", outcome: { title: "✅ Excellent! Risk Mitigated.", outcomeText: "Your colleagues look surprised but quickly realize their mistake. They thank you, stop the conversation, and one says, 'You're right, let's take this to an office.'", feedbackText: "This is the best immediate action. You successfully mitigated a Legal/Regulatory risk by preventing a potential HIPAA breach. By being polite and direct, you protected member privacy, corrected the behavior, and reinforced KHS's culture of compliance without placing blame." }},
            { text: "Do nothing and keep walking to the breakroom.", outcome: { title: "❌ Risk Ignored", outcomeText: "Your colleagues continue their conversation. A member waiting for an appointment nearby looks up, having clearly overheard their discussion.", feedbackText: "While it can be uncomfortable to intervene, ignoring a potential privacy breach allows the risk to continue. This situation represents a Legal/Regulatory risk because it could lead to a HIPAA violation, which has serious consequences for both the member and KHS. A better action is to address the situation directly and discreetly." }},
            { text: "Wait until you see your manager later and mention what you heard.", outcome: { title: "⚠️ Good, but Not Ideal.", outcomeText: "Your manager appreciates you reporting the issue, but by the time they can address it, the risky conversation has long since ended, and the potential breach may have already occurred.", feedbackText: "Reporting risks to your chain of command is a key responsibility. This is a good step, but it wasn't the most effective one in the moment. When you can safely and politely mitigate a risk on the spot, you should." }}
        ]
    },
    {
        type: 'email',
        from: "KHS IT Support &lt;it.support@khs-net.com&gt;",
        to: "Valued Employee",
        subject: "URGENT ACTION: Account Suspension",
        body: `<p>Your system access will be suspended within one hour unless you immediately click the link below and enter your username and password to verify your account.</p><a class="phishing-link" onclick="handleChoice(1)">https://khs-net-auth.com/verify</a><p>Thank you,<br>KHS IT Support</p>`,
        choices: [
            { type: 'button', class: 'report-button', text: '✓ Report Phishing', outcome: { title: "✅ Correct! You Protected the Organization.", outcomeText: "You receive an automated reply from IT thanking you for the report. A few minutes later, a company-wide alert goes out warning staff about the phishing attempt.", feedbackText: "Excellent! This is the correct procedure. You not only avoided the risk to yourself but helped protect the entire organization. Reporting threats is a critical part of your role in managing Technology risks and maintaining our cybersecurity defenses." }},
            { type: 'link', outcome: { title: "❌ Account Compromised!", outcomeText: "A screen appears with the message: 'Your credentials have been stolen.' You are now locked out of your computer.", feedbackText: "This action has created a serious Technology risk. Phishing emails use urgency to trick you into giving away your credentials. This can lead to a data breach, ransomware attacks, and significant disruption to KHS operations." }},
            { type: 'button', class: 'delete-button', text: '🗑️ Delete', outcome: { title: "⚠️ A Missed Opportunity.", outcomeText: "You've avoided the trap, but the attacker is still sending these emails to your colleagues, one of whom might fall for it. The IT department is unaware of this specific threat.", feedbackText: "While you protected yourself, deleting a phishing attempt without reporting it is a missed opportunity. The IT department relies on staff to report these threats so they can block the sender and warn other employees." }}
        ]
    },
    {
        type: 'knowledge-check',
        title: "Scenario 3: The Confusing Workaround",
        description: "A new workflow for scheduling appointments is causing problems. Staff on your team have started using an unofficial spreadsheet to track appointments, leading to double-bookings. What do you do?",
        choices: [
            { text: "Document the issues and bring them to your supervisor.", outcome: { title: "✅ Excellent! Proactive Risk Management.", outcomeText: "Your supervisor thanks you for the clear, detailed feedback. They escalate the issue to the proper department with your examples. A task force is created to fix the workflow, and you're asked to help test the solution.", feedbackText: "This is the most effective choice. Instead of complaining or creating a workaround, you took steps to fix the root cause. Identifying and communicating potential risks helps KHS manage Operational risks and improve processes." }},
            { text: "Adopt the unofficial spreadsheet because it seems faster.", outcome: { title: "❌ Problem Worsened", outcomeText: "The problem gets worse. With more people using the workaround, scheduling conflicts increase, and members become more frustrated. Your supervisor calls a meeting to address the high number of complaints.", feedbackText: "While it may seem efficient, creating workarounds introduces new, unmanaged Operational risks. It breaks the standard process and prevents leadership from seeing that the official system is failing." }},
            { text: "Complain about the new process to your coworkers during lunch.", outcome: { title: "⚠️ Ineffective Action", outcomeText: "Your coworkers agree that the process is broken, and everyone feels frustrated. However, nothing changes, and the scheduling problems continue.", feedbackText: "Sharing frustrations is understandable, but it doesn't solve the problem. To effectively manage Operational risk, concerns need to be communicated to someone who can address them." }}
        ]
    },
    {
        type: 'knowledge-check',
        title: "Scenario 4: The Overwhelmed Team",
        description: "A key team member just resigned, citing burnout. You and your colleagues are feeling the strain of a consistently heavy workload, and morale is low. What is the most constructive action for you to take?",
        choices: [
            { text: "Talk to your supervisor privately about the team's workload.", outcome: { title: "✅ Constructive and Professional", outcomeText: "Your supervisor listens to your concerns. They may not be able to solve it instantly, but they are now aware of the risk. They decide to raise the issue in their next leadership meeting to discuss resources.", feedbackText: "This is an excellent choice. You've acted professionally to raise a potential Human Capital risk. Bringing this to your manager's attention in a constructive way allows them to take action before more employees leave." }},
            { text: "Keep your head down and work harder to pick up the slack.", outcome: { title: "❌ Risk Increased", outcomeText: "You feel even more tired and stressed. The underlying workload issue remains, and now you are also at risk of burning out. The risk to the team is not resolved.", feedbackText: "While your work ethic is admirable, this response can be harmful to you and the team. It masks the severity of the workload problem, making it harder for management to recognize the Human Capital risk." }},
            { text: "Join in with coworkers who are gossiping about the resignation.", outcome: { title: "⚠️ Detrimental to Team Culture", outcomeText: "The team's morale sinks even lower. The environment becomes more negative and distrustful, which makes everyone's work more difficult.", feedbackText: "Participating in gossip and negative speculation actively contributes to Human Capital risk. It damages team cohesion and morale, making it more likely that other valuable employees will leave." }}
        ]
    },
    {
        type: 'knowledge-check',
        title: "Scenario 5: The Near Miss",
        description: "While reviewing a member's file, you notice that a prescribed medication dosage seems unusually high. It could be correct, but it also might be a typo. What do you do?",
        choices: [
            { text: "Flag the issue with the prescribing provider for verification.", outcome: { title: "✅ Perfect! Patient Safety First.", outcomeText: "The provider checks the file, confirms it was a data entry error, and immediately corrects it. They thank you for your diligence and for preventing a potentially serious medication error.", feedbackText: "Perfect. This is the 'see something, say something' principle in action. You have helped mitigate a serious Clinical/Safety/Quality risk and protected a member from potential harm." }},
            { text: "Approve the file, assuming the provider knows what they are doing.", outcome: { title: "❌ A Serious Error Occurred", outcomeText: "A screen appears: 'Consequence: A serious medication error occurred, resulting in member harm.'", feedbackText: "Assuming things are correct when something feels wrong is a major gamble with member safety. This inaction fails to mitigate a critical Clinical/Safety/Quality risk. Every team member serves as a safety check in our system." }},
            { text: "Ask a coworker if the dosage looks high to them.", outcome: { title: "⚠️ Ineffective Action", outcomeText: "Your coworker agrees it looks high but says they aren't sure. You are still left with the same uncertainty, and time has been wasted. The risk has not been addressed.", feedbackText: "While collaborating is good, this is a situation that requires certainty from the source. A coworker's opinion is not a substitute for verification from the licensed provider who made the order." }}
        ]
    }
];

// --- STATE & DOM REFERENCES ---
let currentScenarioIndex = 0;
let selectedChoiceIndex = null; 

const knowledgeCheckView = document.getElementById('knowledge-check-view');
const emailView = document.getElementById('email-view');
const outcomeView = document.getElementById('outcome-view');
const outcomeTitle = document.getElementById('outcome-title');
const outcomeFeedback = document.getElementById('outcome-feedback');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const progressContainer = document.getElementById('progress-container');
const finalNextArrow = document.getElementById('final-next-arrow');

// --- LOGIC ---
function initializeProgressBar() {
    progressContainer.innerHTML = '';
    scenarios.forEach((_, index) => {
        const step = document.createElement('div');
        step.className = 'progress-step';
        step.id = `step-${index}`;
        progressContainer.appendChild(step);
    });
}

function updateProgressBar(index) {
    document.querySelectorAll('.progress-step').forEach((step, stepIndex) => {
        step.classList.toggle('active', stepIndex === index);
    });
}

function loadScenario(index) {
    const scenario = scenarios[index];
    selectedChoiceIndex = null;
    updateProgressBar(index);
    finalNextArrow.classList.add('hidden');

    knowledgeCheckView.classList.add('hidden');
    emailView.classList.add('hidden');

    if (scenario.type === 'knowledge-check') {
        document.getElementById('scenario-title').textContent = scenario.title;
        document.getElementById('scenario-description').textContent = scenario.description;

        const choiceContainer = document.getElementById('choice-container');
        choiceContainer.innerHTML = '';
        scenario.choices.forEach((choice, choiceIndex) => {
            const option = document.createElement('div');
            option.className = 'choice-option';
            option.innerHTML = `<label>${choice.text}</label>`;
            option.onclick = () => selectChoice(choiceIndex, option);
            choiceContainer.appendChild(option);
        });

        submitButton.disabled = true;
        knowledgeCheckView.classList.remove('hidden');

    } else if (scenario.type === 'email') {
        document.getElementById('email-from').innerHTML = `<strong>From:</strong> ${scenario.from}`;
        document.getElementById('email-to').innerHTML = `<strong>To:</strong> ${scenario.to}`;
        document.getElementById('email-subject').innerHTML = `<strong>Subject:</strong> ${scenario.subject}`;
        document.getElementById('email-body').innerHTML = scenario.body;

        const emailActions = document.getElementById('email-actions');
        emailActions.innerHTML = '';
        scenario.choices.forEach((choice, choiceIndex) => {
            if (choice.type === 'button') {
                const button = document.createElement('button');
                button.className = `action-button ${choice.class}`;
                button.innerHTML = choice.text;
                button.onclick = () => handleChoice(choiceIndex);
                emailActions.appendChild(button);
            }
        });
        emailView.classList.remove('hidden');
    }
}

function selectChoice(index, element) {
    selectedChoiceIndex = index;
    document.querySelectorAll('.choice-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    submitButton.disabled = false;
}

function handleSubmit() {
    if (selectedChoiceIndex === null) return;
    handleChoice(selectedChoiceIndex);
}

function handleChoice(choiceIndex) {
    const scenario = scenarios[currentScenarioIndex];
    const outcome = scenario.choices[choiceIndex].outcome;

    // Update the popup with the new organized structure
    outcomeTitle.textContent = outcome.title;
    outcomeFeedback.innerHTML = `
        <div class="outcome-section">
            <strong>Outcome:</strong>
            <p>${outcome.outcomeText}</p>
        </div>
        <div class="feedback-section">
            <strong>Feedback:</strong>
            <p>${outcome.feedbackText}</p>
        </div>
    `;

    // Logic for the "Next" button remains the same
    if (currentScenarioIndex === scenarios.length - 1) {
        nextButton.textContent = 'Finish';
        nextButton.onclick = () => showCompletionState();
    } else {
        nextButton.textContent = 'Next Scenario →';
        nextButton.onclick = () => nextScenario();
    }

    outcomeView.classList.remove('hidden');

    if (scenario.type === 'knowledge-check') {
        knowledgeCheckView.classList.add('dimmed');
    } else {
        emailView.classList.add('dimmed');
    }
}

function nextScenario() {
    knowledgeCheckView.classList.remove('dimmed');
    emailView.classList.remove('dimmed');
    outcomeView.classList.add('hidden');

    currentScenarioIndex++;
    if (currentScenarioIndex >= scenarios.length) {
        currentScenarioIndex = 0;
    }
    loadScenario(currentScenarioIndex);
}

function showCompletionState() {
    // Hide everything except the final arrow
    outcomeView.classList.add('hidden');
    knowledgeCheckView.classList.add('hidden');
    emailView.classList.add('hidden');
    progressContainer.classList.add('hidden');
    finalNextArrow.classList.remove('hidden');

    finalNextArrow.onclick = () => {
        currentScenarioIndex = 0;
        progressContainer.classList.remove('hidden');
        loadScenario(currentScenarioIndex);
    };
}

// Initial Load
window.onload = () => {
    initializeProgressBar();
    loadScenario(currentScenarioIndex);
};


