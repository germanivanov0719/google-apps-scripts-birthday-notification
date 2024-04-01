const EMAIL = "YOUR EMAIL";

function composeEmail(names) {
  const title = `Birthday notification${names.length > 1 ? 's' : ''} 🎂`;
  var body = `${names.length} birthdays today:\n`;
  body += names.map((name) => { return `- ${name}` }).join('\n');
  body += `\n\n---\n Sent automatically on ${new Date().toString()}`;

  return [title, body];
}

function main() {
  // Use this to see all calendars list and get the ID:
  // console.log(Calendar.CalendarList.list());

  // Insert the Calendar ID below:
  const calendarId = 'addressbook#contacts@group.v.calendar.google.com';

  // Dates for this day
  let dateStart = new Date();
  let dateEnd = new Date();
  dateStart.setDate(dateStart.getDate());
  dateEnd.setDate(dateEnd.getDate() + 1);  // today + 1 day

  // Add query parameters in optionalArgs
  const optionalArgs = {
    timeMin: dateStart.toISOString(),
    timeMax: dateEnd.toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime'
    // use other optional query parameter here as needed.
  };

  let birthdays = [];
  try {
    // call Events.list method to list the calendar events using calendarId optional query parameter
    const response = Calendar.Events.list(calendarId, optionalArgs);
    const events = response.items;
    if (events.length === 0) {
      console.log('No upcoming events found');
      return;
    }
    // Print the calendar events
    for (const event of events) {
      const when = event.start.dateTime ? event.start.dateTime : event.start.date;
      console.log('%s (%s)', event.summary, when);

      // Add to list only if TODAY
      if (when == (new Date()).toISOString().slice(0, 10)) birthdays.push(event.summary);  // Not Year-10000-proof)
    }
  } catch (err) {
    console.log('Failed with error %s', err.message);
  }
  if (!birthdays.length) return

  const [title, body] = composeEmail(birthdays);
  console.log(title, body)

  MailApp.sendEmail(EMAIL, title, body, { 'name': 'Google App Script' });
}
