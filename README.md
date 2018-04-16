# GoogleDocs_integrations

Here you can find some scripts which I wrote in order to have JIRA integration in GoogleDocs.

# JIRA - jira.gs
Copy the script code and add it to your google doc in script editor.
Enter valid data for USERNAME / PASSWORD / JIRA URL
This enables the following functions:

function GETJIRASUMMARY(input)
Get issue summary / title

function GETJIRAREPORTER(input) 
get the issue reporter

function GETJIRAPR(input)
get a Github Pull Request from any of the comments (last found is used)

function GETJIRAPRAUTHOR(input)
get the author of the issue comment which includes the Pull Request

Example Usage in GoogleSheets:
Put the following formula into any field: =GETJIRASUMMARY(*JIRA issue nr or link*)

The script can be easily extended by any of the JIRA API provided method.



