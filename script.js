function deliverRoast() {
  const name = document.getElementById("user-name").value;
  const output = document.getElementById("roast-output");

  if (name.trim() === "") {
    output.textContent = "Tell me your name first, coward!";
    return;
  }

  const templates = [
    `${name} looks like they submit assignments at 11:59:59 PM every time.`,

    `${name} has the sleep schedule of a broken printer.`,

    `${name} walks into lectures like attendance is optional for them specifically.`,

    `${name}'s calculator works harder than they do.`,

    `If procrastination was a course, ${name} would graduate with honors.`,

    `${name} treats deadlines like suggestions.`,

    `${name} has opened the assignment PDF. That's as far as it went.`,

    `${name} looks like they ask 'what did I miss?' after skipping 6 weeks of class.`,

    `${name} is the reason group projects have trust issues.`,

    `The only thing ${name} carries consistently is academic pressure.`,

    `${name} studies engineering but still can't engineer a stable relationship.`,

    `${name}'s GPA is moving like a loading bar on bad internet.`,

    `${name} attends lectures physically but spiritually is on TikTok.`,

    `${name} revises one slide then rewards themselves with a 4 hour nap.`,

    `${name} has mastered the art of looking busy without doing anything.`,
  ];

  const randomIndex = Math.floor(Math.random() * templates.length);
  output.textContent = templates[randomIndex];
}
