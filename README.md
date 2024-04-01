# Google App Scripts Birthday Notifications

My Google Apps Script for birthday notifications based on data from Google Contacts

<!-- vscode-markdown-toc -->

- [Google App Scripts Birthday Notifications](#google-app-scripts-birthday-notifications)
  - [1. FAQ](#1-faq)
    - [1.1. What does this script do?](#11-what-does-this-script-do)
    - [1.2. Why do I need this?](#12-why-do-i-need-this)
    - [1.3. Does it access my calendar events?](#13-does-it-access-my-calendar-events)
    - [1.4. Is it free?](#14-is-it-free)
    - [1.5. Can I modify, distribute, or sell this script?](#15-can-i-modify-distribute-or-sell-this-script)
  - [2. How to set it up](#2-how-to-set-it-up)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## 1. <a name='FAQ'></a>FAQ

### 1.1. <a name='Whatdoesthisscriptdo'></a>What does this script do?

It checks your Google Calendar events for any of your contacts' birthdays, anniversaries, and other important dates. If it finds something, an email is automatically sent to your email to remind you about this event.

### 1.2. <a name='WhydoIneedthis'></a>Why do I need this?

If you store contacts' birthdays, anniversaries, or other important dates in your Google Contacts, you can see those dates in Google Calendar and manually set up notifications for them in Google Contacts. However, if you have lots of contacts, you might find this process too time-consuming or notifications not reliable enough. If that's the case, you can use this script to check your calendar and send email notifications automatically.

The script was created when Google removed birthday notifications from Google Calendar. Today, this functionality is back, but it still has some limitations.

### 1.3. <a name='Doesitaccessmycalendarevents'></a>Does it access my calendar events?

While you do have to give it access to your Google Calendar, by default it only accesses calendar with the ID `addressbook#contacts@group.v.calendar.google.com`, which contains automatically generated events for your contacts. Other calendars are _never_ accessed, and no calendars are modified, unless you modify the original script.

### 1.4. <a name='Isitfree'></a>Is it free?

Yes, Google App Scripts is free for personal use with [some quotas](https://developers.google.com/apps-script/guides/services/quotas). The script only runs 2 operations every day (which takes about 1 sec), so it won't ever hit any of the limits. If you have (or plan to run) other scripts, it most likely won't make a difference either.

### 1.5. <a name='CanImodifydistributeorsellthisscript'></a>Can I modify, distribute, or sell this script?

Yes, you can do anything with it, as it is available under MIL License. Please, respect others' privacy, and do not use modifications of this script to illegally collect someone's data.

## 2. <a name='Howtosetitup'></a>How to set it up

1. Go to https://script.google.com/
2. Create a new project
3. Copy code from `Code.gs` to the code editor
4. Change `YOUR EMAIL` in the first line to your email
   > Note: If you use Gmail, I advise you to use _[username]+birthdays@gmail.com_ (or similar) to make managing automated emails easier in the future. Find more info about aliases in Gmail [here](https://support.google.com/mail/answer/22370?hl=en#zippy=%2Cfilter-using-your-gmail-alias).
5. Add a service (click "+" next to Services) called "Google Calendar API" (do not modify anything) and then "Gmail API"
6. Save the file
7. Go to _Triggers_ on the left side menu and add a trigger
8. Change the following settings:
   |Setting | Value|
   |--|--|
   |Choose which function to run | main|
   | Choose which deployment should run | Head|
   |Select event source| Time-driven|
   |Select type of time based trigger|Day timer|
   |Select time of day| 6am to 7am\*|

   \*Choose any time period you prefer. Note, that the script will run within the selected time period, exact time is determined by Google.

9. Press _Save_
10. Login to your account. When you see "Google hasn’t verified this app", click _Advanced > Go to `project name` (unsafe)_
11. Click _Allow_
12. Done!
