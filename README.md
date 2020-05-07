This is an app created to generate random passwords for users based on criteria that they enter through prompt and confirm boxes.

This information is then used to generate a random password that fits the criteria the user has selected.

To create this application I needed to first create a function that gathered and stored the information provided by the user. I then created a function that selected a random element from any array of choice. This function would be used within another function created to generate the password. The final function took the information provided by the user and used it to choose which characters to include in new arrays that would store characters to eventually be used within the new password. These arrays are then finally turned into a string using .join.
 
Once these characters were chosen and formed into a string the final function (already provided) writes this new strinhiteg into the proper html section.


Anthony White